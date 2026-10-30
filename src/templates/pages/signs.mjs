import { signGroups, art } from '../../content/signs.mjs';
import { esc, html, href, icon, marker } from '../lib.mjs';
import { pageHero } from '../components.mjs';
import { diagram } from '../diagrams.mjs';
import { lessonUrl } from './lessons.mjs';

export function signsPage(lang, lessons) {
  const es = lang === 'es';
  const L = (id) => lessons.find((l) => l.id === id);
  const shapes = es ? [
    ['alto', 'Octágono rojo: ALTO. Solo esta señal tiene esta forma.'],
    ['ceda', 'Triángulo invertido: ceder el paso.'],
    ['curva', 'Rombo amarillo: advertencia de peligro adelante.'],
    ['noEst', 'Blanco con círculo rojo: prohibición.'],
    ['hospital', 'Azul: servicios e información.'],
    ['destino', 'Verde: destinos y direcciones.']
  ] : [
    ['alto', 'Red octagon: STOP. Only this sign has this shape.'],
    ['ceda', 'Inverted triangle: give way.'],
    ['curva', 'Yellow diamond: warning of danger ahead.'],
    ['noEst', 'White with a red circle: prohibition.'],
    ['hospital', 'Blue: services and information.'],
    ['destino', 'Green: destinations and directions.']
  ];

  const body = html`
${pageHero(lang, {
    eyebrow: es ? 'Normas de la vía' : 'Rules of the road',
    title: es ? 'Señales y marcas viales' : 'Road signs and markings',
    lede: es
      ? 'Qué significa cada señal, qué se espera de ti y dónde la vas a encontrar. Honduras usa el sistema regional del Manual Centroamericano de Dispositivos Uniformes para el Control del Tránsito (SIECA).'
      : 'What each sign means, what is expected of you and where you will find it. Honduras uses the regional system of the Central American Manual on Uniform Traffic Control Devices (SIECA).'
  })}
<section class="section section--tight theme-sand">
  <div class="wrap">
    <div class="notice">
      ${icon('info')}
      <div><h2>${es ? 'Sobre estas ilustraciones' : 'About these illustrations'}</h2>
      <p>${es
        ? 'Son dibujos originales hechos para enseñar. Muestran señales cuya forma, color y significado son estándar en el sistema centroamericano. No son reproducciones oficiales: el diseño exacto, las leyendas y los códigos deben confirmarse con el manual oficial de SIECA, y las señales marcadas «por confirmar» todavía no se han cotejado. En la vía, manda siempre la señal real.'
        : 'They are original drawings made for teaching. They show signs whose shape, colour and meaning are standard in the Central American system. They are not official reproductions: exact designs, legends and codes must be confirmed against the official SIECA manual, and signs marked “to confirm” have not yet been checked. On the road, the real sign always applies.'}</p></div>
    </div>
    <h2 class="mt-3">${es ? 'Forma y color: el código rápido' : 'Shape and colour: the quick code'}</h2>
    <div class="shape-key">${shapes.map(([k, txt]) => `<div>${art[k]('')}<span>${esc(txt)}</span></div>`)}</div>
  </div>
</section>
<div class="wrap">
  ${signGroups.map((g, gi) => html`<section class="sign-section" id="${g.id}" aria-labelledby="${g.id}-h">
    ${marker(gi + 1, g[lang].title)}
    <h2 id="${g.id}-h">${esc(g[lang].title)}</h2>
    <p class="measure">${esc(g[lang].intro)}</p>
    <div class="sign-grid">
      ${g.signs.map((sg) => html`<article class="sign-card">
        <div class="sign-card__art">${art[sg.art](sg[lang].name)}</div>
        <div>
          <h3 lang="es">${esc(sg.es.name)}</h3>
          ${es ? '' : `<p class="en">${esc(sg.en.name)}</p>`}
          <dl>
            <dt>${es ? 'Significado' : 'Meaning'}</dt><dd>${esc(sg[lang].meaning)}</dd>
            <dt>${es ? 'Qué hacer' : 'What to do'}</dt><dd>${esc(sg[lang].do)}</dd>
            <dt>${es ? 'Dónde la verás' : 'Where you will see it'}</dt><dd>${esc(sg[lang].example)}</dd>
          </dl>
          ${sg.verify ? `<p class="mt-1 mb-0"><span class="status status--secondary">${es ? 'Por confirmar' : 'To confirm'}: ${esc(es ? sg.verify : verifyEn(sg.verify))}</span></p>` : ''}
        </div>
      </article>`)}
    </div>
  </section>`)}

  <section class="sign-section" id="marcas" aria-labelledby="marcas-h">
    ${marker(signGroups.length + 1, es ? 'Marcas viales' : 'Road markings')}
    <h2 id="marcas-h">${es ? 'Marcas en el pavimento' : 'Markings on the road surface'}</h2>
    <div class="split">
      <div class="col-6">${diagram('lane-lines', lang)}</div>
      <div class="col-6">${diagram('crosswalk', lang)}</div>
    </div>
    <div class="split mt-2">
      <div class="col-6">${diagram('overtaking', lang)}</div>
      <div class="col-6">${diagram('intersection-turn', lang)}</div>
    </div>
    <p class="mt-2"><a class="text-link" href="${lessonUrl(lang, L('road-markings'))}">${es ? 'Lección: cómo leer las marcas viales' : 'Lesson: how to read road markings'} ${icon('arrow')}</a></p>
    <ul class="two-col-list mt-2">
      <li><strong>${es ? 'Línea de alto:' : 'Stop line:'}</strong> ${es ? 'línea blanca transversal donde debes detenerte ante un ALTO o un semáforo en rojo. Nunca te detengas encima del paso peatonal.' : 'a white line across the lane where you must stop at a STOP sign or red light. Never stop on the pedestrian crossing.'}</li>
      <li><strong>${es ? 'Paso peatonal:' : 'Pedestrian crossing:'}</strong> ${es ? 'franjas blancas donde cruzan las personas. Reduce y cede el paso.' : 'white stripes where people cross. Slow down and give way.'}</li>
      <li><strong>${es ? 'Líneas de borde:' : 'Edge lines:'}</strong> ${es ? 'marcan el límite de la calzada. De noche ayudan a ubicarte.' : 'mark the edge of the carriageway. At night they help you keep your position.'}</li>
      <li><strong>${es ? 'Flechas:' : 'Arrows:'}</strong> ${es ? 'indican hacia dónde puede ir cada carril. Elige carril con tiempo.' : 'show where each lane may go. Choose your lane in good time.'}</li>
      <li><strong>${es ? 'Posición en el carril:' : 'Lane position:'}</strong> ${es ? 'mantente en tu carril y a una distancia segura del borde y de la línea central, sobre todo en curvas.' : 'keep within your lane, a safe distance from the edge and the centre line, especially on curves.'}</li>
      <li><strong>${es ? 'Marcas borradas:' : 'Faded markings:'}</strong> ${es ? 'si no ves líneas, actúa como si hubiera línea continua donde no hay visibilidad.' : 'if you cannot see lines, behave as if there were a solid line wherever visibility is limited.'}</li>
    </ul>
  </section>
</div>`;
  return {
    title: es ? 'Señales de tránsito y marcas viales en Honduras' : 'Road signs and markings in Honduras',
    description: es
      ? 'Guía visual de señales de tránsito: reglamentarias, preventivas, informativas, de dirección, semáforos y marcas viales. Qué significan y qué hacer.'
      : 'Visual guide to road signs: regulatory, warning, information, direction, traffic signals and road markings. What they mean and what to do.',
    body
  };
}

const verifyEn = (s) => ({
  'Leyenda y formato exactos': 'exact legend and format',
  'Diseño exacto del símbolo': 'exact symbol design',
  'Uso de la letra E en la señal oficial': 'use of the letter E on the official sign',
  'Diseño exacto': 'exact design',
  'Formato oficial; los destinos mostrados son genéricos': 'official format; destinations shown are generic',
  'Confirmar en el manual': 'confirm in the manual'
}[s] || s);
