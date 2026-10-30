import { categories, t } from '../../site.mjs';
import { esc, rich, html, href, icon, marker } from '../lib.mjs';
import { pageHero, note, checklist, knowledgeCheck } from '../components.mjs';
import { diagram } from '../diagrams.mjs';

export const lessonUrl = (lang, l) => href(lang, 'learn', l[lang].slug);

export function learnPage(lang, lessons) {
  const s = t[lang];
  const es = lang === 'es';
  const byCat = (c) => lessons.filter((l) => l.category === c).sort((a, b) => a.order - b.order);
  const body = html`
${pageHero(lang, {
    eyebrow: es ? 'Centro de aprendizaje' : 'Learning centre',
    title: es ? 'Aprende a moverte con seguridad' : 'Learn to get around safely',
    lede: es
      ? `${lessons.length} lecciones prácticas en 13 temas: de cómo ajustar un casco a qué hacer si presencias un choque. Cada una incluye objetivos, ejemplos reales, errores comunes, una lista práctica y una pequeña prueba.`
      : `${lessons.length} practical lessons across 13 topics: from fitting a helmet to what to do if you witness a crash. Each one includes objectives, real-world examples, common mistakes, a practical checklist and a short check.`
  })}
<section class="section section--tight theme-sand">
  <div class="wrap">
    <h2 class="visually-hidden">${es ? 'Temas' : 'Topics'}</h2>
    <ul class="cat-nav">
      ${categories.map((c) => `<li><a href="#${c.id}"><span class="code">${c.code}</span>${esc(c[lang])}</a></li>`)}
    </ul>
  </div>
</section>
<div class="wrap">
  ${categories.map((c) => {
    const ls = byCat(c.id);
    return html`<section class="category" id="${c.id}" aria-labelledby="cat-${c.id}">
      <div class="category__head">
        <span class="category__code" aria-hidden="true">${c.code}</span>
        <h2 id="cat-${c.id}">${esc(c[lang])}</h2>
        <span class="small muted">${ls.length} ${ls.length === 1 ? (es ? 'lección' : 'lesson') : s.lessons}</span>
      </div>
      <ul class="lesson-rows">
        ${ls.map((l) => html`<li><a href="${lessonUrl(lang, l)}">
          <div><h3>${esc(l[lang].title)}</h3><p>${rich(l[lang].dek)}</p></div>
          <span class="meta">${l.minutes} ${esc(s.readMinutes)} ${icon('arrow')}</span>
        </a></li>`)}
      </ul>
      ${c.id === 'normas' ? `<p class="small mt-1" style="margin-left:0"><a class="text-link" href="${href(lang, 'signs')}">${es ? 'Consulta también la guía de señales y marcas viales' : 'See also the guide to signs and road markings'} ${icon('arrow')}</a></p>` : ''}
    </section>`;
  })}
</div>
<section class="section theme-forest">
  <div class="wrap split split--center">
    <div class="col-7">
      ${marker(1, es ? 'Practica' : 'Practise')}
      <h2 class="display display--xl">${es ? 'Pon a prueba lo que sabes' : 'Test what you know'}</h2>
      <p class="lede muted">${es ? 'Seis situaciones reales en la vía y un reto de 50 preguntas con explicación en cada respuesta.' : 'Six real road situations and a 50-question challenge with an explanation for every answer.'}</p>
    </div>
    <div class="col-5"><div class="btn-row">
      <a class="btn btn--primary" href="${href(lang, 'scenarios')}"><span>${esc(s.nav.scenarios)}</span>${icon('arrow')}</a>
      <a class="btn btn--ghost" href="${href(lang, 'quiz')}"><span>${esc(s.nav.quiz)}</span>${icon('arrow')}</a>
    </div></div>
  </div>
</section>`;
  return {
    title: es ? 'Centro de aprendizaje de seguridad vial' : 'Road-safety learning centre',
    description: es
      ? 'Lecciones gratuitas de educación vial en español: seguridad en motocicleta, casco, manejo defensivo, rebases, intersecciones, peatones y más. Desde Roatán, Honduras.'
      : 'Free road-safety lessons: motorcycle and helmet safety, defensive driving, overtaking, intersections, pedestrians and more. From Roatán, Honduras.',
    body
  };
}

export function lessonPage(lang, l, all) {
  const s = t[lang];
  const es = lang === 'es';
  const L = l[lang];
  const cat = categories.find((c) => c.id === l.category);
  const related = l.related.map((id) => all.find((x) => x.id === id)).filter(Boolean).slice(0, 3);
  const secId = (i) => `s${i + 1}`;
  const url = lessonUrl(lang, l);

  const body = html`
${pageHero(lang, {
    eyebrow: `${s.lesson} ${cat.code}${l.order} · ${cat[lang]}`,
    title: esc(L.title),
    lede: L.dek,
    crumbs: [[s.nav.learn, href(lang, 'learn')], [cat[lang], href(lang, 'learn') + '#' + cat.id]],
    meta: `<span>${icon('clock')} ${l.minutes} ${esc(s.readMinutes)}</span>`
  })}
<div class="wrap">
  <div class="lesson-layout">
    <aside class="lesson-aside" aria-label="${esc(s.objectives)}">
      <div class="lesson-aside__sticky">
        <div class="objectives">
          <h2>${esc(s.objectives)}</h2>
          <ol>${L.objectives.map((o) => `<li>${rich(o)}</li>`)}</ol>
        </div>
        <nav class="toc" aria-label="${es ? 'En esta lección' : 'In this lesson'}">
          <h2>${es ? 'En esta lección' : 'In this lesson'}</h2>
          <ul>
            ${L.sections.map((sec, i) => `<li><a href="#${secId(i)}">${esc(sec.heading)}</a></li>`)}
            <li><a href="#example">${esc(s.example)}</a></li>
            <li><a href="#mistakes">${esc(s.mistakes)}</a></li>
            <li><a href="#checklist">${esc(s.checklist)}</a></li>
            <li><a href="#check">${esc(s.check)}</a></li>
          </ul>
        </nav>
      </div>
    </aside>
    <article class="lesson-body">
      ${L.sections.map((sec, i) => html`<section id="${secId(i)}" aria-labelledby="${secId(i)}-h">
        <h2 id="${secId(i)}-h">${esc(sec.heading)}</h2>
        ${sec.paragraphs.map((p) => `<p>${rich(p)}</p>`)}
        ${sec.list ? `<ul>${sec.list.map((li) => `<li>${rich(li)}</li>`).join('')}</ul>` : ''}
        ${i === 0 && l.diagram ? diagram(l.diagram, lang, L.diagramCaption) : ''}
      </section>`)}

      <section id="example" class="example" aria-labelledby="example-h">
        <p class="eyebrow">${esc(s.example)} · ${esc(s.illustrative)}</p>
        <h2 id="example-h">${esc(L.example.title)}</h2>
        ${L.example.body.map((p) => `<p>${rich(p)}</p>`)}
      </section>

      <section id="mistakes" aria-labelledby="mistakes-h">
        <h2 id="mistakes-h">${esc(s.mistakes)}</h2>
        <ul class="mistakes">${L.mistakes.map((m) => `<li>${icon('x')}<span>${rich(m)}</span></li>`)}</ul>
      </section>

      <section aria-label="${es ? 'Notas' : 'Notes'}">
        <div class="notes">${L.notes.map((n) => note(lang, n))}</div>
      </section>

      <section id="checklist" aria-labelledby="checklist-h">
        <h2 id="checklist-h" class="visually-hidden">${esc(s.checklist)}</h2>
        ${checklist(lang, `cl-${l.id}`, s.checklist, L.checklist)}
      </section>

      <section id="check" aria-labelledby="check-h">
        <h2 id="check-h">${esc(s.check)}</h2>
        ${knowledgeCheck(lang, `kc-${l.id}`, L.check)}
      </section>

      <div class="share" data-share data-title="${esc(L.title)}">
        <span class="share__label">${esc(s.share)}</span>
        <a class="chip-btn" href="https://wa.me/?text=${encodeURIComponent(L.title + ' ')}" data-wa rel="noopener" target="_blank">WhatsApp</a>
        <a class="chip-btn" href="https://www.facebook.com/sharer/sharer.php?u=" data-fb rel="noopener" target="_blank">Facebook</a>
        <button class="chip-btn" type="button" data-copy data-copied="${esc(s.copied)}">${icon('link')}<span>${esc(s.copyLink)}</span></button>
      </div>

      ${l.sources?.length ? html`<section class="sources mt-2" aria-labelledby="src-h">
        <h2 id="src-h" class="h4" style="font-size:var(--fs-base)">${esc(s.sources)}</h2>
        <ul>${l.sources.map((x) => `<li>${esc(es ? x.label : (x.labelEn || x.label))}</li>`)}</ul>
        <p>${es ? 'Las recomendaciones generales provienen de organismos internacionales de seguridad vial. Lo que exige la ley hondureña se indica por separado y con su fuente.' : 'General recommendations come from international road-safety bodies. What Honduran law requires is shown separately, with its source.'}</p>
      </section>` : ''}
    </article>
  </div>
</div>
<section class="related theme-sand">
  <div class="wrap">
    <h2>${esc(s.related)}</h2>
    <div class="related__grid">
      ${related.map((r) => {
        const rc = categories.find((c) => c.id === r.category);
        return `<a href="${lessonUrl(lang, r)}"><p class="eyebrow">${esc(rc[lang])}</p><h3>${esc(r[lang].title)}</h3><span class="small muted">${r.minutes} ${esc(s.readMinutes)}</span></a>`;
      })}
    </div>
  </div>
</section>`;

  return {
    title: L.title,
    description: stripRich(L.dek).slice(0, 158),
    body,
    ogType: 'article',
    params: { es: [l.es.slug], en: [l.en.slug] },
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'LearningResource',
      name: L.title,
      description: stripRich(L.dek),
      inLanguage: es ? 'es' : 'en',
      learningResourceType: es ? 'Lección' : 'Lesson',
      educationalLevel: es ? 'General' : 'General',
      timeRequired: `PT${l.minutes}M`,
      isAccessibleForFree: true,
      publisher: { '@type': 'Organization', name: 'Roatán Vial' }
    }
  };
}

const stripRich = (s) => String(s).replace(/<[^>]+>/g, '');
