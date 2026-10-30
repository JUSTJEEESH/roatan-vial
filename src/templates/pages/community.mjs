import { t, config } from '../../site.mjs';
import { campaigns } from '../../content/campaigns.mjs';
import { esc, html, href, asset, icon, marker, button } from '../lib.mjs';
import { pageHero } from '../components.mjs';
import { islandMap } from './home.mjs';
import { lessonUrl } from './lessons.mjs';

const contactLine = (lang) => {
  const es = lang === 'es';
  if (config.contactEmail) return `<a href="mailto:${config.contactEmail}">${config.contactEmail}</a>`;
  return es ? 'Todavía no hay un canal público de contacto. Lo publicaremos en la página de contacto en cuanto exista.' : 'There is no public contact channel yet. It will be published on the contact page as soon as it exists.';
};

export function communityPage(lang, lessons) {
  const es = lang === 'es';
  const L = (id) => lessons.find((l) => l.id === id);
  const now = es ? [
    ['Comparte los materiales', 'Cada lección tiene un enlace para compartir por WhatsApp o Facebook. Envíala a quien la necesita.'],
    ['Organiza una charla', 'Usa las lecciones, los escenarios y el reto como guion para una charla en tu escuela, iglesia, trabajo o patronato. Abajo tienes un formato sugerido.'],
    ['Usa las campañas', 'Descarga los carteles y las imágenes para redes. Imprímelos para tu negocio, tu parada o tu escuela.'],
    ['Pon el ejemplo', 'Casco abrochado, cinturón, sin teléfono, sin piques. Lo que haces en la vía enseña más que cualquier cartel.']
  ] : [
    ['Share the materials', 'Every lesson has a link to share on WhatsApp or Facebook. Send it to someone who needs it.'],
    ['Host a talk', 'Use the lessons, scenarios and challenge as a script for a talk at your school, church, workplace or neighbourhood association. A suggested format is below.'],
    ['Use the campaigns', 'Download the posters and social images. Print them for your business, bus stop or school.'],
    ['Lead by example', 'Helmet fastened, seatbelt on, no phone, no racing. What you do on the road teaches more than any poster.']
  ];
  const future = es ? [
    ['Apoyo a escuelas', 'Material adaptado a cada edad y sesiones con docentes.'],
    ['Patrocinio de cascos y materiales', 'Para empresas y personas que quieran aportar cascos certificados o impresiones.'],
    ['Embajadores comunitarios', 'Personas formadas para llevar el mensaje a su comunidad.'],
    ['Solicitar una presentación', 'Para grupos, empresas o instituciones.'],
    ['Reporte de peligros en la vía', 'Una forma responsable de señalar lugares peligrosos.']
  ] : [
    ['School support', 'Age-appropriate material and sessions with teachers.'],
    ['Sponsoring helmets and materials', 'For businesses and individuals who want to provide certified helmets or printing.'],
    ['Community ambassadors', 'People trained to carry the message to their community.'],
    ['Request a presentation', 'For groups, businesses or institutions.'],
    ['Road-hazard reporting', 'A responsible way to flag dangerous locations.']
  ];
  const sectors = es ? [
    ['Escuelas y colegios', 'Lecciones en clase, charlas para madres y padres, seguridad en la entrada y salida.'],
    ['Empleadores', 'Formación para quien se mueve en moto por trabajo; política de casco y sin teléfono.'],
    ['Hoteles', 'Información de seguridad para huéspedes que alquilan vehículos; formación para personal y transporte.'],
    ['Restaurantes y comercios', 'Seguridad para repartidores; carteles de campaña; no servir a quien va a manejar.'],
    ['Distribuidores de motos', 'Información de casco y ajuste en cada venta; lista antes de arrancar con cada moto.'],
    ['Transportistas', 'Taxis, mototaxis y buses: rebases, pasajeros, fatiga y atención a peatones.'],
    ['Organizaciones comunitarias', 'Charlas, campañas locales y embajadores.'],
    ['Autoridades locales', 'Cooperación en educación, datos y señalización, sin perder la independencia de la iniciativa.'],
    ['Servicios de emergencia', 'Orientación correcta sobre qué hacer ante un choque y cómo llamar al 911.'],
    ['Organizaciones de salud', 'Prevención, primeros auxilios y datos de lesiones con rigor.']
  ] : [
    ['Schools', 'Classroom lessons, talks for parents, safety at drop-off and pick-up.'],
    ['Employers', 'Training for staff who ride for work; helmet and no-phone policies.'],
    ['Hotels', 'Safety information for guests who rent vehicles; training for staff and transport.'],
    ['Restaurants and shops', 'Safety for delivery riders; campaign posters; not serving people who are about to drive.'],
    ['Motorcycle dealers', 'Helmet and fit information with every sale; a pre-ride checklist with every motorcycle.'],
    ['Transport providers', 'Taxis, mototaxis and buses: overtaking, passengers, fatigue and pedestrian awareness.'],
    ['Community organisations', 'Talks, local campaigns and ambassadors.'],
    ['Local authorities', 'Cooperation on education, data and signage, while keeping the initiative independent.'],
    ['Emergency services', 'Correct guidance on what to do after a crash and how to call 911.'],
    ['Health organisations', 'Prevention, first aid and rigorous injury data.']
  ];
  const agenda = es ? [
    ['10 min', 'Por qué estamos aquí', 'Presenta la idea central: el problema es el comportamiento peligroso; las personas son la razón.'],
    ['15 min', 'El casco', `Lección «${L('helmet-carried').es.title}» y demostración de ajuste con un casco real.`],
    ['15 min', 'Escenarios', 'Proyecta o lee dos escenarios. Que el grupo vote antes de ver la respuesta.'],
    ['10 min', 'Lista antes de arrancar', 'Recorran juntos los diez puntos.'],
    ['10 min', 'Compromiso', 'Cada persona elige un hábito que va a cambiar. Comparte el reto de 50 preguntas.']
  ] : [
    ['10 min', 'Why we are here', 'Introduce the core idea: dangerous behaviour is the problem; people are the reason.'],
    ['15 min', 'The helmet', `Lesson “${L('helmet-carried').en.title}” and a fit demonstration with a real helmet.`],
    ['15 min', 'Scenarios', 'Project or read two scenarios. Let the group vote before revealing the answer.'],
    ['10 min', 'Pre-ride checklist', 'Go through the ten points together.'],
    ['10 min', 'Commitment', 'Everyone picks one habit to change. Share the 50-question challenge.']
  ];

  const body = html`
${pageHero(lang, {
    eyebrow: es ? 'Comunidad' : 'Community',
    title: es ? 'La seguridad vial se construye entre todos' : 'Road safety is built together',
    lede: es ? 'Sin señalar a nadie. Con respeto, con datos y con ganas de que cada persona vuelva a casa.' : 'Without pointing fingers. With respect, with facts and with the will for everyone to get home.'
  })}
<section class="section theme-white">
  <div class="wrap">
    ${marker(1, es ? 'Puedes hacerlo hoy' : 'You can do it today')}
    <h2>${es ? 'Cuatro formas de ayudar ahora mismo' : 'Four ways to help right now'}</h2>
    <ol class="actions">${now.map(([h, p], i) => `<li><span class="num">${String(i + 1).padStart(2, '0')}</span><h3>${esc(h)}</h3><p>${esc(p)}</p></li>`)}</ol>
    <div class="btn-row">${button(href(lang, 'campaigns'), es ? 'Materiales de campaña' : 'Campaign materials', 'solid')}${button(href(lang, 'learn'), es ? 'Lecciones para compartir' : 'Lessons to share', 'ghost')}</div>
  </div>
</section>

<section class="section theme-sand" id="charla">
  <div class="wrap split">
    <div class="col-5">
      ${marker(2, es ? 'Formato de charla' : 'Talk format')}
      <h2>${es ? 'Una charla de una hora, lista para usar' : 'A one-hour talk, ready to use'}</h2>
      <p>${es ? 'No necesitas ser experto ni pedir permiso para usar estos materiales. Sí te pedimos que no cambies los datos ni las fuentes, y que no presentes la charla como oficial o certificada.' : 'You do not need to be an expert or ask permission to use these materials. We do ask you not to change facts or sources, and not to present the talk as official or certified.'}</p>
    </div>
    <div class="col-7">
      <div class="table-wrap" tabindex="0" role="region" aria-label="${es ? 'Tabla' : 'Table'}"><table>
        <caption class="visually-hidden">${es ? 'Agenda sugerida' : 'Suggested agenda'}</caption>
        <thead><tr><th scope="col">${es ? 'Tiempo' : 'Time'}</th><th scope="col">${es ? 'Bloque' : 'Block'}</th><th scope="col">${es ? 'Qué hacer' : 'What to do'}</th></tr></thead>
        <tbody>${agenda.map(([a, b, c]) => `<tr><td>${a}</td><td><strong>${esc(b)}</strong></td><td>${esc(c)}</td></tr>`)}</tbody>
      </table></div>
    </div>
  </div>
</section>

<section class="section theme-white" id="reporte">
  <div class="wrap split">
    <div class="col-6">
      ${marker(3, es ? 'Peligros en la vía' : 'Road hazards')}
      <h2>${es ? 'Reporte de peligros: todavía no' : 'Hazard reporting: not yet'}</h2>
      <p>${es
        ? 'Nos gustaría que la comunidad pudiera señalar lugares peligrosos: una curva sin señal, un hoyo, una parada sin visibilidad. Pero hoy no tenemos un sistema para recibir esos reportes, cuidarlos y darles seguimiento con las autoridades de forma responsable. Por eso no hay formulario: no vamos a simular que algo se envía cuando no llega a ningún lado.'
        : 'We would like the community to be able to flag dangerous places: an unsigned curve, a pothole, a bus stop with no visibility. But today we have no system to receive those reports, look after them and follow them up with the authorities responsibly. That is why there is no form: we will not pretend something is sent when it goes nowhere.'}</p>
      <p><span class="tag tag--future">${es ? 'Función futura' : 'Future feature'}</span></p>
      <p class="small muted">${es ? 'Cuando exista, pedirá solo lo necesario (ubicación, tipo de peligro, foto opcional del lugar, sin personas) y lo explicaremos en la política de privacidad antes de abrirlo.' : 'When it exists, it will ask only for what is needed (location, type of hazard, an optional photo of the place, without people) and we will explain it in the privacy policy before it opens.'}</p>
    </div>
    <div class="col-5 col-end">
      <div class="notice notice--emergency">${icon('phone')}<div><h3>${es ? '¿Es una emergencia?' : 'Is it an emergency?'}</h3><p>${es ? 'Un choque, una persona herida, un peligro inmediato en la vía: llama al <strong>911</strong>. Este sitio no recibe ni atiende emergencias.' : 'A crash, an injured person, an immediate danger on the road: call <strong>911</strong>. This website does not receive or handle emergencies.'}</p><p><a href="${lessonUrl(lang, L('road-emergency'))}">${es ? 'Qué hacer si presencias un choque' : 'What to do if you witness a crash'}</a></p></div></div>
    </div>
  </div>
</section>

<section class="section theme-forest">
  <div class="wrap">
    ${marker(4, es ? 'Próximamente' : 'Coming later')}
    <h2 class="display display--xl" style="max-width:20ch">${es ? 'Lo que queremos construir con la comunidad' : 'What we want to build with the community'}</h2>
    <p class="muted measure">${es ? 'Estas vías de participación aún no están abiertas. Las publicamos para ser transparentes sobre hacia dónde vamos.' : 'These ways to take part are not open yet. We list them to be transparent about where we are heading.'}</p>
    <ul class="link-list">${future.map(([h, p]) => `<li><div style="padding:1rem 0"><span class="link-list__title">${esc(h)}</span><span class="link-list__meta">${esc(p)}</span></div></li>`)}</ul>
  </div>
</section>

<section class="section theme-white" id="alianzas">
  <div class="wrap">
    ${marker(5, es ? 'Marco de alianzas' : 'Partnership framework')}
    <div class="split">
      <h2 class="col-6">${es ? 'Cómo podrían colaborar las organizaciones' : 'How organisations could collaborate'}</h2>
      <p class="col-5 col-end"><strong>${es ? 'Hoy no tenemos alianzas, patrocinadores ni avales.' : 'Today we have no partners, sponsors or endorsements.'}</strong> ${es ? 'Este marco describe cómo nos gustaría trabajar con cada sector. Cualquier colaboración futura se anunciará aquí, con nombre y alcance, solo cuando sea real.' : 'This framework describes how we would like to work with each sector. Any future collaboration will be announced here, with name and scope, only once it is real.'}</p>
    </div>
    <ul class="frame-list">${sectors.map(([h, p]) => `<li><strong>${esc(h)}</strong><span>${esc(p)}</span></li>`)}</ul>
    <p class="mt-2 small">${es ? 'Contacto para colaborar:' : 'Contact to collaborate:'} ${contactLine(lang)}</p>
  </div>
</section>`;
  return {
    title: es ? 'Participa: comunidad y seguridad vial' : 'Take part: community and road safety',
    description: es ? 'Comparte lecciones, organiza una charla con materiales gratuitos y usa las campañas de seguridad vial. Marco de colaboración para escuelas, empresas y organizaciones.' : 'Share lessons, host a talk with free materials and use the road-safety campaigns. A collaboration framework for schools, businesses and organisations.',
    body
  };
}

export function campaignsPage(lang) {
  const es = lang === 'es';
  const body = html`
${pageHero(lang, {
    eyebrow: es ? 'Campañas' : 'Campaigns',
    title: es ? 'Mensajes para compartir' : 'Messages to share',
    lede: es
      ? 'Siete mensajes cortos, directos y sin adornos. Descárgalos para redes sociales o imprímelos. Son gratuitos; te pedimos no alterar el texto ni añadir logotipos de terceros.'
      : 'Seven short, direct, no-frills messages. Download them for social media or print them. They are free; we ask you not to alter the text or add third-party logos.'
  })}
<div class="wrap">
  ${campaigns.map((c, i) => {
    const C = c[lang];
    const base = `campaigns/${c.id}-${lang}`;
    return html`<article class="campaign" id="${c.id}">
      <div class="campaign__art"><img src="${asset(base + '-square.png')}" width="1080" height="1080" alt="${esc(C.line.join(' '))} ${esc(C.support)}" loading="lazy" decoding="async"></div>
      <div>
        <p class="eyebrow" style="color:var(--teal-dark)">${es ? 'Campaña' : 'Campaign'} ${String(i + 1).padStart(2, '0')}</p>
        <h2 class="campaign__line">${esc(C.line.join(' '))}</h2>
        ${es ? `<p class="campaign__en" lang="en">${esc(c.en.line.join(' '))}</p>` : `<p class="campaign__en" lang="es">${esc(c.es.line.join(' '))}</p>`}
        <p>${esc(C.support)}</p>
        <div class="downloads">
          <a class="chip-btn" href="${asset(base + '-square.png')}" download>${icon('download')} ${es ? 'Publicación 1080×1080' : 'Post 1080×1080'}</a>
          <a class="chip-btn" href="${asset(base + '-story.png')}" download>${icon('download')} ${es ? 'Historia 1080×1920' : 'Story 1080×1920'}</a>
          <a class="chip-btn" href="${asset(base + '-poster.pdf')}" download>${icon('download')} ${es ? 'Cartel carta (PDF)' : 'Letter poster (PDF)'}</a>
        </div>
      </div>
    </article>`;
  })}
</div>
<section class="section theme-sand">
  <div class="wrap split">
    <div class="col-6"><h2>${es ? 'Cómo usar las campañas' : 'How to use the campaigns'}</h2>
      <ul>
        <li>${es ? 'Comparte el mensaje junto con el enlace a la lección relacionada.' : 'Share the message along with a link to the related lesson.'}</li>
        <li>${es ? 'No uses imágenes de choques, heridos o víctimas al lado de estos mensajes.' : 'Do not place images of crashes, injuries or victims next to these messages.'}</li>
        <li>${es ? 'No uses los mensajes para atacar a personas, grupos o comunidades.' : 'Do not use the messages to attack people, groups or communities.'}</li>
        <li>${es ? 'No los presentes como mensajes de gobierno ni de ninguna institución.' : 'Do not present them as messages from the government or any institution.'}</li>
      </ul>
    </div>
    <div class="col-5 col-end"><p>${es ? 'Las imágenes usan la identidad de Roatán Vial. Consulta la guía de marca para colores, tipografía y uso del logotipo.' : 'The images use the Roatán Vial identity. See the brand guide for colours, typography and logo use.'}</p>${button(href(lang, 'brand'), es ? 'Guía de marca' : 'Brand guide', 'solid')}</div>
  </div>
</section>`;
  return {
    title: es ? 'Campañas de seguridad vial para compartir' : 'Road-safety campaigns to share',
    description: es ? 'Descarga carteles e imágenes para redes: «El casco no es para llevarlo. Es para usarlo», «No es una carrera. Es tu vida» y más.' : 'Download posters and social images: “A helmet is not for carrying. It is for wearing”, “It is not a race. It is your life” and more.',
    body
  };
}

export function visionPage(lang) {
  const es = lang === 'es';
  const adopt = es ? [
    ['Adoptar el marco educativo', 'Usar las lecciones universales tal como están, en español o inglés.'],
    ['Adaptar los materiales', 'Ajustar ejemplos, términos y campañas a su realidad local.'],
    ['Completar la capa local', 'Investigar y documentar su propia ley, licencias, emergencias y datos, con fuentes y fechas.'],
    ['Crear campañas locales', 'Con su gente, su lenguaje y sus vías.'],
    ['Colaborar', 'Compartir mejoras, correcciones y lo aprendido.']
  ] : [
    ['Adopt the educational framework', 'Use the universal lessons as they are, in Spanish or English.'],
    ['Adapt the materials', 'Adjust examples, terms and campaigns to local reality.'],
    ['Complete the local layer', 'Research and document their own law, licensing, emergencies and data, with sources and dates.'],
    ['Create local campaigns', 'With their people, their language and their roads.'],
    ['Collaborate', 'Share improvements, corrections and lessons learned.']
  ];
  const measures = es
    ? ['Participación en las lecciones y el reto (sin rastrear a personas).', 'Mejora de conocimientos antes y después de una charla.', 'Charlas y talleres realizados y su asistencia.', 'Participación de la comunidad y de las escuelas.', 'Educación sobre el uso correcto del casco.', 'Cambios verificados en los resultados de seguridad vial, solo con datos oficiales y con un método claro.']
    : ['Participation in lessons and the challenge (without tracking individuals).', 'Knowledge gains before and after a talk.', 'Talks and workshops held, and attendance.', 'Community and school involvement.', 'Education on correct helmet use.', 'Verified changes in road-safety outcomes, only with official data and a clear method.'];
  const body = html`
<section class="hero" aria-labelledby="v-h">
  ${islandMap()}
  <div class="wrap">
    <div class="hero__descriptor"><span class="lane" aria-hidden="true"></span><p class="eyebrow mb-0">${es ? 'Visión' : 'Vision'}</p></div>
    <h1 id="v-h" class="display display--2xl" style="max-width:15ch">${es ? 'Nacido en Roatán. <span class="accent">Creado para salvar vidas en todas partes.</span>' : 'Built on Roatán. <span class="accent">Designed to save lives everywhere.</span>'}</h1>
    <p class="hero__sub">${es ? 'Empezamos en una isla porque es aquí donde vivimos. Pero lo que enseñamos sirve en cualquier comunidad donde una moto lleva a una familia al trabajo y a la escuela.' : 'We started on one island because this is where we live. But what we teach works in any community where a motorcycle takes a family to work and to school.'}</p>
  </div>
</section>
<section class="section theme-white">
  <div class="wrap">
    ${marker(1, es ? 'Dos capas' : 'Two layers')}
    <h2>${es ? 'Lo universal y lo local, por separado' : 'Universal and local, kept separate'}</h2>
    <p class="measure">${es ? 'La plataforma está construida para que otra comunidad pueda usarla sin empezar de cero. La educación universal se comparte; la información local se investiga y se verifica en cada lugar.' : 'The platform is built so another community can use it without starting from scratch. Universal education is shared; local information is researched and verified in each place.'}</p>
    <div class="layers" style="--line-light:var(--line)">
      <div class="layer" style="border-color:var(--teal)"><span class="layer__tag">${es ? 'Universal' : 'Universal'}</span><h3>${es ? 'Educación' : 'Education'}</h3><ul><li>${es ? 'Seguridad en motocicleta y uso del casco' : 'Motorcycle and helmet safety'}</li><li>${es ? 'Manejo defensivo' : 'Defensive driving'}</li><li>${es ? 'Velocidad y distancias' : 'Speed and distances'}</li><li>${es ? 'Pasajeros y familias' : 'Passengers and families'}</li><li>${es ? 'Peatones' : 'Pedestrians'}</li><li>${es ? 'Atención en la vía' : 'Road awareness'}</li></ul></div>
      <div class="layer" style="border-color:var(--line)"><span class="layer__tag" style="background:var(--sand)">${es ? 'Local · Honduras' : 'Local · Honduras'}</span><h3>${es ? 'Información local' : 'Local information'}</h3><ul><li>${es ? 'Ley de tránsito' : 'Traffic law'}</li><li>${es ? 'Licencias' : 'Licensing'}</li><li>${es ? 'Contactos de emergencia' : 'Emergency contacts'}</li><li>${es ? 'Condiciones de la vía' : 'Road conditions'}</li><li>${es ? 'Estadísticas locales' : 'Local statistics'}</li><li>${es ? 'Recursos locales' : 'Local resources'}</li></ul></div>
    </div>
  </div>
</section>
<section class="section theme-sand">
  <div class="wrap split">
    <div class="col-5">${marker(2, es ? 'Para otras comunidades' : 'For other communities')}<h2>${es ? 'Cómo podría adoptarse' : 'How it could be adopted'}</h2><p>${es ? 'Hoy Roatán Vial no opera en otros lugares ni tiene acuerdos con otras islas, municipios u organizaciones. Este es el camino que imaginamos.' : 'Today Roatán Vial does not operate anywhere else and has no agreements with other islands, municipalities or organisations. This is the path we envisage.'}</p></div>
    <div class="col-7"><ol class="actions" style="grid-template-columns:1fr">${adopt.map(([h, p], i) => `<li><span class="num">${String(i + 1).padStart(2, '0')}</span><h3>${esc(h)}</h3><p>${esc(p)}</p></li>`)}</ol></div>
  </div>
</section>
<section class="section theme-white">
  <div class="wrap split">
    <div class="col-5">${marker(3, es ? 'Cómo mediremos' : 'How we will measure')}<h2>${es ? 'Éxito, medido con honestidad' : 'Success, measured honestly'}</h2><p>${es ? 'Nunca diremos que bajaron las muertes sin evidencia confiable. Esto es lo que mediremos:' : 'We will never say deaths have fallen without reliable evidence. This is what we will measure:'}</p></div>
    <div class="col-7"><ul class="mistakes">${measures.map((m) => `<li>${icon('check')}<span>${esc(m)}</span></li>`)}</ul></div>
  </div>
</section>
<section class="section theme-forest">
  <div class="wrap split split--center">
    <div class="col-7"><h2 class="display display--xl">${es ? '¿Tu comunidad quiere hacer algo parecido?' : 'Does your community want to do something similar?'}</h2><p class="muted">${contactLine(lang)}</p></div>
    <div class="col-5"><div class="btn-row">${button(href(lang, 'contact'), es ? 'Contacto' : 'Contact', 'primary')}</div></div>
  </div>
</section>`;
  return {
    title: es ? 'Visión: nacido en Roatán, para todas partes' : 'Vision: built on Roatán, for everywhere',
    description: es ? 'Un modelo de educación vial replicable: educación universal compartida e información local verificada. Cómo otras comunidades podrían adoptarlo.' : 'A replicable road-safety education model: shared universal education and verified local information. How other communities could adopt it.',
    body
  };
}

export function contactPage(lang) {
  const es = lang === 'es';
  const body = html`
${pageHero(lang, {
    eyebrow: es ? 'Contacto' : 'Contact',
    title: es ? 'Contacto y colaboración' : 'Contact and collaboration',
    lede: es ? 'Escuelas, organizaciones, empresas y personas que quieran colaborar, o que hayan encontrado un error.' : 'Schools, organisations, businesses and people who want to collaborate, or who have spotted a mistake.'
  })}
<section class="section theme-white">
  <div class="wrap split">
    <div class="col-6">
      <div class="notice notice--emergency">${icon('phone')}<div><h2>${es ? 'Emergencias: 911' : 'Emergencies: 911'}</h2><p>${es ? 'Este sitio no atiende emergencias ni recibe denuncias. Ante un choque o un peligro inmediato, llama al 911.' : 'This website does not handle emergencies or receive complaints. For a crash or an immediate danger, call 911.'}</p></div></div>
      <h2 class="mt-3">${es ? 'Cómo contactarnos' : 'How to reach us'}</h2>
      <p>${config.contactEmail
        ? (es ? `Escríbenos a <a href="mailto:${config.contactEmail}">${config.contactEmail}</a>.` : `Write to us at <a href="mailto:${config.contactEmail}">${config.contactEmail}</a>.`)
        : (es ? 'Todavía no hemos abierto un canal público de contacto. Preferimos no publicar un formulario que no tenga a nadie detrás para responder. En cuanto haya una dirección de correo institucional atendida, la publicaremos aquí.' : 'We have not opened a public contact channel yet. We would rather not publish a form with nobody behind it to reply. As soon as there is a staffed organisational email address, we will publish it here.')}</p>
      <p class="small muted">${es ? 'Por privacidad, la iniciativa no publica nombres ni datos personales de quienes la impulsan.' : 'For privacy, the initiative does not publish the names or personal details of the people behind it.'}</p>
    </div>
    <div class="col-5 col-end">
      <h2>${es ? 'Nos interesa saber de' : 'We would like to hear about'}</h2>
      <ul class="mistakes">
        ${(es ? ['Escuelas que quieran usar las lecciones.', 'Organizaciones interesadas en colaborar (ver el marco de alianzas).', 'Correcciones: un dato legal desactualizado, una fuente rota, una traducción mejorable.', 'Comunidades fuera de Roatán interesadas en el modelo.'] : ['Schools that want to use the lessons.', 'Organisations interested in collaborating (see the partnership framework).', 'Corrections: an out-of-date legal point, a broken source, a translation that could be better.', 'Communities beyond Roatán interested in the model.']).map((x) => `<li>${icon('check')}<span>${esc(x)}</span></li>`).join('')}
      </ul>
      <p><a class="text-link" href="${href(lang, 'community')}#alianzas">${es ? 'Marco de alianzas' : 'Partnership framework'} ${icon('arrow')}</a></p>
    </div>
  </div>
</section>`;
  return {
    title: es ? 'Contacto' : 'Contact',
    description: es ? 'Cómo contactar a Roatán Vial para colaborar o enviar correcciones. Para emergencias, llama al 911.' : 'How to contact Roatán Vial to collaborate or send corrections. For emergencies, call 911.',
    body
  };
}
