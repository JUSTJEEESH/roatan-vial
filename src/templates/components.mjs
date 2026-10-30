import { t } from '../site.mjs';
import { facts, officialSources, pressSources } from '../content/legal.mjs';
import { photos } from '../content/photos.mjs';
import { esc, rich, html, href, asset, icon, symbolSvg, formatDate, ext } from './lib.mjs';

export function pageHero(lang, { eyebrow, title, lede, crumbs = [], meta = '', theme = 'forest', display = false }) {
  const s = t[lang];
  const trail = [[s.breadcrumbHome, href(lang, 'home')], ...crumbs];
  return html`<section class="page-hero ${theme === 'sand' ? 'page-hero--sand' : ''}">
  ${symbolSvg('page-hero__mark')}
  <div class="wrap">
    <nav class="breadcrumb" aria-label="${lang === 'es' ? 'Ruta de navegación' : 'Breadcrumb'}"><ol>
      ${trail.map(([label, url], i) => i === trail.length - 1 && !title ? '' : `<li><a href="${url}">${esc(label)}</a></li>`)}
      <li aria-current="page">${esc(stripTags(title))}</li>
    </ol></nav>
    ${eyebrow ? `<p class="eyebrow">${esc(eyebrow)}</p>` : ''}
    <h1 class="${display ? 'display' : ''}">${title}</h1>
    ${lede ? `<p class="lede">${rich(lede)}</p>` : ''}
    ${meta ? `<div class="page-hero__meta">${meta}</div>` : ''}
  </div>
</section>`;
}

export const stripTags = (s) => String(s).replace(/<[^>]+>/g, '');

const srcName = (id, lang) => {
  const o = officialSources.find((x) => x.id === id);
  return o ? { label: o[lang], url: o.url } : null;
};

// Labelled note: law / expert / practical. Law notes pull status and source from the registry.
export function note(lang, n) {
  const s = t[lang];
  const fact = n.fact ? facts[n.fact] : null;
  let kind = n.kind;
  let label = s.noteKinds[kind] || kind;
  if (fact && fact.type === 'directive') label = lang === 'es' ? 'Directriz oficial (no es ley)' : 'Official directive (not law)';
  const ic = kind === 'law' ? 'scale' : kind === 'expert' ? 'expert' : 'hand';
  let meta = '';
  if (fact) {
    const first = fact.sources.map((id) => srcName(id, lang)).filter(Boolean)[0];
    meta = `<p class="note__meta"><span class="status status--${fact.status}">${esc(s.statusLabels[fact.status])}</span> · ${esc(lang === 'es' ? fact.article : (fact.articleEn || fact.article))} · ${esc(s.verified)}: ${formatDate(fact.verified, lang)} · <a href="${href(lang, 'law')}#${n.fact}">${esc(s.seeLaw)}</a>${first ? '' : ''}</p>`;
  }
  return `<aside class="note note--${kind}" aria-label="${esc(label)}"><p class="note__kind">${icon(ic)}${esc(label)}</p><p>${rich(n.text)}</p>${meta}</aside>`;
}

// Interactive checklist. Works without JS as a plain list of checkboxes.
export function checklist(lang, id, title, items, { intro = '' } = {}) {
  const s = t[lang];
  return html`<div class="checklist" data-checklist id="${id}">
  <div class="checklist__head"><h3>${esc(title)}</h3><p class="checklist__progress mb-0" aria-live="polite"><span data-count>0</span> / ${items.length} <span class="visually-hidden">${esc(s.checklistDone)}</span></p></div>
  <div class="checklist__bar" aria-hidden="true"><span data-bar></span></div>
  ${intro ? `<p class="small" style="padding:1rem 1.25rem 0;margin:0">${rich(intro)}</p>` : ''}
  <ul>${items.map((it, i) => `<li><label><input type="checkbox" name="${id}-${i}"><span>${rich(it)}</span></label></li>`)}</ul>
  <div class="checklist__foot"><span class="checklist__done" data-done hidden>${lang === 'es' ? 'Listo. Buen viaje.' : 'All set. Have a good trip.'}</span><button type="button" class="link-btn" data-reset>${esc(s.reset)}</button></div>
</div>`;
}

// Knowledge check: radio groups + per-question feedback (JS reveals feedback).
export function knowledgeCheck(lang, id, questions) {
  const s = t[lang];
  return html`<form class="kc" data-kc id="${id}" novalidate>
  ${questions.map((q, qi) => html`<fieldset data-answer="${q.answer}">
    <legend>${qi + 1}. ${rich(q.q)}</legend>
    ${q.options.map((o, oi) => `<label class="option"><input type="radio" name="${id}-${qi}" value="${oi}"><span>${rich(o)}</span></label>`)}
    <div class="feedback" data-feedback hidden aria-live="polite"><strong data-verdict></strong><span>${rich(q.explain)}</span></div>
    <noscript><p class="small"><strong>${esc(s.correct)}</strong> ${rich(q.options[q.answer])}. ${rich(q.explain)}</p></noscript>
  </fieldset>`)}
  <div><button class="btn btn--solid" type="submit">${esc(s.checkAnswer)}</button></div>
</form>`;
}

// Photograph slot: renders the photo once a licensed file exists, else the fallback.
export function photo(slot, lang, fallback = '') {
  const p = photos[slot];
  if (!p || !p.file) return fallback;
  return `<figure class="photo"><img src="${asset('images/photos/' + p.file)}" width="${p.width}" height="${p.height}" alt="${esc(p.alt[lang])}" loading="lazy" decoding="async">${p.credit ? `<figcaption>${esc(p.credit)}</figcaption>` : ''}</figure>`;
}

export function factBlock(lang, id) {
  const f = facts[id];
  const s = t[lang];
  const off = f.sources.map((sid) => srcName(sid, lang)).filter(Boolean);
  const pr = (f.press || []).map((k) => pressSources[k]).filter(Boolean);
  return html`<article class="fact" id="${id}">
  <div>
    <p class="fact__topic">${esc(lang === 'es' ? f.article : (f.articleEn || f.article))}</p>
    <p><span class="status status--${f.status}">${esc(s.statusLabels[f.status])}</span></p>
  </div>
  <div class="fact__body">
    <p>${esc(f[lang])}</p>
    ${f.pendingEs ? `<p class="fact__pending">${esc(lang === 'es' ? f.pendingEs : f.pendingEn)}</p>` : ''}
    <div class="fact__sources">
      <strong>${lang === 'es' ? 'Fuentes' : 'Sources'}</strong> · ${esc(s.verified)}: ${formatDate(f.verified, lang)}
      <ul>
        ${off.map((o) => `<li>${lang === 'es' ? 'Oficial' : 'Official'}: ${ext(o.url, o.label, lang)}</li>`)}
        ${pr.map((p) => `<li>${lang === 'es' ? 'Secundaria' : 'Secondary'}: ${ext(p.url, p.label, lang)}</li>`)}
      </ul>
    </div>
  </div>
</article>`;
}
