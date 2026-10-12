import { site } from "../site.config.mjs";
import { communities } from "../content/communities.mjs";
import { picture, absoluteUrl, esc } from "../layout.mjs";

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
    ...(site.brokerage.name && {
      worksFor: {
        "@type": "Organization",
        name: site.brokerage.name,
      },
    }),
  },
];

const photoCommunities = [
  { slug: "edmonds", image: "communityEdmonds" },
  { slug: "mukilteo", image: "communityMukilteo" },
];
const textCommunities = ["lynnwood", "everett", "bothell", "mill-creek"].map((slug) =>
  communities.find((c) => c.slug === slug),
);

const card = ({ href, image, eyebrow, title, text }) => `<a class="photo-card" href="${href}">
            ${picture(image, { sizes: "(min-width: 64em) 30vw, 100vw", className: "photo-card__media", alt: "" })}
            <span class="photo-card__shade" aria-hidden="true"></span>
            <span class="photo-card__copy">
              <span class="photo-card__eyebrow">${eyebrow}</span>
              <span class="photo-card__title">${title}</span>
              <span class="photo-card__text">${text}</span>
              <span class="photo-card__arrow" aria-hidden="true">→</span>
            </span>
          </a>`;

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
        ${picture("homeHeroNorthwest", { sizes: "100vw", priority: true, className: "hero__media" })}
        <div class="hero__shade" aria-hidden="true"></div>
        <div class="container hero__inner">
          <p class="hero__eyebrow">Max Petrov · Washington Real Estate</p>
          <h1 class="hero__title" id="hero-title">Find your place<br> in the Pacific Northwest.</h1>
          <p class="hero__lead">Buying and selling in Snohomish and King counties.</p>
          <div class="hero__actions">
            <a class="button button--light" href="/contact/">Work with Max</a>
            <a class="hero__more" href="/communities/">Explore Communities <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section class="section section--white services" aria-labelledby="services-title">
        <div class="container">
          <h2 class="visually-hidden" id="services-title">How to get started</h2>
          <div class="services__grid">
          ${card({
            href: "/buyers/",
            image: "serviceBuyersInterior",
            eyebrow: "Buyers",
            title: "Find your next home.",
            text: "Practical guidance from the first tour to the keys.",
          })}
          ${card({
            href: "/sellers/",
            image: "serviceSellersExterior",
            eyebrow: "Sellers",
            title: "Plan your next move.",
            text: "Thoughtful preparation, pricing, and presentation.",
          })}
          ${card({
            href: "/communities/",
            image: "serviceCommunitiesRegion",
            eyebrow: "Communities",
            title: "Explore the Northwest.",
            text: "Get to know the places you could call home.",
          })}
          </div>
        </div>
      </section>

      <section class="section section--ivory meet" aria-labelledby="meet-title">
        <div class="container meet__inner">
          <figure class="meet__figure">
            ${picture("maxMarina", { sizes: "(min-width: 60em) 420px, 100vw", className: "meet__media" })}
            <figcaption class="meet__caption">
              <span>${esc(site.agentName)}</span>
              <span>${esc(site.brokerage.name)}</span>
            </figcaption>
          </figure>
          <div class="meet__text">
            <p class="eyebrow">Meet Max</p>
            <h2 class="display-2" id="meet-title">See beyond the photos.</h2>
            <p>Max Petrov helps buyers and sellers across Snohomish and King counties make informed decisions about their next move. His construction and flipping background brings a practical perspective to condition, renovation potential, and preparing a home for sale. Expect straightforward communication, thoughtful guidance, and service in English or Russian.</p>
            <a class="text-link" href="/about/">More About Max <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section class="section section--white places" aria-labelledby="places-title">
        <div class="container">
          <div class="places__intro">
            <p class="eyebrow">Local communities</p>
            <h2 class="display-2" id="places-title">Find your place.</h2>
          </div>
          <div class="places__photos">
            ${photoCommunities
              .map(({ slug, image }) => {
                const c = communities.find((item) => item.slug === slug);
                return `<a class="place-card" href="/communities/#${c.slug}">
              ${picture(image, { sizes: "(min-width: 48em) 40vw, 100vw", className: "place-card__media", alt: "" })}
              <span class="place-card__shade" aria-hidden="true"></span>
              <span class="place-card__name">${c.name} <span aria-hidden="true">→</span></span>
            </a>`;
              })
              .join("\n            ")}
          </div>
          <ul class="places__links">
            ${textCommunities
              .map(
                (c) => `<li><a href="/communities/#${c.slug}">${c.name} <span aria-hidden="true">→</span></a></li>`,
              )
              .join("\n            ")}
          </ul>
        </div>
      </section>

      <section class="seller-band" aria-labelledby="seller-band-title">
        ${picture("sellerConsultationExterior", { sizes: "100vw", className: "seller-band__media", alt: "" })}
        <div class="seller-band__shade" aria-hidden="true"></div>
        <div class="container seller-band__inner">
          <p class="hero__eyebrow">Thinking of selling?</p>
          <h2 class="display-2" id="seller-band-title">A thoughtful plan for your home.</h2>
          <p>Start with your goals, your timing, and a practical look at what to prepare.</p>
          <a class="button button--light" href="/contact/?topic=selling">Talk About Selling</a>
        </div>
      </section>

      <section class="section section--ivory perspective" aria-labelledby="perspective-title">
        <div class="container">
          <h2 class="display-3" id="perspective-title">What Max looks for.</h2>
          <ol class="perspective__list">
            <li>
              <h3>Condition</h3>
              <p>Questions worth investigating before you commit.</p>
            </li>
            <li>
              <h3>Potential</h3>
              <p>Improvements in the context of the house and your goals.</p>
            </li>
            <li>
              <h3>Preparation</h3>
              <p>A focused plan for going to market.</p>
            </li>
          </ol>
          <p class="perspective__note">This complements a professional inspection. It does not replace one.</p>
        </div>
      </section>

      <section class="section section--slate home-close" aria-labelledby="close-title">
        <div class="container home-close__inner">
          <div>
            <h2 class="display-2" id="close-title">Ready to talk?</h2>
            <p>Tell Max what you’re considering.</p>
          </div>
          <a class="button button--light" href="/contact/">Let’s Talk</a>
        </div>
      </section>`,
};
