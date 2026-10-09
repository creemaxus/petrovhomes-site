// Shared page shell: <head>, header, footer, and small rendering helpers.
// Edit navigation and footer content here; every page picks it up on build.

import { site } from "./site.config.mjs";
import { images } from "./content/images.mjs";

export const nav = [
  { href: "/about/", label: "About" },
  { href: "/buyers/", label: "Buyers" },
  { href: "/sellers/", label: "Sellers" },
  { href: "/communities/", label: "Communities" },
  { href: "/contact/", label: "Contact", cta: "Let’s talk" },
];

export function esc(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

export const absoluteUrl = (path) => new URL(path, site.url).href;

// Responsive <picture> (AVIF, WebP fallback) for an entry in content/images.mjs.
// Lazy by default; pass eager for above-the-fold images and priority for the
// main hero. The image fills its frame; crop with the frame's aspect-ratio and
// the entry's focal point (override per use with position / positionMobile).
export function picture(
  key,
  { sizes = "100vw", eager = false, priority = false, className = "", position, positionMobile } = {},
) {
  const image = images[key];
  const largest = image.widths.at(-1);
  const height = Math.round((largest * image.ratio[1]) / image.ratio[0]);
  const srcset = (ext) => image.widths.map((w) => `/assets/images/${image.file}-${w}.${ext} ${w}w`).join(", ");
  const fallback = `/assets/images/${image.file}-${image.widths[1] ?? largest}.webp`;
  const loading = priority ? `fetchpriority="high"` : eager ? `loading="eager"` : `loading="lazy"`;
  const pos = position ?? image.position;
  const posMobile = positionMobile ?? image.positionMobile;
  const style = `--pos: ${pos}${posMobile ? `; --pos-m: ${posMobile}` : ""}`;
  return `<picture class="frame ${className}">
            <source type="image/avif" srcset="${srcset("avif")}" sizes="${sizes}">
            <img src="${fallback}" srcset="${srcset("webp")}" sizes="${sizes}" width="${largest}" height="${height}" alt="${esc(image.alt)}" style="${style}" ${loading} decoding="async">
          </picture>`;
}

// Interior page header. With an image it becomes a text / portrait split.
export function pageHeader({ eyebrow, title, lead, image, imageOptions = {} }) {
  const text = `<div class="page-header__text">
            <p class="eyebrow eyebrow--light">${eyebrow}</p>
            <h1 class="display-1">${title}</h1>
            ${lead ? `<p class="page-header__lead">${lead}</p>` : ""}
          </div>`;
  if (!image) {
    return `<section class="page-header">
        <div class="container page-header__inner">
          ${text}
        </div>
      </section>`;
  }
  return `<section class="page-header page-header--media">
        <div class="container page-header__inner">
          ${text}
          ${picture(image, { sizes: "(min-width: 60em) 40vw, 100vw", eager: true, className: "page-header__media", ...imageOptions })}
        </div>
      </section>`;
}

export function closingCta({ id, title, lead, href = "/contact/", label = "Let’s talk" }) {
  return `<section class="section section--navy closing-cta" aria-labelledby="${id}">
        <div class="container">
          <div class="closing-cta__inner">
            <h2 class="display-2" id="${id}">${title}</h2>
            ${lead ? `<p class="lead">${lead}</p>` : ""}
            <a class="button button--light" href="${href}">${label}</a>
          </div>
        </div>
      </section>`;
}

export function steps(items) {
  return `<ol class="steps">
            ${items
              .map(
                ({ title, body }) => `<li class="steps__item">
              <h3 class="steps__title">${title}</h3>
              <div class="steps__body">${body}</div>
            </li>`,
              )
              .join("\n            ")}
          </ol>`;
}

export function contactMethods() {
  const { email, phone, phoneDisplay } = site.contact;
  const items = [];
  if (email) items.push(`<a href="mailto:${esc(email)}">${esc(email)}</a>`);
  if (phone) items.push(`<a href="tel:${esc(phone)}">${esc(phoneDisplay || phone)}</a>`);
  return items;
}

export function socialLinks() {
  return (site.social ?? [])
    .filter(({ label, url }) => label && url)
    .map(({ label, url }) => `<a href="${esc(url)}" rel="noopener me">${esc(label)}</a>`);
}

function head(page) {
  const canonical = absoluteUrl(page.path);
  const ogImage = absoluteUrl("/assets/images/og-petrov-homes.jpg");
  const jsonLd = page.jsonLd
    ? `\n    <script type="application/ld+json">${JSON.stringify(page.jsonLd)}</script>`
    : "";
  const robots = page.noindex ? `\n    <meta name="robots" content="noindex">` : "";
  const canonicalTag = page.noindex ? "" : `\n    <link rel="canonical" href="${canonical}">`;
  return `<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${esc(page.title)}</title>
    <meta name="description" content="${esc(page.description)}">${robots}${canonicalTag}
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="${esc(site.brand)}">
    <meta property="og:title" content="${esc(page.title)}">
    <meta property="og:description" content="${esc(page.description)}">
${page.noindex ? "" : `    <meta property="og:url" content="${canonical}">\n`}    <meta property="og:image" content="${ogImage}">
    <meta property="og:image:width" content="1200">
    <meta property="og:image:height" content="630">
    <meta property="og:image:alt" content="Max Petrov, Petrov Homes: See beyond the photos.">
    <meta property="og:locale" content="en_US">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="theme-color" content="#0F1A2B">
    <link rel="icon" href="/favicon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="preload" href="/assets/fonts/newsreader-normal.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="/assets/fonts/inter-normal.woff2" as="font" type="font/woff2" crossorigin>
    <link rel="stylesheet" href="/assets/css/site.css">
    <script>document.documentElement.classList.add("js")</script>
    <script src="/assets/js/site.js" defer></script>${jsonLd}
  </head>`;
}

function wordmark() {
  return `<a class="wordmark" href="/" aria-label="${esc(site.brand)}, home">
          <span class="wordmark__name">Petrov</span>
          <span class="wordmark__rule" aria-hidden="true"></span>
          <span class="wordmark__sub">Homes</span>
        </a>`;
}

function header(page) {
  const links = nav
    .map(({ href, label, cta }) => {
      const current = page.path.startsWith(href) ? ` aria-current="page"` : "";
      const cls = cta ? ` class="site-nav__cta"` : "";
      return `<li><a href="${href}"${cls}${current}>${cta ?? label}</a></li>`;
    })
    .join("\n            ");
  return `<a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
      <div class="container site-header__inner">
        ${wordmark()}
        <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="site-nav">
          <span class="nav-toggle__label">Menu</span>
          <span class="nav-toggle__icon" aria-hidden="true"><span></span></span>
        </button>
        <nav class="site-nav" id="site-nav" aria-label="Main">
          <ul>
            ${links}
          </ul>
        </nav>
      </div>
    </header>`;
}

function footer() {
  const { brokerage, license } = site;
  const legal = [];
  if (brokerage.name) {
    const name = brokerage.url
      ? `<a href="${esc(brokerage.url)}" rel="noopener">${esc(brokerage.name)}</a>`
      : esc(brokerage.name);
    legal.push(`<p>${esc(site.agentName)} is licensed with ${name}.${brokerage.address ? ` ${esc(brokerage.address)}` : ""}</p>`);
  }
  if (license.number) legal.push(`<p>Washington real estate license #${esc(license.number)}</p>`);
  legal.push(`<p>&copy; ${new Date().getFullYear()} ${esc(site.agentName)}. ${esc(site.brand)} is the personal brand of real estate agent ${esc(site.agentName)}.</p>`);

  const methods = contactMethods();
  const social = socialLinks();
  const contactBlock = methods.length || social.length
    ? `
          <div>
            <h2 class="footer-heading">Contact</h2>
            <ul class="footer-list">${[...methods, ...social].map((m) => `<li>${m}</li>`).join("")}</ul>
          </div>`
    : "";

  return `<footer class="site-footer">
      <div class="container">
        <div class="site-footer__top">
          <div class="site-footer__brand">
            ${wordmark()}
            <p class="site-footer__tagline">See beyond the photos.</p>
          </div>
          <div>
            <h2 class="footer-heading">Service area</h2>
            <p>${site.primaryMarket}, ${site.stateAbbr}<br>${site.secondaryMarket}, ${site.stateAbbr}</p>
          </div>
          <div>
            <h2 class="footer-heading">Languages</h2>
            <p>English<br><span lang="ru">Русский</span> (Russian)</p>
          </div>${contactBlock}
          <nav aria-label="Footer">
            <h2 class="footer-heading">Explore</h2>
            <ul class="footer-list">
              ${nav.map(({ href, label }) => `<li><a href="${href}">${label}</a></li>`).join("\n              ")}
            </ul>
          </nav>
        </div>
        <div class="site-footer__legal">
          ${legal.join("\n          ")}
        </div>
      </div>
    </footer>`;
}

export function renderPage(page) {
  return `<!DOCTYPE html>
<html lang="en">
  ${head(page)}
  <body class="${page.bodyClass ?? ""}">
    ${header(page)}
    <main id="main">
${page.content().trim()}
    </main>
    ${footer()}
  </body>
</html>
`;
}
