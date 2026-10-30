# Optional future services and integrations

None of these is needed for the site to work today. Each requires an update to the privacy policy **before** it is switched on.

| Need | Option | Notes |
|---|---|---|
| Contact | A staffed role address (e.g. `hola@<domain>`) set with `CONTACT_EMAIL` | Simplest; no form, no data stored on the site |
| Contact form | Formspree, Netlify Forms or Cloudflare Workers + email | Only once someone will reply. The form must show real success or failure, never a simulated one |
| Road-hazard reporting | A small backend (e.g. Supabase or a Cloudflare Worker + D1) with moderation | Collect location, hazard type and an optional photo of the place only. Plan moderation and follow-up with authorities first. Always point emergencies to 911 |
| Visit statistics | Privacy-respecting, cookie-free analytics (Plausible, Umami, GoatCounter, Cloudflare Web Analytics) | Aggregate only; disclose it in the privacy policy |
| Quiz progress saving | `localStorage`, opt-in | Currently nothing is stored, by design |
| Printable workshop kit | PDF export of lessons and scenarios | The poster pipeline in `scripts/render-images.mjs` can be extended |
| Video | Self-hosted or YouTube-nocookie | Must include captions and transcripts (WCAG) |
| Additional jurisdictions | Add `legal-<country>.mjs` and local data | The universal/local split is already reflected in the content structure |
| CMS for non-developers | Decap CMS or Pages CMS (Git-based, free) | They edit the same content files |
