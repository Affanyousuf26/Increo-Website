import { access, readFile } from "node:fs/promises";

const requiredFiles = [
  "dist/index.html",
  "dist/assets/css/styles.css",
  "dist/assets/js/main.js",
];

await Promise.all(requiredFiles.map((file) => access(file)));

const html = await readFile("dist/index.html", "utf8");
const requiredMarkup = [
  ["viewport metadata", /<meta\s+name="viewport"/],
  ["description metadata", /<meta\s+name="description"/],
  ["page title", /<title>INCREO<\/title>/],
  ["document language", /<html\s+lang="en"/],
];

const missingMarkup = requiredMarkup
  .filter(([, pattern]) => !pattern.test(html))
  .map(([label]) => label);

if (missingMarkup.length > 0) {
  throw new Error(`Missing required markup: ${missingMarkup.join(", ")}`);
}

console.log("INCREO website checks passed.");
