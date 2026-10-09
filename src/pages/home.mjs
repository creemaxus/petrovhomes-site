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

const communityOrder = ["lynnwood", "everett", "bothell", "mill-creek", "edmonds", "mukilteo"];
const communityLinks = communityOrder.map((slug) => communities.find((c) => c.slug === slug));

export default {
  path: "/",
  output: "index.html",
  title: "Petrov Homes | Max Petrov, Real Estate in Snohomish & King County, WA",
  description:
    "Buy or sell a home in Snohomish and King County with Max Petrov, a real estate agent with 10+ years of construction and flipping experience.",
  bodyClass: "page-home",
  jsonLd,
  content: () => `
      <section class="home-hero" aria-labelledby="hero-title">
        <div class="container home-hero__inner">
          <p class="eyebrow">Max Petrov · Snohomish &amp; King County</p>
          <h1 class="home-hero__title" id="hero-title">See beyond<br> the photos.</h1>
          <div class="home-hero__foot">
            <p class="home-hero__lead">A practical perspective on buying and selling homes in Washington.</p>
            <div class="button-row">
              <a class="button button--dark" href="/contact/">Work with Max</a>
              <a class="button button--outline-dark" href="/communities/">Explore communities</a>
            </div>
          </div>
        </div>
      </section>

      <section class="positioning" aria-label="At a glance">
        <ul class="container positioning__list">
          <li>Construction &amp; flipping experience</li>
          <li>Snohomish &amp; King counties</li>
          <li>English &amp; Russian</li>
        </ul>
      </section>

      <section class="home-section paths" aria-labelledby="paths-title">
        <div class="container">
          <h2 class="display-2 paths__title" id="paths-title">A clearer path to your next home.</h2>
          <div class="paths__grid">
            <article class="path" aria-labelledby="path-buying">
              <h3 class="path__title" id="path-buying">Buying</h3>
              <p>Look beyond staging. Understand the home, weigh the tradeoffs, and make an informed offer.</p>
              <a class="text-link" href="/buyers/">Explore buying with Max <span aria-hidden="true">→</span></a>
            </article>
            <article class="path" aria-labelledby="path-selling">
              <h3 class="path__title" id="path-selling">Selling</h3>
              <p>Focus preparation where it matters, price with context, and present your home with care.</p>
              <a class="text-link" href="/sellers/">Explore selling with Max <span aria-hidden="true">→</span></a>
            </article>
          </div>
        </div>
      </section>

      <section class="home-section meet" aria-labelledby="meet-title">
        <div class="container meet__inner">
          ${picture("maxMarina", { sizes: "(min-width: 60em) 460px, 100vw", className: "meet__media" })}
          <div class="meet__text">
            <p class="eyebrow">Meet Max</p>
            <h2 class="display-2" id="meet-title">A practical eye. A personal approach.</h2>
            <p>Max Petrov helps buyers and sellers across Snohomish and King counties. He brings ${site.constructionExperience} to every home he walks through: how it was built, how it has been cared for, and what it may need next. His advice is clear and practical, he works alongside your inspector and lender, and he serves clients in English and Russian.</p>
            <a class="text-link" href="/about/">More about Max <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section class="section--navy home-section perspective" aria-labelledby="perspective-title">
        <div class="container">
          <h2 class="display-2 perspective__title" id="perspective-title">What’s beneath the surface matters.</h2>
          <ol class="perspective__list">
            <li>
              <h3>Condition</h3>
              <p>Know which questions deserve closer investigation.</p>
            </li>
            <li>
              <h3>Potential</h3>
              <p>Consider improvements in the context of the whole property.</p>
            </li>
            <li>
              <h3>Preparation</h3>
              <p>Focus effort on changes that support the selling plan.</p>
            </li>
          </ol>
          <p class="perspective__note">This perspective complements professional inspections; it doesn’t replace them.</p>
        </div>
      </section>

      <section class="home-section places" aria-labelledby="places-title">
        <div class="container places__inner">
          <figure class="places__figure">
            ${picture("mukilteoLighthouse", { sizes: "(min-width: 60em) 680px, 100vw", className: "places__media" })}
            <figcaption>Mukilteo Lighthouse Park</figcaption>
          </figure>
          <div class="places__text">
            <h2 class="display-2" id="places-title">Find your place in the Northwest.</h2>
            <ul class="places__list">
              ${communityLinks
                .map(
                  (c) => `<li><a href="/communities/#${c.slug}"><span class="places__name">${c.name}</span><span class="places__arrow" aria-hidden="true">→</span></a></li>`,
                )
                .join("\n              ")}
            </ul>
          </div>
        </div>
      </section>

      <section class="home-section home-cta" aria-labelledby="cta-title">
        <div class="container home-cta__inner">
          <h2 class="home-cta__title" id="cta-title">Let’s talk about your next move.</h2>
          <a class="button button--dark" href="/contact/">Let’s talk</a>
        </div>
      </section>`,
};
