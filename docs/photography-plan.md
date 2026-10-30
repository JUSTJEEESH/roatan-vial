# Photography plan — authentic Roatán photography required

The site ships with **no photographs**. No authentic, properly licensed documentary photographs of Roatán roads were available. The project will not present stock images or AI-generated images as Roatán documentary photography.

Every photo slot currently renders a designed graphic composition instead: the stylised island-road map, typography or diagrams. Nothing on the site is an empty placeholder box.

## Recommended approach

Commission **one to two days of documentary photography from a Honduran photographer based on the island**. This is the single largest quality upgrade available to the site.

## Ethics and consent (non-negotiable)

- Every identifiable person signs a release. For minors, a parent or guardian signs. Keep releases on file.
- Everyone shown riding wears a fastened helmet. No more than two people on a motorcycle.
- No crash scenes, injuries, victims, police stops or staged danger.
- Represent the whole island, without singling out any neighbourhood or group as "the problem". This means:
  - communities across the island, both Spanish- and English-speaking
  - working riders, families, students, older people, drivers, pedestrians
- Candid and natural, not posed advertising. Do not edit people's faces or bodies.
- Credit the photographer on the site, and agree a licence that allows web, social and print use.

## Shot list (maps to `src/content/photos.mjs`)

| Slot | Page | Brief |
|---|---|---|
| `home-hero` | Home, hero | Wide early-morning view of the main road with an ordinary rider wearing a fastened helmet. Candid. Horizon in the upper third; calm space on the left for the headline (the image sits behind text, so keep the left half quiet) |
| `home-family` | Home, families | Parent and teenager, both helmeted, preparing to ride. Focus on fastening the chin strap |
| `moto-hero` | Motorcycles | Close detail of hands fastening a helmet chin strap on a work motorcycle; natural light |
| `community-workshop` | Community | A real community safety session, only once one has taken place |
| `vision-landscape` | Vision | Where the road meets the coast: the road as the line connecting communities |

### Additional library shots (for lessons and campaigns)

- Properly worn helmets in close detail, including a child-size helmet on a child passenger who can reach the footpegs (with guardian release)
- A rider doing the pre-ride check: tyres, lights, mirrors
- Intersections and turn-offs on the main road, with no incident in progress
- Road signs and markings as they really look on the island, including faded markings
- Pedestrians walking facing traffic where there is no pavement; a pedestrian crossing near a school
- A driver checking mirrors or doing a shoulder check
- A rider in a reflective vest at dusk
- Rain on the road, shot from a safe, stationary position
- Bus stops, mototaxis and taxis in everyday use

## Technical specifications

- Deliver full-resolution originals plus web exports.
- Web exports:
  - 2400 px on the long edge for heroes, 1600 px for others
  - sRGB
  - WebP at about quality 75, plus a JPEG fallback
  - target under 250 KB per hero and under 150 KB otherwise
- Filenames: `roatan-<slot>-<short-description>-<photographer>.webp`
- Put the files in `src/assets/images/photos/`.
- In `src/content/photos.mjs`, fill in `file`, `width`, `height`, `credit`, `license`, and meaningful bilingual `alt` text that describes what is shown, not what it means.
- Rebuild. The slot switches from the graphic fallback to the photograph automatically.
- Record every image in `docs/asset-inventory.md`.
