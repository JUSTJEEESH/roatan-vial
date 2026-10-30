// Honduran legal facts registry.
//
// Every legal statement on the site must come from this file. Each record states
// what kind of rule it is, how it was verified, where it comes from and when it
// was last checked. Update `verified` whenever a record is re-checked.
//
// status:
//   'secondary'   — consistent across several reputable secondary sources (national
//                   press, fact-checks, legal aggregators). The primary official text
//                   has not yet been reviewed directly by the project. Shown as
//                   "Pendiente de confirmación oficial".
//   'primary'     — confirmed against the official text (La Gaceta / TSC / DNVT).
//   'directive'   — an administrative order reported by authorities, not a provision
//                   of the law. Current status unconfirmed.
//   'proposal'    — a proposed change, NOT law. Never present as a requirement.
//   'unconfirmed' — the project could not confirm this from any reliable source.
//
// type: 'law' | 'directive' | 'proposal' | 'unknown'
//
// The official sources below (tsc.gob.hn, policianacional.gob.hn, tramites.diger.gob.hn,
// leyes.hn) could not be opened from the build environment on the review date. See
// docs/legal-verification.md for the confirmation checklist.

export const jurisdiction = {
  id: 'hn',
  es: 'Honduras',
  en: 'Honduras',
  reviewed: '2026-10-30'
};

export const officialSources = [
  {
    id: 'tsc-ley',
    es: 'Tribunal Superior de Cuentas — Ley de Tránsito y reformas',
    en: 'Tribunal Superior de Cuentas — Traffic Law and amendments',
    url: 'https://tsc.gob.hn/biblioteca/index.php/leyes/142-ley-de-transito',
    noteEs: 'Biblioteca jurídica oficial. Lista la ley y sus reformas.',
    noteEn: 'Official legal library. Lists the law and its amendments.'
  },
  {
    id: 'tsc-pdf',
    es: 'Ley de Tránsito, Decreto 205-2005 (PDF)',
    en: 'Traffic Law, Decree 205-2005 (PDF, Spanish)',
    url: 'https://www.tsc.gob.hn/web/leyes/Ley-de-Transito.pdf',
    noteEs: 'Texto original de 2005. No incluye todas las reformas posteriores.',
    noteEn: 'Original 2005 text. Does not include all later amendments.'
  },
  {
    id: 'tsc-22-2026',
    es: 'Decreto 22-2026, reforma sobre distintivos reflectivos (PDF)',
    en: 'Decree 22-2026, reflective-marking amendment (PDF, Spanish)',
    url: 'https://tsc.gob.hn/web/leyes/Decreto-22-2026.pdf',
    noteEs: 'Publicado en La Gaceta el 21 de marzo de 2026, según fuentes consultadas.',
    noteEn: 'Published in La Gaceta on 21 March 2026, according to the sources reviewed.'
  },
  {
    id: 'dnvt',
    es: 'Policía Nacional — Dirección Nacional de Vialidad y Transporte (DNVT)',
    en: 'National Police — National Directorate of Roads and Transport (DNVT)',
    url: 'https://policianacional.gob.hn/DNVT/',
    noteEs: 'Autoridad nacional de tránsito y licencias.',
    noteEn: 'National traffic and licensing authority.'
  },
  {
    id: 'dnvt-modulos',
    es: 'Módulos de educación vial para obtener el permiso de conducir',
    en: 'Road-education modules for obtaining a driving permit (Spanish)',
    url: 'https://policianacional.gob.hn/modulos-de-educacion-vial-para-obtener-permiso-de-conducir/',
    noteEs: 'Material oficial de estudio de la Policía Nacional.',
    noteEn: 'Official study material from the National Police.'
  },
  {
    id: 'diger-licencia',
    es: 'Trámite de licencia de conducir — Portal de trámites del Gobierno',
    en: 'Driving licence procedure — Government services portal (Spanish)',
    url: 'https://tramites.diger.gob.hn/LandingPage/DetalleTramite/64',
    noteEs: 'Requisitos y pasos oficiales del trámite.',
    noteEn: 'Official requirements and steps for the procedure.'
  }
];

const press = {
  heraldoMoto: { label: 'El Heraldo — Prohibiciones y multas para motociclistas', url: 'https://www.elheraldo.hn/fotogalerias/honduras/prohibiciones-multas-leyes-transito-motociclista-debe-saber-DM20798865' },
  heraldoGuaimaca: { label: 'El Heraldo — DNVT: la Ley de Tránsito prevalece sobre ordenanza municipal (casco)', url: 'https://www.elheraldo.hn/honduras/polemica-guaimaca-prohibe-uso-cascos-motociclistas-medida-contra-impunidad-CC31444622' },
  heraldoChaleco: { label: 'El Heraldo (verificación) — Chaleco reflector: aprobado en 2015, exigido desde 2026', url: 'https://www.elheraldo.hn/elheraldoplus/factchecking/analisis/chaleco-reflector-medida-aprobada-honduras-2015-obligatoria-2026-OH28945487' },
  prensaChaleco: { label: 'La Prensa — Congreso aprueba horario del chaleco reflectivo', url: 'https://www.laprensa.hn/honduras/honduras-congreso-aprueba-chaleco-reflectivo-obligatorio-este-horario-dia-BI29560472' },
  prensaMenores: { label: 'La Prensa — Niños ya no podrán ser pasajeros de las motos', url: 'https://www.laprensa.hn/honduras/ninos-pasajeros-motos-accidentes-transito-BCLP1077143' },
  tunotaCinturon: { label: 'TuNota — Cinturón de seguridad en asiento trasero', url: 'https://www.tunota.com/honduras-hoy/multa-4000-lempiras-cinturon-seguridad-asiento-trasero-2023-04-20' },
  heraldoVelocidad: { label: 'El Heraldo — Ni tan rápido ni tan lento', url: 'https://www.elheraldo.hn/utilidad/ni-tan-rapido-ni-tan-lento-IJEH629199' },
  tunota80: { label: 'TuNota — Honduras prepara límite de 80 km/h en carreteras (propuesta, ago. 2026)', url: 'https://www.tunota.com/honduras-hoy/pie-al-freno-honduras-prepara-limite-de-80-km-h-en-carreteras-2026-08-28' },
  heraldoEbrios: { label: 'El Heraldo — Multas para quienes conduzcan en estado de ebriedad', url: 'https://www.elheraldo.hn/tegucigalpa/hasta-l-30-mil-de-multa-para-quienes-conduzcan-bajo-estado-de-ebriedad-NF13169352' },
  heraldoRenovacion: { label: 'El Heraldo — Requisitos para renovar la licencia', url: 'https://www.elheraldo.hn/tramites/requisitos-renovacion-licencia-conducir-honduras-HN29534333' },
  prensaEdad: { label: 'La Prensa — Licencia de conducir: requisitos, costos y vigencia (ene. 2026)', url: 'https://www.laprensa.hn/fotogalerias/honduras/licencia-conducir-honduras-requisitos-costos-vigencia-CI29127555' },
  tunotaCategoriasA: { label: 'TuNota — DNVT propone nuevas categorías de licencia de moto (propuesta, ago. 2026)', url: 'https://www.tunota.com/honduras-hoy/dnvt-propone-nuevas-categorias-para-licencias-de-motocicleta-en-honduras-2026-08-07' },
  tunotaExamen: { label: 'TuNota — Nuevas pruebas del examen de conducir (abr. 2026)', url: 'https://www.tunota.com/honduras-hoy/examen-conducir-honduras-nuevas-pruebas-requisitos-2026-04-16' },
  prensa911: { label: 'La Prensa — El 911 será el único número de emergencia', url: 'https://www.laprensa.hn/honduras/a-partir-del-1-de-agosto-el-911-sera-el-unico-numero-FELP982117' },
  tiempoReforma: { label: 'Tiempo — DNVT prepara reforma integral a la Ley de Tránsito (jun. 2026)', url: 'https://tiempo.hn/honduras/2026/06/20/nueva-ley-transito-estricta-honduras/' }
};

export const facts = {
  'hn-ley-transito': {
    type: 'law', status: 'secondary', verified: '2026-10-30', topic: 'base',
    es: 'El tránsito en Honduras se rige por la Ley de Tránsito (Decreto 205-2005) y sus reformas posteriores. El texto original de 2005 no es, por sí solo, la ley vigente completa: ha sido reformado varias veces, la más reciente identificada en marzo de 2026 (Decreto 22-2026). La autoridad de tránsito ha anunciado que prepara una reforma integral.',
    en: 'Road traffic in Honduras is governed by the Traffic Law (Ley de Tránsito, Decree 205-2005) and its later amendments. The original 2005 text alone is not the complete current law: it has been amended several times, most recently (as identified) in March 2026 (Decree 22-2026). The traffic authority has announced that it is preparing a comprehensive reform.',
    article: 'Decreto 205-2005',
    sources: ['tsc-ley', 'tsc-pdf'], press: ['tiempoReforma']
  },
  'hn-moto-casco': {
    type: 'law', status: 'secondary', verified: '2026-10-30', topic: 'moto',
    es: 'La Ley de Tránsito tipifica como infracción no cumplir con el uso del casco protector por parte del conductor de la motocicleta y de su acompañante.',
    en: 'The Traffic Law makes it an infraction for a motorcycle rider and their passenger not to comply with the protective-helmet requirement.',
    article: 'Art. 99, numeral 21 (según fuentes consultadas)', articleEn: 'Art. 99, item 21 (as reported)',
    sources: ['tsc-pdf'], press: ['heraldoMoto', 'heraldoGuaimaca'],
    pendingEs: 'Confirmar redacción exacta y numeración vigente en el texto oficial.',
    pendingEn: 'Confirm exact wording and current numbering in the official text.'
  },
  'hn-moto-dos-personas': {
    type: 'law', status: 'secondary', verified: '2026-10-30', topic: 'moto',
    es: 'La misma disposición tipifica como infracción transportar más de dos personas en una motocicleta.',
    en: 'The same provision makes it an infraction to carry more than two people on a motorcycle.',
    article: 'Art. 99, numeral 21 (según fuentes consultadas)', articleEn: 'Art. 99, item 21 (as reported)',
    sources: ['tsc-pdf'], press: ['heraldoMoto', 'heraldoGuaimaca'],
    pendingEs: 'Confirmar redacción exacta y numeración vigente en el texto oficial.',
    pendingEn: 'Confirm exact wording and current numbering in the official text.'
  },
  'hn-moto-reflectivo': {
    type: 'law', status: 'secondary', verified: '2026-10-30', topic: 'moto',
    es: 'Conductores y acompañantes de motocicleta deben portar chaleco o distintivo reflectivo entre las 6:00 p. m. y las 6:00 a. m. La obligación fue introducida en 2015 (Decreto 20-2015) y su horario fue precisado por la reforma de marzo de 2026 (Decreto 22-2026). Durante el día su uso es voluntario.',
    en: 'Motorcycle riders and passengers must wear a reflective vest or reflective marking between 6:00 p.m. and 6:00 a.m. The requirement was introduced in 2015 (Decree 20-2015) and its hours were set by the March 2026 amendment (Decree 22-2026). During the day it is voluntary.',
    article: 'Art. 99, numeral 28; Decreto 20-2015; Decreto 22-2026', articleEn: 'Art. 99, item 28; Decree 20-2015; Decree 22-2026',
    sources: ['tsc-22-2026'], press: ['heraldoChaleco', 'prensaChaleco'],
    pendingEs: 'Confirmar el texto publicado en La Gaceta del Decreto 22-2026.',
    pendingEn: 'Confirm the published La Gaceta text of Decree 22-2026.'
  },
  'hn-moto-menores': {
    type: 'directive', status: 'directive', verified: '2026-10-30', topic: 'moto',
    es: 'La autoridad de tránsito ha restringido, por directriz administrativa, llevar a menores de 12 años como pasajeros de motocicleta. Según la prensa, esta medida no está escrita en la Ley de Tránsito. Su vigencia actual no ha sido confirmada.',
    en: 'The traffic authority has restricted, by administrative directive, carrying children under 12 as motorcycle passengers. According to press reports, this measure is not written into the Traffic Law. Its current status has not been confirmed.',
    article: 'Directriz de la autoridad de tránsito (no artículo de ley)', articleEn: 'Traffic-authority directive (not an article of the law)',
    sources: ['dnvt'], press: ['prensaMenores'],
    pendingEs: 'Confirmar con la DNVT si la directriz sigue vigente y en qué términos.',
    pendingEn: 'Confirm with the DNVT whether the directive is still in force and on what terms.'
  },
  'hn-cinturon': {
    type: 'law', status: 'secondary', verified: '2026-10-30', topic: 'vehiculo',
    es: 'La Ley de Tránsito tipifica como infracción circular sin usar el cinturón de seguridad, tanto el conductor como sus acompañantes.',
    en: 'The Traffic Law makes it an infraction to drive without the driver and passengers wearing seatbelts.',
    article: 'Art. 99, numeral 22 (según fuentes consultadas)', articleEn: 'Art. 99, item 22 (as reported)',
    sources: ['tsc-pdf'], press: ['tunotaCinturon'],
    pendingEs: 'Confirmar redacción y si incluye disposiciones sobre menores.',
    pendingEn: 'Confirm wording and whether it includes provisions on children.'
  },
  'hn-velocidad': {
    type: 'law', status: 'secondary', verified: '2026-10-30', topic: 'velocidad',
    es: 'Los conductores deben respetar la velocidad indicada por la señalización. El exceso de velocidad se clasifica como falta grave. Los límites concretos dependen de la vía y de su señalización; una reforma sobre límites en carreteras estaba en discusión en 2026.',
    en: 'Drivers must respect the speed indicated by road signs. Speeding is classed as a serious infraction. Specific limits depend on the road and its signage; an amendment on highway limits was under discussion in 2026.',
    article: 'Art. 68 y Art. 98 (según fuentes consultadas)', articleEn: 'Arts. 68 and 98 (as reported)',
    sources: ['tsc-pdf'], press: ['heraldoVelocidad', 'tunota80'],
    pendingEs: 'Confirmar límites genéricos (urbano, carretera) en el texto vigente antes de publicarlos.',
    pendingEn: 'Confirm general limits (urban, highway) in the current text before publishing them.'
  },
  'hn-ebriedad': {
    type: 'law', status: 'secondary', verified: '2026-10-30', topic: 'alcohol',
    es: 'Conducir bajo los efectos del alcohol se clasifica como falta grave y se sanciona además conforme a una ley específica sobre la embriaguez. Las sanciones reportadas incluyen la suspensión de la licencia.',
    en: 'Driving under the influence of alcohol is classed as a serious infraction and is also sanctioned under a specific law on drunkenness. Reported penalties include suspension of the licence.',
    article: 'Art. 98 (según fuentes consultadas)', articleEn: 'Art. 98 (as reported)',
    sources: ['tsc-pdf'], press: ['heraldoEbrios'],
    pendingEs: 'Las fuentes no coinciden sobre el límite legal de alcohol ni sobre las sanciones exactas. No se publica un límite hasta confirmarlo.',
    pendingEn: 'Sources disagree on the legal alcohol limit and exact penalties. No limit is published until confirmed.'
  },
  'hn-licencia': {
    type: 'law', status: 'secondary', verified: '2026-10-30', topic: 'licencia',
    es: 'Para conducir se requiere una licencia vigente de la categoría correspondiente al vehículo. Las licencias las emite la autoridad nacional de tránsito (DNVT). Las fuentes consultadas indican una edad mínima de 18 años para obtenerla, y requisitos y exámenes que la DNVT actualizó en 2026.',
    en: 'Driving requires a valid licence in the category that matches the vehicle. Licences are issued by the national traffic authority (DNVT). The sources reviewed indicate a minimum age of 18, with requirements and tests that the DNVT updated in 2026.',
    article: 'Ley de Tránsito; trámite oficial DNVT', articleEn: 'Traffic Law; official DNVT procedure',
    sources: ['diger-licencia', 'dnvt'], press: ['prensaEdad', 'heraldoRenovacion', 'tunotaExamen'],
    pendingEs: 'Confirmar requisitos actuales en el portal oficial de trámites antes de iniciar el proceso.',
    pendingEn: 'Confirm current requirements on the official services portal before starting the process.'
  },
  'hn-licencia-categorias': {
    type: 'law', status: 'secondary', verified: '2026-10-30', topic: 'licencia',
    es: 'Las fuentes consultadas mencionan las categorías A, B, B1, BE, C1, C, CE, D1 y D. La categoría A corresponde a motocicletas. En 2026 la DNVT propuso dividir la categoría A según la cilindrada; esa división es una propuesta y no está confirmada como vigente.',
    en: 'The sources reviewed list categories A, B, B1, BE, C1, C, CE, D1 and D. Category A covers motorcycles. In 2026 the DNVT proposed splitting category A by engine size; that split is a proposal and is not confirmed as being in force.',
    article: 'Categorías de licencia (según fuentes consultadas)', articleEn: 'Licence categories (as reported)',
    sources: ['diger-licencia', 'dnvt'], press: ['heraldoRenovacion', 'tunotaCategoriasA'],
    pendingEs: 'Confirmar lista y definición de cada categoría con la DNVT.',
    pendingEn: 'Confirm the list and definition of each category with the DNVT.'
  },
  'hn-visitantes': {
    type: 'unknown', status: 'unconfirmed', verified: '2026-10-30', topic: 'licencia',
    es: 'No pudimos confirmar en una fuente oficial las reglas para visitantes que conducen con una licencia extranjera (por ejemplo, plazo de validez o necesidad de un permiso internacional). Los requisitos pueden ser distintos para residentes y para visitantes. Consulta directamente a la DNVT o al consulado de Honduras antes de conducir.',
    en: 'We could not confirm from an official source the rules for visitors driving on a foreign licence (for example, how long it is valid or whether an international permit is needed). Requirements may differ for residents and visitors. Check directly with the DNVT or a Honduran consulate before driving.',
    article: '—', articleEn: '—',
    sources: ['dnvt'], press: []
  },
  'hn-retencion-infantil': {
    type: 'unknown', status: 'unconfirmed', verified: '2026-10-30', topic: 'familias',
    es: 'No encontramos una disposición hondureña confirmada sobre sillas de retención infantil. Por eso, todo lo que publicamos sobre sillas infantiles es recomendación de expertos, no requisito legal.',
    en: 'We did not find a confirmed Honduran provision on child car seats. Everything we publish about child seats is therefore expert recommendation, not a legal requirement.',
    article: '—', articleEn: '—',
    sources: ['tsc-pdf'], press: []
  },
  'hn-911': {
    type: 'law', status: 'secondary', verified: '2026-10-30', topic: 'emergencias',
    es: 'El 911 es el número nacional de emergencias de Honduras, gratuito y disponible desde cualquier teléfono.',
    en: '911 is the national emergency number in Honduras, free and available from any phone.',
    article: 'Sistema Nacional de Emergencias 911', articleEn: 'National Emergency System 911',
    sources: [], press: ['prensa911'],
    pendingEs: 'Otros números (Cruz Roja, bomberos) se publicarán cuando se confirmen para Roatán.',
    pendingEn: 'Other numbers (Red Cross, fire service) will be published once confirmed for Roatán.'
  }
};

export const pressSources = press;

// Items deliberately NOT published as law (shown on the law page as "en verificación").
export const pending = [
  { es: 'Límites genéricos de velocidad (zona urbana, carretera).', en: 'General speed limits (urban, highway).' },
  { es: 'Reglas específicas de adelantamiento (curvas, puentes, línea continua) y sus artículos.', en: 'Specific overtaking rules (curves, bridges, solid lines) and their articles.' },
  { es: 'Uso del teléfono celular al conducir.', en: 'Mobile phone use while driving.' },
  { es: 'Límite legal de alcohol en sangre y escala de sanciones.', en: 'Legal blood-alcohol limit and penalty scale.' },
  { es: 'Montos actuales de las multas.', en: 'Current fine amounts.' },
  { es: 'Sillas de retención infantil.', en: 'Child car seats.' },
  { es: 'Reglas para visitantes con licencia extranjera.', en: 'Rules for visitors with a foreign licence.' },
  { es: 'Contenido de la reforma publicada en La Gaceta N.º 37,261 (6 de octubre de 2026), mencionada por una fuente secundaria.', en: 'Content of the amendment published in La Gaceta No. 37,261 (6 October 2026), mentioned by one secondary source.' }
];
