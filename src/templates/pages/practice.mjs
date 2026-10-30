import { t } from '../../site.mjs';
import scenarios from '../../content/scenarios.mjs';
import quiz from '../../content/quiz.mjs';
import { esc, rich, html, href, icon, marker } from '../lib.mjs';
import { pageHero } from '../components.mjs';
import { diagram } from '../diagrams.mjs';
import { lessonUrl } from './lessons.mjs';

const verdictLabel = {
  es: { safest: 'La opción más segura', risky: 'Riesgosa', dangerous: 'Peligrosa' },
  en: { safest: 'The safest choice', risky: 'Risky', dangerous: 'Dangerous' }
};
const LETTERS = 'ABCD';

export function renderScenario(lang, sc, n, lessons, { showDiagram = true, headingLevel = 2 } = {}) {
  const S = sc[lang];
  const es = lang === 'es';
  const h = `h${headingLevel}`;
  const rel = (sc.related || []).map((id) => lessons.find((l) => l.id === id)).filter(Boolean).slice(0, 2);
  return html`<article class="scenario" id="${sc.id}" data-scenario aria-labelledby="${sc.id}-h">
  <div class="split">
    <div class="col-5">
      <p class="scenario__num" aria-hidden="true">${String(n).padStart(2, '0')}</p>
      <${h} id="${sc.id}-h">${esc(S.title)}</${h}>
      <p class="scenario__situation">${rich(S.situation)}</p>
      ${showDiagram && sc.diagram ? diagram(sc.diagram, lang) : ''}
    </div>
    <div class="col-7">
      <p class="scenario__prompt" id="${sc.id}-p">${rich(S.prompt)}</p>
      <ul class="choices" role="list" aria-labelledby="${sc.id}-p">
        ${S.choices.map((c, i) => html`<li><button type="button" class="choice choice--${c.verdict}" aria-pressed="false" data-choice="${i}" aria-describedby="${sc.id}-fb">
          <span class="choice__letter" aria-hidden="true">${LETTERS[i]}</span><span>${rich(c.text)}</span></button></li>`)}
      </ul>
      <div class="scenario__feedback" id="${sc.id}-fb" aria-live="polite" hidden>
        ${S.choices.map((c, i) => `<div data-fb="${i}" hidden><span class="verdict verdict--${c.verdict}">${esc(verdictLabel[lang][c.verdict])}</span><p class="mb-0">${rich(c.feedback)}</p></div>`)}
      </div>
      <div class="scenario__takeaway" data-takeaway hidden>
        <strong>${es ? 'La lección' : 'The lesson'}</strong>${rich(S.takeaway)}
        ${rel.length ? `<p class="small mt-1 mb-0">${es ? 'Aprende más' : 'Learn more'}: ${rel.map((l) => `<a href="${lessonUrl(lang, l)}">${esc(l[lang].title)}</a>`).join(' · ')}</p>` : ''}
      </div>
      <noscript><details class="no-js-answers"><summary>${es ? 'Ver la respuesta' : 'See the answer'}</summary>
        ${S.choices.map((c, i) => `<p><strong>${LETTERS[i]} — ${esc(verdictLabel[lang][c.verdict])}.</strong> ${rich(c.feedback)}</p>`).join('')}
        <p><strong>${es ? 'La lección' : 'The lesson'}:</strong> ${rich(S.takeaway)}</p>
      </details></noscript>
    </div>
  </div>
</article>`;
}

export function scenariosPage(lang, lessons) {
  const es = lang === 'es';
  const s = t[lang];
  const body = html`
${pageHero(lang, {
    eyebrow: es ? 'Practica' : 'Practise',
    title: es ? 'Escenarios: ¿qué harías tú?' : 'Scenarios: what would you do?',
    lede: es
      ? 'Situaciones que se viven a diario en la vía. Elige una respuesta y descubre por qué es segura o peligrosa. No hay trampas: la idea es pensar antes de que pase de verdad.'
      : 'Situations that happen on the road every day. Choose an answer and find out why it is safe or dangerous. There are no tricks: the point is to think it through before it happens for real.'
  })}
<div class="wrap">
  ${scenarios.map((sc, i) => renderScenario(lang, sc, i + 1, lessons))}
</div>
<section class="section theme-forest">
  <div class="wrap split split--center">
    <div class="col-7">
      ${marker(2, es ? 'Siguiente paso' : 'Next step')}
      <h2 class="display display--xl">${es ? 'Ahora, el reto de 50 preguntas' : 'Now, the 50-question challenge'}</h2>
    </div>
    <div class="col-5"><div class="btn-row"><a class="btn btn--primary" href="${href(lang, 'quiz')}"><span>${esc(s.nav.quiz)}</span>${icon('arrow')}</a></div></div>
  </div>
</section>`;
  return {
    title: es ? 'Escenarios de seguridad vial' : 'Road-safety scenarios',
    description: es
      ? 'Situaciones reales en la vía: intersecciones, rebases, lluvia, noche y piques. Elige qué harías y aprende la opción más segura.'
      : 'Real road situations: intersections, overtaking, rain, night riding and street racing. Choose what you would do and learn the safest option.',
    body,
    scripts: []
  };
}

export function quizPage(lang, lessons) {
  const es = lang === 'es';
  const data = quiz.map((q) => {
    const l = lessons.find((x) => x.id === q.lesson);
    return { q: q[lang].q, o: q[lang].options, a: q[lang].answer, e: q[lang].explain, u: l ? lessonUrl(lang, l) : null, lt: l ? l[lang].title : null };
  });
  const ui = es
    ? { start: 'Empezar el reto', question: 'Pregunta', of: 'de', check: 'Comprobar', next: 'Siguiente', finish: 'Ver resultado', correct: 'Correcto.', wrong: 'No es la mejor respuesta.', right: 'Respuesta correcta', yours: 'Tu respuesta', result: 'Tu resultado', review: 'Repasa las preguntas que fallaste', retake: 'Volver a empezar', perfect: 'Ninguna incorrecta. Excelente.', learn: 'Lección relacionada', choose: 'Elige una respuesta.', score: 'respuestas correctas', bands: ['Sigue aprendiendo: repasa las lecciones y vuelve a intentarlo.', 'Buen trabajo. Repasa lo que fallaste para afinar.', 'Excelente. Comparte el reto con alguien que maneje.'] }
    : { start: 'Start the challenge', question: 'Question', of: 'of', check: 'Check', next: 'Next', finish: 'See result', correct: 'Correct.', wrong: 'Not the best answer.', right: 'Correct answer', yours: 'Your answer', result: 'Your result', review: 'Review the questions you missed', retake: 'Start again', perfect: 'Nothing wrong. Excellent.', learn: 'Related lesson', choose: 'Choose an answer.', score: 'correct answers', bands: ['Keep learning: review the lessons and try again.', 'Good work. Review what you missed to sharpen up.', 'Excellent. Share the challenge with someone who drives.'] };

  const body = html`
${pageHero(lang, {
    eyebrow: es ? 'Practica' : 'Practise',
    title: es ? 'Reto vial: 50 preguntas' : 'Road challenge: 50 questions',
    lede: es
      ? 'Casco, velocidad, rebases, intersecciones, noche, familias y emergencias. Cada respuesta trae su explicación. Al final verás tu resultado y las preguntas que conviene repasar.'
      : 'Helmets, speed, overtaking, junctions, night riding, families and emergencies. Every answer comes with an explanation. At the end you will see your result and the questions worth reviewing.'
  })}
<section class="section section--tight theme-sand">
  <div class="wrap">
    <div class="quiz-intro measure" style="margin-bottom:2rem">
      <p class="disclaimer"><strong>${es ? 'Importante:' : 'Important:'}</strong> ${es
        ? 'este reto es educativo. No es el examen oficial para obtener la licencia en Honduras, no otorga ninguna certificación y no está avalado por ninguna autoridad. Para la licencia, estudia el material oficial de la DNVT.'
        : 'this challenge is educational. It is not the official Honduran licensing exam, it does not grant any certification and it is not endorsed by any authority. For a licence, study the official DNVT material.'}
        <a href="${href(lang, 'law')}">${es ? 'Ver recursos oficiales' : 'See official resources'}</a>.</p>
      <p class="small muted">${es ? 'Privacidad: tus respuestas se quedan en este navegador mientras respondes y no se guardan ni se envían a ningún lugar. Si cierras o recargas la página, el reto empieza de nuevo.' : 'Privacy: your answers stay in this browser while you play and are not saved or sent anywhere. If you close or reload the page, the challenge starts again.'}</p>
    </div>
    <div class="quiz" data-quiz aria-live="polite">
      <p>${es ? 'Cargando el reto…' : 'Loading the challenge…'}</p>
    </div>
    <script type="application/json" id="quiz-data">${JSON.stringify({ ui, questions: data }).replace(/</g, '\\u003c')}</script>
    <noscript>
      <div class="quiz">
        <p><strong>${es ? 'El reto interactivo necesita JavaScript.' : 'The interactive challenge needs JavaScript.'}</strong> ${es ? 'Aquí tienes todas las preguntas con sus respuestas:' : 'Here are all the questions with their answers:'}</p>
        <ol>${data.map((q) => `<li><p><strong>${esc(q.q)}</strong></p><details><summary>${esc(ui.right)}</summary><p>${esc(q.o[q.a])}. ${esc(q.e)}</p></details></li>`)}</ol>
      </div>
    </noscript>
  </div>
</section>`;
  return {
    title: es ? 'Reto vial: 50 preguntas de seguridad vial' : 'Road challenge: 50 road-safety questions',
    description: es
      ? 'Pon a prueba tus conocimientos de seguridad vial con 50 preguntas y explicaciones. Educativo, gratuito y sin registro. No es el examen oficial de licencia.'
      : 'Test your road-safety knowledge with 50 questions and explanations. Educational, free and no sign-up. Not the official licence exam.',
    body,
    scripts: ['quiz.js']
  };
}
