import { t, config } from '../../site.mjs';
import scenarios from '../../content/scenarios.mjs';
import { national } from '../../content/data.mjs';
import { preRide } from '../../content/checklists.mjs';
import { officialSources } from '../../content/legal.mjs';
import { art } from '../../content/signs.mjs';
import { esc, rich, html, href, icon, marker, button, ext, formatDate } from '../lib.mjs';
import { checklist, photo } from '../components.mjs';
import { diagram } from '../diagrams.mjs';
import { renderScenario } from './practice.mjs';
import { lessonUrl } from './lessons.mjs';

// Stylised island: a long, narrow island running WSW–ENE, with reef/depth rings
// and a single road along its spine. Not a cartographic map.
export const islandMap = (cls = 'hero__map') => `<svg class="${cls}" viewBox="0 0 1000 420" aria-hidden="true" focusable="false">
  <g transform="translate(500 230) scale(1.18) translate(-500 -230)"><path class="contour" d="M60 330 C 90 310 140 300 190 296 C 250 290 300 270 360 262 C 430 252 480 230 540 214 C 600 198 660 190 720 168 C 770 150 820 128 870 116 C 890 112 900 122 884 134 C 850 156 800 172 750 196 C 700 220 640 236 580 252 C 520 268 470 290 410 304 C 350 318 290 330 230 344 C 170 358 110 360 72 350 C 56 345 50 336 60 330 Z"/></g>
  <g transform="translate(500 230) scale(1.09) translate(-500 -230)"><path class="contour" d="M60 330 C 90 310 140 300 190 296 C 250 290 300 270 360 262 C 430 252 480 230 540 214 C 600 198 660 190 720 168 C 770 150 820 128 870 116 C 890 112 900 122 884 134 C 850 156 800 172 750 196 C 700 220 640 236 580 252 C 520 268 470 290 410 304 C 350 318 290 330 230 344 C 170 358 110 360 72 350 C 56 345 50 336 60 330 Z"/></g>
  <path class="coast" d="M60 330 C 90 310 140 300 190 296 C 250 290 300 270 360 262 C 430 252 480 230 540 214 C 600 198 660 190 720 168 C 770 150 820 128 870 116 C 890 112 900 122 884 134 C 850 156 800 172 750 196 C 700 220 640 236 580 252 C 520 268 470 290 410 304 C 350 318 290 330 230 344 C 170 358 110 360 72 350 C 56 345 50 336 60 330 Z"/>
  <ellipse class="coast" cx="926" cy="106" rx="20" ry="7" transform="rotate(-18 926 106)"/>
  <ellipse class="coast" cx="966" cy="92" rx="14" ry="5" transform="rotate(-18 966 92)"/>
  <path class="road" d="M84 336 C 200 320 300 304 400 283 C 500 262 600 232 700 202 C 760 184 820 152 866 126"/>
  <path class="road-dash" d="M84 336 C 200 320 300 304 400 283 C 500 262 600 232 700 202 C 760 184 820 152 866 126"/>
  <circle cx="866" cy="126" r="7" fill="#D7E65A"/>
</svg>`;

export function homePage(lang, lessons) {
  const s = t[lang];
  const es = lang === 'es';
  const L = (id) => lessons.find((l) => l.id === id);
  const lessonLink = (id) => {
    const l = L(id);
    return `<li><a href="${lessonUrl(lang, l)}"><span><span class="link-list__title">${esc(l[lang].title)}</span><span class="link-list__meta">${l.minutes} ${esc(s.readMinutes)}</span></span>${icon('arrow')}</a></li>`;
  };
  const [dnvt, onv] = national;
  const num = (n) => n.toLocaleString(es ? 'es-HN' : 'en-GB');

  const risks = es ? [
    ['Andar en moto sin casco', 'O con el casco sin abrochar. En una caída, la cabeza es lo primero que se golpea.'],
    ['Llevar el casco en el brazo', 'Un casco colgado no protege a nadie y estorba al manejar.'],
    ['Más personas de las permitidas', 'Más de dos en una moto es una infracción y cambia el equilibrio, el frenado y la dirección.'],
    ['Caballitos y piruetas en la vía', 'Sin control de dirección ni de frenado, en medio de gente que no lo espera.'],
    ['Piques y grupos imprudentes', 'La presión del grupo empuja a correr. Un error de uno arrastra a varios.'],
    ['Rebases peligrosos', 'En curvas, cimas o sin ver la vía libre. Un rebase mal calculado puede terminar en un choque de frente.'],
    ['Exceso de velocidad', 'Más velocidad es más distancia para frenar y un golpe mucho más fuerte.'],
    ['Manejar sin formación ni licencia', 'Incluidos menores de edad. Manejar se aprende; no se improvisa.'],
    ['Imprudencia en intersecciones', 'Giros que cruzan el camino de una moto, altos que no se respetan.'],
    ['Ser invisible de noche', 'Sin luces, con ropa oscura y sin reflectivo, nadie te ve a tiempo.'],
    ['Manejar bajo efectos del alcohol', 'Incluso poco alcohol retrasa la reacción y nubla el juicio.'],
    ['Sin cinturón ni silla infantil', 'Un niño en brazos no se puede sostener en un choque.']
  ] : [
    ['Riding without a helmet', 'Or with the strap undone. In a fall, the head is the first thing to hit.'],
    ['Carrying the helmet on your arm', 'A helmet hanging off your arm protects no one and gets in the way.'],
    ['More passengers than allowed', 'More than two on a motorcycle is an infraction and changes balance, braking and steering.'],
    ['Wheelies and stunts on the road', 'No steering or braking control, among people who do not expect it.'],
    ['Racing and reckless group riding', 'Group pressure pushes everyone faster. One rider’s mistake brings down several.'],
    ['Dangerous overtaking', 'On curves, crests or without seeing the road clear. A misjudged overtake can end in a head-on crash.'],
    ['Speeding', 'More speed means more distance to stop and a much harder impact.'],
    ['Driving without training or a licence', 'Including underage driving. Driving is learned, not improvised.'],
    ['Carelessness at junctions', 'Turns across a rider’s path, stop signs that are ignored.'],
    ['Being invisible at night', 'No lights, dark clothes, nothing reflective: nobody sees you in time.'],
    ['Driving under the influence', 'Even a little alcohol slows reactions and clouds judgement.'],
    ['No seatbelt or child seat', 'A child on your lap cannot be held in a crash.']
  ];

  const actions = es ? [
    ['Comparte una lección', 'Envía una lección o un escenario por WhatsApp a quien acaba de comprar su primera moto.'],
    ['Organiza una charla', 'En tu escuela, iglesia, trabajo o comunidad, con materiales gratuitos.'],
    ['Apoya la educación escolar', 'Ayúdanos a que las lecciones lleguen a jóvenes antes de su primera licencia.'],
    ['Patrocina cascos o materiales', 'Una vía futura para empresas y personas que quieren aportar.'],
    ['Usa las campañas', 'Descarga los carteles y compártelos en redes, negocios y paradas.'],
    ['Sé embajador comunitario', 'Personas que llevan el mensaje a su barrio, con respeto y con datos.']
  ] : [
    ['Share a lesson', 'Send a lesson or scenario on WhatsApp to someone who just bought their first motorcycle.'],
    ['Host a talk', 'At your school, church, workplace or community, with free materials.'],
    ['Support school education', 'Help the lessons reach young people before their first licence.'],
    ['Sponsor helmets or materials', 'A future pathway for businesses and individuals who want to contribute.'],
    ['Use the campaigns', 'Download the posters and share them online, in shops and at bus stops.'],
    ['Become a community ambassador', 'People who carry the message to their neighbourhood, with respect and with facts.']
  ];

  const sc = scenarios.find((x) => x.id === 'slow-vehicle-overtake') || scenarios[0];

  const body = html`
<section class="hero" aria-labelledby="hero-h">
  ${photo('home-hero', lang, islandMap())}
  <div class="wrap">
    <div class="hero__descriptor"><span class="lane" aria-hidden="true"></span><p class="eyebrow mb-0">${esc(s.descriptor)} · ${es ? 'Roatán, Islas de la Bahía' : 'Roatán, Bay Islands'}</p></div>
    <h1 id="hero-h" class="display">${es
      ? '<span class="line">Una isla.</span><span class="line">Un camino.</span><span class="line">Cada vida cuenta.</span>'
      : '<span class="line">One island.</span><span class="line">One road.</span><span class="line">Every life matters.</span>'}</h1>
    <p class="hero__sub">${es
      ? 'Cada decisión en la carretera importa. Aprende a proteger tu vida y la de quienes comparten el camino contigo.'
      : 'Every decision on the road matters. Learn how to protect your life and the lives of everyone sharing the road with you.'}</p>
    <div class="btn-row">
      ${button(href(lang, 'learn'), es ? 'Aprende a conducir con seguridad' : 'Learn to drive safely', 'primary')}
      ${button(href(lang, 'about'), es ? 'Conoce la iniciativa' : 'About the initiative', 'ghost')}
    </div>
    <div class="hero__foot">
      <span>${es ? '<strong>Educación vial gratuita,</strong> en español e inglés, para todas las personas que usan la vía.' : '<strong>Free road-safety education</strong> in Spanish and English, for everyone who uses the road.'}</span>
      <span class="callout-911">${icon('phone')} ${esc(s.emergency)}</span>
    </div>
  </div>
</section>

<section class="section theme-white" aria-labelledby="intro-h">
  <div class="wrap">
    ${marker(1, es ? 'Por qué existimos' : 'Why we exist')}
    <h2 id="intro-h" class="intro__statement">${es
      ? 'Detrás de cada cifra hay alguien que <em>no llegó a casa.</em>'
      : 'Behind every number is someone who <em>did not make it home.</em>'}</h2>
    <div class="split mt-2">
      <p class="lede col-7">${es
        ? 'Roatán Vial es una iniciativa comunitaria e independiente de educación vial. Existe para que menos familias de la isla, y de todo Honduras, reciban esa noticia. Enseñamos lo que de verdad protege en la vía, con información clara, práctica y verificada.'
        : 'Roatán Vial is an independent, community road-safety education initiative. It exists so that fewer families on the island, and across Honduras, receive that news. We teach what really protects people on the road, with clear, practical, verified information.'}</p>
    </div>
    <div class="stat-pair">
      <div>
        <p class="stat__num">${num(dnvt.value)}</p>
        <p class="stat__label">${esc(dnvt[lang].label)}.</p>
        <p class="stat__source">${ext(dnvt.url, dnvt[lang].source, lang)}</p>
      </div>
      <div>
        <p class="stat__num">${num(onv.value)}</p>
        <p class="stat__label">${esc(onv[lang].label)}.</p>
        <p class="stat__source">${ext(onv.url, onv[lang].source, lang)}</p>
      </div>
      <p class="stat__note">${es
        ? 'Dos fuentes, dos métodos de conteo: por eso las cifras no coinciden. No hay estadísticas oficiales publicadas solo para Roatán; no inventamos ninguna. '
        : 'Two sources, two counting methods: that is why the figures differ. There are no published official statistics for Roatán alone; we do not invent any. '}<a href="${href(lang, 'data')}">${es ? 'Cómo usamos los datos' : 'How we use data'}</a>.</p>
    </div>
  </div>
</section>

<section class="section theme-forest" aria-labelledby="risks-h">
  <div class="wrap">
    <div class="split">
      <div class="col-7">
        ${marker(2, es ? 'Lo que pone vidas en riesgo' : 'What puts lives at risk')}
        <h2 id="risks-h" class="display display--2xl">${es ? 'Seamos directos.' : 'Let’s be direct.'}</h2>
      </div>
      <div class="col-5 principle">
        <p class="display display--lg">${es ? 'El problema es el comportamiento peligroso.' : 'Dangerous behaviour is the problem.'}</p>
        <p class="display display--lg accent">${es ? 'Las personas son la razón por la que nos importa.' : 'People are the reason we care.'}</p>
      </div>
    </div>
    <ol class="risks">
      ${risks.map(([h, p]) => `<li><h3>${esc(h)}</h3><p>${esc(p)}</p></li>`)}
    </ol>
  </div>
</section>

<section class="section theme-sand helmet-campaign" aria-labelledby="moto-h">
  <div class="wrap">
    ${marker(3, es ? 'Programa de motocicletas' : 'Motorcycle programme')}
    <div class="split">
      <div class="col-6">
        <h2 id="moto-h" class="display">${es
          ? '<span class="line">El casco no es</span><span class="line">para llevarlo.</span><span class="line">Es para usarlo.</span>'
          : '<span class="line">A helmet is not</span><span class="line">for carrying.</span><span class="line">It is for wearing.</span>'}</h2>
        <p class="lede mt-2">${es
          ? 'Para muchas familias de la isla, la moto es la forma práctica de moverse. Manejarla con seguridad protege a quienes dependen de ella.'
          : 'For many island families, a motorcycle is the practical way to get around. Riding it safely protects the people who depend on it.'}</p>
        <ul class="link-list">${['helmet-carried', 'helmet-fit', 'moto-passengers', 'night-visibility'].map(lessonLink)}</ul>
        <div class="btn-row">${button(href(lang, 'moto'), es ? 'Centro de motocicletas' : 'Motorcycle centre', 'solid')}</div>
      </div>
      <div class="col-6">${diagram('helmet-carried', lang)}</div>
    </div>
  </div>
</section>

<section class="section theme-white" aria-labelledby="rules-h">
  <div class="wrap split split--center">
    <div class="col-5">
      ${marker(4, es ? 'Normas de la vía' : 'Rules of the road')}
      <h2 id="rules-h">${es ? 'Las señales hablan. Aprende su idioma.' : 'Signs speak. Learn their language.'}</h2>
      <p>${es
        ? 'Forma y color dicen mucho antes de leer una palabra: el octágono rojo siempre es ALTO, el rombo amarillo siempre avisa de un peligro. Conoce las señales, las líneas de la vía y lo que se espera de ti en cada una.'
        : 'Shape and colour say a lot before you read a word: the red octagon always means STOP, the yellow diamond always warns of danger. Learn the signs, the road lines and what is expected of you at each one.'}</p>
      <div class="btn-row">${button(href(lang, 'signs'), es ? 'Guía de señales' : 'Sign guide', 'solid')}${button(lessonUrl(lang, L('road-markings')), es ? 'Líneas de la vía' : 'Road markings', 'ghost')}</div>
    </div>
    <div class="col-7">
      <div class="sign-strip">
        ${[['alto', 'ALTO', 'STOP'], ['ceda', 'Ceda el paso', 'Yield'], ['curva', 'Curva', 'Curve'], ['peatones', 'Peatones', 'Pedestrians'], ['interseccion', 'Intersección', 'Junction']].map(([k, a, b]) => `<figure>${art[k](es ? a : b)}<figcaption>${esc(es ? a : b)}</figcaption></figure>`)}
      </div>
    </div>
  </div>
</section>

<section class="section theme-deep" aria-labelledby="challenge-h">
  <div class="wrap">
    <div class="split">
      <div class="col-5">
        ${marker(5, es ? 'Reto vial' : 'Road challenge')}
        <h2 id="challenge-h" class="display display--xl">${es ? '¿Qué harías tú?' : 'What would you do?'}</h2>
        <p class="lede muted">${es ? 'Una situación real. Elige tu respuesta y descubre por qué.' : 'A real situation. Choose your answer and find out why.'}</p>
        <div class="btn-row">${button(href(lang, 'scenarios'), es ? 'Más escenarios' : 'More scenarios', 'primary')}${button(href(lang, 'quiz'), es ? 'Reto de 50 preguntas' : '50-question challenge', 'ghost')}</div>
      </div>
      <div class="col-7"><div class="challenge">${renderScenario(lang, sc, 3, lessons, { showDiagram: false, headingLevel: 3 })}</div></div>
    </div>
  </div>
</section>

<section class="section theme-white" aria-labelledby="def-h">
  <div class="wrap">
    ${marker(6, es ? 'Manejo defensivo' : 'Defensive driving')}
    <div class="split">
      <div class="col-6">
        <h2 id="def-h" class="pull">${es
          ? 'Puedes cumplir todas las normas y aun así estar en peligro por la decisión de otra persona.'
          : 'You can follow every rule and still be in danger because of someone else’s decision.'}</h2>
        <p class="lede mt-2">${es
          ? 'Manejar a la defensiva es anticipar ese error: dejar espacio, mirar dos veces, no asumir que te vieron. No te hace responsable de la imprudencia ajena. Te da tiempo para salir de ella.'
          : 'Defensive driving means anticipating that mistake: leaving space, looking twice, never assuming you have been seen. It does not make you responsible for someone else’s recklessness. It gives you time to get out of its way.'}</p>
        <ul class="link-list">${['blind-spots', 'following-distance', 'watch-for-motorcycles'].map(lessonLink)}</ul>
        <div class="btn-row">${button(href(lang, 'defensive'), es ? 'Manejo defensivo' : 'Defensive driving', 'solid')}</div>
      </div>
      <div class="col-6">${diagram('blind-spots', lang)}</div>
    </div>
  </div>
</section>

<section class="section theme-sand family" aria-labelledby="fam-h">
  <div class="wrap split">
    <div class="col-7">
      ${marker(7, es ? 'Familias y pasajeros' : 'Families and passengers')}
      <h2 id="fam-h" class="display">${es
        ? '<span class="line">Tu familia</span><span class="line">te espera.</span>'
        : '<span class="line">Your family</span><span class="line">is waiting.</span>'}</h2>
      <p class="display display--lg mt-1" style="color:var(--teal)">${es ? 'Conduce como si lo recordaras.' : 'Drive like it.'}</p>
    </div>
    <div class="col-5 family__panel">
      ${photo('home-family', lang, '')}
      <p>${es
        ? 'Los niños, las personas mayores y los pasajeros confían en quien maneja. Cinturón en cada asiento, niños atrás y bien sujetos, casco para cada persona en la moto y nunca más de dos.'
        : 'Children, older people and passengers trust whoever is driving. A seatbelt in every seat, children in the back and properly restrained, a helmet for everyone on the motorcycle and never more than two.'}</p>
      <ul class="link-list">${['seatbelts-children', 'moto-passengers', 'pedestrian-safety'].map(lessonLink)}</ul>
      <div class="btn-row">${button(href(lang, 'families'), es ? 'Familias y pasajeros' : 'Families and passengers', 'solid')}</div>
    </div>
  </div>
</section>

<section class="section theme-white" aria-labelledby="check-h">
  <div class="wrap split">
    <div class="col-5">
      ${marker(8, es ? 'Antes de salir' : 'Before you ride')}
      <h2 id="check-h">${es ? 'Treinta segundos que pueden salvarte el día.' : 'Thirty seconds that can save your day.'}</h2>
      <p>${es ? 'Revisa esta lista antes de cada viaje en moto. Marca cada punto: nada se guarda ni se envía.' : 'Run through this list before every motorcycle trip. Tick each item: nothing is saved or sent.'}</p>
      <p><a class="text-link" href="${lessonUrl(lang, L('pre-trip-check'))}">${es ? 'Lección completa: preparar tu vehículo' : 'Full lesson: preparing your vehicle'} ${icon('arrow')}</a></p>
    </div>
    <div class="col-7">${checklist(lang, 'home-preride', es ? 'Lista antes de arrancar' : 'Pre-ride checklist', preRide[lang])}</div>
  </div>
</section>

<section class="section theme-forest" aria-labelledby="comm-h">
  <div class="wrap">
    ${marker(9, es ? 'Comunidad' : 'Community')}
    <div class="split">
      <h2 id="comm-h" class="display display--2xl col-7">${es ? 'La seguridad vial se construye entre todos.' : 'Road safety is built together.'}</h2>
      <p class="lede muted col-5">${es ? 'No se trata de señalar a nadie. Se trata de que cada persona que sale de casa vuelva. Así puedes ayudar:' : 'This is not about pointing fingers. It is about everyone who leaves home getting back. Here is how you can help:'}</p>
    </div>
    <ol class="actions" style="border-color:var(--line-light)">
      ${actions.map(([h, p], i) => `<li style="border-color:var(--line-light)"><span class="num" style="color:var(--lime)">${String(i + 1).padStart(2, '0')}</span><h3>${esc(h)}</h3><p style="color:rgba(250,250,247,.8)">${esc(p)}</p></li>`)}
    </ol>
    <div class="btn-row">${button(href(lang, 'community'), es ? 'Participa' : 'Get involved', 'primary')}${button(href(lang, 'campaigns'), es ? 'Materiales de campaña' : 'Campaign materials', 'ghost')}</div>
  </div>
</section>

<section class="section theme-white" aria-labelledby="res-h">
  <div class="wrap split">
    <div class="col-4">
      ${marker(10, es ? 'Recursos' : 'Resources')}
      <h2 id="res-h">${es ? 'Fuentes oficiales, siempre a mano.' : 'Official sources, always to hand.'}</h2>
      <p>${es ? 'Para trámites, licencias y la ley vigente, la fuente es siempre la autoridad. Aquí reunimos los enlaces oficiales y explicamos lo que hemos podido verificar, con fecha.' : 'For procedures, licences and current law, the source is always the authority. Here we gather the official links and explain what we have been able to verify, with dates.'}</p>
      <div class="btn-row">${button(href(lang, 'law'), es ? 'Ley y recursos' : 'Law and resources', 'solid')}</div>
    </div>
    <div class="col-8">
      <ul class="resource-list">
        ${officialSources.slice(0, 5).map((o) => `<li>${ext(o.url, o[lang], lang)}<p>${esc(es ? o.noteEs : o.noteEn)}</p></li>`)}
      </ul>
    </div>
  </div>
</section>

<section class="section theme-deep" aria-labelledby="vision-h">
  ${islandMap('hero__map')}
  <div class="wrap">
    ${marker(11, es ? 'Visión' : 'Vision')}
    <h2 id="vision-h" class="display display--2xl" style="max-width:16ch">${es ? 'Nacido en Roatán. Creado para salvar vidas en todas partes.' : 'Built on Roatán. Designed to save lives everywhere.'}</h2>
    <div class="layers">
      <div class="layer layer--universal"><span class="layer__tag">${es ? 'Universal' : 'Universal'}</span><h3>${es ? 'Educación que sirve en cualquier lugar' : 'Education that works anywhere'}</h3><p class="muted">${es ? 'Casco, manejo defensivo, velocidad, pasajeros, peatones.' : 'Helmets, defensive driving, speed, passengers, pedestrians.'}</p></div>
      <div class="layer layer--local"><span class="layer__tag">${es ? 'Local' : 'Local'}</span><h3>${es ? 'Lo que cambia en cada lugar' : 'What changes from place to place'}</h3><p class="muted">${es ? 'Ley de tránsito, licencias, emergencias, condiciones de la vía, datos.' : 'Traffic law, licensing, emergencies, road conditions, data.'}</p></div>
    </div>
    <div class="btn-row">${button(href(lang, 'vision'), es ? 'La visión completa' : 'The full vision', 'primary')}</div>
  </div>
</section>

<section class="section theme-forest closing" aria-labelledby="close-h">
  <div class="wrap">
    <span class="lane lane--short" aria-hidden="true" style="display:block;margin-bottom:2rem"></span>
    <h2 id="close-h" class="display">${es
      ? '<span class="line">Llegar tarde</span><span class="line">es mejor que</span><span class="line accent">no llegar.</span>'
      : '<span class="line">Arriving late</span><span class="line">beats never</span><span class="line accent">arriving.</span>'}</h2>
    <div class="btn-row">
      ${button(href(lang, 'learn'), es ? 'Empieza a aprender' : 'Start learning', 'primary')}
      ${button(href(lang, 'campaigns'), es ? 'Comparte la campaña' : 'Share the campaign', 'ghost')}
    </div>
  </div>
</section>`;

  return {
    title: es ? 'Roatán Vial — Seguridad vial para todos' : 'Roatán Vial — Road safety for everyone',
    description: es
      ? 'Educación vial gratuita desde Roatán, Honduras: seguridad en motocicleta, uso del casco, manejo defensivo, señales de tránsito y escenarios interactivos. Una isla. Un camino. Cada vida cuenta.'
      : 'Free road-safety education from Roatán, Honduras: motorcycle and helmet safety, defensive driving, road signs and interactive scenarios. One island. One road. Every life matters.',
    body,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Roatán Vial',
      url: config.siteUrl + href(lang, 'home').replace(config.basePath, ''),
      inLanguage: es ? 'es' : 'en',
      description: es ? 'Iniciativa comunitaria e independiente de educación vial nacida en Roatán, Honduras.' : 'An independent, community road-safety education initiative from Roatán, Honduras.'
    }
  };
}
