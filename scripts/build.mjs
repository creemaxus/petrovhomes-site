// Generates the HTML pages, sitemap.xml, and robots.txt in public/ from src/.
// Zero dependencies. Cloudflare deploys public/ as-is, so run this before
// committing any change under src/.
//
//   node scripts/build.mjs          write files
//   node scripts/build.mjs --check  exit 1 if public/ is out of date

import { mkdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { renderPage, absoluteUrl } from "../src/layout.mjs";
import home from "../src/pages/home.mjs";
import about from "../src/pages/about.mjs";
import buyers from "../src/pages/buyers.mjs";
import sellers from "../src/pages/sellers.mjs";
import communities from "../src/pages/communities.mjs";
import contact from "../src/pages/contact.mjs";
import notFound from "../src/pages/not-found.mjs";

const publicDir = join(dirname(fileURLToPath(import.meta.url)), "..", "public");
const pages = [home, about, buyers, sellers, communities, contact, notFound];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .filter((p) => !p.noindex)
  .map((p) => `  <url><loc>${absoluteUrl(p.path)}</loc></url>`)
  .join("\n")}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${absoluteUrl("/sitemap.xml")}
`;

const files = new Map([
  ...pages.map((p) => [p.output, renderPage(p)]),
  ["sitemap.xml", sitemap],
  ["robots.txt", robots],
]);

if (process.argv.includes("--check")) {
  const stale = [];
  for (const [file, contents] of files) {
    const current = await readFile(join(publicDir, file), "utf8").catch(() => null);
    if (current !== contents) stale.push(file);
  }
  if (stale.length) {
    console.error(`public/ is out of date. Run "npm run build". Stale: ${stale.join(", ")}`);
    process.exit(1);
  }
  console.log("public/ is up to date.");
} else {
  for (const [file, contents] of files) {
    const path = join(publicDir, file);
    await mkdir(dirname(path), { recursive: true });
    await writeFile(path, contents);
  }
  console.log(`Built ${files.size} files into public/.`);
}
