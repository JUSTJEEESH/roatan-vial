// Photography slots.
//
// The site ships WITHOUT photographs on purpose: no authentic, properly licensed
// documentary photographs of Roatán roads were available, and the project will
// not present stock or AI-generated images as Roatán documentary photography.
// Each slot below renders its graphic composition until a real photograph is
// added. To add one:
//   1. Put optimised files in src/assets/images/photos/ (see docs/photography-plan.md).
//   2. Fill `file`, `width`, `height`, `credit`, `license`, `alt` for the slot.
//   3. Rebuild. The page will show the photograph instead of the fallback.

export const photos = {
  'home-hero': {
    brief: 'Wide, early-morning view of the main road with an ordinary rider wearing a fastened helmet. Candid, not posed. Horizon in the upper third.',
    file: null, width: null, height: null, credit: null, license: null,
    alt: { es: '', en: '' }
  },
  'home-family': {
    brief: 'Parent and teenager (both helmeted, consenting, releases signed) preparing to ride; focus on fastening the chin strap.',
    file: null, width: null, height: null, credit: null, license: null,
    alt: { es: '', en: '' }
  },
  'moto-hero': {
    brief: 'Close detail of hands fastening a helmet chin strap, rider on a work motorcycle; natural light.',
    file: null, width: null, height: null, credit: null, license: null,
    alt: { es: '', en: '' }
  },
  'community-workshop': {
    brief: 'A real community safety session (only once one has happened), participants consenting, no minors identifiable without guardian release.',
    file: null, width: null, height: null, credit: null, license: null,
    alt: { es: '', en: '' }
  },
  'vision-landscape': {
    brief: 'Island landscape where the road meets the coast, showing the road as a connecting line between communities.',
    file: null, width: null, height: null, credit: null, license: null,
    alt: { es: '', en: '' }
  }
};
