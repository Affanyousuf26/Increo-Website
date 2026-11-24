# Deployment

## Local validation

```bash
npm ci
npm run check
npm run build
npm run preview
```

## Environment variables

- `PUBLIC_FORMSPREE_ENDPOINT`: public Formspree submission URL (e.g., `https://formspree.io/f/mzeryazg`). The form remains in safe preview mode when omitted.
- `SITE_URL`: canonical production origin, without a trailing slash (e.g., `https://increo.in`).

## Vercel Deployment (Recommended)

1. **Import Project into Vercel**:
   - Push repository to GitHub/GitLab/Bitbucket.
   - Go to [vercel.com](https://vercel.com) and click **Add New... → Project**.
   - Select your repository. Vercel automatically detects the **Astro** framework preset.
2. **Configure Build Settings**:
   - Framework Preset: **Astro**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install` (or `npm ci`)
3. **Set Environment Variables**:
   Under **Environment Variables**, add:
   - `PUBLIC_FORMSPREE_ENDPOINT` = `https://formspree.io/f/mzeryazg`
   - `SITE_URL` = `https://increo.in` (or your custom domain / Vercel preview domain)
4. **Deploy**:
   - Click **Deploy**. Vercel will build and serve the static assets from `dist/` with edge caching and SSL out of the box.

## GitHub Pages

The workflow at `.github/workflows/deploy.yml` builds and deploys `dist/`. In repository settings, select GitHub Actions as the Pages source. The Astro base path is derived from `GITHUB_REPOSITORY` during Actions builds.

Deployment has not been enabled or triggered as part of initial development. Confirm content, legal language, Formspree configuration, and the canonical URL before publishing.

For a future custom domain, set `SITE_URL`, configure the Pages domain, and add a `public/CNAME` file containing the approved domain.
