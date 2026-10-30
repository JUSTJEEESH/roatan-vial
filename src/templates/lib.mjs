import { config, routes, t } from '../site.mjs';

export const esc = (s = '') => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Content strings may contain <strong>/<em>; everything else is escaped.
export const rich = (s = '') => esc(s)
  .replace(/&lt;(\/?)(strong|em)&gt;/g, '<$1$2>');

export const html = (strings, ...vals) => strings.reduce((out, s, i) => {
  let v = vals[i - 1];
  if (Array.isArray(v)) v = v.join('');
  return out + (v === undefined || v === null || v === false ? '' : v) + s;
});

export const asset = (p) => `${config.basePath}/assets/${p}`;

// Path for a page id in a language. Extra segments are appended.
export function href(lang, id = 'home', ...rest) {
  const slug = routes[id]?.[lang];
  if (slug === undefined) throw new Error(`Unknown route ${id}`);
  const parts = [lang, slug, ...rest].filter(Boolean);
  return `${config.basePath}/${parts.join('/')}/`;
}

export const absolute = (path) => config.siteUrl + path.replace(config.basePath, '');

export const L = (lang) => t[lang];

export function formatDate(iso, lang) {
  const d = new Date(iso + 'T12:00:00Z');
  return d.toLocaleDateString(lang === 'es' ? 'es-HN' : 'en-GB', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

// Small inline icons (stroke, currentColor). Decorative unless labelled by context.
const icons = {
  arrow: '<path d="M4 12h15M13 6l6 6-6 6"/>',
  down: '<path d="M12 4v15M6 13l6 6 6-6"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>',
  external: '<path d="M14 5h5v5M19 5l-8 8M18 14v5H5V6h5"/>',
  link: '<path d="M10 14a4 4 0 005.66 0l3-3a4 4 0 00-5.66-5.66l-1 1M14 10a4 4 0 00-5.66 0l-3 3a4 4 0 005.66 5.66l1-1"/>',
  share: '<path d="M12 3v12M7 8l5-5 5 5M5 13v7h14v-7"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h10"/>',
  phone: '<path d="M6 3h3l2 5-2.5 1.5a11 11 0 006 6L16 13l5 2v3a2 2 0 01-2 2A16 16 0 014 5a2 2 0 012-2z"/>',
  download: '<path d="M12 4v11M7 10l5 5 5-5M5 20h14"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
  scale: '<path d="M12 4v16M7 20h10M4 8h16M6 8l-3 6a3 3 0 006 0zM18 8l-3 6a3 3 0 006 0z"/>',
  expert: '<path d="M12 3l2.6 5.6 6 .7-4.5 4.1 1.2 6L12 16.4 6.7 19.4l1.2-6L3.4 9.3l6-.7z"/>',
  hand: '<path d="M8 12V5.5a1.5 1.5 0 013 0V11M11 10V4.5a1.5 1.5 0 013 0V11M14 10.5V6a1.5 1.5 0 013 0v8a7 7 0 01-7 7h-.5A6.5 6.5 0 013 14.5V12a1.5 1.5 0 013 0v2"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'
};
export const icon = (name, cls = '') =>
  `<svg class="icon ${cls}" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${icons[name]}</svg>`;

// The brand symbol, inline (dashes take currentColor, dot is the accent colour).
export const symbolSvg = (cls = '') => `<svg class="symbol ${cls}" viewBox="0 0 100 100" aria-hidden="true" focusable="false"><path d="M8 84L17.8 75.2"/><path d="M29.3 65.8L39.8 58"/><path d="M52.2 49.7L62.8 43.3"/><circle cx="84" cy="32" r="11"/></svg>`;

// Kilometre-post style section marker: "KM 04 — Motocicletas".
export const marker = (num, label) =>
  `<p class="marker"><span class="marker__km" aria-hidden="true">KM ${String(num).padStart(2, '0')}</span><span class="marker__label">${esc(label)}</span></p>`;

export const button = (url, label, variant = 'primary', ic = 'arrow') =>
  `<a class="btn btn--${variant}" href="${url}"><span>${esc(label)}</span>${ic ? icon(ic) : ''}</a>`;

export const ext = (url, label, lang = 'es', cls = '') =>
  `<a class="ext ${cls}" href="${esc(url)}" rel="noopener" target="_blank">${esc(label)}${icon('external', 'icon--sm')}<span class="visually-hidden">${lang === 'es' ? ' (se abre en una pestaña nueva)' : ' (opens in a new tab)'}</span></a>`;
