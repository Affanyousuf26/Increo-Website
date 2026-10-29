import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const repository = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGitHubPages = process.env.GITHUB_ACTIONS === "true" && Boolean(repository);

export default defineConfig({
  output: "static",
  site: process.env.SITE_URL || "https://affanyousuf26.github.io",
  base: isGitHubPages ? `/${repository}` : "/",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
