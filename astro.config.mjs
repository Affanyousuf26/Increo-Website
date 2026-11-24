import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGitHubPages = process.env.GITHUB_ACTIONS === "true" && Boolean(repository);

const defaultSite = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : isGitHubPages
    ? `https://${process.env.GITHUB_REPOSITORY_OWNER || "affanyousuf26"}.github.io`
    : "https://increo.in";

export default defineConfig({
  output: "static",
  site: process.env.SITE_URL || defaultSite,
  base: isGitHubPages ? `/${repository}` : "/",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
