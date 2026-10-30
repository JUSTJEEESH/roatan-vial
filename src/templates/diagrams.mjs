// Original educational diagrams, drawn as inline SVG so labels are localized,
// selectable and readable by screen readers. Each diagram keeps on-image labels
// short (numbers, a few words) and puts the explanation in an HTML legend, so
// it stays legible on a phone.

import { esc } from './lib.mjs';

const C = {
  forest: '#123D38', deep: '#0C2B27', charcoal: '#202A28', white: '#FAFAF7', sand: '#F3EBDD',
  sandDeep: '#E8DCC6', teal: '#197D78', lime: '#D7E65A', gray: '#69736F', coral: '#E77C66', coralDark: '#B4462F',
  asphalt: '#2E3836', green: '#9DB89A', greenDark: '#7FA07C'
};

const T = (x, y, s, { size = 22, weight = 700, fill = C.charcoal, anchor = 'start', display = false } = {}) =>
  `<text x="${x}" y="${y}" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}" font-family="${display ? "Archivo, Arial, sans-serif" : "'Atkinson Hyperlegible Next', Arial, sans-serif"}"${display ? ' font-stretch="112%"' : ''}>${esc(s)}</text>`;

// Numbered badge used to key the HTML legend.
const N = (x, y, n, fill = C.lime, color = C.forest) =>
  `<g><circle cx="${x}" cy="${y}" r="17" fill="${fill}" stroke="${C.forest}" stroke-width="2"/>${T(x, y + 7, n, { size: 19, weight: 800, fill: color, anchor: 'middle', display: true })}</g>`;

// Top-down vehicles
const car = (x, y, rot = 0, fill = C.teal, len = 70, wid = 36) =>
  `<g transform="translate(${x} ${y}) rotate(${rot})"><rect x="${-len / 2}" y="${-wid / 2}" width="${len}" height="${wid}" rx="9" fill="${fill}"/><rect x="${len / 2 - 26}" y="${-wid / 2 + 5}" width="14" height="${wid - 10}" rx="3" fill="${C.white}" opacity=".55"/><rect x="${-len / 2 + 8}" y="${-wid / 2 + 6}" width="10" height="${wid - 12}" rx="3" fill="${C.white}" opacity=".35"/></g>`;
const truck = (x, y, rot = 0, fill = C.forest) =>
  `<g transform="translate(${x} ${y}) rotate(${rot})"><rect x="-75" y="-24" width="118" height="48" rx="4" fill="${fill}"/><rect x="47" y="-22" width="30" height="44" rx="6" fill="${fill}"/><rect x="62" y="-17" width="10" height="34" rx="2" fill="${C.white}" opacity=".5"/></g>`;
const moto = (x, y, rot = 0, fill = C.coralDark) =>
  `<g transform="translate(${x} ${y}) rotate(${rot})"><rect x="-22" y="-7" width="44" height="14" rx="7" fill="${fill}"/><circle cx="2" cy="0" r="8" fill="${C.charcoal}"/><circle cx="2" cy="0" r="4.5" fill="${C.lime}"/></g>`;
const person = (x, y, fill = C.charcoal) =>
  `<g transform="translate(${x} ${y})"><circle cx="0" cy="0" r="10" fill="${fill}"/><circle cx="0" cy="0" r="4.5" fill="${C.white}" opacity=".5"/></g>`;

// Side-view motorcycle with riders. riders: array of {helmet:boolean}
function sideMoto(x, y, riders = [{ helmet: true }], { scale = 1, tilt = 0 } = {}) {
  const r = riders.map((p, i) => {
    const px = 10 - i * 30;
    const head = p.helmet
      ? `<path d="M${px - 13} ${-112} a14 14 0 0 1 28 0 v8 h-28z" fill="${i === 0 ? C.forest : C.teal}"/><rect x="${px + 2}" y="-112" width="13" height="7" rx="2" fill="${C.lime}"/>`
      : `<circle cx="${px}" cy="-110" r="11" fill="${C.coral}" stroke="${C.coralDark}" stroke-width="2.5" stroke-dasharray="4 3"/>`;
    return `<g>${head}<path d="M${px} -98 L${px - 4} -62" stroke="${C.charcoal}" stroke-width="12" stroke-linecap="round"/><path d="M${px - 4} -62 L${px + 12} -40 L${px + 8} -22" stroke="${C.charcoal}" stroke-width="9" stroke-linecap="round" fill="none"/><path d="M${px} -88 L${px + 30} -74" stroke="${C.charcoal}" stroke-width="7" stroke-linecap="round"/></g>`;
  }).join('');
  return `<g transform="translate(${x} ${y}) scale(${scale}) rotate(${tilt})">
    <circle cx="-48" cy="0" r="24" fill="none" stroke="${C.charcoal}" stroke-width="8"/>
    <circle cx="58" cy="0" r="24" fill="none" stroke="${C.charcoal}" stroke-width="8"/>
    <path d="M-48 0 L-10 -30 L36 -30 L58 0" stroke="${C.charcoal}" stroke-width="7" fill="none" stroke-linejoin="round"/>
    <path d="M-30 -36 L28 -36 L36 -46" stroke="${C.forest}" stroke-width="12" stroke-linecap="round" fill="none"/>
    <path d="M44 -36 L50 -62" stroke="${C.charcoal}" stroke-width="6" stroke-linecap="round"/>
    ${r}
  </g>`;
}

const frame = (w, h, inner, id, title, desc, bg = C.sand) =>
  `<svg viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="${id}-t ${id}-d" xmlns="http://www.w3.org/2000/svg"><title id="${id}-t">${esc(title)}</title><desc id="${id}-d">${esc(desc)}</desc><rect width="${w}" height="${h}" fill="${bg}"/>${inner}</svg>`;

const roadH = (y, h, w = 640) => `<rect x="0" y="${y}" width="${w}" height="${h}" fill="${C.asphalt}"/>`;
const dashH = (y, x1 = 0, x2 = 640, color = C.white) => `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${color}" stroke-width="4" stroke-dasharray="26 22"/>`;
const solidH = (y, x1 = 0, x2 = 640, color = C.white, sw = 4) => `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${color}" stroke-width="${sw}"/>`;

const D = {};

D['helmet-fit'] = (lang) => {
  const es = lang === 'es';
  const inner = `
    <path d="M250 330 C 230 260 240 170 300 130 C 360 92 450 100 490 150 C 520 190 525 245 515 300 L 470 300 C 470 300 460 250 420 246 L 330 250 C 300 252 296 300 300 330 Z" fill="${C.forest}"/>
    <path d="M330 252 L420 246 C452 246 468 280 470 300 L480 300 L 478 228 C 470 210 430 200 400 204 L 330 210 Z" fill="${C.charcoal}" opacity=".9"/>
    <path d="M336 214 L 470 222" stroke="${C.lime}" stroke-width="6"/>
    <path d="M300 160 C 340 130 420 122 470 156" stroke="${C.white}" stroke-width="3" fill="none" opacity=".35"/>
    <path d="M330 300 C 345 352 395 362 430 330" stroke="${C.teal}" stroke-width="7" fill="none" stroke-linecap="round"/>
    <circle cx="402" cy="349" r="9" fill="${C.lime}"/>
    <rect x="262" y="250" width="34" height="22" rx="3" fill="${C.white}"/>
    <text x="279" y="266" font-size="12" font-weight="800" text-anchor="middle" fill="${C.forest}" font-family="Archivo, Arial">OK</text>
    ${N(300, 110, 1)}${N(525, 205, 2)}${N(470, 362, 3)}${N(236, 262, 4)}${N(540, 290, 5)}
    ${T(30, 40, es ? 'Un casco bien puesto' : 'A helmet worn correctly', { size: 26, weight: 800, display: true, fill: C.forest })}`;
  return {
    svg: frame(640, 400, inner, 'dg-helmet-fit', es ? 'Cómo debe quedar un casco' : 'How a helmet should fit',
      es ? 'Casco visto de lado con cinco puntos de ajuste numerados.' : 'Side view of a helmet with five numbered fit points.'),
    legend: es ? [
      'Ajuste firme: cubre la frente y no se mueve al sacudir la cabeza.',
      'Visera o gafas: protegen los ojos del viento, la lluvia, insectos y piedras.',
      'Correa siempre abrochada: entre la correa y la barbilla caben uno o dos dedos, no más.',
      'Etiqueta de certificación de seguridad reconocida.',
      'Casco en buen estado: sin golpes previos, grietas ni relleno aplastado.'
    ] : [
      'Snug fit: covers the forehead and does not move when you shake your head.',
      'Visor or goggles: protect your eyes from wind, rain, insects and stones.',
      'Chin strap always fastened: one or two fingers fit between strap and chin, no more.',
      'A recognised safety-certification label.',
      'Helmet in good condition: no previous impacts, cracks or crushed padding.'
    ]
  };
};

D['helmet-carried'] = (lang) => {
  const es = lang === 'es';
  const inner = `
    <rect x="0" y="330" width="640" height="70" fill="${C.sandDeep}"/>
    <line x1="320" y1="60" x2="320" y2="380" stroke="${C.gray}" stroke-width="2" stroke-dasharray="6 6"/>
    ${sideMoto(160, 330, [{ helmet: false }])}
    <g transform="translate(205 254)"><path d="M-14 6 a16 16 0 0 1 32 0 v8 h-32z" fill="${C.forest}"/><path d="M-10 14 C -6 24 8 24 12 14" stroke="${C.teal}" stroke-width="3" fill="none"/></g>
    ${sideMoto(480, 330, [{ helmet: true }])}
    <path d="M485 230 C 492 244 506 244 512 232" stroke="${C.teal}" stroke-width="4" fill="none"/>
    ${T(160, 50, es ? 'LLEVADO' : 'CARRIED', { size: 28, weight: 800, anchor: 'middle', display: true, fill: C.coralDark })}
    ${T(160, 78, es ? 'No protege' : 'No protection', { size: 20, anchor: 'middle', fill: C.charcoal, weight: 600 })}
    ${T(480, 50, es ? 'USADO' : 'WORN', { size: 28, weight: 800, anchor: 'middle', display: true, fill: C.teal })}
    ${T(480, 78, es ? 'Protege' : 'Protects', { size: 20, anchor: 'middle', fill: C.charcoal, weight: 600 })}
    ${N(196, 205, 1, C.coral, C.charcoal)}${N(236, 262, 2, C.coral, C.charcoal)}${N(530, 205, 3)}`;
  return {
    svg: frame(640, 400, inner, 'dg-helmet-carried', es ? 'Casco llevado frente a casco usado' : 'A carried helmet versus a worn helmet',
      es ? 'Dos motociclistas: uno lleva el casco colgado del brazo con la cabeza descubierta; el otro lo lleva puesto y abrochado.' : 'Two riders: one carries the helmet on the arm with the head uncovered; the other wears it fastened.'),
    legend: es ? [
      'La cabeza queda expuesta. En una caída, el casco del brazo no la protege.',
      'Un casco colgado del brazo estorba el manejo y puede lesionar el brazo o la muñeca.',
      'Puesto y con la correa abrochada, el casco absorbe la energía del golpe.'
    ] : [
      'The head is exposed. In a fall, a helmet on the arm does not protect it.',
      'A helmet hanging from the arm gets in the way of control and can injure the arm or wrist.',
      'Worn with the strap fastened, the helmet absorbs the energy of an impact.'
    ]
  };
};

D['passenger-load'] = (lang) => {
  const es = lang === 'es';
  const col = (x, riders, label, ok, bar) => `
    ${sideMoto(x, 250, riders, { scale: .78 })}
    <circle cx="${x - (riders.length - 1) * 11}" cy="${206 - (riders.length - 1) * 6}" r="9" fill="${C.white}" stroke="${C.charcoal}" stroke-width="3"/>
    <line x1="${x - (riders.length - 1) * 11 - 6}" y1="${206 - (riders.length - 1) * 6}" x2="${x - (riders.length - 1) * 11 + 6}" y2="${206 - (riders.length - 1) * 6}" stroke="${C.charcoal}" stroke-width="2"/>
    ${T(x, 46, label, { size: 22, weight: 800, anchor: 'middle', display: true, fill: ok ? C.forest : C.coralDark })}
    <rect x="${x - 90}" y="300" width="${bar}" height="16" rx="3" fill="${ok ? C.teal : C.coralDark}"/>
    <rect x="${x - 90}" y="300" width="180" height="16" rx="3" fill="none" stroke="${C.charcoal}" stroke-opacity=".25"/>`;
  const inner = `
    <rect x="0" y="270" width="640" height="10" fill="${C.sandDeep}"/>
    ${col(110, [{ helmet: true }], es ? '1 persona' : '1 person', true, 70)}
    ${col(320, [{ helmet: true }, { helmet: true }], es ? '2 personas' : '2 people', true, 105)}
    ${col(530, [{ helmet: true }, { helmet: false }, { helmet: false }], es ? '3 o más' : '3 or more', false, 175)}
    ${T(20, 350, es ? 'Distancia para frenar (comparación cualitativa)' : 'Distance needed to stop (qualitative comparison)', { size: 17, weight: 600, fill: C.charcoal })}
    ${N(568, 120, 1, C.coral, C.charcoal)}${N(430, 190, 2)}${N(612, 308, 3, C.coral, C.charcoal)}
    ${T(530, 76, es ? 'Infracción' : 'Infraction', { size: 18, anchor: 'middle', fill: C.coralDark, weight: 700 })}`;
  return {
    svg: frame(640, 380, inner, 'dg-passenger-load', es ? 'Cómo cambia la moto con cada pasajero' : 'How each passenger changes the motorcycle',
      es ? 'Tres motocicletas: con una persona, con dos personas y con tres o más. El centro de gravedad sube y se desplaza hacia atrás, y la distancia de frenado crece.' : 'Three motorcycles: with one person, two people and three or more. The centre of gravity rises and moves back, and stopping distance grows.'),
    legend: es ? [
      'Con tres o más personas no hay casco ni espacio seguro para todos: es una infracción y no hay forma segura de hacerlo.',
      'El círculo marca el centro de gravedad: con más peso sube y se va hacia atrás, la rueda delantera pierde carga y la dirección se vuelve ligera.',
      'Más peso significa más distancia para detenerse y menos margen para esquivar.'
    ] : [
      'With three or more people there is no helmet or safe space for everyone: it is an infraction and there is no safe way to do it.',
      'The circle marks the centre of gravity: with more weight it rises and moves back, the front wheel loses load and steering goes light.',
      'More weight means more distance to stop and less margin to swerve.'
    ]
  };
};

D['stopping-distance'] = (lang) => {
  const es = lang === 'es';
  const rows = [[30, 12.5, 5.0], [50, 20.8, 13.8], [60, 25.0, 19.8], [80, 33.3, 35.3]];
  const sc = 6.4; // px per metre
  const x0 = 110;
  const bars = rows.map(([v, r, b], i) => {
    const y = 90 + i * 64;
    return `${T(x0 - 16, y + 25, `${v} km/h`, { size: 21, weight: 800, anchor: 'end', display: true, fill: C.forest })}
      <rect x="${x0}" y="${y}" width="${r * sc}" height="36" fill="${C.teal}"/>
      <rect x="${x0 + r * sc}" y="${y}" width="${b * sc}" height="36" fill="${C.coral}"/>
      ${T(x0 + (r + b) * sc + 10, y + 26, `≈ ${Math.round(r + b)} m`, { size: 21, weight: 800, fill: C.charcoal, display: true })}`;
  }).join('');
  const inner = `
    ${T(24, 40, es ? 'Distancia total para detenerse' : 'Total distance to stop', { size: 24, weight: 800, display: true, fill: C.forest })}
    <rect x="24" y="352" width="18" height="18" fill="${C.teal}"/>${T(50, 367, es ? 'Reacción (1,5 s)' : 'Reaction (1.5 s)', { size: 17, weight: 600 })}
    <rect x="250" y="352" width="18" height="18" fill="${C.coral}"/>${T(276, 367, es ? 'Frenado (asfalto seco)' : 'Braking (dry asphalt)', { size: 17, weight: 600 })}
    ${bars}`;
  return {
    svg: frame(640, 390, inner, 'dg-stopping-distance', es ? 'Velocidad y distancia de detención' : 'Speed and stopping distance',
      es ? 'Barras que comparan la distancia aproximada para detenerse a 30, 50, 60 y 80 km/h: unos 17, 35, 45 y 69 metros.' : 'Bars comparing approximate distance to stop at 30, 50, 60 and 80 km/h: about 17, 35, 45 and 69 metres.'),
    legend: es ? [
      'Cálculo aproximado con 1,5 segundos de reacción y una desaceleración de 7 m/s² en asfalto seco y vehículo en buen estado. Con lluvia, arena, llantas gastadas o más carga, la distancia es mayor.',
      'La distancia de reacción crece al mismo ritmo que la velocidad; la de frenado crece con el cuadrado: al doble de velocidad, unas cuatro veces más.'
    ] : [
      'Approximate calculation with 1.5 seconds of reaction time and 7 m/s² deceleration on dry asphalt with a vehicle in good condition. With rain, sand, worn tyres or more load, the distance is longer.',
      'Reaction distance grows in step with speed; braking distance grows with its square: at double the speed, roughly four times as far.'
    ],
    ordered: false
  };
};

D['following-distance'] = (lang) => {
  const es = lang === 'es';
  const inner = `
    ${roadH(150, 130)}${dashH(215)}
    <rect x="0" y="282" width="640" height="10" fill="${C.greenDark}"/>
    <g transform="translate(330 120)"><rect x="-3" y="0" width="6" height="34" fill="${C.charcoal}"/><circle cx="0" cy="-6" r="20" fill="${C.green}"/><circle cx="0" cy="-6" r="20" fill="none" stroke="${C.greenDark}" stroke-width="3"/></g>
    ${car(420, 248, 0, C.forest)}
    ${car(160, 248, 0, C.teal)}
    <line x1="196" y1="320" x2="384" y2="320" stroke="${C.forest}" stroke-width="3"/>
    <line x1="196" y1="310" x2="196" y2="330" stroke="${C.forest}" stroke-width="3"/><line x1="384" y1="310" x2="384" y2="330" stroke="${C.forest}" stroke-width="3"/>
    ${T(290, 352, es ? '3 segundos o más' : '3 seconds or more', { size: 22, weight: 800, anchor: 'middle', display: true, fill: C.forest })}
    ${N(330, 70, 1)}${N(420, 196, 2)}${N(160, 196, 3)}
    ${T(24, 40, es ? 'La regla del tiempo' : 'The time-gap rule', { size: 24, weight: 800, display: true, fill: C.forest })}`;
  return {
    svg: frame(640, 380, inner, 'dg-following-distance', es ? 'Cómo medir la distancia de seguimiento' : 'How to measure following distance',
      es ? 'Dos vehículos en la misma vía y un árbol como punto fijo. Entre ambos debe haber al menos tres segundos.' : 'Two vehicles on the same road and a tree as a fixed point. There should be at least three seconds between them.'),
    legend: es ? [
      'Elige un punto fijo: un árbol, un poste o una señal.',
      'Cuando el vehículo de adelante pasa ese punto, empieza a contar: «mil uno, mil dos, mil tres».',
      'Si llegas al punto antes de terminar de contar, vas demasiado cerca. Con lluvia, de noche o detrás de una moto, deja más tiempo.'
    ] : [
      'Pick a fixed point: a tree, a post or a sign.',
      'When the vehicle ahead passes it, start counting: “one thousand one, one thousand two, one thousand three”.',
      'If you reach the point before you finish counting, you are too close. In rain, at night or behind a motorcycle, leave more time.'
    ]
  };
};

D['blind-spots'] = (lang) => {
  const es = lang === 'es';
  const zone = (d) => `<path d="${d}" fill="${C.coral}" opacity=".38"/>`;
  const inner = `
    ${roadH(70, 270)}${dashH(160)}${dashH(250)}
    ${zone('M150 186 L60 136 L60 160 L 150 196 Z')}${zone('M150 224 L60 274 L60 250 L150 214 Z')}
    ${zone('M95 186 L 170 186 L170 160 L 95 136 Z')}${zone('M95 224 L 170 224 L170 250 L 95 274 Z')}
    ${car(200, 205, 0, C.teal)}
    ${moto(118, 250, 0)}
    ${zone('M372 98 L 520 98 L 520 132 L 372 132 Z')}${zone('M372 278 L 520 278 L 520 312 L 372 312 Z')}${zone('M300 166 L 300 244 L 360 230 L 360 180 Z')}${zone('M600 160 L 640 150 L 640 260 L 600 250 Z')}
    ${truck(480, 205, 0)}
    ${N(118, 300, 1, C.coral, C.charcoal)}${N(200, 118, 2)}${N(330, 205, 3, C.coral, C.charcoal)}${N(610, 300, 4, C.coral, C.charcoal)}
    ${T(24, 46, es ? 'Ángulos muertos' : 'Blind spots', { size: 24, weight: 800, display: true, fill: C.forest })}
    ${T(24, 372, es ? 'Zonas sombreadas: donde el conductor no te ve por los espejos' : 'Shaded zones: where the driver cannot see you in the mirrors', { size: 17, weight: 600 })}`;
  return {
    svg: frame(640, 390, inner, 'dg-blind-spots', es ? 'Ángulos muertos de un carro y de un camión' : 'Blind spots of a car and a truck',
      es ? 'Vista desde arriba de un carro y un camión con sus ángulos muertos sombreados. Una moto está dentro del ángulo muerto del carro.' : 'Top view of a car and a truck with their blind spots shaded. A motorcycle sits inside the car’s blind spot.'),
    legend: es ? [
      'Esta moto está en el ángulo muerto del carro: el conductor no la ve por el espejo. No te quedes ahí: adelántate o quédate atrás.',
      'Conductor: ajusta los espejos y gira la cabeza para revisar antes de cambiar de carril o girar.',
      'Los camiones y buses tienen zonas ciegas grandes, también justo detrás.',
      'Y justo delante: si te metes muy cerca frente a un camión, el conductor no te ve. Si no ves su cara en su espejo, él tampoco te ve.'
    ] : [
      'This motorcycle is in the car’s blind spot: the driver cannot see it in the mirror. Do not stay there: move ahead or drop back.',
      'Drivers: adjust your mirrors and turn your head to check before changing lane or turning.',
      'Trucks and buses have large blind zones, including directly behind them.',
      'And directly in front: if you cut in close ahead of a truck, the driver cannot see you. If you cannot see their face in their mirror, they cannot see you.'
    ]
  };
};

D['overtaking'] = (lang) => {
  const es = lang === 'es';
  const inner = `
    <path d="M0 210 L 330 210 C 450 210 500 170 560 100 L 640 20" stroke="${C.asphalt}" stroke-width="130" fill="none"/>
    <path d="M0 210 L 300 210" stroke="${C.white}" stroke-width="4" stroke-dasharray="26 22" fill="none"/>
    <path d="M300 210 L 330 210 C 450 210 500 170 560 100 L 640 20" stroke="${C.lime}" stroke-width="5" fill="none"/>
    ${car(120, 240, 0, C.teal)}${truck(230, 240, 0, '#A9B3AE')}
    <path d="M150 250 C 170 180 210 180 250 182" stroke="${C.charcoal}" stroke-width="3" stroke-dasharray="7 6" fill="none" opacity=".0"/>
    <path d="M70 280 L 300 280" stroke="${C.forest}" stroke-width="0"/>
    ${N(120, 300, 1)}${N(270, 160, 2)}${N(470, 238, 3, C.coral, C.charcoal)}
    ${T(24, 46, es ? '¿Rebasar aquí?' : 'Overtake here?', { size: 24, weight: 800, display: true, fill: C.forest })}
    ${T(330, 330, es ? 'Línea continua: no rebases' : 'Solid line: do not overtake', { size: 18, weight: 700, fill: C.coralDark })}
    ${T(24, 330, es ? 'Línea discontinua' : 'Broken line', { size: 18, weight: 700, fill: C.charcoal })}`;
  return {
    svg: frame(640, 350, inner, 'dg-overtaking', es ? 'Cuándo no rebasar' : 'When not to overtake',
      es ? 'Una carretera recta con línea discontinua que entra en una curva con línea continua. Un carro va detrás de un camión.' : 'A straight road with a broken centre line leading into a curve with a solid line. A car is behind a truck.'),
    legend: es ? [
      'Antes de rebasar, quédate a buena distancia para ver la vía. Revisa espejos y ángulo muerto, y señaliza.',
      'Solo rebasa si ves la vía libre todo el tramo que necesitas para pasar y regresar a tu carril con espacio.',
      'Se acerca una curva y la línea se vuelve continua: no hay visibilidad. Espera. Si tienes dudas, no rebases.'
    ] : [
      'Before overtaking, hang back far enough to see the road. Check mirrors and blind spot, and signal.',
      'Only overtake if you can see the road clear for the whole distance you need to pass and return to your lane with room to spare.',
      'A curve is coming and the line turns solid: there is no visibility. Wait. If in doubt, do not overtake.'
    ]
  };
};

D['intersection-turn'] = (lang) => {
  const es = lang === 'es';
  const inner = `
    ${roadH(140, 130)}<rect x="250" y="0" width="130" height="400" fill="${C.asphalt}"/>
    ${dashH(205, 0, 240)}${dashH(205, 390, 640)}
    <line x1="315" y1="0" x2="315" y2="130" stroke="${C.white}" stroke-width="4" stroke-dasharray="26 22"/>
    <line x1="315" y1="280" x2="315" y2="400" stroke="${C.white}" stroke-width="4" stroke-dasharray="26 22"/>
    ${car(420, 182, 180, C.teal)}
    <path d="M385 182 C 330 182 290 150 285 100" stroke="${C.teal}" stroke-width="4" stroke-dasharray="8 7" fill="none"/>
    <path d="M285 108 l-8 14 h16z" fill="${C.teal}"/>
    ${moto(150, 236, 0)}
    <path d="M180 236 L 360 236" stroke="${C.coralDark}" stroke-width="4" stroke-dasharray="8 7"/>
    <path d="M362 236 l-14 -8 v16z" fill="${C.coralDark}"/>
    <path d="M300 170 L 345 236" stroke="${C.coral}" stroke-width="0"/>
    <circle cx="316" cy="214" r="34" fill="none" stroke="${C.coralDark}" stroke-width="3"/>
    ${N(150, 290, 1)}${N(462, 140, 2)}${N(316, 300, 3, C.coral, C.charcoal)}
    <rect x="0" y="0" width="640" height="66" fill="${C.sand}"/>
    ${T(24, 46, es ? 'Giro que cruza tu camino' : 'A turn across your path', { size: 24, weight: 800, display: true, fill: C.forest })}`;
  return {
    svg: frame(640, 400, inner, 'dg-intersection-turn', es ? 'Un vehículo gira cruzando el camino de una moto' : 'A vehicle turns across a motorcycle’s path',
      es ? 'Intersección vista desde arriba. Un carro que viene de frente gira a su izquierda y cruza el camino de una moto que sigue recto.' : 'Intersection seen from above. An oncoming car turns to its left across the path of a motorcycle going straight on.'),
    legend: es ? [
      'Motociclista: al acercarte, baja la velocidad, cubre el freno y busca una salida. No asumas que te vieron.',
      'Conductor que gira: mira dos veces. Las motos son pequeñas y es difícil calcular su velocidad.',
      'Punto de conflicto: aquí ocurren muchos choques entre carros y motos.'
    ] : [
      'Rider: as you approach, slow down, cover the brake and look for an escape route. Do not assume you have been seen.',
      'Turning driver: look twice. Motorcycles are small and their speed is hard to judge.',
      'Conflict point: many car–motorcycle crashes happen here.'
    ]
  };
};

D['night-visibility'] = (lang) => {
  const es = lang === 'es';
  const fig = (x, color, glow, label, n) => `
    ${glow ? `<rect x="${x - 16}" y="232" width="32" height="44" rx="4" fill="${C.lime}"/><rect x="${x - 16}" y="246" width="32" height="7" fill="${C.white}"/><rect x="${x - 16}" y="261" width="32" height="7" fill="${C.white}"/>` : ''}
    <circle cx="${x}" cy="214" r="12" fill="${color}"/>
    <rect x="${x - 16}" y="230" width="32" height="48" rx="6" fill="${color}" ${glow ? 'opacity="0"' : ''}/>
    <rect x="${x - 14}" y="276" width="10" height="40" fill="${color}"/><rect x="${x + 4}" y="276" width="10" height="40" fill="${color}"/>
    ${T(x, 352, label, { size: 18, weight: 700, anchor: 'middle', fill: C.white })}
    ${N(x, 172, n)}`;
  const inner = `
    <defs><linearGradient id="beam" x1="0" x2="1"><stop offset="0" stop-color="${C.lime}" stop-opacity=".35"/><stop offset="1" stop-color="${C.lime}" stop-opacity="0"/></linearGradient></defs>
    <rect x="0" y="316" width="640" height="84" fill="${C.asphalt}"/>
    <path d="M70 286 L 640 200 L 640 330 Z" fill="url(#beam)"/>
    <g transform="translate(40 300)"><rect x="-30" y="-24" width="60" height="38" rx="8" fill="${C.charcoal}" stroke="${C.gray}"/><circle cx="26" cy="-10" r="8" fill="${C.lime}"/></g>
    ${fig(250, '#1E2826', false, es ? 'Ropa oscura' : 'Dark clothing', 1)}
    ${fig(400, '#C9C7BE', false, es ? 'Ropa clara' : 'Light clothing', 2)}
    ${fig(560, '#C9C7BE', true, es ? 'Reflectivo' : 'Reflective', 3)}
    ${T(24, 46, es ? '¿Quién se ve primero?' : 'Who is seen first?', { size: 24, weight: 800, display: true, fill: C.white })}
    ${T(24, 76, es ? 'Las tres personas están a distancias distintas de las luces' : 'The three people stand at different distances from the lights', { size: 16, weight: 600, fill: C.white })}`;
  return {
    svg: frame(640, 400, inner, 'dg-night-visibility', es ? 'Visibilidad de noche según la ropa' : 'Night-time visibility depending on clothing',
      es ? 'Escena nocturna con las luces de un vehículo y tres personas: con ropa oscura, con ropa clara y con chaleco reflectivo. La de ropa oscura apenas se distingue.' : 'Night scene with a vehicle’s headlights and three people: in dark clothing, light clothing and a reflective vest. The person in dark clothing can barely be seen.', C.deep),
    legend: es ? [
      'Con ropa oscura casi no te ven, aunque estés más cerca de las luces.',
      'La ropa clara ayuda, pero no basta.',
      'El material reflectivo devuelve la luz de los faros y te hace visible desde mucho más lejos. De 6:00 p. m. a 6:00 a. m. es obligatorio para conductores y acompañantes de moto.'
    ] : [
      'In dark clothing you are hard to see, even when closer to the lights.',
      'Light clothing helps, but it is not enough.',
      'Reflective material sends headlight beams back to the driver and makes you visible from much farther away. From 6:00 p.m. to 6:00 a.m. it is required for motorcycle riders and passengers.'
    ]
  };
};

D['lane-lines'] = (lang) => {
  const es = lang === 'es';
  const strip = (y, kind, label, n) => {
    let lines = '';
    if (kind === 'broken') lines = dashH(y + 32, 150, 640, '#F2C230');
    if (kind === 'solid') lines = solidH(y + 32, 150, 640, '#F2C230', 5);
    if (kind === 'mixed') lines = solidH(y + 28, 150, 640, '#F2C230', 4) + dashH(y + 38, 150, 640, '#F2C230');
    if (kind === 'double') lines = solidH(y + 27, 150, 640, '#F2C230', 4) + solidH(y + 38, 150, 640, '#F2C230', 4);
    return `<rect x="150" y="${y}" width="490" height="64" fill="${C.asphalt}"/>${solidH(y + 4, 150, 640, C.white, 3)}${solidH(y + 60, 150, 640, C.white, 3)}${lines}
      ${T(20, y + 30, label, { size: 18, weight: 800, display: true, fill: C.forest })}${N(126, y + 32, n)}`;
  };
  const inner = `
    ${strip(30, 'broken', es ? 'Discontinua' : 'Broken', 1)}
    ${strip(118, 'solid', es ? 'Continua' : 'Solid', 2)}
    ${strip(206, 'mixed', es ? 'Mixta' : 'Mixed', 3)}
    ${strip(294, 'double', es ? 'Doble' : 'Double', 4)}`;
  return {
    svg: frame(640, 380, inner, 'dg-lane-lines', es ? 'Líneas centrales de la vía' : 'Centre lines on the road',
      es ? 'Cuatro tramos de vía con línea central discontinua, continua, mixta y doble.' : 'Four road sections with broken, solid, mixed and double centre lines.'),
    legend: es ? [
      'Línea discontinua: puedes cruzarla para rebasar solo si es seguro y la vía está libre.',
      'Línea continua: no la cruces para rebasar. Suele marcar curvas, cimas o tramos sin visibilidad.',
      'Mixta (continua y discontinua): manda la línea que está de tu lado. Si la discontinua está de tu lado, puedes rebasar con seguridad; si la continua está de tu lado, no.',
      'Doble continua: no se cruza para rebasar desde ningún lado.'
    ] : [
      'Broken line: you may cross it to overtake only when it is safe and the road is clear.',
      'Solid line: do not cross it to overtake. It usually marks curves, crests or sections without visibility.',
      'Mixed (solid and broken): the line on your side applies. If the broken line is on your side, you may overtake safely; if the solid line is on your side, you may not.',
      'Double solid: not to be crossed to overtake from either side.'
    ],
    note: es ? 'Principios generales de señalización centroamericana. En la isla muchas líneas están borrosas o no existen: en ese caso, la visibilidad y las señales verticales mandan.' : 'General principles of Central American road marking. On the island many lines are faded or missing: then visibility and road signs take precedence.'
  };
};

D['crosswalk'] = (lang) => {
  const es = lang === 'es';
  const zebra = Array.from({ length: 6 }, (_, i) => `<rect x="${300 + i * 0}" y="${92 + i * 26}" width="70" height="14" fill="${C.white}"/>`).join('');
  const inner = `
    ${roadH(80, 170, 640)}${dashH(165, 0, 270)}${dashH(165, 400, 640)}
    ${zebra}
    <line x1="265" y1="170" x2="265" y2="250" stroke="${C.white}" stroke-width="6"/>
    ${car(210, 210, 0, C.teal)}
    ${person(335, 150, C.coralDark)}
    <rect x="0" y="250" width="640" height="18" fill="${C.sandDeep}"/>
    <rect x="0" y="300" width="640" height="70" fill="${C.asphalt}"/>
    <line x1="0" y1="304" x2="640" y2="304" stroke="${C.white}" stroke-width="3"/>
    ${car(520, 345, 180, C.forest)}
    ${person(160, 313, C.coralDark)}
    <path d="M190 313 L 230 313" stroke="${C.coralDark}" stroke-width="3"/><path d="M232 313 l-10 -6 v12z" fill="${C.coralDark}"/>
    <path d="M470 345 L 420 345" stroke="${C.forest}" stroke-width="3"/><path d="M416 345 l10 -6 v12z" fill="${C.forest}"/>
    ${N(335, 108, 1, C.lime)}${N(265, 140, 2)}${N(160, 282, 3)}
    ${T(24, 46, es ? 'Peatones y conductores' : 'Pedestrians and drivers', { size: 24, weight: 800, display: true, fill: C.forest })}
    ${T(300, 292, es ? 'Vía sin acera' : 'Road without a pavement', { size: 16, weight: 700, fill: C.charcoal })}`;
  return {
    svg: frame(640, 380, inner, 'dg-crosswalk', es ? 'Paso peatonal y caminar sin acera' : 'Crossings and walking without a pavement',
      es ? 'Arriba, un carro se detiene antes de la línea de alto mientras una persona cruza por el paso peatonal. Abajo, una persona camina por el borde de una vía sin acera, de frente al tráfico.' : 'Top: a car stops before the stop line while a person uses the crossing. Bottom: a person walks along the edge of a road without a pavement, facing traffic.'),
    legend: es ? [
      'Peatón: cruza por el paso peatonal o donde puedas ver y ser visto. Asegúrate de que los vehículos se detienen antes de cruzar.',
      'Conductor: detente antes de la línea, no encima del paso. Atención a niños y personas mayores.',
      'Donde no hay acera, camina por el borde de frente al tráfico, para ver los vehículos que se acercan.'
    ] : [
      'Pedestrians: cross at the crossing or where you can see and be seen. Make sure vehicles are stopping before you step out.',
      'Drivers: stop before the line, not on the crossing. Watch for children and older people.',
      'Where there is no pavement, walk along the edge facing traffic, so you can see vehicles coming.'
    ]
  };
};

D['group-riding'] = (lang) => {
  const es = lang === 'es';
  const inner = `
    ${roadH(70, 110)}${dashH(125)}
    ${[0, 1, 2, 3].map((i) => moto(520 - i * 110, i % 2 ? 150 : 98, 0, C.teal)).join('')}
    ${roadH(240, 110)}${dashH(295)}
    ${moto(500, 268, 0)}${moto(470, 290, 0)}${moto(505, 312, 0)}${moto(430, 270, 0)}${moto(440, 318, 0)}${moto(395, 296, 0)}
    ${T(24, 56, es ? 'En zigzag y con espacio' : 'Staggered, with space', { size: 22, weight: 800, display: true, fill: C.forest })}
    ${T(24, 226, es ? 'En manada' : 'In a pack', { size: 22, weight: 800, display: true, fill: C.coralDark })}
    ${N(300, 200, 1)}${N(560, 230, 2, C.coral, C.charcoal)}`;
  return {
    svg: frame(640, 380, inner, 'dg-group-riding', es ? 'Andar en grupo: espaciado frente a manada' : 'Group riding: spaced out versus a pack',
      es ? 'Arriba, cuatro motos en zigzag con espacio entre ellas. Abajo, seis motos amontonadas en manada, algunas sobre la línea central.' : 'Top: four motorcycles staggered with space between them. Bottom: six motorcycles bunched in a pack, some over the centre line.'),
    legend: es ? [
      'Formación en zigzag, en tu carril, con al menos dos segundos con la moto de adelante en tu misma línea. En vías estrechas y con curvas, mejor en fila de a uno.',
      'En manada nadie tiene espacio para frenar o esquivar, y la presión del grupo empuja a correr. Un error de uno arrastra a varios.'
    ] : [
      'Staggered formation, within your lane, with at least two seconds to the motorcycle ahead in your line. On narrow, winding roads, single file is better.',
      'In a pack nobody has room to brake or swerve, and group pressure pushes everyone to speed. One rider’s mistake brings down several.'
    ]
  };
};

export const diagramIds = Object.keys(D);

export function diagram(id, lang, caption) {
  if (!id || !D[id]) return '';
  const d = D[id](lang);
  const items = d.legend.map((l) => `<li>${esc(l)}</li>`).join('');
  const list = d.ordered === false ? `<ul class="diagram__legend diagram__legend--plain">${items}</ul>` : `<ol class="diagram__legend">${items}</ol>`;
  return `<figure class="diagram">${d.svg}${list}${d.note ? `<p class="diagram__note">${esc(d.note)}</p>` : ''}${caption ? `<figcaption>${esc(caption)}</figcaption>` : ''}</figure>`;
}
