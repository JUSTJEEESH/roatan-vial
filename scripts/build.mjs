// Static site build. No dependencies: Node 18+ only.
//   node scripts/build.mjs           → dist/
// Environment: SITE_URL, BASE_PATH, CONTACT_EMAIL (see src/site.mjs).

import { readdir, mkdir, writeFile, cp, rm, readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

import { config, routes } from '../src/site.mjs';
import { layout } from '../src/templates/layout.mjs';
import { href, absolute } from '../src/templates/lib.mjs';
import { learnPage, lessonPage } from '../src/templates/pages/lessons.mjs';
import { homePage } from '../src/templates/pages/home.mjs';
import { motoPage } from '../src/templates/pages/moto.mjs';
import { scenariosPage, quizPage } from '../src/templates/pages/practice.mjs';
import { signsPage } from '../src/templates/pages/signs.mjs';
import { defensivePage, newDriversPage, familiesPage } from '../src/templates/pages/topics.mjs';
import { communityPage, visionPage, campaignsPage, contactPage } from '../src/templates/pages/community.mjs';
import { lawPage, dataPage } from '../src/templates/pages/law.mjs';
import { aboutPage, privacyPage, accessibilityPage, brandPage, notFoundPage } from '../src/templates/pages/info.mjs';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const OUT = path.join(ROOT, 'dist');

async function loadLessons() {
  const dir = path.join(ROOT, 'src/content/lessons');
  const files = (await readdir(dir)).filter((f) => f.endsWith('.mjs')).sort();
  const lessons = [];
  for (const f of files) lessons.push((await import(pathToFileURL(path.join(dir, f)).href)).default);
  return lessons;
}

function validate(lessons) {
  const ids = new Set(lessons.map((l) => l.id));
  const problems = [];
  for (const l of lessons) {
    for (const r of l.related) if (!ids.has(r)) problems.push(`${l.id}: related lesson "${r}" does not exist`);
    for (const lang of config.langs) {
      const L = l[lang];
      if (!L?.slug || !L.title) problems.push(`${l.id}/${lang}: missing slug or title`);
      if (L.check?.length !== 3) problems.push(`${l.id}/${lang}: expected 3 check questions`);
    }
  }
  for (const lang of config.langs) {
    const slugs = lessons.map((l) => l[lang].slug);
    const dup = slugs.filter((s, i) => slugs.indexOf(s) !== i);
    if (dup.length) problems.push(`duplicate ${lang} slugs: ${dup.join(', ')}`);
  }
  if (problems.length) { console.error(problems.join('\n')); process.exit(1); }
}

async function write(urlPath, html) {
  const rel = urlPath.replace(config.basePath, '').replace(/^\//, '');
  const file = path.join(OUT, rel, rel.endsWith('.html') ? '' : 'index.html');
  await mkdir(path.dirname(file), { recursive: true });
  await writeFile(file, html);
}

async function main() {
  const lessons = await loadLessons();
  validate(lessons);
  await rm(OUT, { recursive: true, force: true });
  await mkdir(OUT, { recursive: true });

  const ctx = { lessons };
  const pageFns = {
    home: homePage, learn: learnPage, moto: motoPage, scenarios: scenariosPage, quiz: quizPage,
    signs: signsPage, defensive: defensivePage, newdrivers: newDriversPage, families: familiesPage,
    community: communityPage, law: lawPage, data: dataPage, campaigns: campaignsPage, vision: visionPage,
    about: aboutPage, contact: contactPage, privacy: privacyPage, accessibility: accessibilityPage, brand: brandPage
  };

  const sitemap = [];
  let count = 0;
  for (const lang of config.langs) {
    for (const [id, fn] of Object.entries(pageFns)) {
      const p = fn(lang, lessons, ctx);
      const page = { lang, id, ...p };
      await write(href(lang, id), layout(page));
      if (lang === 'es') sitemap.push({ es: href('es', id), en: href('en', id) });
      count++;
    }
    for (const l of lessons) {
      const p = lessonPage(lang, l, lessons);
      await write(href(lang, 'learn', l[lang].slug), layout({ lang, id: 'learn', ...p }));
      if (lang === 'es') sitemap.push({ es: href('es', 'learn', l.es.slug), en: href('en', 'learn', l.en.slug) });
      count++;
    }
  }

  // 404 (Spanish first, with English below)
  await writeFile(path.join(OUT, '404.html'), layout({ lang: 'es', id: 'home', ...notFoundPage(), altPath: { es: href('es', 'home'), en: href('en', 'home') }, noindex: true }));

  // Root: Spanish is the primary language. A plain link fallback is included.
  const esHome = href('es', 'home');
  await writeFile(path.join(OUT, 'index.html'), `<!doctype html>
<html lang="es-HN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Roatán Vial — Seguridad vial para todos</title>
<meta name="description" content="Educación vial independiente y comunitaria nacida en Roatán, Honduras. Road-safety education from Roatán, Honduras.">
<link rel="canonical" href="${absolute(esHome)}">
<link rel="alternate" hreflang="es" href="${absolute(esHome)}"><link rel="alternate" hreflang="en" href="${absolute(href('en', 'home'))}">
<meta http-equiv="refresh" content="0; url=${esHome}">
<link rel="icon" href="${config.basePath}/assets/brand/favicon.svg" type="image/svg+xml">
<style>body{margin:0;font-family:Arial,sans-serif;background:#123D38;color:#FAFAF7;display:grid;place-items:center;min-height:100vh}a{color:#D7E65A;font-size:1.25rem;margin:0 1rem}</style>
</head><body><p><a href="${esHome}" lang="es">Español</a> <a href="${href('en', 'home')}" lang="en">English</a></p></body></html>
`);

  // Static files
  await cp(path.join(ROOT, 'src/assets'), path.join(OUT, 'assets'), { recursive: true });
  const ico = path.join(ROOT, 'src/assets/brand/favicon.ico');
  if (existsSync(ico)) await cp(ico, path.join(OUT, 'favicon.ico'));

  await writeFile(path.join(OUT, 'site.webmanifest'), JSON.stringify({
    name: 'Roatán Vial', short_name: 'Roatán Vial', lang: 'es', start_url: esHome, display: 'standalone',
    background_color: '#123D38', theme_color: '#123D38',
    icons: [
      { src: `${config.basePath}/assets/brand/icon-192.png`, sizes: '192x192', type: 'image/png' },
      { src: `${config.basePath}/assets/brand/icon-512.png`, sizes: '512x512', type: 'image/png' }
    ]
  }, null, 2));

  const today = new Date().toISOString().slice(0, 10);
  await writeFile(path.join(OUT, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${sitemap.flatMap((u) => ['es', 'en'].map((lang) => `  <url><loc>${absolute(u[lang])}</loc><lastmod>${today}</lastmod><xhtml:link rel="alternate" hreflang="es" href="${absolute(u.es)}"/><xhtml:link rel="alternate" hreflang="en" href="${absolute(u.en)}"/></url>`)).join('\n')}
</urlset>
`);
  await writeFile(path.join(OUT, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${config.siteUrl}/sitemap.xml\n`);

  console.log(`Built ${count} pages + root, 404, sitemap → dist/  (site URL: ${config.siteUrl}${config.basePath})`);
}

main().catch((e) => { console.error(e); process.exit(1); });
