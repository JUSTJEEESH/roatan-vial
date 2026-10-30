import { t, config } from '../../site.mjs';
import { officialSources, pending, jurisdiction } from '../../content/legal.mjs';
import { national } from '../../content/data.mjs';
import { esc, html, href, icon, marker, ext, formatDate } from '../lib.mjs';
import { pageHero, factBlock } from '../components.mjs';

export function lawPage(lang) {
  const es = lang === 'es';
  const s = t[lang];
  const groups = [
    { id: 'base', es: 'La ley y sus reformas', en: 'The law and its amendments', facts: ['hn-ley-transito'] },
    { id: 'licencias', es: 'Licencias, formación y exámenes', en: 'Licences, training and tests', facts: ['hn-licencia', 'hn-licencia-categorias', 'hn-visitantes'] },
    { id: 'motocicletas', es: 'Motocicletas: casco, pasajeros y visibilidad', en: 'Motorcycles: helmets, passengers and visibility', facts: ['hn-moto-casco', 'hn-moto-dos-personas', 'hn-moto-reflectivo', 'hn-moto-menores'] },
    { id: 'vehiculos', es: 'Cinturón y niños', en: 'Seatbelts and children', facts: ['hn-cinturon', 'hn-retencion-infantil'] },
    { id: 'velocidad', es: 'Velocidad', en: 'Speed', facts: ['hn-velocidad'] },
    { id: 'alcohol', es: 'Alcohol', en: 'Alcohol', facts: ['hn-ebriedad'] },
    { id: 'emergencias', es: 'Emergencias', en: 'Emergencies', facts: ['hn-911'] }
  ];
  const body = html`
${pageHero(lang, {
    eyebrow: es ? 'Ley y recursos oficiales' : 'Law and official resources',
    title: es ? 'Lo que dice la ley, con su fuente' : 'What the law says, with its source',
    lede: es
      ? 'Un resumen de las normas de tránsito hondureñas más relevantes para la seguridad vial, con enlace a la fuente, fecha de verificación y el estado de cada dato. No es asesoría legal.'
      : 'A summary of the Honduran traffic rules most relevant to road safety, with a link to the source, the date verified and the status of each point. It is not legal advice.',
    meta: `<span>${icon('clock')} ${esc(s.lastReviewed)}: ${formatDate(jurisdiction.reviewed, lang)}</span>`
  })}
<section class="section section--tight theme-sand">
  <div class="wrap">
    <div class="notice">${icon('scale')}<div>
      <h2>${es ? 'Cómo leer esta página' : 'How to read this page'}</h2>
      <p>${es
        ? 'La Ley de Tránsito de 2005 ha sido reformada varias veces, y en 2026 se anunció una reforma integral. Por eso cada dato indica su estado. Los datos marcados como «pendiente de confirmación oficial» coinciden en varias fuentes secundarias confiables (prensa nacional, verificaciones de datos), pero el proyecto aún no los ha cotejado con el texto oficial vigente. Si un dato no se pudo verificar, lo decimos y no lo presentamos como ley.'
        : 'The 2005 Traffic Law has been amended several times, and a comprehensive reform was announced in 2026. That is why every point shows its status. Points marked “official confirmation pending” agree across several reliable secondary sources (national press, fact-checks), but the project has not yet checked them against the current official text. If something could not be verified, we say so and do not present it as law.'}</p>
      <p><strong>${es ? 'Antes de un trámite o una decisión legal, consulta siempre la fuente oficial o a la autoridad.' : 'Before any procedure or legal decision, always check the official source or the authority.'}</strong></p>
      <p class="mb-0 small">${es ? 'Estados:' : 'Statuses:'} ${['primary', 'secondary', 'directive', 'unconfirmed'].map((k) => `<span class="status status--${k}">${esc(s.statusLabels[k])}</span>`).join(' ')}</p>
    </div></div>
  </div>
</section>

<section class="section theme-white" id="fuentes">
  <div class="wrap split">
    <div class="col-4">${marker(1, es ? 'Fuentes oficiales' : 'Official sources')}<h2>${es ? 'Dónde obtener la información oficial' : 'Where to get official information'}</h2><p>${es ? 'Trámites, licencias, exámenes y el texto de la ley: la fuente es siempre la autoridad.' : 'Procedures, licences, tests and the text of the law: the source is always the authority.'}</p></div>
    <div class="col-8"><ul class="resource-list">${officialSources.map((o) => `<li>${ext(o.url, o[lang], lang)}<p>${esc(es ? o.noteEs : o.noteEn)}</p></li>`)}</ul></div>
  </div>
</section>

<div class="wrap">
  ${groups.map((g, i) => html`<section class="section section--tight" id="${g.id}" aria-labelledby="${g.id}-h">
    ${marker(i + 2, g[lang])}
    <h2 id="${g.id}-h">${esc(g[lang])}</h2>
    ${g.id === 'licencias' ? `<p class="measure">${es ? 'El proceso de licencia incluye requisitos de documentación, evaluación médica y psicológica, y exámenes teórico y práctico que la DNVT actualizó en 2026, según las fuentes consultadas. El material oficial de estudio está en los módulos de educación vial de la Policía Nacional. Los requisitos pueden ser distintos para residentes y visitantes: no supongas que todo visitante necesita, o no necesita, una licencia hondureña. Verifícalo con la DNVT.' : 'The licensing process includes documentation requirements, medical and psychological assessment, and theory and practical tests that the DNVT updated in 2026, according to the sources reviewed. Official study material is in the National Police road-education modules. Requirements may differ for residents and visitors: do not assume every visitor does, or does not, need a Honduran licence. Check with the DNVT.'}</p>` : ''}
    ${g.id === 'velocidad' ? `<p class="measure">${es ? 'No publicamos límites genéricos en km/h hasta confirmarlos en el texto vigente. En la vía, el límite es el que indica la señal, y la velocidad segura puede ser menor.' : 'We do not publish general km/h limits until they are confirmed in the current text. On the road, the limit is what the sign says, and the safe speed may be lower.'}</p>` : ''}
    ${g.facts.map((id) => factBlock(lang, id))}
  </section>`)}

  <section class="section section--tight" id="pendiente" aria-labelledby="pend-h">
    ${marker(groups.length + 2, es ? 'En verificación' : 'Being verified')}
    <h2 id="pend-h">${es ? 'Lo que todavía no publicamos como ley' : 'What we do not yet publish as law'}</h2>
    <p class="measure">${es ? 'Estos temas importan, pero no hemos podido confirmar con suficiente certeza la norma vigente. En las lecciones se tratan como recomendaciones de seguridad, no como requisitos legales.' : 'These topics matter, but we have not been able to confirm the current rule with enough certainty. In the lessons they are treated as safety recommendations, not legal requirements.'}</p>
    <ul class="mistakes measure">${pending.map((p) => `<li>${icon('info')}<span>${esc(p[lang])}</span></li>`)}</ul>
  </section>
</div>`;
  return {
    title: es ? 'Ley de Tránsito de Honduras: resumen con fuentes' : 'Honduran Traffic Law: summary with sources',
    description: es ? 'Normas de tránsito de Honduras sobre casco, pasajeros de moto, chaleco reflectivo, cinturón, velocidad, alcohol y licencias, con fuente oficial y fecha de verificación.' : 'Honduran traffic rules on helmets, motorcycle passengers, reflective vests, seatbelts, speed, alcohol and licences, with official sources and verification dates.',
    body
  };
}

export function dataPage(lang) {
  const es = lang === 'es';
  const num = (n) => n.toLocaleString(es ? 'es-HN' : 'en-GB');
  const tiers = es ? [
    ['Estadísticas oficiales', 'Publicadas por una autoridad (por ejemplo, la DNVT). Se citan con fuente y fecha.'],
    ['Investigación', 'De universidades u organismos (por ejemplo, el Observatorio de la Violencia de la UNAH o la OMS). Se citan con su método.'],
    ['Observaciones comunitarias', 'Lo que la comunidad observa en la vía. Útil para orientar la educación, nunca presentado como estadística.'],
    ['Reportes no verificados', 'Noticias o mensajes aislados. No se publican como datos.']
  ] : [
    ['Official statistics', 'Published by an authority (for example, the DNVT). Cited with source and date.'],
    ['Research', 'From universities or bodies (for example, the UNAH Violence Observatory or WHO). Cited with their method.'],
    ['Community observations', 'What the community sees on the road. Useful to guide education, never presented as statistics.'],
    ['Unverified reports', 'Isolated news items or messages. Not published as data.']
  ];
  const hope = es
    ? ['Datos de siniestros en Roatán e Islas de la Bahía, por tipo de usuario (moto, carro, peatón).', 'Uso de casco y cinturón, medido con un método consistente.', 'Lugares y horas de mayor riesgo, para orientar la educación.', 'Lesiones atendidas en centros de salud, con respeto a la privacidad.']
    : ['Crash data for Roatán and the Bay Islands, by road-user type (motorcycle, car, pedestrian).', 'Helmet and seatbelt use, measured with a consistent method.', 'Higher-risk places and times, to guide education.', 'Injuries treated at health centres, with privacy respected.'];
  const body = html`
${pageHero(lang, {
    eyebrow: es ? 'Datos y transparencia' : 'Data and transparency',
    title: es ? 'No inventamos cifras' : 'We do not invent numbers',
    lede: es ? 'Cada dato que publicamos tiene fuente y fecha. Si no existe un dato confiable, lo decimos.' : 'Every figure we publish has a source and a date. If no reliable figure exists, we say so.'
  })}
<section class="section theme-white">
  <div class="wrap">
    ${marker(1, es ? 'Honduras' : 'Honduras')}
    <h2>${es ? 'Muertes en eventos de tránsito, 2025' : 'Road traffic deaths, 2025'}</h2>
    <div class="data-compare mt-2">
      ${national.map((d) => html`<div>
        <p class="stat__num">${num(d.value)}</p>
        <p class="stat__label">${esc(d[lang].label)}.</p>
        ${d.compare ? `<p class="small">${es ? `En ${d.compare.year}, la misma fuente reportó ${num(d.compare.value)}.` : `In ${d.compare.year}, the same source reported ${num(d.compare.value)}.`}</p>` : ''}
        <p class="small"><span class="tag">${d.kind === 'official' ? (es ? 'Oficial' : 'Official') : (es ? 'Investigación' : 'Research')}</span></p>
        <p class="stat__source">${ext(d.url, d[lang].source, lang)} · ${es ? 'consultado' : 'checked'} ${formatDate(d.checked, lang)}</p>
      </div>`)}
    </div>
    <p class="measure mt-2">${es
      ? '¿Por qué no coinciden? Cada institución cuenta de forma distinta: por ejemplo, si incluye a quienes mueren días después en el hospital, o de qué registros parte. Publicamos ambas, sin elegir la que «suena» más fuerte. Las cifras provienen de la prensa nacional que cita a cada institución; cuando los informes originales estén disponibles, enlazaremos directamente a ellos.'
      : 'Why do they differ? Each institution counts differently: for example, whether it includes people who die days later in hospital, or which records it starts from. We publish both, without picking whichever “sounds” stronger. The figures come from national press citing each institution; when the original reports are available, we will link to them directly.'}</p>
  </div>
</section>
<section class="section theme-sand">
  <div class="wrap split">
    <div class="col-5">${marker(2, es ? 'Roatán' : 'Roatán')}<h2>${es ? 'Para Roatán, no hay cifras oficiales publicadas' : 'For Roatán, there are no published official figures'}</h2></div>
    <div class="col-6 col-end"><p>${es
      ? 'No encontramos estadísticas oficiales publicadas de forma regular solo para Roatán o para Islas de la Bahía. La prensa informa de choques graves en la isla, pero las notas de prensa no son una estadística. Por eso no mostramos contadores, porcentajes ni cifras locales. Nos gustaría trabajar con las autoridades correspondientes para que existan datos locales confiables, como:'
      : 'We found no regularly published official statistics for Roatán or the Bay Islands alone. The press reports serious crashes on the island, but press reports are not statistics. That is why we show no counters, percentages or local figures. We would like to work with the relevant authorities so that reliable local data exists, such as:'}</p>
      <ul>${hope.map((h) => `<li>${esc(h)}</li>`)}</ul>
    </div>
  </div>
</section>
<section class="section theme-white">
  <div class="wrap">
    ${marker(3, es ? 'Tipos de información' : 'Kinds of information')}
    <h2>${es ? 'Separamos siempre cuatro tipos de información' : 'We always keep four kinds of information apart'}</h2>
    <div class="tiers">${tiers.map(([h, p]) => `<div class="tier"><h3>${esc(h)}</h3><p>${esc(p)}</p></div>`)}</div>
    <p class="mt-2"><a class="text-link" href="${href(lang, 'vision')}">${es ? 'Cómo mediremos el impacto de la iniciativa' : 'How we will measure the initiative’s impact'} ${icon('arrow')}</a></p>
  </div>
</section>`;
  return {
    title: es ? 'Datos y transparencia' : 'Data and transparency',
    description: es ? 'Cifras de muertes por tránsito en Honduras con su fuente, por qué no coinciden y por qué no publicamos cifras locales de Roatán sin datos oficiales.' : 'Road-death figures for Honduras with their sources, why they differ, and why we publish no local Roatán figures without official data.',
    body
  };
}
