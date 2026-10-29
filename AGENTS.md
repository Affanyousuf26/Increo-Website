# INCREO project guidance

## Architecture

- Astro static output with strict TypeScript.
- Use Astro components by default; add client-side JavaScript only for interaction.
- Resilience layers and products belong in typed files under `src/data`.
- Keep GitHub Pages base-path compatibility; never hardcode root-relative application paths.

## Design and content

- Brand colors are `#6f41c6`, `#0f0f0f`, and `#fafafa`.
- Use Space Grotesk until commercial web rights for Hanson Bold are confirmed.
- Do not use Minecrafter in Phase 1.
- Never invent customers, contracts, deployments, certifications, patents, awards, performance figures, partnerships, or readiness claims.
- The supplied pitch deck is the approved source for the current Resilience Stack and product line; do not extend either without another approved source.
- Label generated and unapproved product imagery as conceptual.

## Quality

- Preserve semantic HTML, keyboard access, focus visibility, reduced motion, and WCAG 2.2 AA contrast.
- Run `npm run check` and `npm run build` before handoff.
- Do not deploy or publish without explicit approval.
