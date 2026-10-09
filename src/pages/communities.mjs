import { communities } from "../content/communities.mjs";
import { pageHeader, picture, credit } from "../layout.mjs";

const featured = communities.filter((c) => c.image);
const more = communities.filter((c) => !c.image);

const details = (c) => `<dl class="community__details">
              <div><dt>Housing</dt><dd>${c.housing}</dd></div>
              <div><dt>Nearby</dt><dd>${c.nearby}</dd></div>
            </dl>`;

const askLink = (c) =>
  `<a class="text-link" href="/contact/?community=${c.slug}">Talk with Max about ${c.name} <span aria-hidden="true">→</span></a>`;

export default {
  path: "/communities/",
  output: "communities/index.html",
  title: "Communities in Snohomish & King County | Petrov Homes",
  description:
    "An introduction to Lynnwood, Everett, Bothell, Mill Creek, Edmonds, and Mukilteo: location, housing character, and nearby amenities.",
  content: () => `
      ${pageHeader({
        eyebrow: "Communities",
        title: "Communities in Snohomish and King County",
        lead: "Six places where Max helps buyers and sellers, from Puget Sound waterfront towns to established suburbs along the I-5 and I-405 corridors.",
      })}

      <nav class="section section--ivory community-jump" aria-label="Communities on this page">
        <div class="container">
          <ul>
            ${communities.map((c) => `<li><a href="#${c.slug}">${c.name}</a></li>`).join("\n            ")}
          </ul>
        </div>
      </nav>

      <div class="section section--ivory community-features">
        <div class="container">
          ${featured
            .map(
              (c, i) => `<article class="community community--feature${i % 2 ? " community--flip" : ""}" id="${c.slug}" aria-labelledby="${c.slug}-title">
            <figure class="community__figure" data-reveal>
              ${picture(c.image, { sizes: "(min-width: 960px) 50vw, 100vw", eager: i === 0 })}
              <figcaption>${credit(c.image)}</figcaption>
            </figure>
            <div class="community__text" data-reveal>
              <p class="community__county">${c.county}</p>
              <h2 class="display-2" id="${c.slug}-title">${c.name}</h2>
              <p class="lead">${c.summary}</p>
              ${details(c)}
              ${askLink(c)}
            </div>
          </article>`,
            )
            .join("\n          ")}
        </div>
      </div>

      <section class="section section--ivory-deep" aria-labelledby="more-title">
        <div class="container">
          <h2 class="visually-hidden" id="more-title">More communities</h2>
          <div class="community-columns">
            ${more
              .map(
                (c) => `<article class="community community--compact" id="${c.slug}" aria-labelledby="${c.slug}-title" data-reveal>
              <p class="community__county">${c.county}</p>
              <h3 class="display-3" id="${c.slug}-title">${c.name}</h3>
              <p>${c.summary}</p>
              ${details(c)}
              ${askLink(c)}
            </article>`,
              )
              .join("\n            ")}
          </div>
          <p class="fine-print fine-print--dark">These are general introductions. Please verify details that matter to your decision, such as schools, zoning, commute times, and planned development, with the relevant official sources.</p>
        </div>
      </section>

      <section class="section section--navy closing-cta" aria-labelledby="communities-cta-title">
        <div class="container closing-cta__inner" data-reveal>
          <h2 class="display-2" id="communities-cta-title">Not sure which area fits?</h2>
          <p class="lead">Talk through commute, budget, housing style, and the tradeoffs between communities.</p>
          <a class="button button--light" href="/contact/">Let’s talk about your move</a>
        </div>
      </section>`,
};
