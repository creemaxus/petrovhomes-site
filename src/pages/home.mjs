import { site } from "../site.config.mjs";
import { communities } from "../content/communities.mjs";
import { picture, credit, esc, absoluteUrl } from "../layout.mjs";

const featured = ["everett", "edmonds", "mill-creek", "bothell"].map((slug) =>
  communities.find((c) => c.slug === slug),
);

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
    areaServed: [site.primaryMarket, site.secondaryMarket].map((name) => ({
      "@type": "AdministrativeArea",
      name: `${name}, ${site.state}`,
    })),
    knowsLanguage: ["en", "ru"],
    ...(site.contact.email && { email: site.contact.email }),
    ...(site.contact.phone && { telephone: site.contact.phone }),
  },
];

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
        <div class="hero__media">
          ${picture("cedarHouse", { priority: true, className: "hero__image" })}
        </div>
        <div class="container hero__inner">
          <p class="eyebrow eyebrow--light">Real estate in Snohomish &amp; King County, Washington</p>
          <h1 class="hero__title" id="hero-title">See beyond the photos.</h1>
          <p class="hero__lead">Buy or sell with practical insight from ${esc(site.constructionExperience)}. Max Petrov helps you understand condition, renovation potential, and the tradeoffs that listing photos leave out.</p>
          <div class="button-row">
            <a class="button button--light" href="/contact/">Let’s talk about your move</a>
            <a class="button button--outline-light" href="/communities/">Explore local communities</a>
          </div>
        </div>
        ${credit("cedarHouse", { className: "credit credit--hero" })}
      </section>

      <section class="section section--ivory statement" aria-label="Approach">
        <div class="container">
          <p class="statement__text" data-reveal>Listing photos show a home on its best day. Max helps you understand how it’s put together, what it may need next, and whether it fits the life and budget you’re planning.</p>
          <dl class="fact-strip" data-reveal>
            <div><dt>Primary market</dt><dd>Snohomish County</dd></div>
            <div><dt>Also serving</dt><dd>King County</dd></div>
            <div><dt>Background</dt><dd>10+ years in construction &amp; flipping</dd></div>
            <div><dt>Languages</dt><dd>English &amp; <span lang="ru">Русский</span></dd></div>
          </dl>
        </div>
      </section>

      <section class="section section--ivory-deep split" aria-labelledby="buyers-title">
        <div class="container split__inner">
          <div class="split__intro" data-reveal>
            <p class="eyebrow">For buyers</p>
            <h2 class="display-2" id="buyers-title">Buy with a clearer view of the house.</h2>
            <p class="lead">Touring a home is the start of the evaluation, not the end. Max helps you look past staging and fresh paint to the things that shape your costs and plans after move-in.</p>
            <a class="text-link" href="/buyers/">How buying with Max works <span aria-hidden="true">→</span></a>
          </div>
          <ul class="tick-list" data-reveal>
            <li><strong>Read the condition signals.</strong> Roof, drainage, windows, mechanical systems, and signs of past repairs worth raising with your inspector.</li>
            <li><strong>Think through renovation ideas early.</strong> What looks straightforward, what is likely to be involved, and what deserves a contractor’s estimate.</li>
            <li><strong>Compare homes on more than finishes.</strong> A dated house with good bones gets a fair look next to a freshly flipped one.</li>
            <li><strong>Shape the offer around what you learned.</strong> With your lender, inspector, and other professionals in the loop.</li>
          </ul>
        </div>
      </section>

      <section class="section section--slate split split--reverse" aria-labelledby="sellers-title">
        <div class="container split__inner">
          <div class="split__intro" data-reveal>
            <p class="eyebrow eyebrow--light">For sellers</p>
            <h2 class="display-2" id="sellers-title">Prepare your home with a builder’s eye.</h2>
            <p class="lead">Not every improvement pays off before a sale. Max helps you decide where effort and money are likely to matter to buyers, and where it’s better to leave things as they are.</p>
            <a class="text-link" href="/sellers/">How selling with Max works <span aria-hidden="true">→</span></a>
          </div>
          <ul class="tick-list tick-list--light" data-reveal>
            <li><strong>Prioritize the right repairs.</strong> Focus on what buyers and their inspectors are likely to notice and ask about.</li>
            <li><strong>Plan preparation realistically.</strong> Sensible scope, sequencing, and timing so work doesn’t stall your listing date.</li>
            <li><strong>Price with context.</strong> Comparable sales and current competition, adjusted for an honest read of condition.</li>
            <li><strong>Present real strengths clearly.</strong> Accurate, well-prepared presentation without overstating the home.</li>
          </ul>
        </div>
      </section>

      <section class="section section--navy perspective" aria-labelledby="perspective-title">
        <div class="container">
          <div class="perspective__head">
            <div data-reveal>
              <p class="eyebrow eyebrow--light">The construction perspective</p>
              <h2 class="display-2" id="perspective-title">How a house is built shapes what it’s worth to you.</h2>
            </div>
            <p class="lead perspective__intro" data-reveal>Max brings ${esc(site.constructionExperience)} to every showing and listing conversation. In practice, that experience shows up in four places.</p>
          </div>
          <div class="perspective__body">
            <figure class="perspective__figure" data-reveal>
              ${picture("wallFraming", { sizes: "(min-width: 960px) 40vw, 100vw" })}
              <figcaption>${credit("wallFraming")}</figcaption>
            </figure>
            <ol class="numbered">
              <li data-reveal>
                <h3>Condition</h3>
                <p>Noticing what deserves a closer look, such as moisture, settling, aging systems, and the quality of past work, so you know what to raise with a licensed inspector.</p>
              </li>
              <li data-reveal>
                <h3>Renovation potential</h3>
                <p>Reading layout, structure, and access to think through which changes are practical and what they typically involve before you count on them.</p>
              </li>
              <li data-reveal>
                <h3>Preparation for sale</h3>
                <p>Helping sellers choose and sequence repairs and updates so the work that gets done is the work buyers are likely to value.</p>
              </li>
              <li data-reveal>
                <h3>Evaluating tradeoffs</h3>
                <p>Weighing location, condition, size, and price together, so your decision rests on the whole house rather than its best photograph.</p>
              </li>
            </ol>
          </div>
          <p class="fine-print">Max is not a home inspector, engineer, or appraiser. His perspective complements professional inspections and evaluations; it does not replace them.</p>
        </div>
      </section>

      <section class="section section--ivory about-preview" aria-labelledby="about-preview-title">
        <div class="container about-preview__inner">
          <p class="about-preview__monogram" aria-hidden="true">MP</p>
          <div data-reveal>
            <p class="eyebrow">About Max</p>
            <h2 class="display-2" id="about-preview-title">A real estate agent who looks at homes the way a builder does.</h2>
            <p class="lead">Max Petrov serves buyers and sellers across Snohomish County and King County. His ${esc(site.constructionExperience)} shapes how he walks through a property and how he advises on it. He works with clients in English and Russian.</p>
            <a class="text-link" href="/about/">More about Max <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section class="section section--ivory-deep community-preview" aria-labelledby="community-preview-title">
        <div class="container community-preview__inner">
          <figure class="community-preview__figure" data-reveal>
            ${picture("edmondsSunset", { sizes: "(min-width: 960px) 45vw, 100vw" })}
            <figcaption>${credit("edmondsSunset", { caption: "Edmonds waterfront" })}</figcaption>
          </figure>
          <div data-reveal>
            <p class="eyebrow">Communities</p>
            <h2 class="display-2" id="community-preview-title">Rooted in Snohomish County.</h2>
            <p class="lead">From waterfront towns to established suburbs, each community has its own housing character and practical tradeoffs.</p>
            <ul class="community-index">
              ${featured
                .map(
                  (c) => `<li>
                <a href="/communities/#${c.slug}">
                  <span class="community-index__name">${c.name}</span>
                  <span class="community-index__county">${c.county}</span>
                  <span class="community-index__arrow" aria-hidden="true">→</span>
                </a>
              </li>`,
                )
                .join("\n              ")}
            </ul>
            <a class="text-link" href="/communities/">All six communities <span aria-hidden="true">→</span></a>
          </div>
        </div>
      </section>

      <section class="section section--navy closing-cta" aria-labelledby="closing-title">
        <div class="container closing-cta__inner" data-reveal>
          <h2 class="display-2" id="closing-title">Planning a move in Snohomish or King County?</h2>
          <p class="lead">Start with a conversation about your goals, your timing, and the kind of home you have in mind.</p>
          <a class="button button--light" href="/contact/">Let’s talk about your move</a>
        </div>
      </section>`,
};
