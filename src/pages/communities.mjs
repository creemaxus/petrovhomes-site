import { communities } from "../content/communities.mjs";
import { pageHeader, picture, closingCta } from "../layout.mjs";

export default {
  path: "/communities/",
  output: "communities/index.html",
  title: "Communities in Snohomish & King County | Petrov Homes",
  description:
    "An introduction to Lynnwood, Everett, Bothell, Mill Creek, Edmonds, and Mukilteo: location, housing character, and nearby amenities.",
  content: () => `
      ${pageHeader({
        eyebrow: "Communities",
        title: "Communities in Snohomish and King counties",
        lead: "Six places where Max helps buyers and sellers, from Puget Sound waterfront towns to established suburbs along I-5 and I-405.",
      })}

      <section class="section section--ivory communities" aria-label="Community guides">
        <div class="container">
          <figure class="communities__figure">
            ${picture("mukilteoLighthouse", { sizes: "(min-width: 80em) 76rem, 100vw", eager: true, className: "communities__media" })}
            <figcaption>Mukilteo Lighthouse Park</figcaption>
          </figure>

          <nav class="community-jump" aria-label="Communities on this page">
            <ul>
              ${communities.map((c) => `<li><a href="#${c.slug}">${c.name}</a></li>`).join("\n              ")}
            </ul>
          </nav>

          ${communities
            .map(
              (c) => `<article class="community" id="${c.slug}" aria-labelledby="${c.slug}-title">
            <header class="community__head">
              <p class="community__county">${c.county}</p>
              <h2 class="display-2" id="${c.slug}-title">${c.name}</h2>
            </header>
            <div class="community__body">
              <p class="lead">${c.summary}</p>
              <dl class="community__details">
                <div><dt>Housing</dt><dd>${c.housing}</dd></div>
                <div><dt>Nearby</dt><dd>${c.nearby}</dd></div>
              </dl>
              <a class="text-link" href="/contact/?community=${c.slug}">Talk with Max about ${c.name} <span aria-hidden="true">→</span></a>
            </div>
          </article>`,
            )
            .join("\n          ")}

          <p class="fine-print fine-print--dark">General introductions only. Verify details that matter to your decision, such as schools, zoning, commute times, and planned development, with official sources.</p>
        </div>
      </section>

      ${closingCta({
        id: "communities-cta-title",
        title: "Not sure which area fits?",
        lead: "Talk through commute, budget, housing style, and the tradeoffs between communities.",
      })}`,
};
