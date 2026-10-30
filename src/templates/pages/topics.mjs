import { t } from '../../site.mjs';
import { esc, rich, html, href, icon, marker, button } from '../lib.mjs';
import { pageHero, note, checklist } from '../components.mjs';
import { diagram } from '../diagrams.mjs';
import { lessonUrl } from './lessons.mjs';

const lessonList = (lang, lessons, ids) => {
  const s = t[lang];
  return `<ul class="link-list">${ids.map((id) => lessons.find((l) => l.id === id)).filter(Boolean).map((l) => `<li><a href="${lessonUrl(lang, l)}"><span><span class="link-list__title">${esc(l[lang].title)}</span><span class="link-list__meta">${l.minutes} ${esc(s.readMinutes)}</span></span>${icon('arrow')}</a></li>`).join('')}</ul>`;
};

export function defensivePage(lang, lessons) {
  const es = lang === 'es';
  const L = (id) => lessons.find((l) => l.id === id);
  const topics = es ? [
    ['Atención a la situación', 'Mira lejos, no solo al vehículo de adelante. Revisa espejos cada pocos segundos. Sin teléfono.', 'blind-spots'],
    ['Identificar peligros', 'Busca lo que puede cambiar: un niño cerca de la vía, una puerta que se abre, un carro que espera para salir.', 'watch-for-motorcycles'],
    ['Distancias seguras', 'Tres segundos o más detrás del vehículo de adelante; más con lluvia o de noche.', 'following-distance'],
    ['Ajustar la velocidad', 'El límite es un máximo. La velocidad correcta depende de la visibilidad, la vía y la gente.', 'stopping-distance'],
    ['Ángulos muertos', 'Gira la cabeza antes de cambiar de carril. No te quedes en el ángulo muerto de otros.', 'blind-spots'],
    ['Intersecciones', 'Cubre el freno, mira izquierda-derecha-izquierda y no asumas que te vieron.', 'intersections-turning'],
    ['Usuarios inesperados', 'Peatones sin acera, ciclistas, animales, vehículos detenidos tras una curva.', 'pedestrian-safety'],
    ['Atención a las motos', 'Son pequeñas y su velocidad engaña. Mira dos veces.', 'watch-for-motorcycles'],
    ['Peatones', 'Reduce cerca de escuelas, paradas y centros de comunidad.', 'pedestrian-safety'],
    ['Lluvia y poca visibilidad', 'Más despacio, más distancia, maniobras suaves.', 'rain-riding'],
    ['De noche', 'Ve a una velocidad que te permita detenerte dentro de lo que alumbran tus luces.', 'night-visibility'],
    ['Evitar la agresividad', 'No respondas. Deja pasar. Llegar tarde es mejor que no llegar.', 'calm-driving'],
    ['Frenado de emergencia', 'Frena con firmeza y de forma progresiva; en moto, usa ambos frenos.', 'moto-braking'],
    ['Evitar choques', 'Espacio alrededor del vehículo = tiempo para reaccionar y una salida para esquivar.', 'safe-overtaking']
  ] : [
    ['Situational awareness', 'Look far ahead, not just at the vehicle in front. Check mirrors every few seconds. No phone.', 'blind-spots'],
    ['Spotting hazards', 'Look for what can change: a child near the road, a door opening, a car waiting to pull out.', 'watch-for-motorcycles'],
    ['Safe distances', 'Three seconds or more behind the vehicle ahead; more in rain or at night.', 'following-distance'],
    ['Adjusting speed', 'The limit is a maximum. The right speed depends on visibility, the road and the people on it.', 'stopping-distance'],
    ['Blind spots', 'Turn your head before changing lane. Do not sit in other drivers’ blind spots.', 'blind-spots'],
    ['Junctions', 'Cover the brake, look left-right-left and never assume you have been seen.', 'intersections-turning'],
    ['Unexpected road users', 'Pedestrians without a pavement, cyclists, animals, vehicles stopped beyond a bend.', 'pedestrian-safety'],
    ['Motorcycle awareness', 'They are small and their speed is deceptive. Look twice.', 'watch-for-motorcycles'],
    ['Pedestrians', 'Slow down near schools, bus stops and community centres.', 'pedestrian-safety'],
    ['Rain and low visibility', 'Slower, more distance, smooth inputs.', 'rain-riding'],
    ['At night', 'Drive at a speed that lets you stop within the distance your lights show.', 'night-visibility'],
    ['Avoiding road rage', 'Do not respond. Let them go. Arriving late beats never arriving.', 'calm-driving'],
    ['Emergency braking', 'Brake firmly and progressively; on a motorcycle, use both brakes.', 'moto-braking'],
    ['Collision avoidance', 'Space around your vehicle = time to react and a way out.', 'safe-overtaking']
  ];
  const body = html`
${pageHero(lang, {
    eyebrow: es ? 'Manejo defensivo' : 'Defensive driving',
    title: es ? 'Anticipa el error. Aunque no sea tuyo.' : 'Anticipate the mistake. Even when it is not yours.',
    lede: es
      ? 'Manejar a la defensiva es ver venir el peligro con tiempo: dejar espacio, leer la vía y tener siempre una salida.'
      : 'Defensive driving means seeing danger coming in good time: leaving space, reading the road and always having a way out.'
  })}
<section class="section theme-white">
  <div class="wrap split">
    <div class="col-6">
      ${marker(1, es ? 'La idea central' : 'The core idea')}
      <p class="pull">${es ? 'Puedes cumplir todas las normas y aun así verte en un choque por la decisión peligrosa de otra persona.' : 'You can follow every rule and still be in a crash because of someone else’s dangerous decision.'}</p>
    </div>
    <div class="col-5 col-end">
      <p>${es
        ? 'Eso no te hace responsable de lo que hacen los demás: quien rebasa en curva o se pasa un alto es responsable de su decisión. Pero en la vía, tener la razón no te protege. Lo que te protege es el espacio y el tiempo que te das para reaccionar.'
        : 'That does not make you responsible for what others do: whoever overtakes on a bend or runs a stop sign is responsible for that decision. But on the road, being right does not protect you. What protects you is the space and time you give yourself to react.'}</p>
      <p>${es ? 'Tres hábitos lo resumen:' : 'Three habits sum it up:'}</p>
      <ol>
        <li><strong>${es ? 'Mira lejos y alrededor.' : 'Look far ahead and around.'}</strong></li>
        <li><strong>${es ? 'Deja espacio adelante y a los lados.' : 'Leave space ahead and to the sides.'}</strong></li>
        <li><strong>${es ? 'No asumas: comprueba.' : 'Do not assume: check.'}</strong></li>
      </ol>
    </div>
  </div>
</section>
<section class="section theme-sand">
  <div class="wrap">
    ${marker(2, es ? 'Los 14 temas' : 'The 14 topics')}
    <h2>${es ? 'Todo lo que cubre el manejo defensivo' : 'Everything defensive driving covers'}</h2>
    <ol class="actions">
      ${topics.map(([h, p, id], i) => `<li><span class="num">${String(i + 1).padStart(2, '0')}</span><h3>${esc(h)}</h3><p>${esc(p)} <a href="${lessonUrl(lang, L(id))}">${es ? 'Lección' : 'Lesson'}</a></p></li>`)}
    </ol>
  </div>
</section>
<section class="section theme-white">
  <div class="wrap split">
    <div class="col-6">${diagram('following-distance', lang)}</div>
    <div class="col-6">${diagram('stopping-distance', lang)}</div>
  </div>
</section>
<section class="section theme-forest">
  <div class="wrap split">
    <div class="col-5">${marker(3, es ? 'Lecciones' : 'Lessons')}<h2 class="display display--xl">${es ? 'Aprende a anticipar' : 'Learn to anticipate'}</h2></div>
    <div class="col-7">${lessonList(lang, lessons, ['blind-spots', 'watch-for-motorcycles', 'following-distance', 'stopping-distance', 'intersections-turning', 'safe-overtaking', 'rain-riding', 'night-visibility', 'calm-driving'])}</div>
  </div>
</section>`;
  return {
    title: es ? 'Manejo defensivo: anticipa y evita el peligro' : 'Defensive driving: anticipate and avoid danger',
    description: es
      ? 'Aprende manejo defensivo: distancias seguras, ángulos muertos, intersecciones, atención a motos y peatones, lluvia, noche y cómo evitar la agresividad en la vía.'
      : 'Learn defensive driving: safe distances, blind spots, junctions, motorcycle and pedestrian awareness, rain, night and how to avoid road rage.',
    body
  };
}

export function newDriversPage(lang, lessons) {
  const es = lang === 'es';
  const steps = es ? [
    ['Aprende antes de manejar', 'Estudia las normas y el material oficial de educación vial. Ninguna práctica en la vía pública sin preparación.'],
    ['Obtén tu licencia', 'Para conducir necesitas una licencia vigente de la categoría de tu vehículo. El trámite lo hace la DNVT.'],
    ['Practica acompañado', 'Con una persona con experiencia, en lugares tranquilos y de día. Luego, poco a poco, más tráfico, lluvia y noche.'],
    ['Sin pasajeros al principio', 'Los amigos en el carro o en la moto distraen y empujan a arriesgar. Gánate la experiencia primero.'],
    ['Cero teléfono, cero alcohol', 'Las dos distracciones que más fácilmente convierten un error pequeño en un choque.'],
    ['Pide que te corrijan', 'Manejar bien es un hábito que se construye. Escucha a quien te acompaña.']
  ] : [
    ['Learn before you drive', 'Study the rules and the official road-education material. No practice on public roads without preparation.'],
    ['Get your licence', 'You need a valid licence for your vehicle category. The DNVT handles the process.'],
    ['Practise with someone experienced', 'Somewhere quiet, in daylight. Then, step by step, more traffic, rain and night.'],
    ['No passengers at first', 'Friends in the car or on the motorcycle distract you and push you to take risks. Build experience first.'],
    ['Zero phone, zero alcohol', 'The two distractions that most easily turn a small mistake into a crash.'],
    ['Ask to be corrected', 'Good driving is a habit you build. Listen to whoever is supervising you.']
  ];
  const body = html`
${pageHero(lang, {
    eyebrow: es ? 'Conductores nuevos y jóvenes' : 'New and young drivers',
    title: es ? 'Tu primer año en la vía' : 'Your first year on the road',
    lede: es
      ? 'Los primeros meses son los de más riesgo para cualquier conductor: falta experiencia y sobra confianza. Así se empieza bien.'
      : 'The first months are the riskiest for any driver: experience is short and confidence is high. Here is how to start well.'
  })}
<section class="section theme-white">
  <div class="wrap">
    ${marker(1, es ? 'Seis pasos' : 'Six steps')}
    <h2>${es ? 'Cómo empezar bien' : 'How to start well'}</h2>
    <ol class="actions">${steps.map(([h, p], i) => `<li><span class="num">${String(i + 1).padStart(2, '0')}</span><h3>${esc(h)}</h3><p>${esc(p)}</p></li>`)}</ol>
    <div class="notes mt-3 measure">
      ${note(lang, { kind: 'law', fact: 'hn-licencia', text: es ? 'Para conducir se requiere una licencia vigente de la categoría que corresponde al vehículo, emitida por la DNVT.' : 'Driving requires a valid licence for the vehicle’s category, issued by the DNVT.' })}
      ${note(lang, { kind: 'practical', text: es ? 'Prestar la moto o el carro a un menor sin licencia ni formación lo pone en peligro a él y a todos en la vía. Si eres madre, padre o tutor, tu decisión cuenta.' : 'Lending a motorcycle or car to a minor with no licence or training puts them and everyone on the road in danger. If you are a parent or guardian, your decision counts.' })}
    </div>
  </div>
</section>
<section class="section theme-sand">
  <div class="wrap split">
    <div class="col-5">${marker(2, es ? 'Para madres, padres y tutores' : 'For parents and guardians')}<h2>${es ? 'Acompañar también es enseñar' : 'Supervising is teaching too'}</h2><p>${es ? 'Los jóvenes copian lo que ven. Si te ven con casco, con cinturón y sin teléfono, aprenden eso.' : 'Young people copy what they see. If they see you with a helmet, a seatbelt and no phone, that is what they learn.'}</p></div>
    <div class="col-7">${lessonList(lang, lessons, ['new-drivers', 'helmet-why', 'following-distance', 'safe-overtaking', 'impaired-driving', 'calm-driving'])}</div>
  </div>
</section>
<section class="section theme-forest">
  <div class="wrap split split--center">
    <div class="col-7"><h2 class="display display--xl">${es ? 'Prepárate para el examen con material oficial' : 'Prepare for the test with official material'}</h2><p class="muted">${es ? 'Este sitio es educativo y no sustituye la formación oficial.' : 'This site is educational and does not replace official training.'}</p></div>
    <div class="col-5"><div class="btn-row">${button(href(lang, 'law') + '#licencias', es ? 'Licencias y recursos oficiales' : 'Licences and official resources', 'primary')}</div></div>
  </div>
</section>`;
  return {
    title: es ? 'Conductores nuevos y jóvenes' : 'New and young drivers',
    description: es ? 'Guía para conductores nuevos y jóvenes en Honduras: formación, licencia, práctica acompañada, sin teléfono ni alcohol, y el papel de las familias.' : 'Guide for new and young drivers in Honduras: training, licensing, supervised practice, no phone or alcohol, and the role of families.',
    body
  };
}

export function familiesPage(lang, lessons) {
  const es = lang === 'es';
  const items = es
    ? ['Cada persona en el carro lleva cinturón, en cada viaje, también atrás.', 'Los niños viajan atrás, en una silla o asiento adecuado a su tamaño.', 'Nunca un niño en brazos, ni en el carro ni en la moto.', 'En moto: máximo dos personas, ambas con casco abrochado.', 'Nadie viaja en la palangana del pick-up.', 'Si vas a beber, alguien sobrio maneja.']
    : ['Everyone in the car wears a seatbelt, every trip, in the back too.', 'Children ride in the back, in a seat suited to their size.', 'Never a child on someone’s lap, in a car or on a motorcycle.', 'On a motorcycle: two people maximum, both with helmets fastened.', 'Nobody rides in the bed of a pickup.', 'If you are drinking, someone sober drives.'];
  const body = html`
${pageHero(lang, {
    eyebrow: es ? 'Familias y pasajeros' : 'Families and passengers',
    title: es ? '<span class="line">Tu familia te espera.</span><span class="line accent">Conduce como si lo recordaras.</span>' : '<span class="line">Your family is waiting.</span><span class="line accent">Drive like it.</span>',
    display: true,
    lede: es ? 'Quien maneja lleva en sus manos a todos los que viajan con él. Lo esencial para proteger a niños, mayores y pasajeros.' : 'Whoever drives holds everyone travelling with them in their hands. The essentials for protecting children, older people and passengers.'
  })}
<section class="section theme-white">
  <div class="wrap split">
    <div class="col-6">
      ${marker(1, es ? 'Reglas de casa' : 'House rules')}
      <h2>${es ? 'Seis reglas para cada viaje' : 'Six rules for every trip'}</h2>
      ${checklist(lang, 'family-rules', es ? 'Antes de salir en familia' : 'Before a family trip', items)}
    </div>
    <div class="col-5 col-end">
      <div class="notes">
        ${note(lang, { kind: 'law', fact: 'hn-cinturon', text: es ? 'No usar el cinturón, tanto el conductor como sus acompañantes, es una infracción según la Ley de Tránsito.' : 'Not wearing a seatbelt, for the driver and passengers alike, is an infraction under the Traffic Law.' })}
        ${note(lang, { kind: 'expert', text: es ? 'Los organismos de seguridad vial recomiendan sillas de retención adecuadas a la edad y al tamaño del niño, en el asiento trasero. No hemos podido confirmar una norma hondureña específica sobre sillas infantiles: lo publicamos como recomendación, no como ley.' : 'Road-safety bodies recommend child restraints suited to the child’s age and size, in the back seat. We have not been able to confirm a specific Honduran rule on child seats: we publish it as a recommendation, not as law.' })}
        ${note(lang, { kind: 'law', fact: 'hn-moto-dos-personas', text: es ? 'Llevar más de dos personas en una motocicleta es una infracción.' : 'Carrying more than two people on a motorcycle is an infraction.' })}
      </div>
    </div>
  </div>
</section>
<section class="section theme-sand">
  <div class="wrap split">
    <div class="col-5">${marker(2, es ? 'Lecciones' : 'Lessons')}<h2>${es ? 'Para toda la familia' : 'For the whole family'}</h2></div>
    <div class="col-7">${lessonList(lang, lessons, ['seatbelts-children', 'moto-passengers', 'pedestrian-safety', 'helmet-fit', 'impaired-driving', 'road-emergency'])}</div>
  </div>
</section>
<section class="section theme-white">
  <div class="wrap split">
    <div class="col-6">${diagram('passenger-load', lang)}</div>
    <div class="col-6">${diagram('crosswalk', lang)}</div>
  </div>
</section>`;
  return {
    title: es ? 'Seguridad para familias y pasajeros' : 'Safety for families and passengers',
    description: es ? 'Cinturón en cada asiento, niños bien sujetos, pasajeros de moto con casco y nunca más de dos: guía práctica de seguridad vial para familias.' : 'A seatbelt in every seat, children properly restrained, motorcycle passengers with helmets and never more than two: a practical road-safety guide for families.',
    body
  };
}
