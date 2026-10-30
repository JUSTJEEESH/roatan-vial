// Generates raster brand and campaign assets from HTML/SVG using Playwright.
// Dev-only: requires Playwright with Chromium (`npm i -D playwright && npx playwright install chromium`
// if it is not already available). Outputs are committed, so building the site does NOT need this.
//
//   node scripts/render-images.mjs
//
// Writes:
//   src/assets/social/og-es.png, og-en.png            (1200×630 sharing images)
//   src/assets/brand/apple-touch-icon.png, icon-192.png, icon-512.png, avatar.png, favicon.ico
//   src/assets/campaigns/<id>-<lang>-square.png       (1080×1080)
//   src/assets/campaigns/<id>-<lang>-story.png        (1080×1920)
//   src/assets/campaigns/<id>-<lang>-poster.pdf       (US Letter poster)

import { createRequire } from 'node:module';
import { readFile, writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { campaigns } from '../src/content/campaigns.mjs';
import { islandMap } from '../src/templates/pages/home.mjs';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const A = (p) => path.join(ROOT, 'src/assets', p);
// Fonts are inlined as data URLs: pages loaded with setContent cannot read file:// URLs.
const fontData = {};
const fontUrl = (f) => fontData[f];

const THEMES = {
  forest: { bg: '#123D38', fg: '#FAFAF7', accent: '#D7E65A', logo: 'logo-horizontal-reverse.svg', dash: '#D7E65A' },
  charcoal: { bg: '#202A28', fg: '#FAFAF7', accent: '#D7E65A', logo: 'logo-horizontal-reverse.svg', dash: '#D7E65A' },
  sand: { bg: '#F3EBDD', fg: '#123D38', accent: '#197D78', logo: 'logo-horizontal-light.svg', dash: '#197D78' },
  teal: { bg: '#197D78', fg: '#FAFAF7', accent: '#D7E65A', logo: 'logo-horizontal-reverse.svg', dash: '#D7E65A' },
  lime: { bg: '#D7E65A', fg: '#123D38', accent: '#123D38', logo: 'logo-horizontal-light.svg', dash: '#123D38' }
};

let base = '';
const makeBase = () => `
@font-face { font-family: Archivo; src: url(${fontUrl('archivo-variable-latin.woff2')}) format('woff2'); font-weight: 100 900; font-stretch: 62% 125%; }
@font-face { font-family: Atkinson; src: url(${fontUrl('atkinson-hyperlegible-next-latin.woff2')}) format('woff2'); font-weight: 200 800; }
* { margin: 0; box-sizing: border-box; }
body { font-family: Atkinson, Arial, sans-serif; -webkit-font-smoothing: antialiased; }
.d { font-family: Archivo, Arial, sans-serif; font-weight: 800; font-stretch: 112%; text-transform: uppercase; line-height: .93; letter-spacing: -.01em; }
.lane { height: 14px; background: repeating-linear-gradient(90deg, var(--dash) 0 80px, transparent 80px 130px); }
`;

async function svgData(file) {
  const s = await readFile(A('brand/' + file), 'utf8');
  return 'data:image/svg+xml;base64,' + Buffer.from(s).toString('base64');
}

function campaignHtml(c, lang, w, h, logo) {
  const th = THEMES[c.theme];
  const C = c[lang];
  const story = h > w * 1.3;
  const size = story ? 128 : (C.line.join(' ').length > 40 ? 92 : 104);
  const lines = C.line.map((l, i) => `<span style="display:block;${i === C.line.length - 1 ? `color:${th.accent}` : ''}">${l}</span>`).join('');
  return `<!doctype html><html><head><meta charset="utf-8"><style>${base}
    body { width:${w}px; height:${h}px; background:${th.bg}; color:${th.fg}; --dash:${th.dash}; position:relative; overflow:hidden; }
    .wrap { position:absolute; inset:${story ? 110 : 80}px ${story ? 90 : 80}px; display:flex; flex-direction:column; }
    .tag { font-family: Archivo; font-weight:800; font-stretch:112%; letter-spacing:.16em; font-size:22px; text-transform:uppercase; opacity:.85; display:flex; gap:20px; align-items:center; }
    .tag i { display:block; width:60px; height:8px; background:${th.dash}; }
    h1 { font-size:${size}px; margin-top:auto; }
    p.s { font-size:${story ? 44 : 36}px; line-height:1.3; margin-top:${story ? 56 : 40}px; max-width:880px; font-weight:500; }
    .foot { margin-top:${story ? 'auto' : '64px'}; display:flex; justify-content:space-between; align-items:flex-end; gap:40px; }
    .foot img { height:${story ? 64 : 54}px; }
    .foot span { font-size:20px; opacity:.8; text-align:right; }
  </style></head><body>
    <div class="wrap">
      <div class="tag"><i></i>${lang === 'es' ? 'Seguridad vial para todos' : 'Road safety for everyone'}</div>
      <h1 class="d">${lines}</h1>
      <p class="s">${C.support}</p>
      <div class="foot"><img src="${logo}" alt=""><span>${lang === 'es' ? 'Emergencias: 911' : 'Emergencies: 911'}</span></div>
    </div>
  </body></html>`;
}

function posterHtml(c, lang, logo) {
  // US Letter at 96 dpi: 816 × 1056 CSS px.
  const th = THEMES[c.theme];
  const C = c[lang];
  const lines = C.line.map((l, i) => `<span style="display:block;${i === C.line.length - 1 ? `color:${th.accent}` : ''}">${l}</span>`).join('');
  return `<!doctype html><html><head><meta charset="utf-8"><style>${base}
    @page { size: Letter; margin: 0; }
    html, body { width:816px; height:1056px; }
    body { background:${th.bg}; color:${th.fg}; --dash:${th.dash}; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    .wrap { position:absolute; inset:72px; display:flex; flex-direction:column; }
    h1 { font-size:${C.line.join(' ').length > 40 ? 76 : 88}px; margin-top:120px; }
    p.s { font-size:28px; line-height:1.35; margin-top:40px; max-width:600px; }
    .lane { margin-top:auto; height:10px; background: repeating-linear-gradient(90deg, ${th.dash} 0 60px, transparent 60px 100px); }
    .foot { margin-top:36px; display:flex; justify-content:space-between; align-items:flex-end; }
    .foot img { height:44px; }
    .foot span { font-size:15px; opacity:.85; text-align:right; line-height:1.4; }
  </style></head><body>
    <div class="wrap">
      <h1 class="d">${lines}</h1>
      <p class="s">${C.support}</p>
      <div class="lane"></div>
      <div class="foot"><img src="${logo}" alt=""><span>${lang === 'es' ? 'Educación vial gratuita<br>Emergencias: 911' : 'Free road-safety education<br>Emergencies: 911'}</span></div>
    </div>
  </body></html>`;
}

function ogHtml(lang, logo) {
  const es = lang === 'es';
  return `<!doctype html><html><head><meta charset="utf-8"><style>${base}
    body { width:1200px; height:630px; background:#123D38; color:#FAFAF7; position:relative; overflow:hidden; }
    svg { position:absolute; right:-80px; top:150px; width:900px; }
    .coast { fill:none; stroke:rgba(250,250,247,.18); stroke-width:1.5; } .contour { fill:none; stroke:rgba(250,250,247,.08); }
    .road { fill:none; stroke:rgba(250,250,247,.5); stroke-width:3; } .road-dash { fill:none; stroke:#D7E65A; stroke-width:3; stroke-dasharray:14 16; }
    .wrap { position:absolute; inset:64px 72px; display:flex; flex-direction:column; }
    img { height:46px; align-self:flex-start; }
    h1 { font-size:70px; margin-top:auto; }
    h1 span:last-child { color:#D7E65A; }
    p { font-size:26px; margin-top:24px; opacity:.9; }
  </style></head><body>${islandMap('m')}
    <div class="wrap"><img src="${logo}" alt="">
      <h1 class="d">${es ? '<span style="display:block">Una isla. Un camino.</span><span style="display:block">Cada vida cuenta.</span>' : '<span style="display:block">One island. One road.</span><span style="display:block">Every life matters.</span>'}</h1>
      <p>${es ? 'Educación vial gratuita desde Roatán, Honduras' : 'Free road-safety education from Roatán, Honduras'}</p></div>
  </body></html>`;
}

function icoFromPng(png) {
  // Single-image ICO containing a 32×32 PNG (supported by all current browsers).
  const header = Buffer.alloc(22);
  header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4);
  header.writeUInt8(32, 6); header.writeUInt8(32, 7); header.writeUInt8(0, 8); header.writeUInt8(0, 9);
  header.writeUInt16LE(1, 10); header.writeUInt16LE(32, 12);
  header.writeUInt32LE(png.length, 14); header.writeUInt32LE(22, 18);
  return Buffer.concat([header, png]);
}

async function main() {
  for (const f of ['archivo-variable-latin.woff2', 'atkinson-hyperlegible-next-latin.woff2']) fontData[f] = 'data:font/woff2;base64,' + (await readFile(A('fonts/' + f))).toString('base64');
  base = makeBase();
  await mkdir(A('social'), { recursive: true });
  await mkdir(A('campaigns'), { recursive: true });
  const browser = await chromium.launch();
  const page = await browser.newPage();

  async function shot(html, w, h, out) {
    await page.setViewportSize({ width: w, height: h });
    await page.setContent(html, { waitUntil: 'load' });
    await page.evaluate(() => document.fonts.ready);
    return page.screenshot({ path: out, clip: { x: 0, y: 0, width: w, height: h } });
  }

  const logos = {
    'logo-horizontal-reverse.svg': await svgData('logo-horizontal-reverse.svg'),
    'logo-horizontal-light.svg': await svgData('logo-horizontal-light.svg')
  };

  for (const lang of ['es', 'en']) {
    await shot(ogHtml(lang, logos['logo-horizontal-reverse.svg']), 1200, 630, A(`social/og-${lang}.png`));
    for (const c of campaigns) {
      const logo = logos[THEMES[c.theme].logo];
      await shot(campaignHtml(c, lang, 1080, 1080, logo), 1080, 1080, A(`campaigns/${c.id}-${lang}-square.png`));
      await shot(campaignHtml(c, lang, 1080, 1920, logo), 1080, 1920, A(`campaigns/${c.id}-${lang}-story.png`));
      await page.setViewportSize({ width: 816, height: 1056 });
      await page.setContent(posterHtml(c, lang, logo), { waitUntil: 'load' });
      await page.evaluate(() => document.fonts.ready);
      await page.pdf({ path: A(`campaigns/${c.id}-${lang}-poster.pdf`), format: 'Letter', printBackground: true });
    }
  }

  // Icons
  const svgPage = async (file, size, out) => {
    const src = await svgData(file);
    return shot(`<!doctype html><style>*{margin:0}body{width:${size}px;height:${size}px}</style><img src="${src}" width="${size}" height="${size}">`, size, size, out);
  };
  await svgPage('avatar.svg', 180, A('brand/apple-touch-icon.png'));
  await svgPage('avatar.svg', 192, A('brand/icon-192.png'));
  await svgPage('avatar.svg', 512, A('brand/icon-512.png'));
  await svgPage('avatar.svg', 512, A('brand/avatar.png'));
  const fav = await svgPage('favicon.svg', 32, path.join(ROOT, 'dist-favicon-tmp.png'));
  await writeFile(A('brand/favicon.ico'), icoFromPng(fav));
  await (await import('node:fs/promises')).rm(path.join(ROOT, 'dist-favicon-tmp.png'));

  await browser.close();
  console.log('Images rendered.');
}

main().catch((e) => { console.error(e); process.exit(1); });
