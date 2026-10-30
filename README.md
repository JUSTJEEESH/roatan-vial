# ROATÁN VIAL — Seguridad vial para todos

**Una isla. Un camino. Cada vida cuenta.** · *One island. One road. Every life matters.*

The website of Roatán Vial, an independent, community road-safety education initiative from Roatán, Bay Islands, Honduras. Bilingual (Spanish first, full English), static, free to host, with no tracking.

## What's in it

| | |
|---|---|
| **Pages** | 86 pages: 19 sections × 2 languages, plus 24 lessons × 2 languages. Also a root language redirect, a 404 page, a sitemap and robots.txt |
| **Education** | 24 lessons across 13 categories. Each has objectives, teaching sections, an illustrative example, common mistakes, labelled law / expert / practical notes, an interactive checklist, a 3-question check, sources, related lessons and share links |
| **Motorcycle programme** | Helmet campaign, legal notes, an interactive 10-point pre-ride checklist, a passenger-load module and a syllabus map |
| **Practice** | 6 branching scenarios and a 50-question challenge with progress, explanations, score, review of missed questions and retake |
| **Reference** | Road-sign guide (regulatory, warning, information, direction, signals, markings) and 12 original bilingual diagrams |
| **Law and data** | Sourced legal registry with a status and verification date on every claim; a data page with attributed national figures only |
| **Campaigns** | 7 campaign lines × 2 languages × 3 formats: 1080² post, 1080×1920 story, US Letter poster PDF |
| **Brand** | Wordmark, horizontal, stacked, compact and mono logos, favicon, app icons, social avatar, OG images and a brand guide page |

## Run it locally

You need **Node.js 18 or later**. There are no npm dependencies to install.

```bash
npm start          # builds into dist/ and serves at http://localhost:8080
```

Or step by step:

```bash
npm run build      # → dist/
npm run serve      # → http://localhost:8080  (optional port: node scripts/serve.mjs 3000)
npm run check      # static QA: links, anchors, assets, headings, alt text, ids, metadata
```

Open `http://localhost:8080/`. It redirects to `/es/`. Use the **EN / ES** button in the header to switch language on any page.

> Use the local server rather than opening the files directly. The pages use clean URLs (`/es/aprende/`), which need a server.

## Project structure

```
src/
  site.mjs                 domain, routes, categories, interface strings (ES/EN)
  content/
    lessons/*.mjs          24 bilingual lessons (one file each)
    quiz.mjs               50 bilingual questions
    scenarios.mjs          6 bilingual scenarios
    legal.mjs              Honduran legal-facts registry: status, sources, dates
    data.mjs               statistics registry (attributed figures only)
    signs.mjs              road-sign reference + original SVG sign drawings
    campaigns.mjs          7 campaign lines
    checklists.mjs         pre-ride checklist
    photos.mjs             photography slots (empty until real photos exist)
  templates/
    layout.mjs             <head>, SEO, header, menu, footer
    components.mjs         notes, checklists, knowledge checks, legal fact blocks, photo slots
    diagrams.mjs           12 original educational diagrams (inline SVG, localized)
    lib.mjs                helpers, icons, brand symbol
    pages/*.mjs            one module per page type
  assets/
    css/main.css           design system (tokens, layout, components)
    js/main.js             menu, checklists, lesson checks, scenarios, sharing
    js/quiz.js             the 50-question challenge
    fonts/                 Archivo + Atkinson Hyperlegible Next (SIL OFL 1.1, self-hosted)
    brand/                 logos, symbol, favicon, app icons, avatar
    campaigns/             generated campaign PNGs + poster PDFs
    social/                Open Graph images
    images/photos/         (empty) authentic Roatán photography goes here
scripts/
  build.mjs                static build → dist/
  serve.mjs                local server
  check.mjs                static QA
  render-images.mjs        regenerates campaign/social/icon rasters (dev only; needs Playwright)
tools/
  brand/make_logos.py      regenerates outlined logo SVGs (dev only; needs fonttools, uharfbuzz)
  qa/browser-qa.cjs        browser QA: errors, overflow, axe-core, interactions (dev only)
docs/                      content guide, legal verification, photography plan, asset inventory,
                           QA report, deployment, brand guide, integrations
```

**Why a tiny custom build instead of a framework?** The site has 86 pages generated from about 50 content files. Hand-written HTML would mean duplicating every layout change 86 times. A framework would add hundreds of dependencies. `scripts/build.mjs` is plain Node with zero dependencies, and the output is plain HTML/CSS/JS that any static host can serve.

## Editing content

- **Text in a lesson:** edit `src/content/lessons/<id>.mjs`, both `es` and `en`. Then run `npm run build`.
- **A legal fact:** edit `src/content/legal.mjs`. Update `status`, `verified` and sources. Every page that cites the fact updates automatically. Read `docs/legal-verification.md` first.
- **A new lesson:** copy an existing lesson file and follow `docs/content-guide.md`. The build validates related-lesson ids, slugs and check questions.
- **A photograph:** follow `docs/photography-plan.md`, then fill its slot in `src/content/photos.mjs`.
- **Contact address:** when a staffed role address exists, build with `CONTACT_EMAIL=hola@yourdomain npm run build`, or set it in `src/site.mjs`.

## Configuration

| Variable | Purpose | Default |
|---|---|---|
| `SITE_URL` | Production origin for canonical URLs, sitemap and OG tags | `https://roatanvial.example` (placeholder) |
| `BASE_PATH` | Sub-folder when hosted under a path (e.g. GitHub Pages project site `/roatan-vial`) | empty |
| `CONTACT_EMAIL` | Publishes a contact address on the contact, community and vision pages | empty, so the pages say there is no channel yet |

## Documentation

- `docs/content-guide.md`: voice, bilingual rules, truthfulness rules, schemas
- `docs/legal-verification.md`: **legal facts and claims still requiring final confirmation**
- `docs/photography-plan.md`: **assets requiring authentic Roatán photography**
- `docs/asset-inventory.md`: every asset, its source and licence
- `docs/qa-report.md`: what was actually tested, and the results
- `docs/deployment.md`: connecting GitHub and deploying
- `docs/integrations.md`: optional future services
- `docs/brand-guide.md`: brand usage

## Principles

No invented statistics, laws, partners, endorsements, testimonials or crash stories. No fake forms. No tracking. Dangerous behaviour is the problem. People are the reason we care.
