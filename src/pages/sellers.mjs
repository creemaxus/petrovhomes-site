import { pageHeader, steps } from "../layout.mjs";

export default {
  path: "/sellers/",
  output: "sellers/index.html",
  title: "Selling Your Home in Snohomish & King County | Petrov Homes",
  description:
    "Sell your home with Max Petrov: goals and timing, comparable-sales pricing, practical preparation guided by construction experience, marketing, and closing.",
  content: () => `
      ${pageHeader({
        eyebrow: "Sellers",
        title: "Selling your home in Snohomish and King County",
        lead: "A practical plan for pricing, preparing, and presenting your home, shaped by 10+ years of construction and flipping experience.",
      })}

      <section class="section section--ivory" aria-labelledby="process-title">
        <div class="container two-col">
          <div class="two-col__aside">
            <p class="eyebrow">The process</p>
            <h2 class="display-2" id="process-title">A sale planned from the house outward.</h2>
            <p class="muted">Good decisions about price and preparation start with an honest look at the home itself.</p>
          </div>
          ${steps([
            {
              title: "Discuss your goals and timing",
              body: "<p>Your next move, your ideal timeline, and what you need from the sale shape every decision that follows, including whether you’ll buy, rent, or relocate afterward.</p>",
            },
            {
              title: "Review comparable properties and pricing",
              body: "<p>Max reviews recent comparable sales and current competition, then accounts for your home’s condition, updates, and location to recommend a pricing strategy. Pricing is a judgment about the market, not an automated estimate.</p>",
            },
            {
              title: "Prioritize preparation and improvements",
              body: "<p>Walk the home together and sort potential work into what’s worth doing, what’s optional, and what to skip. Where repairs make sense, Max helps you think through scope, sequence, and timing so preparation doesn’t stall your schedule.</p>",
            },
            {
              title: "Present and market the home",
              body: "<p>Max coordinates the presentation, including photography, a clear and accurate description, and showing preparation, so the home’s real strengths come through.</p>",
            },
            {
              title: "Evaluate offers and coordinate closing",
              body: "<p>Compare offers on more than price: financing, contingencies, timelines, and terms. After acceptance, Max helps coordinate inspection responses, appraisal, and escrow through closing.</p>",
            },
          ])}
        </div>
      </section>

      <section class="section section--slate prep" aria-labelledby="prep-title">
        <div class="container">
          <div class="prep__head" data-reveal>
            <p class="eyebrow eyebrow--light">Preparation</p>
            <h2 class="display-2" id="prep-title">Where a builder’s eye helps before you list.</h2>
            <p class="lead">Every home is different, but some patterns hold. These are starting points for a conversation, not a checklist.</p>
          </div>
          <div class="prep__columns">
            <div data-reveal>
              <h3>Often worth considering</h3>
              <ul class="tick-list tick-list--light">
                <li>Addressing visible deferred maintenance that buyers and inspectors will notice</li>
                <li>Small repairs that remove easy objections</li>
                <li>Paint, lighting, and landscaping touch-ups</li>
                <li>Gathering records of past repairs, permits, and upgrades</li>
              </ul>
            </div>
            <div data-reveal>
              <h3>Often worth a second thought</h3>
              <ul class="tick-list tick-list--light tick-list--muted">
                <li>Major remodels started shortly before listing</li>
                <li>Highly personal finish choices</li>
                <li>Projects that can’t be finished well before your listing date</li>
                <li>Cosmetic work that hides a problem instead of fixing it</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="section section--navy closing-cta" aria-labelledby="sellers-cta-title">
        <div class="container closing-cta__inner" data-reveal>
          <h2 class="display-2" id="sellers-cta-title">Thinking about selling?</h2>
          <p class="lead">Start with a conversation about your home, its condition, and recent comparable sales. No automated estimates.</p>
          <a class="button button--light" href="/contact/?topic=selling">Discuss your home’s value</a>
        </div>
      </section>`,
};
