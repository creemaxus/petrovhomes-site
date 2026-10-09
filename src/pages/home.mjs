import { site } from "../site.config.mjs";
import { communities } from "../content/communities.mjs";
import { picture, absoluteUrl } from "../layout.mjs";

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

const photoCommunities = [
  { slug: "edmonds", image: "edmondsFerry" },
  { slug: "mukilteo", image: "mukilteoLight" },
];
const textCommunities = ["lynnwood", "everett", "bothell", "mill-creek"].map((slug) =>
  communities.find((c) => c.slug === slug),
);

const card = ({ href, image, eyebrow, title, text, position }) => `<a class="photo-card" href="${href}">
            ${picture(image, { sizes: "(min-width: 60em) 30vw, 100vw", className: "photo-card__media", alt: "", position })}
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
        ${picture("mukilteoLighthouse", { sizes: "100vw", priority: true, className: "hero__media", position: "50% 40%" })}
        <div class="hero__shade" aria-hidden="true"></div>
        <div class="container hero__inner">
          <p class="hero__eyebrow">Max Petrov · Washington Real Estate</p>
          <h1 class="hero__title" id="hero-title">Find your place<br> in the Pacific Northwest.</h1>
          <p class="hero__lead">Buying and selling in Snohomish and King counties.</p>
          <p class="hero__brand">See beyond the photos.</p>
          <div class="hero__actions">
            <a class="button button--light" href="/buyers/">Buy a Home</a>
            <a class="button button--outline-light" href="/sellers/">Sell Your Home</a>
            <a class="button button--outline-light" href="/communities/">Explore Communities</a>
          </div>
        </div>
      </section>

      <section class="section section--white services" aria-labelledby="services-title">
        <div class="container">
          <h2 class="visually-hidden" id="services-title">How to get started</h2>
          <div class="services__grid">
          ${card({
            href: "/buyers/",
            image: "edmondsFerry",
            eyebrow: "For buyers",
            title: "Find your next home.",
            text: "Explore your options with a practical eye for condition, potential, and fit.",
            position: "50% 46%",
          })}
          ${card({
            href: "/sellers/",
            image: "mukilteoLight",
            eyebrow: "For sellers",
            title: "Make your next move.",
            text: "Prepare thoughtfully, price with context, and present your home with care.",
            position: "50% 38%",
          })}
          ${card({
            href: "/communities/",
            image: "mukilteoLighthouse",
            eyebrow: "Local communities",
            title: "Discover the Northwest.",
            text: "Explore the places that could become your next neighborhood.",
            position: "78% 58%",
          })}
          </div>
        </div>
      </section>

      <section class="section section--ivory meet" aria-labelledby="meet-title">
        <div class="container meet__inner">
          ${picture("maxMarina", { sizes: "(min-width: 60em) 460px, 100vw", className: "meet__media" })}
          <div class="meet__text">
            <p class="eyebrow">Meet Max Petrov</p>
            <h2 class="display-2" id="meet-title">See beyond the photos.</h2>
            <p>Max Petrov helps buyers and sellers across Snohomish and King counties. He brings ${site.constructionExperience} to the way he looks at a house: how it was built, how it has been maintained, and what a change would actually involve. That construction background is separate from his work as an agent. It helps buyers weigh condition and renovation potential before they commit, and it helps sellers decide which preparation is worth doing. Max keeps the conversation clear, works alongside your inspector and lender, and meets with clients in English or Russian.</p>
            <a class="text-link" href="/about/">Get to Know Max <span aria-hidden="true">→</span></a>
            <ul class="meet__points">
              <li>Construction perspective</li>
              <li>Local focus</li>
              <li>English &amp; Russian</li>
            </ul>
          </div>
        </div>
      </section>

      <section class="section section--white places" aria-labelledby="places-title">
        <div class="container">
          <div class="places__intro">
            <p class="eyebrow">Explore the area</p>
            <h2 class="display-2" id="places-title">Find a place that feels like home.</h2>
            <p>Snohomish and King counties, from Puget Sound waterfront towns to established suburbs along I-5 and I-405.</p>
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
          <a class="text-link" href="/communities/">Explore All Communities <span aria-hidden="true">→</span></a>
        </div>
      </section>

      <section class="seller-band" aria-labelledby="seller-band-title">
        ${picture("edmondsFerry", { sizes: "100vw", className: "seller-band__media", alt: "", position: "50% 62%" })}
        <div class="seller-band__shade" aria-hidden="true"></div>
        <div class="container seller-band__inner">
          <p class="hero__eyebrow">Thinking about selling?</p>
          <h2 class="display-2" id="seller-band-title">Start with a clear plan.</h2>
          <p>Discuss your home, your timing, and the improvements worth considering before you list.</p>
          <a class="button button--light" href="/contact/?topic=selling">Discuss Your Home’s Value</a>
        </div>
      </section>

      <section class="section section--ivory perspective" aria-labelledby="perspective-title">
        <div class="container">
          <h2 class="display-2 perspective__title" id="perspective-title">A closer look at what matters.</h2>
          <ol class="perspective__list">
            <li>
              <h3>Condition</h3>
              <p>Identify questions worth investigating before you commit.</p>
            </li>
            <li>
              <h3>Potential</h3>
              <p>Consider improvements in the context of the property and your goals.</p>
            </li>
            <li>
              <h3>Preparation</h3>
              <p>Focus your effort on a thoughtful plan for going to market.</p>
            </li>
          </ol>
          <p class="perspective__note">This perspective complements a professional inspection. It does not replace one.</p>
        </div>
      </section>

      <section class="section section--navy home-close" aria-labelledby="close-title">
        <div class="container home-close__inner">
          <div>
            <h2 class="display-2" id="close-title">Your next move starts with a conversation.</h2>
            <p>Tell Max what you’re considering, and start with a clear next step.</p>
          </div>
          <a class="button button--light" href="/contact/">Let’s Talk</a>
        </div>
      </section>`,
};
