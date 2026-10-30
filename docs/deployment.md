# Connecting GitHub and deploying

The site builds to plain static files in `dist/`. Any static host works. None of the options below costs money for a site this size.

## 1. GitHub

This folder is already a git repository with the remote `origin` set to `github.com/JUSTJEEESH/roatan-vial`.

```bash
git add -A
git commit -m "Roatán Vial website"
git push -u origin main      # or your branch name
```

`dist/` and `node_modules/` are ignored. The host builds the site itself.

## 2. Choose a host

### Option A: GitHub Pages (workflow included)

`.github/workflows/deploy.yml` builds and publishes the site on every push to `main`.

1. On GitHub, go to **Settings → Pages → Build and deployment**. Set **Source** to **GitHub Actions**.
2. Go to **Settings → Secrets and variables → Actions → Variables** and add:
   - `SITE_URL`: the final origin, e.g. `https://www.your-domain.org`, or `https://justjeeesh.github.io` while you have no custom domain
   - `BASE_PATH`: `/roatan-vial` if served at `username.github.io/roatan-vial`; leave empty for a custom domain
   - `CONTACT_EMAIL`: optional; leave empty until a staffed address exists
3. Push to `main`.

### Option B: Cloudflare Pages or Netlify

- Build command: `npm run build`
- Output directory: `dist`
- Environment variables: `SITE_URL` (and optionally `CONTACT_EMAIL`)
- Node version: 18 or later

## 3. Custom domain

1. Buy the domain.
2. Point DNS at the host, following the host's instructions.
3. Set `SITE_URL` to the domain and rebuild. Canonical URLs, hreflang links, the sitemap, Open Graph URLs and `robots.txt` all update automatically.
4. Add the hosting provider's name and privacy link to the privacy page (`src/templates/pages/info.mjs`, Hosting section).

## 4. After launch

- Submit `https://<domain>/sitemap.xml` to Google Search Console and Bing Webmaster Tools.
- Run Lighthouse on the live URL (mobile).
- Re-run `npm run check`, then the browser QA in `docs/qa-report.md`, after every content change.
