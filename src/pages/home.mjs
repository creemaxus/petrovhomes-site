import { site } from "../site.config.mjs";
import { communities } from "../content/communities.mjs";
import { picture, closingCta, absoluteUrl } from "../layout.mjs";

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.brand,
    url: absoluteUrl("/"),
  },
  {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    name: site.agentName,
    url: absoluteUrl("/"),
    image: absoluteUrl("/assets/images/max-petrov-marina-800.webp"),
    areaServed: [site.primaryMarket, site.secondaryMarket].map((name) => ({
      "@type": "AdministrativeArea",
      name: `${name}, ${site.state}`,
    })),
    knowsLanguage: ["en", "ru"],
    ...(site.contact.email && { email: site.contact.email }),
    ...(site.contact.phone && { telephone: site.contact.phone }),
  },
];

const feature = ({ id, eyebrow, title, body, points, href, link, image, tone, flip }) => `
      <section class="section feature section--${tone}${flip ? " feature--flip" : ""}" aria-labelledby="${id}">
        <div class="container feature__inner">
          ${picture(image, { sizes: "(min-width: 60em) 42vw, 100vw", className: "feature__media" })}
          <div class="feature__text" data-reveal>
            <p class="eyebrow${tone === "ivory-deep" ? "" : " eyebrow--light"}">${eyebrow}</p>
            <h2 class="display-2" id="${id}">${title}</h2>
            <p class="lead">${body}</p>
            <ul class="tick-list${tone === "ivory-deep" ? "" : " tick-list--light"}">
              ${points.map((p) => `<li>${p}</li>`).join("\n              ")}
            </ul>
            <a class="text-link" href="${href}">${link} <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>`;

export default {
  path: "/",
  output: "index.html",
  title: "Petrov Homes | Max Petrov, Real Estate in Snohomish & King County, WA",
  description:
    "Buy or sell a home in Snohomish and King County with Max Petrov, a real estate agent with 10+ years of construction and flipping experience.",
  bodyClass: "page-home",
  jsonLd,
  content: () => `
      <section class="hero" aria-labelledby="hero-title">
        <div class="container hero__inner">
          <div class="hero__text">
            <p class="eyebrow eyebrow--light">Max Petrov · Washington Real Estate</p>
            <h1 class="hero__title" id="hero-title">See beyond the photos.</h1>
            <p class="hero__lead">Buy and sell in Snohomish and King counties with practical insight from a construction and flipping background.</p>
            <div class="button-row">
              <a class="button button--light" href="/contact/">Work with Max</a>
              <a class="button button--outline-light" href="/communities/">Explore the area</a>
            </div>
          </div>
          ${picture("maxMarina", { sizes: "(min-width: 60em) 40vw, 100vw", priority: true, className: "hero__media", positionMobile: "50% 14%" })}
        </div>
      </section>

      <section class="strip" aria-label="At a glance">
        <ul class="container strip__list">
          <li><span>Construction &amp; flipping background</span></li>
          <li><span>Snohomish &amp; King counties</span></li>
          <li><span>English &amp; <span lang="ru">Русский</span></span></li>
        </ul>
      </section>

      <section class="section section--ivory meet" aria-labelledby="meet-title">
        <div class="container meet__inner">
          ${picture("maxInterior", { sizes: "(min-width: 60em) 34vw, 100vw", className: "meet__media" })}
          <div class="meet__text" data-reveal>
            <p class="eyebrow">Meet Max</p>
            <h2 class="display-2" id="meet-title">A practical partner for a big decision.</h2>
            <p class="lead">Max Petrov helps buyers and sellers across Snohomish and King counties make clear, confident decisions about homes.</p>
            <p>His ${site.constructionExperience} means he looks past fresh paint and staging to how a house is built, how it has been cared for, and what it may need next. He keeps advice straightforward, explains the tradeoffs, and works alongside your inspector, lender, and other professionals. He works with clients in English and Russian.</p>
            <a class="text-link" href="/about/">More about Max <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>
${feature({
  id: "buyers-title",
  eyebrow: "For buyers",
  title: "Buy with a clearer view of the house.",
  body: "Compare homes on how they’re built and maintained, not just how they’re staged.",
  points: [
    "Condition questions worth raising with your inspector",
    "Realistic thinking about renovation ideas",
    "Offers shaped by what you learned",
  ],
  href: "/buyers/",
  link: "Buying with Max",
  image: "maxHouse",
  tone: "ivory-deep",
  flip: true,
})}
${feature({
  id: "sellers-title",
  eyebrow: "For sellers",
  title: "Sell with a plan that fits the house.",
  body: "Decide what’s worth fixing, price with context, and present the home’s real strengths.",
  points: [
    "Preparation priorities buyers are likely to notice",
    "Pricing based on comparable sales and condition",
    "Accurate, well-prepared presentation",
  ],
  href: "/sellers/",
  link: "Selling with Max",
  image: "maxBrick",
  tone: "slate",
})}

      <section class="section section--ivory perspective" aria-labelledby="perspective-title">
        <div class="container perspective__inner">
          <div class="perspective__head" data-reveal>
            <p class="eyebrow">The construction perspective</p>
            <h2 class="display-2" id="perspective-title">How a house is built shapes what it’s worth to you.</h2>
          </div>
          ${picture("maxStudio", { sizes: "(min-width: 60em) 30vw, 100vw", className: "perspective__media" })}
          <ol class="numbered">
            <li data-reveal><h3>Read condition signals</h3><p>Spot what deserves a closer look before you commit.</p></li>
            <li data-reveal><h3>Consider renovation potential</h3><p>Think through which changes are practical and what they involve.</p></li>
            <li data-reveal><h3>Prioritize preparation</h3><p>Put seller effort where buyers are likely to notice it.</p></li>
            <li data-reveal><h3>Understand tradeoffs</h3><p>Weigh location, condition, size, and price together.</p></li>
          </ol>
          <p class="perspective__note">Max’s observations help you decide what to investigate. They complement a licensed home inspection; they don’t replace it.</p>
        </div>
      </section>

      <section class="section section--ivory-deep area" aria-labelledby="area-title">
        <div class="container area__inner">
          <figure class="area__figure">
            ${picture("mukilteoLighthouse", { sizes: "(min-width: 60em) 55vw, 100vw", className: "area__media" })}
            <figcaption>Mukilteo Lighthouse Park</figcaption>
          </figure>
          <div class="area__text" data-reveal>
            <p class="eyebrow">Explore the area</p>
            <h2 class="display-2" id="area-title">Six communities, each with its own character.</h2>
            <ul class="area__list">
              ${communities
                .map(
                  (c) => `<li><a href="/communities/#${c.slug}"><span class="area__name">${c.name}</span><span class="area__arrow" aria-hidden="true">→</span></a></li>`,
                )
                .join("\n              ")}
            </ul>
            <a class="text-link" href="/communities/">All community guides <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      ${closingCta({
        id: "closing-title",
        title: "Your next move starts with a conversation.",
        lead: "Buying, selling, or still deciding, start with your goals and timing.",
        label: "Let’s talk",
        image: "maxSkyline",
      })}`,
};
