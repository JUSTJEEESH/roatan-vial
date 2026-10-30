import { t, config } from '../../site.mjs';
import { esc, html, href, asset, icon, marker, button, formatDate } from '../lib.mjs';
import { pageHero } from '../components.mjs';

export function aboutPage(lang) {
  const es = lang === 'es';
  const is = es
    ? ['Una iniciativa comunitaria e independiente de educación vial.', 'Nacida en Roatán, para la isla y para quien quiera usar lo que hacemos.', 'Gratuita, en español y en inglés.', 'Basada en información verificada y con fuentes.']
    : ['An independent, community road-safety education initiative.', 'Born on Roatán, for the island and for anyone who wants to use what we make.', 'Free, in Spanish and English.', 'Based on verified, sourced information.'];
  const isnt = es
    ? ['No es una entidad de gobierno ni de la policía.', 'No es una organización política.', 'No es una escuela de manejo ni emite certificados.', 'No es una iniciativa de un grupo contra otro.', 'No tiene, por ahora, alianzas, patrocinadores, avales ni registro como organización.']
    : ['It is not a government or police body.', 'It is not a political organisation.', 'It is not a driving school and issues no certificates.', 'It is not one group’s initiative against another.', 'It does not, for now, have partners, sponsors, endorsements or registration as an organisation.'];
  const values = es ? [
    ['Respeto', 'Hablamos de comportamientos, nunca contra personas o comunidades.'],
    ['Claridad', 'Mensajes directos, sin sermones ni tecnicismos.'],
    ['Verdad', 'Sin cifras inventadas, sin historias fabricadas, sin promesas que no podamos cumplir.'],
    ['Utilidad', 'Cada página tiene que servir para algo concreto en la vía.']
  ] : [
    ['Respect', 'We talk about behaviours, never against people or communities.'],
    ['Clarity', 'Direct messages, no lectures and no jargon.'],
    ['Truth', 'No invented figures, no fabricated stories, no promises we cannot keep.'],
    ['Usefulness', 'Every page has to be good for something concrete on the road.']
  ];
  const body = html`
${pageHero(lang, {
    eyebrow: es ? 'Nosotros' : 'About',
    title: es ? 'Una isla. Un camino. <span class="accent">Cada vida cuenta.</span>' : 'One island. One road. <span class="accent">Every life matters.</span>',
    display: true,
    lede: es ? 'Por qué existe Roatán Vial, qué es y qué no es.' : 'Why Roatán Vial exists, what it is and what it is not.'
  })}
<section class="section theme-white">
  <div class="wrap split">
    <div class="col-6">
      ${marker(1, es ? 'Misión' : 'Mission')}
      <p class="big-statement">${es ? 'Reducir las lesiones y muertes evitables en la vía con educación accesible, orientación práctica, participación comunitaria y cooperación constructiva con las organizaciones y autoridades correspondientes.' : 'To reduce preventable road injuries and deaths through accessible education, practical safety guidance, community involvement and constructive cooperation with relevant organisations and authorities.'}</p>
    </div>
    <div class="col-5 col-end">
      ${marker(2, es ? 'Visión' : 'Vision')}
      <p class="lede">${es ? 'Crear un modelo de educación vial que se pueda replicar y que algún día ayude a otras islas, municipios y países.' : 'To create a replicable road-safety education model that can one day help other islands, municipalities and countries.'}</p>
      <p><a class="text-link" href="${href(lang, 'vision')}">${es ? 'La visión completa' : 'The full vision'} ${icon('arrow')}</a></p>
    </div>
  </div>
</section>
<section class="section theme-sand">
  <div class="wrap split">
    <div class="col-6"><h2>${es ? 'Qué es' : 'What it is'}</h2><ul class="mistakes">${is.map((x) => `<li>${icon('check')}<span>${esc(x)}</span></li>`)}</ul></div>
    <div class="col-6"><h2>${es ? 'Qué no es' : 'What it is not'}</h2><ul class="mistakes">${isnt.map((x) => `<li>${icon('x')}<span>${esc(x)}</span></li>`)}</ul></div>
  </div>
</section>
<section class="section theme-forest">
  <div class="wrap">
    ${marker(3, es ? 'Principio' : 'Principle')}
    <p class="display display--2xl" style="max-width:18ch">${es ? 'El problema es el comportamiento peligroso. <span class="accent">Las personas son la razón por la que nos importa.</span>' : 'Dangerous behaviour is the problem. <span class="accent">People are the reason we care.</span>'}</p>
    <ol class="actions" style="border-color:var(--line-light)">${values.map(([h, p], i) => `<li style="border-color:var(--line-light)"><span class="num" style="color:var(--lime)">${String(i + 1).padStart(2, '0')}</span><h3>${esc(h)}</h3><p style="color:rgba(250,250,247,.8)">${esc(p)}</p></li>`)}</ol>
  </div>
</section>
<section class="section theme-white">
  <div class="wrap split">
    <div class="col-6"><h2>${es ? 'Para toda la isla' : 'For the whole island'}</h2><p>${es ? 'En la vía nos encontramos todos: quien va en moto al trabajo, quien maneja un taxi, quien camina a la escuela, quien llegó ayer y quien nació aquí. La seguridad vial no divide entre residentes y visitantes, entre moto y carro, ni entre comunidades. Por eso el sitio está completo en español y en inglés, las dos lenguas que se hablan en la isla.' : 'On the road we all meet: the person riding to work, the taxi driver, the child walking to school, the person who arrived yesterday and the person born here. Road safety does not divide residents from visitors, motorcycles from cars, or one community from another. That is why the site is complete in both Spanish and English, the two languages spoken on the island.'}</p></div>
    <div class="col-5 col-end"><h2>${es ? 'Quién está detrás' : 'Who is behind it'}</h2><p>${es ? 'Roatán Vial es impulsada por personas de la comunidad. Por decisión propia, no publicamos nombres ni datos personales: el mensaje importa más que quién lo dice.' : 'Roatán Vial is driven by people from the community. By choice, we do not publish names or personal details: the message matters more than the messenger.'}</p>${button(href(lang, 'contact'), es ? 'Contacto' : 'Contact', 'solid')}</div>
  </div>
</section>`;
  return {
    title: es ? 'Sobre la iniciativa' : 'About the initiative',
    description: es ? 'Roatán Vial es una iniciativa comunitaria e independiente de educación vial nacida en Roatán, Honduras. Misión, visión, qué es y qué no es.' : 'Roatán Vial is an independent, community road-safety education initiative from Roatán, Honduras. Mission, vision, what it is and what it is not.',
    body
  };
}

export function privacyPage(lang) {
  const es = lang === 'es';
  const body = html`
${pageHero(lang, { eyebrow: es ? 'Privacidad' : 'Privacy', title: es ? 'Política de privacidad' : 'Privacy policy', lede: es ? 'Corta, porque recogemos muy poco: nada.' : 'Short, because we collect very little: nothing.', meta: `<span>${es ? 'Vigente desde' : 'Effective from'} ${formatDate(config.lastReviewed, lang)}</span>` })}
<section class="section theme-white"><div class="wrap prose">
  <h2>${es ? 'Lo que este sitio hace' : 'What this website does'}</h2>
  <ul>
    <li>${es ? '<strong>No tiene cuentas de usuario,</strong> registro ni inicio de sesión.' : '<strong>It has no user accounts,</strong> sign-up or log-in.'}</li>
    <li>${es ? '<strong>No tiene formularios</strong> que envíen datos a ningún lugar.' : '<strong>It has no forms</strong> that send data anywhere.'}</li>
    <li>${es ? '<strong>No usa cookies,</strong> ni de análisis ni de publicidad.' : '<strong>It uses no cookies,</strong> analytics or advertising.'}</li>
    <li>${es ? '<strong>No usa herramientas de análisis ni rastreo</strong> de terceros.' : '<strong>It uses no third-party analytics or tracking</strong> tools.'}</li>
    <li>${es ? '<strong>No carga recursos de terceros:</strong> las fuentes tipográficas, imágenes y código se sirven desde el propio sitio.' : '<strong>It loads no third-party resources:</strong> fonts, images and code are served from the site itself.'}</li>
  </ul>
  <h2>${es ? 'Reto, escenarios y listas' : 'Challenge, scenarios and checklists'}</h2>
  <p>${es ? 'Tus respuestas en el reto, los escenarios, las pruebas de las lecciones y las listas interactivas se procesan solo en tu navegador, mientras la página está abierta. No se guardan en tu dispositivo ni se envían a ningún servidor. Al recargar o cerrar la página, se borran.' : 'Your answers in the challenge, scenarios, lesson checks and interactive checklists are processed only in your browser while the page is open. They are not stored on your device or sent to any server. When you reload or close the page, they are gone.'}</p>
  <h2>${es ? 'Botones para compartir' : 'Share buttons'}</h2>
  <p>${es ? 'Los botones de WhatsApp y Facebook son enlaces normales: no cargan nada de esos servicios hasta que tú decides pulsarlos. Al hacerlo, pasas a su sitio y se aplican sus propias políticas.' : 'The WhatsApp and Facebook buttons are plain links: nothing from those services loads until you choose to click them. When you do, you go to their site and their own policies apply.'}</p>
  <h2>${es ? 'Enlaces externos' : 'External links'}</h2>
  <p>${es ? 'Enlazamos a fuentes oficiales y periodísticas. Esos sitios tienen sus propias políticas de privacidad.' : 'We link to official and news sources. Those sites have their own privacy policies.'}</p>
  <h2>${es ? 'Alojamiento' : 'Hosting'}</h2>
  <p>${es ? 'Como cualquier sitio web, el servicio de alojamiento puede registrar datos técnicos básicos (como la dirección IP y la página solicitada) para funcionar y protegerse. Cuando el sitio se publique, indicaremos aquí el proveedor de alojamiento y enlazaremos su política.' : 'Like any website, the hosting service may log basic technical data (such as IP address and the page requested) to operate and protect itself. When the site goes live, we will name the hosting provider here and link to its policy.'}</p>
  <h2>${es ? 'Cambios' : 'Changes'}</h2>
  <p>${es ? 'Si en el futuro añadimos algo que trate datos (por ejemplo, un reporte de peligros, un formulario de contacto o estadísticas de visitas respetuosas de la privacidad), actualizaremos esta política antes de activarlo y explicaremos qué datos, para qué y por cuánto tiempo.' : 'If we ever add something that handles data (for example, hazard reporting, a contact form or privacy-respecting visit statistics), we will update this policy before switching it on and explain what data, why and for how long.'}</p>
</div></section>`;
  return { title: es ? 'Política de privacidad' : 'Privacy policy', description: es ? 'Roatán Vial no usa cookies, análisis ni formularios y no recoge datos personales.' : 'Roatán Vial uses no cookies, analytics or forms and collects no personal data.', body };
}

export function accessibilityPage(lang) {
  const es = lang === 'es';
  const body = html`
${pageHero(lang, { eyebrow: es ? 'Accesibilidad' : 'Accessibility', title: es ? 'Declaración de accesibilidad' : 'Accessibility statement', lede: es ? 'La seguridad vial es para todos. El sitio también.' : 'Road safety is for everyone. So is this website.' })}
<section class="section theme-white"><div class="wrap prose">
  <h2>${es ? 'Nuestro objetivo' : 'Our goal'}</h2>
  <p>${es ? 'Buscamos cumplir el nivel AA de las Pautas de Accesibilidad para el Contenido Web (WCAG) 2.2.' : 'We aim to meet Web Content Accessibility Guidelines (WCAG) 2.2 level AA.'}</p>
  <h2>${es ? 'Lo que hemos hecho' : 'What we have done'}</h2>
  <ul>
    <li>${es ? 'HTML semántico, encabezados ordenados y regiones identificadas.' : 'Semantic HTML, ordered headings and labelled regions.'}</li>
    <li>${es ? 'Navegación completa con teclado, enlace para saltar al contenido y foco visible.' : 'Full keyboard navigation, a skip link and visible focus.'}</li>
    <li>${es ? 'Tipografía Atkinson Hyperlegible Next, diseñada para personas con baja visión.' : 'Atkinson Hyperlegible Next typeface, designed for readers with low vision.'}</li>
    <li>${es ? 'Contraste de color revisado para texto y controles.' : 'Colour contrast checked for text and controls.'}</li>
    <li>${es ? 'Diagramas con descripción y con leyenda en texto, no solo en la imagen.' : 'Diagrams with a description and a text legend, not just the image.'}</li>
    <li>${es ? 'Interacciones (reto, escenarios, listas) operables con teclado y anunciadas a lectores de pantalla.' : 'Interactions (challenge, scenarios, checklists) operable by keyboard and announced to screen readers.'}</li>
    <li>${es ? 'Respeto a la preferencia de movimiento reducido del sistema.' : 'Respect for the system’s reduced-motion preference.'}</li>
    <li>${es ? 'Controles táctiles de al menos 44 píxeles.' : 'Touch targets of at least 44 pixels.'}</li>
    <li>${es ? 'Contenido completo en español y en inglés.' : 'Full content in Spanish and English.'}</li>
  </ul>
  <h2>${es ? 'Limitaciones conocidas' : 'Known limitations'}</h2>
  <ul>
    <li>${es ? 'Las imágenes de campaña descargables contienen el texto como imagen; el mismo texto aparece en la página junto a cada una.' : 'Downloadable campaign images contain text as an image; the same text appears on the page next to each one.'}</li>
    <li>${es ? 'El sitio no incluye video por ahora. Si lo añadimos, tendrá subtítulos y transcripción.' : 'The site has no video for now. If we add any, it will have captions and a transcript.'}</li>
    <li>${es ? 'Aún no se ha realizado una prueba con personas usuarias de tecnologías de apoyo.' : 'Testing with users of assistive technology has not yet been carried out.'}</li>
  </ul>
  <h2>${es ? 'Cuéntanos' : 'Tell us'}</h2>
  <p>${es ? 'Si algo no funciona para ti, queremos saberlo.' : 'If something does not work for you, we want to know.'} <a href="${href(lang, 'contact')}">${es ? 'Contacto' : 'Contact'}</a>.</p>
  <p class="small muted">${es ? 'Última revisión' : 'Last reviewed'}: ${formatDate(config.lastReviewed, lang)}</p>
</div></section>`;
  return { title: es ? 'Declaración de accesibilidad' : 'Accessibility statement', description: es ? 'Compromiso de accesibilidad de Roatán Vial: WCAG 2.2 AA, navegación con teclado, contraste y contenido bilingüe.' : 'Roatán Vial’s accessibility commitment: WCAG 2.2 AA, keyboard navigation, contrast and bilingual content.', body };
}

export function brandPage(lang) {
  const es = lang === 'es';
  const colors = [
    ['Verde bosque', 'Forest green', '#123D38', es ? 'Color principal. Fondos, encabezado, textos grandes.' : 'Primary colour. Backgrounds, header, large text.'],
    ['Carbón', 'Charcoal', '#202A28', es ? 'Texto principal.' : 'Main text.'],
    ['Blanco cálido', 'Warm white', '#FAFAF7', es ? 'Fondo de lectura.' : 'Reading background.'],
    ['Arena', 'Sand', '#F3EBDD', es ? 'Fondos secundarios.' : 'Secondary backgrounds.'],
    ['Turquesa', 'Teal', '#197D78', es ? 'Enlaces y acentos sobre fondo claro.' : 'Links and accents on light backgrounds.'],
    ['Lima de seguridad', 'Safety lime', '#D7E65A', es ? 'Solo acento, sobre verde o carbón. Nunca texto sobre blanco.' : 'Accent only, on green or charcoal. Never text on white.'],
    ['Gris', 'Muted grey', '#69736F', es ? 'Texto secundario (usar #5F6965 sobre arena).' : 'Secondary text (use #5F6965 on sand).'],
    ['Coral', 'Coral', '#E77C66', es ? 'Acento de advertencia, con moderación. Para texto, #B4462F.' : 'Warning accent, sparingly. For text, #B4462F.']
  ];
  const logos = [
    ['logo-primary-dark.svg', es ? 'Principal, sobre verde' : 'Primary, on green', '#123D38'],
    ['logo-primary-light.svg', es ? 'Principal, sobre claro' : 'Primary, on light', '#F3EBDD'],
    ['logo-horizontal-reverse.svg', es ? 'Horizontal, invertido' : 'Horizontal, reversed', '#123D38'],
    ['logo-horizontal-light.svg', es ? 'Horizontal, sobre claro' : 'Horizontal, on light', '#FAFAF7'],
    ['symbol-forest.svg', es ? 'Símbolo compacto' : 'Compact symbol', '#FAFAF7'],
    ['symbol-lime.svg', es ? 'Símbolo, versión lima' : 'Symbol, lime version', '#FAFAF7'],
    ['logo-horizontal-mono-black.svg', es ? 'Una tinta, negro' : 'One colour, black', '#FAFAF7'],
    ['avatar.png', es ? 'Perfil de redes sociales' : 'Social profile image', '#FAFAF7']
  ];
  const body = html`
${pageHero(lang, { eyebrow: es ? 'Marca' : 'Brand', title: es ? 'Guía básica de marca' : 'Basic brand guide', lede: es ? 'Cómo se ve y cómo se usa la identidad de Roatán Vial.' : 'How the Roatán Vial identity looks and how to use it.' })}
<section class="section theme-white">
  <div class="wrap split">
    <div class="col-5">${marker(1, es ? 'La idea' : 'The idea')}<h2>${es ? 'El camino lleva a alguien' : 'The road leads to someone'}</h2></div>
    <div class="col-6 col-end"><p>${es ? 'El símbolo son tres rayas de la línea central de una carretera que suben en una curva suave, como la vía principal de una isla larga y estrecha, y terminan en un punto: una persona, alguien que espera en casa. El acento de la Á de ROATÁN es otra raya de carretera. La identidad une camino, isla, movimiento, dirección y vidas humanas, sin dibujos literales.' : 'The symbol is three centre-line road dashes rising along a gentle curve, like the main road of a long, narrow island, ending in a dot: a person, someone waiting at home. The accent on the Á of ROATÁN is another road dash. The identity links road, island, movement, direction and human lives, without literal clip-art.'}</p></div>
  </div>
</section>
<section class="section theme-sand"><div class="wrap">
  ${marker(2, es ? 'Logotipos' : 'Logos')}
  <div class="logo-grid mt-2">${logos.map(([f, n, bg]) => `<div class="logo-tile"><div class="logo-tile__art" style="background:${bg}"><img src="${asset('brand/' + f)}" alt="${esc(n)}" loading="lazy"></div><div class="logo-tile__info"><span>${esc(n)}</span><a href="${asset('brand/' + f)}" download>${icon('download', 'icon--sm')} ${f.split('.').pop().toUpperCase()}</a></div></div>`).join('')}</div>
  <ul class="mt-2">
    <li>${es ? 'Deja alrededor del logotipo un espacio libre igual a la altura del punto del símbolo.' : 'Leave clear space around the logo equal to the height of the symbol’s dot.'}</li>
    <li>${es ? 'Tamaño mínimo del logotipo horizontal: 120 px de ancho en pantalla, 30 mm impreso. Por debajo, usa el símbolo.' : 'Minimum horizontal logo size: 120 px wide on screen, 30 mm in print. Below that, use the symbol.'}</li>
    <li>${es ? 'No lo deformes, no cambies los colores, no le añadas sombras ni lo pongas sobre fotos con poco contraste.' : 'Do not distort it, change its colours, add shadows or place it on low-contrast photos.'}</li>
    <li>${es ? 'No lo combines con escudos, sellos ni logotipos de gobierno.' : 'Do not combine it with crests, seals or government logos.'}</li>
  </ul>
</div></section>
<section class="section theme-white"><div class="wrap">
  ${marker(3, es ? 'Color' : 'Colour')}
  <div class="swatches mt-2">${colors.map(([a, b, hex, use]) => `<div class="swatch"><div class="swatch__chip" style="background:${hex}"></div><div class="swatch__info"><strong>${esc(es ? a : b)}</strong>${hex}<br><span class="muted">${esc(use)}</span></div></div>`).join('')}</div>
</div></section>
<section class="section theme-sand"><div class="wrap split">
  <div class="col-5">${marker(4, es ? 'Tipografía' : 'Typography')}<p>${es ? 'Ambas familias tienen licencia SIL Open Font License 1.1 y se sirven desde el propio sitio.' : 'Both families are licensed under the SIL Open Font License 1.1 and served from the site itself.'}</p></div>
  <div class="col-7">
    <div class="type-specimen"><p class="eyebrow">Archivo · ${es ? 'titulares' : 'headlines'} · 800 / ${es ? 'ancho' : 'width'} 112%</p><p class="display display--xl">Cada vida cuenta.</p></div>
    <div class="type-specimen mt-2"><p class="eyebrow">Atkinson Hyperlegible Next · ${es ? 'texto' : 'body'} · 400 / 700</p><p class="lede">${es ? 'Diseñada para máxima legibilidad, incluso con baja visión. Distingue claramente letras parecidas como I, l y 1.' : 'Designed for maximum legibility, including for low vision. It clearly distinguishes similar characters such as I, l and 1.'}</p></div>
  </div>
</div></section>
<section class="section theme-white"><div class="wrap prose">
  ${marker(5, es ? 'Voz' : 'Voice')}
  <ul>
    <li>${es ? 'Directa, humana, respetuosa. Nunca sermonea.' : 'Direct, human, respectful. Never preachy.'}</li>
    <li>${es ? 'Critica comportamientos, nunca personas, grupos ni comunidades.' : 'Criticises behaviours, never people, groups or communities.'}</li>
    <li>${es ? 'Mayúsculas en titulares de campaña; frases cortas.' : 'Capitals for campaign headlines; short sentences.'}</li>
    <li>${es ? 'Sin emojis, sin imágenes de choques ni de víctimas.' : 'No emojis, no images of crashes or victims.'}</li>
  </ul>
  <p>${es ? 'Guía completa para colaboradores en el repositorio del proyecto: docs/brand-guide.md.' : 'Full guide for contributors in the project repository: docs/brand-guide.md.'}</p>
</div></section>`;
  return { title: es ? 'Guía de marca' : 'Brand guide', description: es ? 'Logotipos, colores, tipografía y voz de Roatán Vial para descargar y usar correctamente.' : 'Roatán Vial logos, colours, typography and voice to download and use correctly.', body };
}

export function notFoundPage() {
  const body = html`
<section class="page-hero" style="min-height:60vh">
  <div class="wrap">
    <p class="eyebrow">404</p>
    <h1 class="display display--2xl">Esta página no existe.</h1>
    <p class="lede">Puede que el enlace esté mal escrito o que la página se haya movido.</p>
    <p class="lede" lang="en">This page does not exist. The link may be mistyped, or the page may have moved.</p>
    <div class="btn-row">${button(href('es', 'home'), 'Ir al inicio', 'primary')}${button(href('en', 'home'), 'Go to the home page', 'ghost')}</div>
  </div>
</section>`;
  return { title: 'Página no encontrada / Page not found', description: 'La página que buscas no existe en Roatán Vial. The page you are looking for does not exist.', body };
}
