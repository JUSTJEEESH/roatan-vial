// Road-sign reference.
//
// Honduras applies the Central American Manual on Uniform Traffic Control Devices
// (SIECA; first edition 2000, updated 2014). The official manual could not be
// opened from the build environment, so every illustration here is an original
// drawing of a sign whose shape, colour and meaning are standard across the
// regional system. Exact designs, legends and codes must be checked against the
// official manual before this page is described as an official reference
// (see docs/legal-verification.md). `verify` lists what to confirm.

const R = '#C8102E';   // regulatory red
const Y = '#F2C230';   // warning yellow
const B = '#1D4F91';   // information blue
const G = '#1F6B3A';   // guide green
const K = '#111';      // black
const W = '#FFF';

// An empty label marks the drawing as decorative (its meaning is in adjacent text).
const svg = (vb, body, label) => `<svg viewBox="${vb}" ${label ? `role="img" aria-label="${label}"` : 'aria-hidden="true" focusable="false"'} xmlns="http://www.w3.org/2000/svg">${body}</svg>`;
const text = (x, y, s, size, fill, weight = 800) => `<text x="${x}" y="${y}" font-family="Arial, Helvetica, sans-serif" font-weight="${weight}" font-size="${size}" fill="${fill}" text-anchor="middle">${s}</text>`;
const diamond = (inner) => `<rect x="21" y="21" width="86" height="86" rx="6" transform="rotate(45 64 64)" fill="${Y}" stroke="${K}" stroke-width="4"/><rect x="27" y="27" width="74" height="74" rx="3" transform="rotate(45 64 64)" fill="none" stroke="${K}" stroke-width="2.5"/>${inner}`;
const prohib = (inner) => `<rect x="14" y="6" width="100" height="116" rx="6" fill="${W}" stroke="${K}" stroke-width="3"/>${inner}<circle cx="64" cy="64" r="40" fill="none" stroke="${R}" stroke-width="9"/><line x1="36" y1="36" x2="92" y2="92" stroke="${R}" stroke-width="9"/>`;

export const art = {
  alto: (l) => svg('0 0 128 128', `<polygon points="37.5,4 90.5,4 124,37.5 124,90.5 90.5,124 37.5,124 4,90.5 4,37.5" fill="${R}"/><polygon points="39.6,9 88.4,9 119,39.6 119,88.4 88.4,119 39.6,119 9,88.4 9,39.6" fill="none" stroke="${W}" stroke-width="3.5"/>${text(64, 75, 'ALTO', 32, W)}`, l),
  ceda: (l) => svg('0 0 128 116', `<polygon points="4,6 124,6 64,112" fill="${R}"/><polygon points="24,17 104,17 64,86" fill="${W}"/>${text(64, 36, 'CEDA EL', 13.5, R)}${text(64, 52, 'PASO', 13.5, R)}`, l),
  velocidad: (l) => svg('0 0 104 128', `<rect x="3" y="3" width="98" height="122" rx="7" fill="${W}" stroke="${K}" stroke-width="4"/>${text(52, 30, 'VELOCIDAD', 12.5, K)}${text(52, 46, 'MÁXIMA', 12.5, K)}${text(52, 92, '—', 42, K)}${text(52, 114, 'km/h', 15, K, 700)}`, l),
  noU: (l) => svg('0 0 128 128', prohib(`<path d="M50 100 V58 a18 18 0 0 1 36 0 V70" fill="none" stroke="${K}" stroke-width="10"/><path d="M74 66 l12 18 l12 -18z" fill="${K}"/>`), l),
  noIzq: (l) => svg('0 0 128 128', prohib(`<path d="M76 104 V64 H44" fill="none" stroke="${K}" stroke-width="11"/><path d="M48 50 l-20 14 l20 14z" fill="${K}"/>`), l),
  noEst: (l) => svg('0 0 128 128', prohib(text(64, 84, 'E', 58, K)), l),
  curva: (l) => svg('0 0 128 128', diamond(`<path d="M52 98 V70 a22 22 0 0 1 22 -22 h4" fill="none" stroke="${K}" stroke-width="9"/><path d="M76 34 l18 14 l-18 14z" fill="${K}"/>`), l),
  interseccion: (l) => svg('0 0 128 128', diamond(`<rect x="58" y="30" width="12" height="68" fill="${K}"/><rect x="30" y="58" width="68" height="12" fill="${K}"/>`), l),
  peatones: (l) => svg('0 0 128 128', diamond(`<circle cx="66" cy="38" r="7" fill="${K}"/><path d="M64 48 L58 70 L48 92 M58 70 L70 92 M62 54 L50 64 M64 54 L78 62" stroke="${K}" stroke-width="7" stroke-linecap="round" fill="none"/>`), l),
  resbaladiza: (l) => svg('0 0 128 128', diamond(`<rect x="46" y="40" width="36" height="22" rx="5" fill="${K}"/><path d="M40 78 c8 -8 12 8 20 0 M64 90 c8 -8 12 8 20 0" stroke="${K}" stroke-width="5" fill="none"/>`), l),
  hospital: (l) => svg('0 0 112 128', `<rect x="3" y="3" width="106" height="122" rx="7" fill="${B}"/><rect x="18" y="20" width="76" height="76" rx="4" fill="${W}"/>${text(56, 80, 'H', 58, B)}`, l),
  gasolina: (l) => svg('0 0 112 128', `<rect x="3" y="3" width="106" height="122" rx="7" fill="${B}"/><rect x="18" y="20" width="76" height="76" rx="4" fill="${W}"/><rect x="38" y="34" width="26" height="48" rx="3" fill="${B}"/><rect x="43" y="40" width="16" height="12" fill="${W}"/><path d="M64 46 h8 v24 a4 4 0 0 0 8 0 V44 l-6 -6" stroke="${B}" stroke-width="4" fill="none"/>`, l),
  destino: (l) => svg('0 0 200 110', `<rect x="3" y="3" width="194" height="104" rx="8" fill="${G}"/><rect x="9" y="9" width="182" height="92" rx="5" fill="none" stroke="${W}" stroke-width="3"/>${text(82, 46, 'Destino A', 19, W, 700)}${text(82, 80, 'Destino B', 19, W, 700)}<path d="M150 40 h22 M164 32 l8 8 l-8 8" stroke="${W}" stroke-width="5" fill="none"/><path d="M172 74 h-22 M158 66 l-8 8 l8 8" stroke="${W}" stroke-width="5" fill="none"/>`, l),
  semaforo: (l) => svg('0 0 64 150', `<rect x="6" y="4" width="52" height="142" rx="12" fill="${K}"/><circle cx="32" cy="32" r="16" fill="${R}"/><circle cx="32" cy="75" r="16" fill="${Y}"/><circle cx="32" cy="118" r="16" fill="#2E9B4F"/>`, l),
  intermitenteRojo: (l) => svg('0 0 64 64', `<rect x="4" y="4" width="56" height="56" rx="12" fill="${K}"/><circle cx="32" cy="32" r="18" fill="${R}"/><circle cx="32" cy="32" r="24" fill="none" stroke="${R}" stroke-width="2" stroke-dasharray="3 5"/>`, l),
  intermitenteAmarillo: (l) => svg('0 0 64 64', `<rect x="4" y="4" width="56" height="56" rx="12" fill="${K}"/><circle cx="32" cy="32" r="18" fill="${Y}"/><circle cx="32" cy="32" r="24" fill="none" stroke="${Y}" stroke-width="2" stroke-dasharray="3 5"/>`, l)
};

export const signGroups = [
  {
    id: 'reglamentarias',
    es: { title: 'Señales reglamentarias', intro: 'Indican obligaciones, prohibiciones o restricciones. No son sugerencias: se cumplen.' },
    en: { title: 'Regulatory signs', intro: 'They set out obligations, prohibitions or restrictions. They are not suggestions: they must be obeyed.' },
    signs: [
      { art: 'alto', es: { name: 'ALTO', meaning: 'Detención total obligatoria.', do: 'Detente por completo antes de la línea de alto o del borde de la vía. Cede el paso a peatones y vehículos y avanza solo cuando sea seguro.', example: 'Al salir de una calle secundaria a la carretera principal.' }, en: { name: 'STOP (ALTO)', meaning: 'Full stop required.', do: 'Come to a complete stop before the stop line or the edge of the road. Give way to pedestrians and vehicles, and move off only when it is safe.', example: 'Where a side street joins the main road.' } },
      { art: 'ceda', es: { name: 'CEDA EL PASO', meaning: 'Debes dar prioridad a quienes circulan por la otra vía.', do: 'Reduce la velocidad y prepárate para detenerte. Continúa solo si no obligas a nadie a frenar o desviarse.', example: 'En la entrada a una vía con más tráfico o en una rotonda.' }, en: { name: 'YIELD / GIVE WAY (CEDA EL PASO)', meaning: 'You must give priority to traffic on the other road.', do: 'Slow down and be ready to stop. Continue only if you will not force anyone to brake or swerve.', example: 'Joining a busier road or entering a roundabout.' } },
      { art: 'velocidad', verify: 'Leyenda y formato exactos', es: { name: 'Velocidad máxima', meaning: 'La velocidad más alta permitida en ese tramo, en km/h.', do: 'No la superes. Es un máximo, no una meta: con lluvia, de noche o con gente en la vía, ve más despacio.', example: 'Al entrar a una zona poblada o cerca de una escuela.' }, en: { name: 'Maximum speed (Velocidad máxima)', meaning: 'The highest speed allowed on that stretch, in km/h.', do: 'Do not exceed it. It is a maximum, not a target: in rain, at night or with people on the road, go slower.', example: 'Entering a built-up area or near a school.' } },
      { art: 'noU', verify: 'Diseño exacto del símbolo', es: { name: 'Prohibido girar en U', meaning: 'No se permite dar la vuelta en U en ese punto.', do: 'Sigue hasta un lugar donde el giro sea permitido y seguro.', example: 'En tramos con poca visibilidad o tráfico en ambos sentidos.' }, en: { name: 'No U-turn', meaning: 'U-turns are not allowed at that point.', do: 'Continue to a place where turning is allowed and safe.', example: 'On stretches with poor visibility or two-way traffic.' } },
      { art: 'noIzq', verify: 'Diseño exacto del símbolo', es: { name: 'Prohibido girar a la izquierda', meaning: 'No se permite girar a la izquierda en esa intersección.', do: 'Continúa y busca una ruta alternativa permitida.', example: 'En intersecciones donde el giro cruzaría tráfico peligroso.' }, en: { name: 'No left turn', meaning: 'Left turns are not allowed at that junction.', do: 'Continue and find a permitted alternative route.', example: 'At junctions where turning would cross dangerous traffic.' } },
      { art: 'noEst', verify: 'Uso de la letra E en la señal oficial', es: { name: 'Prohibido estacionar', meaning: 'No se permite estacionar en ese tramo.', do: 'Busca otro lugar. Un vehículo mal estacionado obliga a otros, incluidos peatones, a salir a la vía.', example: 'Frente a entradas, en curvas o junto a paradas de bus.' }, en: { name: 'No parking', meaning: 'Parking is not allowed on that stretch.', do: 'Find another place. A badly parked vehicle forces others, including pedestrians, out into the road.', example: 'In front of entrances, on curves or beside bus stops.' } }
    ]
  },
  {
    id: 'preventivas',
    es: { title: 'Señales preventivas', intro: 'Rombos amarillos que avisan de un peligro adelante. Cuando ves una, reduce la velocidad y presta más atención.' },
    en: { title: 'Warning signs', intro: 'Yellow diamonds that warn of a hazard ahead. When you see one, slow down and pay closer attention.' },
    signs: [
      { art: 'curva', verify: 'Diseño exacto del símbolo', es: { name: 'Curva', meaning: 'Se acerca una curva en la dirección indicada.', do: 'Reduce la velocidad antes de la curva, no dentro de ella. Mantente en tu carril y no rebases.', example: 'En tramos de carretera que bordean colinas o la costa.' }, en: { name: 'Curve ahead', meaning: 'A curve is coming in the direction shown.', do: 'Slow down before the curve, not in it. Keep to your lane and do not overtake.', example: 'On stretches of road that wind around hills or the coast.' } },
      { art: 'interseccion', verify: 'Diseño exacto del símbolo', es: { name: 'Intersección', meaning: 'Adelante se cruzan dos vías.', do: 'Baja la velocidad, cubre el freno y espera vehículos que entren o giren.', example: 'Antes de un cruce con una calle de comunidad.' }, en: { name: 'Crossroads ahead', meaning: 'Two roads cross ahead.', do: 'Slow down, cover the brake and expect vehicles entering or turning.', example: 'Before a junction with a community street.' } },
      { art: 'peatones', verify: 'Diseño exacto del símbolo', es: { name: 'Cruce de peatones', meaning: 'Adelante hay un lugar donde cruzan personas a pie.', do: 'Reduce la velocidad y prepárate para detenerte. Cede el paso a quien cruza.', example: 'Cerca de escuelas, iglesias, mercados y paradas de bus.' }, en: { name: 'Pedestrian crossing ahead', meaning: 'People cross on foot ahead.', do: 'Slow down and be ready to stop. Give way to people crossing.', example: 'Near schools, churches, markets and bus stops.' } },
      { art: 'resbaladiza', verify: 'Diseño exacto del símbolo', es: { name: 'Superficie resbaladiza', meaning: 'La vía puede estar resbalosa, sobre todo con lluvia.', do: 'Reduce la velocidad, evita frenadas y giros bruscos y aumenta la distancia.', example: 'En pendientes o tramos donde se acumula arena o agua.' }, en: { name: 'Slippery road', meaning: 'The surface may be slippery, especially when wet.', do: 'Slow down, avoid sudden braking and steering, and increase your following distance.', example: 'On slopes or stretches where sand or water collects.' } }
    ]
  },
  {
    id: 'informativas',
    es: { title: 'Señales informativas y de servicios', intro: 'Indican servicios y lugares útiles. Suelen ser azules.' },
    en: { title: 'Information and service signs', intro: 'They point to useful services and places. They are usually blue.' },
    signs: [
      { art: 'hospital', verify: 'Diseño exacto', es: { name: 'Hospital', meaning: 'Hay un hospital o centro de salud cerca.', do: 'Úsala como referencia. Cerca de hospitales, atención a ambulancias y peatones.', example: 'En la vía de acceso a un centro de salud.' }, en: { name: 'Hospital', meaning: 'There is a hospital or health centre nearby.', do: 'Use it as a reference. Near hospitals, watch for ambulances and pedestrians.', example: 'On the access road to a health centre.' } },
      { art: 'gasolina', verify: 'Diseño exacto', es: { name: 'Gasolinera', meaning: 'Hay una estación de combustible cerca.', do: 'Planifica tu parada. Entra y sal señalizando y despacio.', example: 'Antes de un tramo largo.' }, en: { name: 'Fuel station', meaning: 'There is a fuel station nearby.', do: 'Plan your stop. Signal and go slowly when entering and leaving.', example: 'Before a long stretch.' } }
    ]
  },
  {
    id: 'direccion',
    es: { title: 'Señales de dirección', intro: 'Verdes, con destinos y flechas. Te ayudan a decidir con tiempo y sin maniobras de último momento.' },
    en: { title: 'Direction signs', intro: 'Green, with destinations and arrows. They help you decide in good time, without last-second moves.' },
    signs: [
      { art: 'destino', verify: 'Formato oficial; los destinos mostrados son genéricos', es: { name: 'Señal de destino', meaning: 'Indica hacia dónde lleva cada dirección.', do: 'Léela con tiempo. Si te pasas un desvío, sigue y da la vuelta donde sea seguro: nunca frenes ni gires de golpe.', example: 'Antes de un desvío en la carretera principal.' }, en: { name: 'Destination sign', meaning: 'Shows where each direction leads.', do: 'Read it in good time. If you miss a turn, carry on and turn round where it is safe: never brake or swerve suddenly.', example: 'Before a turn-off on the main road.' } }
    ]
  },
  {
    id: 'semaforos',
    es: { title: 'Semáforos', intro: 'Los colores tienen el mismo significado en toda la región.' },
    en: { title: 'Traffic signals', intro: 'The colours mean the same across the region.' },
    signs: [
      { art: 'semaforo', es: { name: 'Rojo, amarillo y verde', meaning: 'Rojo: detente. Amarillo: el rojo viene; detente si puedes hacerlo con seguridad. Verde: avanza si la intersección está despejada.', do: 'El amarillo no es para acelerar. Con verde, mira de todos modos: alguien puede pasarse el rojo.', example: 'En intersecciones con mucho tráfico.' }, en: { name: 'Red, yellow and green', meaning: 'Red: stop. Yellow: red is coming; stop if you can do so safely. Green: go if the junction is clear.', do: 'Yellow is not a signal to speed up. On green, look anyway: someone may run the red.', example: 'At busy junctions.' } },
      { art: 'intermitenteRojo', verify: 'Confirmar en el manual', es: { name: 'Rojo intermitente', meaning: 'Equivale a ALTO.', do: 'Detente por completo y avanza cuando sea seguro.', example: 'Cuando un semáforo funciona en modo intermitente.' }, en: { name: 'Flashing red', meaning: 'Treat it as a STOP sign.', do: 'Stop completely, then go when it is safe.', example: 'When a signal is operating in flashing mode.' } },
      { art: 'intermitenteAmarillo', verify: 'Confirmar en el manual', es: { name: 'Amarillo intermitente', meaning: 'Precaución.', do: 'Reduce la velocidad y cruza con mucho cuidado.', example: 'Cuando un semáforo funciona en modo intermitente.' }, en: { name: 'Flashing yellow', meaning: 'Caution.', do: 'Slow down and cross with great care.', example: 'When a signal is operating in flashing mode.' } }
    ]
  }
];
