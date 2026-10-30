# QA report

**Date:** 30 October 2026
**Build:** 86 pages plus root redirect and 404
**Environment:** Linux; Chromium (Playwright); Node 22

Everything below was actually run. Anything that was not tested is listed under **Not tested**.

## 1. Static checks: `npm run check`

Scope: all 88 HTML files and 6,170 internal links and asset references.

Each file is checked for:

- broken internal links
- missing in-page anchors
- missing assets
- duplicate ids
- exactly one `<h1>`
- heading-level jumps
- `<img>` without `alt`
- missing `<title>`, meta description, `lang` and canonical

**Result:** no problems. The checks also pass for a sub-folder build (`BASE_PATH=/roatan-vial`).

Issues found and fixed during QA:

- two pages jumped from h1 to h3
- the 404 page had a short meta description

The build itself validates content. It fails on:

- a missing related-lesson id
- a duplicate slug
- a lesson without exactly 3 check questions

## 2. Browser QA: `tools/qa/browser-qa.cjs`

The run covered every page in the sitemap plus a non-existent URL (87 URLs), each at **360 px, 768 px and 1280 px**.

| Check | Result |
|---|---|
| JavaScript console errors / uncaught exceptions | **0**. The only console messages are the expected 404 status on the deliberately non-existent URL |
| Failed same-site requests (missing CSS/JS/fonts/images) | **0** |
| Horizontal overflow | **0** after fixes. Found and fixed: header controls 7 px too wide at 360 px; long Spanish display word on the About page |
| axe-core 4.10 (WCAG 2.0/2.1/2.2 A and AA rules), 360 px and 1280 px | **0 violations** after fixes. Found and fixed: unlabelled decorative sign SVGs; teal numerals on sand below 4.5:1; a scrollable table that was not keyboard-focusable |

## 3. Interactions (390 × 844 viewport)

| Test | Result |
|---|---|
| `/` redirects to `/es/` | PASS |
| Menu opens; Escape closes it; focus returns to the menu button | PASS |
| Language switch on a lesson resolves to the matching English lesson | PASS |
| Pre-ride checklist: tick all 10 → 10/10 and completion message; Reset → 0 | PASS |
| **Every lesson knowledge check** (24 lessons × 2 languages = 48 pages): answering correctly gives "3 of 3" | PASS 48/48 |
| **Every scenario choice** (6 scenarios × 4 choices × 2 languages = 48): the matching feedback and takeaway appear | PASS 48/48 |
| **Quiz, all 50 questions, both languages**: deliberately mixed right and wrong answers; the score matches expected (33/50); the review lists exactly the 17 missed; Retake restarts at question 1; submitting with no answer prompts and does not advance | PASS |
| First Tab focuses the skip link | PASS |
| Poster PDF download is served with a PDF content type | PASS |

## 4. Lighthouse 12 (mobile, simulated throttling, local server)

| Page | Performance | Accessibility | Best practices | SEO | LCP | CLS | TBT |
|---|---|---|---|---|---|---|---|
| `/es/` | 97 | 100 | 100 | 100 | 2.5 s | 0 | 0 ms |
| `/es/aprende/pasajeros-en-moto/` | 98 | 100 | 100 | 100 | 2.3 s | 0 | 0 ms |
| `/en/challenge/` | 97 | 100 | 100 | 100 | 2.6 s | 0 | 0 ms |
| `/es/senales/` | 97 | 100 | 100 | 100 | 2.5 s | 0 | 0 ms |

On a real host with compression and caching, results will differ. Re-run Lighthouse on the live URL.

## 5. Visual review

Screenshots were reviewed at 1440 px and 390 px for:

- the home page (all 13 sections)
- a lesson
- the motorcycle, signs, law and campaigns pages
- all campaign graphics and the OG images

Design fixes made during review:

- the helmet headline was too large and collided with the diagram
- the embedded scenario was cramped
- the sign row wrapped
- the secondary family headline was oversized
- the hero map crossed the headline on phones
- campaign graphics rendered with fallback fonts; fonts are now embedded

## Not tested (and why)

- **External links (158 unique URLs).** The build environment's network policy blocked most outside hosts, including the Honduran government sites. All external URLs come from search results gathered during research. They need a manual click-through before launch.
- **Real devices:** iPhone Safari, Android Chrome, desktop Safari and Firefox were not available. Only Chromium was tested. The code uses no browser-specific features beyond `:has()` (used for a cosmetic overflow rule; supported in all current browsers) and variable fonts.
- **Screen readers:** structure was validated with axe, and keyboard flows were scripted, but no manual pass was made with VoiceOver, TalkBack or NVDA.
- **Content accuracy by a native reviewer:** see `legal-verification.md`, section D.

## How to re-run

```bash
npm start                                  # terminal 1
npm run check                              # static
cd tools/qa && npm install && cd ../..     # once: installs axe-core
node tools/qa/browser-qa.cjs               # browser QA (needs Playwright + Chromium)
```
