import { site } from "../site.config.mjs";
import { pageHeader, closingCta, esc } from "../layout.mjs";

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
        image: "maxOutdoor",
      })}

      <section class="section section--white">
        <div class="container about">
          <div class="prose about__body">
            <p class="prose__lede">Max Petrov is the real estate agent behind Petrov Homes, helping people buy and sell in Snohomish and King counties.</p>
            <p>His approach comes from ${esc(site.constructionExperience)}. That background shapes how he walks through a property: how it has been maintained, what a renovation would realistically involve, and which updates are likely to matter to the next owner.</p>
            <p>For buyers, that means better-informed conversations about condition and potential. For sellers, it means practical guidance on what to fix, what to refresh, and what to leave alone.</p>
          </div>
          <dl class="about__facts">
            <div><dt>Primary market</dt><dd>Snohomish County, WA</dd></div>
            <div><dt>Also serving</dt><dd>King County, WA</dd></div>
            <div><dt>Background</dt><dd>${esc(site.constructionExperience)}</dd></div>
            <div><dt>Languages</dt><dd>English and <span lang="ru">русский</span></dd></div>
          </dl>
        </div>
      </section>

      <section class="section section--ivory" aria-labelledby="approach-title">
        <div class="container approach">
          <div class="approach__text">
            <p class="eyebrow">How Max works</p>
            <h2 class="display-2" id="approach-title">Practical, direct, and built around your plans.</h2>
            <dl class="principles">
              <div>
                <dt>Practical over polished</dt>
                <dd>Advice focuses on your decision, budget, and timeline, not on making a house sound better than it is.</dd>
              </div>
              <div>
                <dt>Your goals set the plan</dt>
                <dd>A move-in-ready home, a project with potential, or a straightforward sale: the plan starts with what you need.</dd>
              </div>
              <div>
                <dt>In English or Russian</dt>
                <dd>Discuss the details of your move in the language you’re most comfortable with. <span lang="ru">Макс работает с клиентами на английском и русском языках.</span></dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      ${closingCta({
        id: "about-cta-title",
        title: "Talk through your plans with Max.",
        lead: "Buying, selling, or still deciding, a conversation is a good place to start.",
      })}`,
};
