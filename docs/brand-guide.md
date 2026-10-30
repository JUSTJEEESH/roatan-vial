# ROATÁN VIAL — Brand guide

The public version of this guide is at `/es/marca/` and `/en/brand/`. All files are in `src/assets/brand/`.

## Idea

**The road leads to someone.** The symbol shows three centre-line road dashes rising along a gentle curve, like the main road of a long, narrow island, ending in a dot: a person, someone waiting at home. In the wordmark, the accent on the Á of ROATÁN is another road dash. The identity connects road, island, movement, direction and human lives, without literal clip-art, crests or badges.

## Logo files

| File | Use |
|---|---|
| `logo-primary-*.svg` | Stacked, with the descriptor *Seguridad vial para todos*. Posters, documents, about pages |
| `logo-horizontal-*.svg` | Site header, email signatures, campaign footers |
| `symbol-*.svg`, `favicon.svg` | Compact uses: favicon, app icon, small sizes |
| `avatar.svg` / `avatar.png` | Social profile picture (full-bleed square; platforms crop it to a circle) |

Variants:

- `dark`: on forest, with background
- `reverse`: white text with a lime accent, for dark backgrounds
- `light`: forest text with a teal accent, for light backgrounds
- `mono-white`, `mono-black`: one colour

To regenerate: `python3 tools/brand/make_logos.py` (requires `pip install fonttools uharfbuzz brotli`).

### Rules

- Clear space: at least the height of the symbol's dot on all sides.
- Minimum size: horizontal logo 120 px wide on screen or 30 mm in print. Below that, use the symbol alone.
- Do not stretch, recolour, outline or shadow the logo, or rebuild it in another font.
- Do not combine it with government crests, seals or logos, or imply endorsement.

## Colour

| Token | Hex | Use |
|---|---|---|
| Forest | `#123D38` | Primary brand colour, headers, dark sections |
| Forest deep | `#0C2B27` | Footer, deep sections |
| Charcoal | `#202A28` | Body text, dark campaign backgrounds |
| Warm white | `#FAFAF7` | Page background |
| Sand | `#F3EBDD` | Secondary backgrounds |
| Teal | `#197D78` (text: `#136460`) | Links and accents on light backgrounds |
| Safety lime | `#D7E65A` | **Accent only.** Use on forest or charcoal. Never as text on white, never as a large background except the "Llegar tarde" campaign |
| Muted grey | `#69736F` (text on sand: `#5F6965`) | Secondary text |
| Coral | `#E77C66` (text: `#B4462F`) | Warnings and "dangerous" states, sparingly |

## Typography

- **Archivo** (variable): headlines at weight 800 and width 112%, uppercase for campaign lines, tight leading (0.93–0.95). Sentence-case headings use weight 720–760 at normal width.
- **Atkinson Hyperlegible Next** (variable): body text at 400 / 700. It was designed for low-vision readers.
- The type scale is fluid, defined in `src/assets/css/main.css` (`--fs-xs` to `--fs-3xl`).

## Graphic devices

- **Lane dash** (`.lane`): a dashed line used as a divider and accent.
- **Kilometre-post marker** (`.marker`): "KM 04" section numbering, like the roadside posts that mark the way.
- **Stylised island map**: decorative only, never presented as an accurate map.

## Campaign layout

The layout is the same in every format:

1. Descriptor at the top, with a lane dash.
2. Headline in uppercase Archivo, with the last line in the accent colour.
3. One supporting sentence.
4. Logo and "Emergencias: 911" at the bottom.

Use no photos of crashes or victims and no emojis. Edit lines in `src/content/campaigns.mjs`, then run `npm run images`.

## Voice

Direct, human and respectful. Criticise behaviours, never people or communities. Never preachy, never political. Full rules are in `docs/content-guide.md`.
