import { t } from '../../site.mjs';
import { preRide } from '../../content/checklists.mjs';
import { esc, html, href, icon, marker, button } from '../lib.mjs';
import { pageHero, checklist, note } from '../components.mjs';
import { diagram } from '../diagrams.mjs';
import { lessonUrl } from './lessons.mjs';

export function motoPage(lang, lessons) {
  const s = t[lang];
  const es = lang === 'es';
  const L = (id) => lessons.find((l) => l.id === id);
  const motoLessons = lessons.filter((l) => l.category === 'moto').sort((a, b) => a.order - b.order);
  const more = ['night-visibility', 'rain-riding', 'following-distance', 'safe-overtaking', 'pre-trip-check'].map(L);

  // Curriculum map: every topic of the programme → the lesson that teaches it.
  const topics = es ? [
    ['Uso del casco', 'helmet-why'], ['Ajuste correcto', 'helmet-fit'], ['Estado del casco', 'helmet-fit'], ['Correa abrochada', 'helmet-carried'],
    ['Casco del pasajero', 'moto-passengers'], ['Seguridad del pasajero', 'moto-passengers'], ['Capacidad de la moto', 'moto-load-balance'],
    ['Equilibrio y manejo', 'moto-load-balance'], ['Frenado', 'moto-braking'], ['Visibilidad', 'night-visibility'], ['Equipo reflectivo', 'night-visibility'],
    ['Velocidad', 'stopping-distance'], ['Distancia de seguimiento', 'following-distance'], ['Rebasar', 'safe-overtaking'], ['Andar en grupo', 'group-riding'],
    ['Caballitos y piruetas', 'stunts-wheelies'], ['Manejo nocturno', 'night-visibility'], ['Vía mojada', 'rain-riding'], ['Revisión mecánica', 'pre-trip-check']
  ] : [
    ['Helmet use', 'helmet-why'], ['Correct fit', 'helmet-fit'], ['Helmet condition', 'helmet-fit'], ['Chin strap fastened', 'helmet-carried'],
    ['Passenger helmets', 'moto-passengers'], ['Passenger safety', 'moto-passengers'], ['Motorcycle capacity', 'moto-load-balance'],
    ['Balance and handling', 'moto-load-balance'], ['Braking', 'moto-braking'], ['Visibility', 'night-visibility'], ['Reflective equipment', 'night-visibility'],
    ['Speed', 'stopping-distance'], ['Following distance', 'following-distance'], ['Overtaking', 'safe-overtaking'], ['Group riding', 'group-riding'],
    ['Stunts and wheelies', 'stunts-wheelies'], ['Night riding', 'night-visibility'], ['Wet roads', 'rain-riding'], ['Mechanical checks', 'pre-trip-check']
  ];

  const effects = es ? [
    ['Equilibrio', 'Cada persona extra sube y atrasa el centro de gravedad. La moto se vuelve inestable, sobre todo al arrancar, en curvas y a baja velocidad.'],
    ['Frenado', 'Más peso necesita más distancia para detenerse, y los frenos de una moto pequeña no están pensados para ese peso.'],
    ['Dirección', 'Con peso atrás, la rueda delantera pierde carga: la dirección se vuelve ligera e imprecisa justo cuando más la necesitas.'],
    ['Protección', 'Un niño apretado entre dos adultos o un tercer pasajero sin posapiés ni casco no tiene ninguna protección en una caída.']
  ] : [
    ['Balance', 'Each extra person raises the centre of gravity and moves it back. The motorcycle becomes unstable, especially when pulling away, cornering and at low speed.'],
    ['Braking', 'More weight needs more distance to stop, and a small motorcycle’s brakes are not designed for that load.'],
    ['Steering', 'With weight at the back, the front wheel loses load: steering goes light and vague just when you need it most.'],
    ['Protection', 'A child squeezed between two adults, or a third passenger with no footpegs or helmet, has no protection at all in a fall.']
  ];

  const body = html`
${pageHero(lang, {
    eyebrow: es ? 'Programa insignia · Motocicletas' : 'Flagship programme · Motorcycles',
    title: es ? '<span class="line">El casco no es para llevarlo.</span><span class="line accent">Es para usarlo.</span>' : '<span class="line">A helmet is not for carrying.</span><span class="line accent">It is for wearing.</span>',
    display: true,
    lede: es
      ? 'Una moto es una forma práctica de moverse. Manejarla con seguridad protege a quienes dependen de ella: a ti, a tu pasajero y a tu familia.'
      : 'A motorcycle is a practical way to get around. Riding it safely protects the people who depend on it: you, your passenger and your family.'
  })}

<section class="section theme-white" aria-labelledby="why-h">
  <div class="wrap split">
    <div class="col-6">
      ${marker(1, es ? 'Por qué este programa' : 'Why this programme')}
      <h2 id="why-h" class="big-statement">${es
        ? 'La moto mueve a la isla: al trabajo, a la escuela, al mercado. No pedimos que nadie la deje. Pedimos que cada viaje termine bien.'
        : 'Motorcycles move the island: to work, to school, to market. We are not asking anyone to give theirs up. We are asking for every trip to end well.'}</h2>
    </div>
    <div class="col-5 col-end">
      <p>${es
        ? 'Quien anda en moto no tiene carrocería que lo proteja. Por eso las decisiones pequeñas, como abrochar la correa, dejar espacio o no subir a un tercer pasajero, pesan tanto. Este programa reúne lo esencial en lecciones cortas, una lista para antes de salir y escenarios para practicar.'
        : 'Riders have no bodywork to protect them. That is why small decisions, like fastening the strap, leaving space or not taking a third passenger, matter so much. This programme brings the essentials together in short lessons, a pre-ride checklist and scenarios to practise.'}</p>
      <div class="notes mt-2">
        ${note(lang, { kind: 'law', fact: 'hn-moto-casco', text: es ? 'No usar el casco protector, tanto quien conduce como quien acompaña, es una infracción según la Ley de Tránsito.' : 'Not wearing a protective helmet, for both rider and passenger, is an infraction under the Traffic Law.' })}
        ${note(lang, { kind: 'law', fact: 'hn-moto-dos-personas', text: es ? 'Llevar más de dos personas en una motocicleta es una infracción según la Ley de Tránsito.' : 'Carrying more than two people on a motorcycle is an infraction under the Traffic Law.' })}
        ${note(lang, { kind: 'law', fact: 'hn-moto-reflectivo', text: es ? 'De 6:00 p. m. a 6:00 a. m., conductor y acompañante deben llevar chaleco o distintivo reflectivo.' : 'From 6:00 p.m. to 6:00 a.m., rider and passenger must wear a reflective vest or marking.' })}
        ${note(lang, { kind: 'law', fact: 'hn-moto-menores', text: es ? 'La autoridad de tránsito ha restringido por directriz llevar a menores de 12 años en moto. No es un artículo de la ley y su vigencia está por confirmar; la recomendación de seguridad es clara de todos modos: un niño debe alcanzar los posapiés, sujetarse por sí mismo y llevar un casco de su talla.' : 'The traffic authority has restricted carrying children under 12 on motorcycles by directive. It is not an article of the law and its current status is unconfirmed; the safety advice is clear regardless: a child must reach the footpegs, hold on unaided and wear a helmet that fits.' })}
      </div>
    </div>
  </div>
</section>

<section class="section theme-sand" aria-labelledby="pre-h" id="lista-previa">
  <div class="wrap split">
    <div class="col-5">
      ${marker(2, es ? 'Antes de arrancar' : 'Before you ride')}
      <h2 id="pre-h" class="display display--xl">${es ? 'Lista antes de arrancar' : 'Pre-ride checklist'}</h2>
      <p class="lede">${es ? 'Diez puntos, menos de un minuto. Hazlo un hábito, como ponerte el casco.' : 'Ten points, less than a minute. Make it a habit, like putting on your helmet.'}</p>
      <p class="small muted">${es ? 'Las marcas se quedan solo en tu pantalla y se borran al salir. No guardamos nada.' : 'Ticks stay on your screen only and clear when you leave. We save nothing.'}</p>
    </div>
    <div class="col-7">${checklist(lang, 'moto-preride', es ? 'Lista antes de arrancar' : 'Pre-ride checklist', preRide[lang])}</div>
  </div>
</section>

<section class="section theme-white" aria-labelledby="load-h">
  <div class="wrap">
    ${marker(3, es ? 'Pasajeros y carga' : 'Passengers and load')}
    <div class="split">
      <div class="col-5">
        <h2 id="load-h">${es ? 'Por qué un tercer pasajero cambia todo' : 'Why a third passenger changes everything'}</h2>
        <p>${es
          ? 'Sabemos por qué pasa: hay que llevar a los niños a la escuela y hay una sola moto. Pero una moto está diseñada para un número de personas, y cada persona extra cambia cómo se comporta. No hay forma segura de llevar tres o más.'
          : 'We know why it happens: the children need to get to school and there is one motorcycle. But a motorcycle is designed for a set number of people, and every extra person changes how it behaves. There is no safe way to carry three or more.'}</p>
        <p><strong>${es ? 'Alternativas reales:' : 'Real alternatives:'}</strong> ${es ? 'hacer dos viajes, compartir el recorrido con un vecino, combinar con bus o taxi, o turnarse con otra familia. Cuesta más tiempo; vale la pena.' : 'make two trips, share the run with a neighbour, combine with a bus or taxi, or take turns with another family. It takes more time; it is worth it.'}</p>
      </div>
      <div class="col-7">${diagram('passenger-load', lang)}</div>
    </div>
    <ol class="actions">
      ${effects.map(([h, p], i) => `<li><span class="num">${String(i + 1).padStart(2, '0')}</span><h3>${esc(h)}</h3><p>${esc(p)}</p></li>`)}
    </ol>
  </div>
</section>

<section class="section theme-forest" aria-labelledby="lessons-h">
  <div class="wrap split">
    <div class="col-5">
      ${marker(4, es ? 'Lecciones' : 'Lessons')}
      <h2 id="lessons-h" class="display display--xl">${es ? 'El curso de la moto' : 'The motorcycle course'}</h2>
      <p class="muted">${es ? 'Empieza por el casco. Sigue en orden o elige lo que necesites.' : 'Start with the helmet. Go in order or pick what you need.'}</p>
    </div>
    <div class="col-7">
      <ul class="link-list">
        ${[...motoLessons, ...more].map((l, i) => `<li><a href="${lessonUrl(lang, l)}"><span><span class="link-list__title">${String(i + 1).padStart(2, '0')} · ${esc(l[lang].title)}</span><span class="link-list__meta">${l.minutes} ${esc(s.readMinutes)}</span></span>${icon('arrow')}</a></li>`)}
      </ul>
    </div>
  </div>
</section>

<section class="section theme-white" aria-labelledby="map-h">
  <div class="wrap">
    ${marker(5, es ? 'Temario completo' : 'Full syllabus')}
    <h2 id="map-h">${es ? 'Todo lo que cubre el programa' : 'Everything the programme covers'}</h2>
    <div class="table-wrap mt-2" tabindex="0" role="region" aria-label="${es ? 'Tabla' : 'Table'}">
      <table>
        <caption class="visually-hidden">${es ? 'Temas del programa y la lección que los enseña' : 'Programme topics and the lesson that teaches each one'}</caption>
        <thead><tr><th scope="col">${es ? 'Tema' : 'Topic'}</th><th scope="col">${es ? 'Dónde aprenderlo' : 'Where to learn it'}</th></tr></thead>
        <tbody>${topics.map(([tp, id]) => `<tr><td>${esc(tp)}</td><td><a href="${lessonUrl(lang, L(id))}">${esc(L(id)[lang].title)}</a></td></tr>`)}</tbody>
      </table>
    </div>
    <div class="btn-row">${button(href(lang, 'scenarios'), es ? 'Practica con escenarios' : 'Practise with scenarios', 'solid')}${button(href(lang, 'campaigns'), es ? 'Comparte la campaña del casco' : 'Share the helmet campaign', 'ghost')}</div>
  </div>
</section>`;

  return {
    title: es ? 'Seguridad en motocicleta: casco, pasajeros y manejo' : 'Motorcycle safety: helmets, passengers and riding',
    description: es
      ? 'Programa de seguridad para motociclistas en Honduras: uso y ajuste del casco, pasajeros, equilibrio, frenado, visibilidad nocturna y lista interactiva antes de arrancar.'
      : 'Motorcycle safety programme for Honduras: helmet use and fit, passengers, balance, braking, night visibility and an interactive pre-ride checklist.',
    body
  };
}
