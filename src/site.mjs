// Site-wide configuration: domain, languages, routes and interface strings.

export const config = {
  name: 'Roatán Vial',
  // Production domain is not chosen yet. Set SITE_URL when deploying, e.g.
  //   SITE_URL=https://www.example.org npm run build
  // Canonical URLs, sitemap and Open Graph URLs are generated from it.
  siteUrl: (process.env.SITE_URL || 'https://roatanvial.example').replace(/\/$/, ''),
  // Base path when the site is served from a sub-folder (e.g. GitHub Pages
  // project sites: BASE_PATH=/roatan-vial). Empty for a root domain.
  basePath: (process.env.BASE_PATH || '').replace(/\/$/, ''),
  // No public contact address has been set up yet. When one exists, set it here
  // (a role address such as hola@yourdomain, never a personal address) and the
  // contact page will publish it. Until then the site says so honestly.
  contactEmail: process.env.CONTACT_EMAIL || '',
  langs: ['es', 'en'],
  defaultLang: 'es',
  lastReviewed: '2026-10-30'
};

// Page id → localized slug. '' is the language home.
export const routes = {
  home: { es: '', en: '' },
  learn: { es: 'aprende', en: 'learn' },
  moto: { es: 'motocicletas', en: 'motorcycles' },
  scenarios: { es: 'escenarios', en: 'scenarios' },
  quiz: { es: 'reto', en: 'challenge' },
  signs: { es: 'senales', en: 'signs' },
  defensive: { es: 'manejo-defensivo', en: 'defensive-driving' },
  newdrivers: { es: 'nuevos-conductores', en: 'new-drivers' },
  families: { es: 'familias', en: 'families' },
  community: { es: 'comunidad', en: 'community' },
  law: { es: 'ley-y-recursos', en: 'law-and-resources' },
  data: { es: 'datos', en: 'data' },
  campaigns: { es: 'campanas', en: 'campaigns' },
  vision: { es: 'vision', en: 'vision' },
  about: { es: 'nosotros', en: 'about' },
  contact: { es: 'contacto', en: 'contact' },
  privacy: { es: 'privacidad', en: 'privacy' },
  accessibility: { es: 'accesibilidad', en: 'accessibility' },
  brand: { es: 'marca', en: 'brand' }
};

export const categories = [
  { id: 'moto', es: 'Seguridad en motocicleta', en: 'Motorcycle safety', code: 'A' },
  { id: 'normas', es: 'Normas y señales de tránsito', en: 'Road rules and signs', code: 'B' },
  { id: 'defensivo', es: 'Manejo defensivo', en: 'Defensive driving', code: 'C' },
  { id: 'velocidad', es: 'Velocidad y distancia de frenado', en: 'Speed and stopping distance', code: 'D' },
  { id: 'adelantar', es: 'Rebasar con seguridad', en: 'Overtaking and passing', code: 'E' },
  { id: 'intersecciones', es: 'Intersecciones y derecho de vía', en: 'Intersections and right of way', code: 'F' },
  { id: 'peatones', es: 'Seguridad peatonal', en: 'Pedestrian safety', code: 'G' },
  { id: 'familias', es: 'Familias y pasajeros', en: 'Families and passengers', code: 'H' },
  { id: 'nuevos', es: 'Conductores nuevos y jóvenes', en: 'New and young drivers', code: 'I' },
  { id: 'noche', es: 'Conducir de noche', en: 'Night-time driving', code: 'J' },
  { id: 'vehiculo', es: 'Seguridad del vehículo', en: 'Vehicle safety', code: 'K' },
  { id: 'alcohol', es: 'Alcohol, drogas y conducción', en: 'Impaired driving', code: 'L' },
  { id: 'emergencias', es: 'Situaciones de emergencia', en: 'Emergency situations', code: 'M' }
];

// Interface strings. Keep both languages in step.
export const t = {
  es: {
    langName: 'Español',
    otherLang: 'English',
    skip: 'Saltar al contenido',
    descriptor: 'Seguridad vial para todos',
    slogan: 'Una isla. Un camino. Cada vida cuenta.',
    menu: 'Menú',
    close: 'Cerrar',
    nav: {
      learn: 'Aprende', moto: 'Motocicletas', scenarios: 'Escenarios', quiz: 'Reto vial',
      signs: 'Señales', law: 'Ley y recursos', community: 'Comunidad', about: 'Nosotros',
      defensive: 'Manejo defensivo', newdrivers: 'Conductores nuevos', families: 'Familias y pasajeros',
      data: 'Datos y transparencia', campaigns: 'Campañas', vision: 'Visión', contact: 'Contacto',
      privacy: 'Privacidad', accessibility: 'Accesibilidad', brand: 'Marca', home: 'Inicio'
    },
    menuGroups: { learn: 'Aprender', practice: 'Practicar', act: 'Participar', info: 'Información' },
    footerAbout: 'Iniciativa comunitaria e independiente de educación vial nacida en Roatán, Islas de la Bahía, Honduras. No es una entidad de gobierno, una organización política ni una escuela de manejo.',
    emergency: 'En una emergencia, llama al 911.',
    notAdvice: 'El contenido es educativo. No es asesoría legal ni sustituye la formación oficial para obtener la licencia.',
    lastReviewed: 'Última revisión',
    readMinutes: 'min de lectura',
    lesson: 'Lección',
    lessons: 'lecciones',
    objectives: 'Lo que aprenderás',
    example: 'En la vida real',
    mistakes: 'Errores comunes',
    checklist: 'Lista práctica',
    check: 'Comprueba lo que aprendiste',
    related: 'Sigue aprendiendo',
    sources: 'Fuentes y referencias',
    share: 'Compartir esta lección',
    copyLink: 'Copiar enlace',
    copied: 'Enlace copiado',
    checkAnswer: 'Comprobar',
    correct: 'Correcto.',
    incorrect: 'No es la mejor respuesta.',
    noteKinds: { law: 'Lo que dice la ley', expert: 'Lo que recomiendan los expertos', practical: 'Precaución práctica' },
    statusLabels: {
      primary: 'Confirmado con el texto oficial',
      secondary: 'Confirmado por fuentes secundarias · pendiente de confirmación oficial',
      directive: 'Directriz administrativa · vigencia sin confirmar',
      proposal: 'Propuesta · no es ley',
      unconfirmed: 'No confirmado'
    },
    source: 'Fuente',
    verified: 'Verificado',
    seeLaw: 'Ver fuente y estado',
    breadcrumbHome: 'Inicio',
    checklistDone: 'completados',
    reset: 'Reiniciar',
    illustrative: 'Situación ilustrativa',
    diagram: 'Diagrama',
    backToTop: 'Volver arriba',
    notFoundTitle: 'Esta página no existe',
    notFoundBody: 'Puede que el enlace esté mal escrito o que la página se haya movido.'
  },
  en: {
    langName: 'English',
    otherLang: 'Español',
    skip: 'Skip to content',
    descriptor: 'Road safety for everyone',
    slogan: 'One island. One road. Every life matters.',
    menu: 'Menu',
    close: 'Close',
    nav: {
      learn: 'Learn', moto: 'Motorcycles', scenarios: 'Scenarios', quiz: 'Road challenge',
      signs: 'Signs', law: 'Law and resources', community: 'Community', about: 'About',
      defensive: 'Defensive driving', newdrivers: 'New drivers', families: 'Families and passengers',
      data: 'Data and transparency', campaigns: 'Campaigns', vision: 'Vision', contact: 'Contact',
      privacy: 'Privacy', accessibility: 'Accessibility', brand: 'Brand', home: 'Home'
    },
    menuGroups: { learn: 'Learn', practice: 'Practise', act: 'Take part', info: 'Information' },
    footerAbout: 'An independent, community road-safety education initiative from Roatán, Bay Islands, Honduras. It is not a government body, a political organisation or a driving school.',
    emergency: 'In an emergency, call 911.',
    notAdvice: 'This content is educational. It is not legal advice and does not replace official training for a driving licence.',
    lastReviewed: 'Last reviewed',
    readMinutes: 'min read',
    lesson: 'Lesson',
    lessons: 'lessons',
    objectives: 'What you will learn',
    example: 'On the road',
    mistakes: 'Common mistakes',
    checklist: 'Practical checklist',
    check: 'Check what you learned',
    related: 'Keep learning',
    sources: 'Sources and references',
    share: 'Share this lesson',
    copyLink: 'Copy link',
    copied: 'Link copied',
    checkAnswer: 'Check',
    correct: 'Correct.',
    incorrect: 'Not the best answer.',
    noteKinds: { law: 'What the law says', expert: 'What experts recommend', practical: 'Practical precaution' },
    statusLabels: {
      primary: 'Confirmed against the official text',
      secondary: 'Confirmed by secondary sources · official confirmation pending',
      directive: 'Administrative directive · current status unconfirmed',
      proposal: 'Proposal · not law',
      unconfirmed: 'Not confirmed'
    },
    source: 'Source',
    verified: 'Verified',
    seeLaw: 'See source and status',
    breadcrumbHome: 'Home',
    checklistDone: 'done',
    reset: 'Reset',
    illustrative: 'Illustrative situation',
    diagram: 'Diagram',
    backToTop: 'Back to top',
    notFoundTitle: 'This page does not exist',
    notFoundBody: 'The link may be mistyped, or the page may have moved.'
  }
};
