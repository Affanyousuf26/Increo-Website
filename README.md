# Increo website

Premium corporate homepage for Increo, built with Astro, strict TypeScript, Tailwind CSS v4, GSAP, and static output.

## Setup

Node.js 20 or newer is required.

```bash
npm install
cp .env.example .env
npm run dev
```

## Commands

- `npm run dev` — local development server
- `npm run check` — Astro and TypeScript validation
- `npm run build` — validated production build
- `npm run preview` — preview the production build

## Environment

`PUBLIC_FORMSPREE_ENDPOINT` enables inquiry submission. Without it, the form remains visually and functionally reviewable but does not transmit data. `SITE_URL` sets production canonical URLs.

## Structure

```text
src/components/  Astro layout, home, and UI components
src/data/        Typed navigation, resilience-stack, and product content
src/pages/       Homepage and draft privacy notice
src/styles/      Global brand and responsive styles
src/scripts/     Navigation, animation, and form behavior
public/          Static icons, social image, and robots file
```

See `DESIGN_SYSTEM.md`, `CONTENT_GUIDELINES.md`, and `DEPLOYMENT.md` before launch.

