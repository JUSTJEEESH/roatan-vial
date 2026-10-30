// Static QA for dist/: internal links, anchors, assets, headings, alt text, ids, metadata.
// No dependencies. Run after `npm run build`:  node scripts/check.mjs
import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist');
const BASE = (process.env.BASE_PATH || '').replace(/\/$/, '');

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...await walk(p)); else out.push(p);
  }
  return out;
}

const files = (await walk(DIST)).filter((f) => f.endsWith('.html'));
const pages = new Map();
for (const f of files) pages.set(f, await readFile(f, 'utf8'));

const idsOf = (html) => [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
const problems = [];
const warn = (f, msg) => problems.push(`${path.relative(DIST, f)}: ${msg}`);
const externals = new Set();
let linkCount = 0;

async function resolve(urlPath) {
  let p = decodeURIComponent(urlPath.replace(BASE, ''));
  let file = path.join(DIST, p);
  const s = await stat(file).catch(() => null);
  if (s?.isDirectory()) file = path.join(file, 'index.html');
  else if (!s) return null;
  return file;
}

for (const [f, html] of pages) {
  const isRedirect = f === path.join(DIST, 'index.html');
  // ids
  const ids = idsOf(html);
  const dup = ids.filter((id, i) => ids.indexOf(id) !== i);
  if (dup.length) warn(f, `duplicate ids: ${[...new Set(dup)].join(', ')}`);
  if (!isRedirect) {
    const h1 = (html.match(/<h1[\s>]/g) || []).length;
    if (h1 !== 1) warn(f, `expected 1 <h1>, found ${h1}`);
    if (!/<title>[^<]{5,}<\/title>/.test(html)) warn(f, 'missing <title>');
    if (!/<meta name="description" content="[^"]{30,}"/.test(html)) warn(f, 'missing/short meta description');
    if (!/<html lang="/.test(html)) warn(f, 'missing lang');
    if (!f.endsWith('404.html') && !/rel="canonical"/.test(html)) warn(f, 'missing canonical');
    // heading order: no skipping more than one level down
    const levels = [...html.matchAll(/<h([1-6])[\s>]/g)].map((m) => +m[1]);
    for (let i = 1; i < levels.length; i++) if (levels[i] > levels[i - 1] + 1) { warn(f, `heading jumps h${levels[i - 1]} → h${levels[i]}`); break; }
  }
  for (const m of html.matchAll(/<img\b[^>]*>/g)) if (!/\salt="/.test(m[0])) warn(f, `img without alt: ${m[0].slice(0, 80)}`);
  for (const m of html.matchAll(/\s(?:href|src)="([^"]+)"/g)) {
    const url = m[1].replace(/&amp;/g, '&');
    if (/^(mailto:|tel:|data:)/.test(url)) continue;
    if (/^https?:/.test(url)) { externals.add(url.split('#')[0]); continue; }
    linkCount++;
    const [p, hash] = url.split('#');
    let target = f;
    if (p) {
      const clean = p.split('?')[0];
      target = await resolve(clean.startsWith('/') ? clean : path.posix.join(path.posix.dirname('/' + path.relative(DIST, f)), clean));
      if (!target) { warn(f, `broken link: ${url}`); continue; }
    }
    if (hash && target.endsWith('.html')) {
      const th = pages.get(target) ?? await readFile(target, 'utf8');
      if (!idsOf(th).includes(hash) && hash !== 'top') warn(f, `missing anchor: ${url}`);
    }
  }
}

console.log(`Checked ${pages.size} HTML files, ${linkCount} internal links/assets, ${externals.size} unique external URLs.`);
if (process.argv.includes('--externals')) console.log([...externals].sort().join('\n'));
if (problems.length) { console.log(`\n${problems.length} problem(s):\n` + problems.join('\n')); process.exit(1); }
console.log('No problems found.');
