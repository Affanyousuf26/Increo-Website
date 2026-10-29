# Deployment

## Local validation

```bash
npm ci
npm run check
npm run build
npm run preview
```

## Environment variables

- `PUBLIC_FORMSPREE_ENDPOINT`: public Formspree submission URL. The form remains in safe preview mode when omitted.
- `SITE_URL`: canonical production origin, without a trailing slash.

## GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds and deploys `dist/`. In repository settings, select GitHub Actions as the Pages source. The Astro base path is derived from `GITHUB_REPOSITORY` during Actions builds.

Deployment has not been enabled or triggered as part of initial development. Confirm content, legal language, Formspree configuration, and the canonical URL before publishing.

For a future custom domain, set `SITE_URL`, configure the Pages domain, and add a `public/CNAME` file containing the approved domain.
