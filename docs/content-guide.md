# ROATÁN VIAL — Content guide

This guide governs every word published on the site: lessons, quiz questions,
scenarios, campaign lines and page copy. Read it before writing or editing content.

## 1. Voice

- **Confident, human, direct, respectful.** Never preachy, never condescending,
  never politically charged.
- **Dangerous behaviour is the problem. People are the reason we care.**
  Criticise behaviours, never groups of people.
- Never create a division between Hondurans and foreigners, locals and visitors,
  riders and drivers, rich and poor, or between neighbourhoods. Never name a
  specific community as dangerous.
- Motorcycles are essential transportation for many families. Never shame people
  for relying on one. Teach how to make the everyday trip safer.
- Do not soften the message about dangerous behaviour: no helmet, carried helmet,
  overloaded motorcycles, wheelies/stunts, racing ("piques"), dangerous overtaking,
  speed, impaired driving, unlicensed/untrained/underage driving, no seatbelt or
  child restraint.
- Make safe driving something to be proud of.
- No emojis. No exclamation-mark hype. No generic motivational quotes.

## 2. Language

- **Spanish is primary.** Write natural Honduran / Central American Spanish, not a
  translation. Use **tú** consistently (matching the campaign lines).
  Prefer local everyday terms where they are standard: *carro*, *moto*,
  *mototaxi*, *rebasar* (you may also use *adelantar*), *casco*, *caballito*
  (wheelie), *piques* (street racing), *licencia*, *bus*, *acera*, *cuneta*.
  Do not imitate or stereotype local speech.
- **English is a full, polished equivalent, not an afterthought and not for
  tourists.** English is a first language for many Bay Islanders. Write for
  islanders. Natural international English (no US-only slang). Spell "Roatán"
  with the accent in both languages.
- Both language versions must say the same things (same facts, same structure),
  but each should read as if originally written in that language.

## 3. Truthfulness rules (non-negotiable)

1. **Never invent statistics, quotes, testimonials, case studies, crash stories,
   partners, endorsements or laws.**
2. **Distinguish three kinds of guidance**, and label them:
   - `law` — what Honduran law requires. ONLY use the legal fact IDs listed in
     section 5. Do not state any other Honduran legal requirement as fact.
   - `expert` — what road-safety authorities (e.g. WHO) recommend.
   - `practical` — a sensible precaution.
3. **Real-world examples are illustrative.** Write them as typical situations
   ("Imagina…", "Picture this…"), on ordinary island roads, never as a true
   event and never naming real people.
4. Only cite well-established figures from well-known publications, with the
   publisher and year, e.g. WHO, *Helmets: a road safety manual* (2nd ed., 2023);
   WHO, *Global status report on road safety 2023*; WHO, *Speed management manual*
   (2nd ed., 2023). If you are not certain of a figure, describe the effect
   qualitatively instead. Only include a URL if you are highly confident it is
   correct and stable; otherwise omit `url`.
5. No graphic injury descriptions. Explain consequences plainly and respectfully.
6. The site is not legal advice and not an official licensing course.

## 4. Lesson file format

One file per lesson: `src/content/lessons/<id>.mjs`, ES module, default export.
Inline HTML allowed inside strings: `<strong>`, `<em>` only. Use typographic
quotes and proper accents. Escape nothing else.

```js
export default {
  id: 'helmet-why',                 // stable English id, kebab-case
  category: 'moto',                 // see category list below
  order: 1,                         // order within the category
  minutes: 7,                       // honest reading time
  diagram: 'helmet-fit',            // optional; one of the diagram IDs below, or null
  related: ['helmet-fit', 'helmet-carried', 'moto-passengers'], // 2–4 lesson ids
  sources: [                        // 1–4 reputable references actually relevant
    { label: 'Organización Mundial de la Salud (OMS), Cascos: manual de seguridad vial, 2.ª ed., 2023',
      labelEn: 'World Health Organization (WHO), Helmets: a road safety manual, 2nd ed., 2023' }
  ],
  es: {
    slug: 'por-que-usar-el-casco',  // Spanish URL slug, kebab-case, no accents
    title: '…',                     // clear, max ~60 characters
    dek: '…',                       // 1–2 sentence introduction
    objectives: ['…', '…', '…'],    // 3–4 learning objectives ("Entender…", "Saber…")
    sections: [                     // 3–5 sections of real teaching content
      { heading: '…', paragraphs: ['…', '…'], list: ['…'] /* list optional */ }
    ],
    example: { title: '…', body: ['…', '…'] }, // illustrative real-world situation
    mistakes: ['…', '…', '…', '…'], // 4–6 common mistakes, each one sentence + why
    checklist: ['…', '…', '…', '…', '…'], // 5–8 short, actionable items
    notes: [                        // 1–3 labelled callouts
      { kind: 'law', fact: 'hn-moto-casco', text: '…' },
      { kind: 'expert', text: '…' },
      { kind: 'practical', text: '…' }
    ],
    check: [                        // exactly 3 knowledge-check questions
      { q: '…', options: ['…', '…', '…'], answer: 1, explain: '…' }
    ],
    diagramCaption: '…'             // only if diagram is set
  },
  en: { slug: 'why-wear-a-helmet', /* identical structure, English */ }
};
```

Targets: 700–1,100 words of teaching content per language (sections + example).
Substance over length: concrete, specific, practical. Avoid filler.
In `check`, vary the position of the correct answer; wrong options must be
plausible but clearly wrong once the lesson is understood.

### Categories

| id | Spanish | English |
|---|---|---|
| `moto` | Seguridad en motocicleta | Motorcycle safety |
| `normas` | Normas y señales de tránsito | Road rules and signs |
| `defensivo` | Manejo defensivo | Defensive driving |
| `velocidad` | Velocidad y distancia de frenado | Speed and stopping distance |
| `adelantar` | Rebasar con seguridad | Overtaking and passing |
| `intersecciones` | Intersecciones y derecho de vía | Intersections and right of way |
| `peatones` | Seguridad peatonal | Pedestrian safety |
| `familias` | Familias y pasajeros | Families and passengers |
| `nuevos` | Conductores nuevos y jóvenes | New and young drivers |
| `noche` | Conducir de noche | Night-time driving |
| `vehiculo` | Seguridad del vehículo | Vehicle safety |
| `alcohol` | Alcohol, drogas y conducción | Impaired driving |
| `emergencias` | Situaciones de emergencia | Emergency situations |

### Diagram IDs (drawn by the design team; reference only these)

`helmet-fit`, `helmet-carried`, `passenger-load`, `stopping-distance`,
`following-distance`, `blind-spots`, `overtaking`, `intersection-turn`,
`night-visibility`, `lane-lines`, `crosswalk`, `group-riding`.

### Lesson IDs (for `related`)

moto: `helmet-why`, `helmet-carried`, `helmet-fit`, `moto-passengers`,
`moto-load-balance`, `moto-braking`, `stunts-wheelies`, `group-riding` ·
noche: `night-visibility` · defensivo: `rain-riding`, `blind-spots`,
`watch-for-motorcycles`, `calm-driving` · velocidad: `following-distance`,
`stopping-distance` · adelantar: `safe-overtaking` · intersecciones:
`intersections-turning` · normas: `road-markings` · nuevos: `new-drivers` ·
peatones: `pedestrian-safety` · familias: `seatbelts-children` · alcohol:
`impaired-driving` · emergencias: `road-emergency` · vehiculo: `pre-trip-check`

## 5. Legal fact IDs (the only Honduran legal claims allowed)

Reference a fact with `{ kind: 'law', fact: '<id>', text: '…' }`. The `text`
must stay within what the summary below says. The site renders the source,
link, verification date and status from `src/content/legal.mjs`.

| id | What can be said |
|---|---|
| `hn-ley-transito` | Road traffic in Honduras is governed by the Ley de Tránsito (Decreto 205-2005) and its later reforms. |
| `hn-moto-casco` | The Ley de Tránsito (Art. 99, num. 21, as reported) makes it an infraction not to comply with the protective helmet requirement for the rider and the passenger. |
| `hn-moto-dos-personas` | The same provision makes it an infraction to carry more than two people on a motorcycle. |
| `hn-moto-reflectivo` | Since the March 2026 reform (Decreto 22-2026), riders and passengers must wear a reflective vest or reflective marking between 6:00 p.m. and 6:00 a.m. |
| `hn-moto-menores` | Traffic authorities have, by administrative directive, restricted carrying children under 12 as motorcycle passengers. This is reported as a directive, not a provision of the law; its current status must be confirmed. Do not present it as law. |
| `hn-cinturon` | The Ley de Tránsito (Art. 99, num. 22, as reported) makes it an infraction for the driver and passengers not to wear seatbelts. |
| `hn-velocidad` | Drivers must respect the speed limits indicated by signage (Art. 68, as reported); speeding is classed as a serious infraction (Art. 98). Do not state specific km/h limits. |
| `hn-ebriedad` | Driving under the influence of alcohol is classed as a serious infraction (Art. 98, as reported) and is also sanctioned under a separate law; reported penalties include licence suspension. Do not state a legal alcohol limit. |
| `hn-licencia` | Driving requires a valid licence for the vehicle category; licences are issued by the national traffic authority (DNVT). |
| `hn-911` | 911 is the national emergency number in Honduras. |

Anything else (overtaking rules, phone use, child seats, specific limits, fines)
must be written as `expert` or `practical` guidance, not as law.

## 6. Quiz and scenarios

- File `src/content/quiz.mjs`: default export array of exactly 50 questions:
  `{ id, category, es: { q, options[3–4], answer, explain }, en: { … } }`.
- File `src/content/scenarios.mjs`: default export array of scenarios:
  `{ id, diagram|null, es: { title, situation, prompt, choices: [{ text, verdict: 'safest'|'risky'|'dangerous', feedback }], lesson, takeaway }, en: {…}, related: [lesson ids] }`.
- Questions and scenarios must be grounded in the lessons and in the truthfulness
  rules above. The quiz is educational, not an official exam.
