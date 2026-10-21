# INCREO Website

The official INCREO company website.

## Local development

Requirements: Node.js 20 or newer.

```bash
npm run dev
```

Open the local URL printed in the terminal. Website source files live in `dist/`,
so the same directory can be deployed directly to any static host.

## Validation

```bash
npm run check
```

## Project structure

```text
dist/
  index.html       Main page
  assets/
    css/styles.css Global styles
    js/main.js     Browser behavior
scripts/
  check-site.mjs   Dependency-free project checks
  serve-site.mjs   Dependency-free local preview server
```

