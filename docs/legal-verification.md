# Legal and factual verification checklist

**Status on 30 October 2026:** the site's legal content is built from consistent **secondary** sources: national press, fact-checks and legal aggregators. The official portals could not be opened from the build environment, because the network policy blocked these hosts:

- `tsc.gob.hn`
- `policianacional.gob.hn`
- `tramites.diger.gob.hn`
- `leyes.hn`
- `sieca.int`

Every legal claim on the site is therefore labelled **"Confirmado por fuentes secundarias · pendiente de confirmación oficial"**. Nothing below is presented as confirmed against the official text.

**Before public launch,** someone with access to the official texts should work through this list. For each confirmed record in `src/content/legal.mjs`, change `status` to `'primary'` and update `verified`.

## A. Legal facts published on the site (`src/content/legal.mjs`)

| id | Published claim | To confirm | Where |
|---|---|---|---|
| `hn-ley-transito` | Ley de Tránsito, Decreto 205-2005, amended several times; most recent identified amendment Decreto 22-2026; DNVT announced a comprehensive reform | Full list of amendments (the TSC page lists reforms from Decreto 142-2008 through 22-2026). One secondary source mentions a reform in La Gaceta No. 37,261 (6 Oct 2026); identify its content | tsc.gob.hn law page; La Gaceta |
| `hn-moto-casco` | Infraction not to comply with the helmet requirement for rider and passenger (Art. 99, item 21) | Exact wording, current item number (one source cites item 24) | Official consolidated text |
| `hn-moto-dos-personas` | Infraction to carry more than two people on a motorcycle (same provision) | Same as above | Same |
| `hn-moto-reflectivo` | Reflective vest/marking 6 p.m.–6 a.m. for rider and passenger (Decreto 20-2015; Decreto 22-2026) | Published text of Decreto 22-2026 and its effective date; whether it covers cyclists | tsc.gob.hn/web/leyes/Decreto-22-2026.pdf |
| `hn-moto-menores` | DNVT directive restricting children under 12 as motorcycle passengers; **not law**; current status unconfirmed | Whether the directive is still in force, and its terms | DNVT |
| `hn-cinturon` | Infraction for driver and passengers not to wear seatbelts (Art. 99, item 22) | Wording; whether it includes child provisions (one source mentions children under five) | Official text |
| `hn-velocidad` | Obey posted limits (Art. 68); speeding is a serious infraction (Art. 98) | General urban/highway limits, if any, before publishing numbers; status of the 2026 highway-limit reform | Official text; Congreso Nacional |
| `hn-ebriedad` | Drunk driving is a serious infraction (Art. 98) and is sanctioned under a separate law; licence suspension reported | Legal alcohol limit (sources conflict), penalty scale | Ley de Tránsito; Ley de Penalización de la Embriaguez Habitual |
| `hn-licencia` | Licence required for the vehicle category; issued by DNVT; minimum age 18 (reported); tests updated 2026 | Current requirements and steps | tramites.diger.gob.hn/LandingPage/DetalleTramite/64 |
| `hn-licencia-categorias` | Categories A, B, B1, BE, C1, C, CE, D1, D; proposed split of category A is **not** confirmed | Category list and definitions | DNVT |
| `hn-visitantes` | Not confirmed: rules for visitors with foreign licences | Whether and how long a foreign licence / IDP is valid | DNVT, Secretaría de Seguridad, consulates |
| `hn-retencion-infantil` | No confirmed Honduran child-seat rule found | Whether any provision exists | Official text |
| `hn-911` | 911 is the national emergency number | Coverage and response on Roatán; local numbers (Red Cross, fire service, hospital) before publishing | Sistema Nacional de Emergencias 911; local authorities |

## B. Deliberately NOT published as law (listed on the law page)

- General speed limits
- Overtaking rules and their articles
- Phone use while driving
- The legal alcohol limit
- Fine amounts
- Child seats
- Visitor licence rules

If any of these is confirmed, add a record to `legal.mjs` and reference it from the relevant lesson with `{ kind: 'law', fact: '<id>' }`.

## C. Educational claims to double-check against the cited publications

1. **Helmet effect** (`helmet-why`): "reduces risk of death by more than six times and brain injury by up to 74%". Attributed to the WHO *Road traffic injuries* fact sheet (2023). Confirm the wording and year.
2. **WHO *Speed management: a road safety manual*, 2nd edition (2023):** confirm the edition and year cited in several lessons.
3. **WHO "road traffic injuries are the leading cause of death for ages 5–29"** (`new-drivers`): confirm against the *Global status report on road safety 2023*.
4. **Spanish titles of WHO manuals.** Some lessons give translated Spanish titles for manuals whose official Spanish edition titles were not verified: pedestrian safety (2013), seat-belts and child restraints (2009), drinking and driving (2007), IFRC first-aid guidelines (2020). Replace them with the official Spanish titles where these exist, or mark "(en inglés)".
5. **Stopping-distance figures** are computed with stated assumptions (1.5 s reaction time, 7 m/s² deceleration): 30 km/h ≈ 17 m, 50 ≈ 35 m, 60 ≈ 45 m, 80 ≈ 69 m. These are physics, labelled "approximate".
6. **Road signs** (`src/content/signs.mjs`): original drawings. Check every item marked `verify` against the SIECA *Manual Centroamericano de Dispositivos Uniformes para el Control del Tránsito*, including:
   - the speed-limit sign format
   - the no U-turn, no left turn and no parking symbols
   - warning-sign symbols
   - flashing-signal meanings
   - yellow/white line conventions in `road-markings`
7. **National statistics** (`src/content/data.mjs`):
   - DNVT: 1,894 deaths in 2025 (1,887 in 2024)
   - ONV-UNAH: 2,029 deaths in 2025, a rate of 20.2 per 100,000

   Both come via press reports. Link to the original reports once they are available.

## D. Language review

Native Honduran Spanish speakers from Roatán should review all Spanish text. Native English speakers from the Bay Islands should review the English. Specific words to check:

- *palangana* (pickup bed)
- *caballito* (wheelie)
- *piques* (street racing)
- *rebasar* / *adelantar*
- *patronato*
