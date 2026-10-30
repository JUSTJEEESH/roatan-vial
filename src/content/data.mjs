// Statistics registry. Only published, attributed figures. Never invent or round up.
// Each figure keeps its source, publication and date. Update `checked` when re-verified.

export const national = [
  {
    id: 'dnvt-2025',
    value: 1894,
    year: 2025,
    es: { label: 'personas fallecidas en eventos de tránsito en Honduras en 2025, según la DNVT', source: 'Dirección Nacional de Vialidad y Transporte (DNVT), citada por El Heraldo' },
    en: { label: 'people killed in road traffic events in Honduras in 2025, according to the DNVT', source: 'National Directorate of Roads and Transport (DNVT), as reported by El Heraldo' },
    url: 'https://www.elheraldo.hn/honduras/aumentan-muertes-accidentes-viales-2025-honduras-FE28799387',
    kind: 'official',
    compare: { year: 2024, value: 1887 },
    checked: '2026-10-30'
  },
  {
    id: 'onv-2025',
    value: 2029,
    year: 2025,
    es: { label: 'fallecimientos por eventos de tránsito en 2025 según el Observatorio Nacional de la Violencia (UNAH): una tasa de 20.2 por cada 100,000 habitantes', source: 'Observatorio Nacional de la Violencia, UNAH, citado por La Tribuna' },
    en: { label: 'deaths from road traffic events in 2025 according to the National Violence Observatory (UNAH): a rate of 20.2 per 100,000 people', source: 'National Violence Observatory, UNAH, as reported by La Tribuna' },
    url: 'https://www.latribuna.hn/2026/08/12/suicidios-aumentaron-25-7-y-accidentes-viales-dejaron-2029-muertos-en-2025/',
    kind: 'research',
    checked: '2026-10-30'
  }
];
