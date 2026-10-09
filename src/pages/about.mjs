import { site } from "../site.config.mjs";
import { pageHeader, esc } from "../layout.mjs";

export default {
  path: "/about/",
  output: "about/index.html",
  title: "About Max Petrov | Petrov Homes",
  description:
    "Max Petrov is a Snohomish and King County real estate agent whose 10+ years of construction and flipping experience shapes how he advises on homes.",
  content: () => `
      ${pageHeader({
        eyebrow: "About",
        title: "About Max Petrov",
        lead: "A real estate agent who looks at homes the way a builder does.",
      })}

      <section class="section section--ivory">
        <div class="container about">
          <aside class="about__aside" aria-label="At a glance">
            <p class="about__name" aria-hidden="true">Max<br>Petrov</p>
            <dl class="about__facts">
              <div><dt>Primary market</dt><dd>Snohomish County, WA</dd></div>
              <div><dt>Also serving</dt><dd>King County, WA</dd></div>
              <div><dt>Background</dt><dd>${esc(site.constructionExperience)}</dd></div>
              <div><dt>Languages</dt><dd>English and Russian</dd></div>
            </dl>
          </aside>

          <div class="prose about__body">
            <p class="prose__lede">Max Petrov is the real estate agent behind Petrov Homes. He helps people buy and sell homes in Snohomish County and King County, including Lynnwood, Everett, Bothell, Mill Creek, Edmonds, and Mukilteo.</p>

            <h2>Experience from the build side</h2>
            <p>Max’s approach comes from ${esc(site.constructionExperience)}. That background shapes how he walks through a property: how it has been maintained, where past work may have been done, what a renovation would realistically involve, and which updates are likely to matter to the next owner.</p>
            <p>For buyers, that means more informed conversations about condition and potential before you commit. For sellers, it means practical guidance on preparation: what to fix, what to refresh, and what to leave for the next owner to decide.</p>

            <h2>How Max works</h2>
            <dl class="principles">
              <div>
                <dt>Practical over polished</dt>
                <dd>Advice focuses on what affects your decision, your budget, and your timeline, not on making a house sound better than it is.</dd>
              </div>
              <div>
                <dt>Clear about the limits</dt>
                <dd>Max is not a home inspector, engineer, or appraiser. His observations help you decide what to investigate, and licensed professionals remain part of every careful transaction.</dd>
              </div>
              <div>
                <dt>Your goals set the plan</dt>
                <dd>Whether you want a move-in-ready home, a project with potential, or a straightforward sale, the plan starts with what you need.</dd>
              </div>
            </dl>

            <h2>English and Russian</h2>
            <p>Max works with clients in English and Russian, so you can discuss the details of a move in the language you’re most comfortable with.</p>
            <p lang="ru" class="prose__aside">Макс работает с клиентами на английском и русском языках.</p>
          </div>
        </div>
      </section>

      <section class="section section--navy closing-cta" aria-labelledby="about-cta-title">
        <div class="container closing-cta__inner" data-reveal>
          <h2 class="display-2" id="about-cta-title">Talk through your plans with Max.</h2>
          <p class="lead">Buying, selling, or still deciding, a conversation is a good place to start.</p>
          <a class="button button--light" href="/contact/">Let’s talk about your move</a>
        </div>
      </section>`,
};
