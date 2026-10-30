// Dev-only browser QA. Requires Playwright (Chromium) and axe-core (`npm install` in this folder).
// Start the site first (`npm start` in the project root), then:
//   node tools/qa/browser-qa.cjs [baseUrl]
// Checks every page from the sitemap at phone and desktop widths for console errors,
// failed requests, horizontal overflow and axe-core WCAG 2.2 A/AA violations, then
// exercises the interactive features.

const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const BASE = (process.argv[2] || 'http://localhost:8080').replace(/\/$/, '');
const AXE = fs.readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');
const DIST = path.resolve(__dirname, '../../dist');

function pagesFromSitemap() {
  const xml = fs.readFileSync(path.join(DIST, 'sitemap.xml'), 'utf8');
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => new URL(m[1]).pathname);
}

(async () => {
  const pages = [...pagesFromSitemap(), '/no-existe/'];
  const browser = await chromium.launch();
  const report = { pages: pages.length, errors: [], overflow: [], axe: {}, failedRequests: [], interactions: [] };

  for (const width of [360, 768, 1280]) {
    const ctx = await browser.newContext({ viewport: { width, height: 900 } });
    const page = await ctx.newPage();
    let current = '';
    page.on('console', (m) => { if (m.type() === 'error') report.errors.push(`${width} ${current}: ${m.text()}`); });
    page.on('pageerror', (e) => report.errors.push(`${width} ${current}: ${e.message}`));
    page.on('requestfailed', (r) => { if (r.url().startsWith(BASE)) report.failedRequests.push(`${current}: ${r.url()}`); });
    page.on('response', (r) => { if (r.url().startsWith(BASE) && r.status() >= 400 && !current.includes('no-existe')) report.failedRequests.push(`${current}: ${r.status()} ${r.url()}`); });
    for (const p of pages) {
      current = p;
      await page.goto(BASE + p, { waitUntil: 'load' });
      const ov = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      if (ov > 0) report.overflow.push(`${width}px ${p}: +${ov}px`);
      if (width !== 768) {
        await page.addScriptTag({ content: AXE });
        const res = await page.evaluate(async () => (await window.axe.run(document, { runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'] })).violations
          .map((v) => ({ id: v.id, impact: v.impact, n: v.nodes.length, sample: v.nodes[0]?.target?.join(' ') })));
        for (const v of res) {
          const k = `${v.id} (${v.impact})`;
          report.axe[k] = report.axe[k] || [];
          if (report.axe[k].length < 6) report.axe[k].push(`${width} ${p} ×${v.n} ${v.sample}`);
        }
      }
    }
    await ctx.close();
  }

  // ---- Interactions ----
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
  const page = await ctx.newPage();
  const ok = (name, cond, detail = '') => report.interactions.push(`${cond ? 'PASS' : 'FAIL'} ${name}${detail ? ' — ' + detail : ''}`);

  // Root redirects to Spanish
  await page.goto(BASE + '/');
  await page.waitForURL(/\/es\/$/, { timeout: 5000 }).catch(() => {});
  ok('root / redirects to /es/', page.url().endsWith('/es/'), page.url());

  // Menu
  await page.goto(BASE + '/es/');
  await page.click('.menu-toggle');
  ok('menu opens', await page.isVisible('#site-menu'));
  await page.keyboard.press('Escape');
  ok('menu closes with Escape', await page.isHidden('#site-menu'));
  ok('focus returns to menu button', await page.evaluate(() => document.activeElement.classList.contains('menu-toggle')));

  // Language switch on a lesson
  await page.goto(BASE + '/es/aprende/por-que-usar-el-casco/');
  const enHref = await page.getAttribute('.lang-switch', 'href');
  const r = await page.goto(BASE + enHref);
  ok('language switch resolves to English lesson', r.status() === 200 && (await page.getAttribute('html', 'lang')) === 'en', enHref);

  // Checklist
  await page.goto(BASE + '/es/motocicletas/');
  const boxes = await page.$$('#moto-preride input[type=checkbox]');
  for (const b of boxes) await b.check();
  ok('checklist counts 10/10', (await page.textContent('#moto-preride [data-count]')) === String(boxes.length));
  ok('checklist completion message', await page.isVisible('#moto-preride [data-done]'));
  await page.click('#moto-preride [data-reset]');
  ok('checklist reset', (await page.textContent('#moto-preride [data-count]')) === '0');

  // Every lesson's knowledge check, both languages: answer correctly → 3 of 3
  const lessonPaths = pagesFromSitemap().filter((p) => /\/(aprende|learn)\/.+/.test(p));
  let kcPass = 0;
  for (const lp of lessonPaths) {
    await page.goto(BASE + lp);
    const sets = await page.$$('[data-kc] fieldset');
    for (const fs of sets) {
      const a = await fs.getAttribute('data-answer');
      await (await fs.$(`input[value="${a}"]`)).check();
    }
    await page.click('[data-kc] button[type=submit]');
    const score = await page.textContent('[data-kc] [data-score]');
    if (/^3 (de|of) 3/.test(score)) kcPass++; else ok('knowledge check ' + lp, false, score);
  }
  ok(`knowledge checks answered correctly on ${lessonPaths.length} lesson pages`, kcPass === lessonPaths.length, `${kcPass}/${lessonPaths.length}`);

  // Scenarios: every choice on every scenario reveals matching feedback
  for (const lang of ['es', 'en']) {
    await page.goto(BASE + (lang === 'es' ? '/es/escenarios/' : '/en/scenarios/'));
    const scs = await page.$$('[data-scenario]');
    let good = 0, total = 0;
    for (const sc of scs) {
      const btns = await sc.$$('[data-choice]');
      for (const b of btns) {
        total++;
        await b.click();
        const idx = await b.getAttribute('data-choice');
        const visible = await sc.$eval(`[data-fb="${idx}"]`, (el) => !el.hidden);
        const take = await sc.$eval('[data-takeaway]', (el) => !el.hidden);
        if (visible && take) good++;
      }
    }
    ok(`scenarios (${lang}): ${scs.length} scenarios, every choice shows feedback`, good === total, `${good}/${total}`);
  }

  // Quiz: answer all 50 (alternate right/wrong), check result and review, retake
  for (const lang of ['es', 'en']) {
    await page.goto(BASE + (lang === 'es' ? '/es/reto/' : '/en/challenge/'));
    const data = JSON.parse(await page.textContent('#quiz-data'));
    await page.click('[data-start]');
    let expectedRight = 0;
    for (let i = 0; i < data.questions.length; i++) {
      const q = data.questions[i];
      const pick = i % 3 === 0 ? (q.a + 1) % q.o.length : q.a;
      if (pick === q.a) expectedRight++;
      await page.check(`[data-quiz] input[value="${pick}"]`);
      await page.click('[data-action]');
      await page.click('[data-action]');
    }
    const score = await page.textContent('.quiz__score');
    const reviewItems = await page.$$eval('.quiz__review li', (l) => l.length);
    ok(`quiz (${lang}): ${data.questions.length} questions, score ${expectedRight} shown`, score.startsWith(String(expectedRight)), score.trim());
    ok(`quiz (${lang}): review lists ${data.questions.length - expectedRight} missed`, reviewItems === data.questions.length - expectedRight);
    await page.click('[data-retake]');
    ok(`quiz (${lang}): retake restarts at question 1`, (await page.textContent('.quiz__top')).includes('1'));
    // Unanswered submit prompts instead of advancing
    await page.click('[data-action]');
    ok(`quiz (${lang}): empty answer is not accepted`, await page.isVisible('[data-feedback]'));
  }

  // Keyboard: skip link
  await page.goto(BASE + '/en/');
  await page.keyboard.press('Tab');
  ok('first Tab focuses the skip link', await page.evaluate(() => document.activeElement.classList.contains('skip-link')));

  // Downloads exist
  const dl = await page.request.get(BASE + '/assets/campaigns/casco-es-poster.pdf');
  ok('poster PDF served', dl.status() === 200 && dl.headers()['content-type'].includes('pdf'));

  await browser.close();

  const out = [
    `Pages checked: ${report.pages} × 3 widths (360, 768, 1280)`,
    `Console/page errors: ${report.errors.length}`, ...report.errors.slice(0, 20),
    `Failed same-site requests: ${report.failedRequests.length}`, ...report.failedRequests.slice(0, 20),
    `Horizontal overflow: ${report.overflow.length}`, ...report.overflow.slice(0, 20),
    `axe-core violation types: ${Object.keys(report.axe).length}`,
    ...Object.entries(report.axe).map(([k, v]) => `  ${k}\n    ${v.join('\n    ')}`),
    'Interactions:', ...report.interactions.map((x) => '  ' + x)
  ].join('\n');
  console.log(out);
  fs.writeFileSync(path.join(__dirname, 'last-run.txt'), out + '\n');
})();
