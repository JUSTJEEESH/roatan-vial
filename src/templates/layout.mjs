import { config, routes, t } from '../site.mjs';
import { esc, html, href, asset, absolute, icon, formatDate } from './lib.mjs';

const VERSION = Date.now().toString(36);

const primaryNav = ['learn', 'moto', 'scenarios', 'signs', 'law', 'community'];

const menuGroups = {
  learn: ['learn', 'moto', 'defensive', 'newdrivers', 'families', 'signs'],
  practice: ['scenarios', 'quiz'],
  act: ['community', 'campaigns', 'vision', 'contact'],
  info: ['law', 'data', 'about', 'privacy', 'accessibility', 'brand']
};

/**
 * page: {
 *   lang, id, params: [extra path segments] (same in both langs unless altPath given),
 *   title, description, body, bodyClass, altPath: {es, en} explicit alternates,
 *   ogImage, jsonLd, scripts: [extra js files], noindex
 * }
 */
export function layout(page) {
  const { lang, id = 'home', title, description, body, bodyClass = '', scripts = [], jsonLd, noindex } = page;
  const s = t[lang];
  const other = lang === 'es' ? 'en' : 'es';
  const paths = page.altPath || {
    es: href('es', id, ...(page.params?.es || [])),
    en: href('en', id, ...(page.params?.en || []))
  };
  const self = paths[lang];
  const fullTitle = id === 'home' && !page.params ? `${config.name} — ${s.descriptor}` : `${title} · ${config.name}`;
  const ogImage = absolute(asset(page.ogImage || `social/og-${lang}.png`));

  const navLink = (pid) => {
    const u = href(lang, pid);
    const current = id === pid ? ' aria-current="page"' : '';
    return `<li><a href="${u}"${current}>${esc(s.nav[pid])}</a></li>`;
  };

  return html`<!doctype html>
<html lang="${lang === 'es' ? 'es-HN' : 'en'}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
${noindex ? '<meta name="robots" content="noindex">' : ''}
<link rel="canonical" href="${absolute(self)}">
<link rel="alternate" hreflang="es" href="${absolute(paths.es)}">
<link rel="alternate" hreflang="en" href="${absolute(paths.en)}">
<link rel="alternate" hreflang="x-default" href="${absolute(paths.es)}">
<meta property="og:type" content="${page.ogType || 'website'}">
<meta property="og:site_name" content="${config.name}">
<meta property="og:title" content="${esc(title || fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${absolute(self)}">
<meta property="og:image" content="${ogImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:locale" content="${lang === 'es' ? 'es_HN' : 'en_US'}">
<meta property="og:locale:alternate" content="${lang === 'es' ? 'en_US' : 'es_HN'}">
<meta name="twitter:card" content="summary_large_image">
<meta name="theme-color" content="#123D38">
<link rel="icon" href="${asset('brand/favicon.svg')}" type="image/svg+xml">
<link rel="icon" href="${config.basePath}/favicon.ico" sizes="32x32">
<link rel="apple-touch-icon" href="${asset('brand/apple-touch-icon.png')}">
<link rel="manifest" href="${config.basePath}/site.webmanifest">
<link rel="preload" href="${asset('fonts/archivo-variable-latin.woff2')}" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="${asset('fonts/atkinson-hyperlegible-next-latin.woff2')}" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="${asset('css/main.css')}?v=${VERSION}">
<script type="module" src="${asset('js/main.js')}?v=${VERSION}"></script>
${scripts.map((f) => `<script type="module" src="${asset('js/' + f)}?v=${VERSION}"></script>`)}
${jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : ''}
</head>
<body class="${bodyClass}">
<a class="skip-link" href="#main">${esc(s.skip)}</a>
<header class="site-header" id="top">
  <div class="site-header__inner">
    <a class="brand" href="${href(lang, 'home')}" aria-label="${config.name} — ${esc(s.nav.home)}">
      <img src="${asset('brand/logo-horizontal-reverse.svg')}" alt="" width="196" height="40">
    </a>
    <nav class="primary-nav" aria-label="${lang === 'es' ? 'Principal' : 'Main'}">
      <ul>${primaryNav.map(navLink)}</ul>
    </nav>
    <div class="header-tools">
      <a class="lang-switch" href="${paths[other]}" hreflang="${other}" lang="${other}"><span class="visually-hidden">${other === 'en' ? 'Read in ' : 'Leer en '}</span>${other.toUpperCase()}</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="site-menu">
        ${icon('menu')}<span>${esc(s.menu)}</span>
      </button>
    </div>
  </div>
  <div class="site-menu" id="site-menu" hidden>
    <div class="site-menu__inner">
      <p class="site-menu__slogan" aria-hidden="true">${esc(s.slogan)}</p>
      <nav aria-label="${lang === 'es' ? 'Todas las secciones' : 'All sections'}" class="site-menu__groups">
        ${Object.entries(menuGroups).map(([g, ids]) => html`
        <div class="site-menu__group">
          <h2>${esc(s.menuGroups[g])}</h2>
          <ul>${ids.map(navLink)}</ul>
        </div>`)}
      </nav>
      <p class="site-menu__emergency">${icon('phone')} ${esc(s.emergency)}</p>
    </div>
  </div>
</header>
<main id="main" tabindex="-1">
${body}
</main>
${footer(lang, paths)}
</body>
</html>
`;
}

function footer(lang, paths) {
  const s = t[lang];
  const cols = [
    ['learn', ['learn', 'moto', 'defensive', 'newdrivers', 'families', 'signs']],
    ['practice', ['scenarios', 'quiz']],
    ['act', ['community', 'campaigns', 'vision', 'contact']],
    ['info', ['law', 'data', 'about', 'privacy', 'accessibility', 'brand']]
  ];
  return html`<footer class="site-footer">
  <div class="site-footer__campaign">
    <p class="display display--xl" lang="${lang === 'es' ? 'es' : 'en'}">${lang === 'es'
      ? 'En la carretera, <span class="accent">tu próxima decisión importa.</span>'
      : 'On the road, <span class="accent">your next decision matters.</span>'}</p>
  </div>
  <div class="site-footer__inner">
    <div class="site-footer__brand">
      <img src="${asset('brand/logo-primary-reverse.svg')}" alt="${config.name} — ${esc(s.descriptor)}" width="220" height="196">
      <p>${esc(s.footerAbout)}</p>
      <p class="site-footer__emergency">${icon('phone')}<strong>${esc(s.emergency)}</strong></p>
    </div>
    <nav class="site-footer__nav" aria-label="${lang === 'es' ? 'Pie de página' : 'Footer'}">
      ${cols.map(([g, ids]) => html`<div><h2>${esc(s.menuGroups[g])}</h2><ul>${ids.map((id) => `<li><a href="${href(lang, id)}">${esc(s.nav[id])}</a></li>`)}</ul></div>`)}
    </nav>
  </div>
  <div class="site-footer__legal">
    <p>${esc(s.notAdvice)}</p>
    <p>${esc(s.lastReviewed)}: ${formatDate(config.lastReviewed, lang)} · <a href="${paths[lang === 'es' ? 'en' : 'es']}" lang="${lang === 'es' ? 'en' : 'es'}">${esc(s.otherLang)}</a> · <a href="#top">${esc(s.backToTop)}</a></p>
  </div>
</footer>`;
}
