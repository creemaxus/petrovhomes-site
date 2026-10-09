import { pageHeader, steps, closingCta } from "../layout.mjs";

export default {
  path: "/sellers/",
  output: "sellers/index.html",
  title: "Selling Your Home in Snohomish & King County | Petrov Homes",
  description:
    "Sell your home with Max Petrov: goals and timing, comparable-sales pricing, practical preparation guided by construction experience, marketing, and closing.",
  content: () => `
      ${pageHeader({
        eyebrow: "Sellers",
        title: "Selling your home in Snohomish and King counties",
        lead: "A practical plan for pricing, preparing, and presenting your home.",
        image: "mukilteoLight",
        layout: "bleed",
      })}

      <section class="section section--white" aria-labelledby="process-title">
        <div class="container two-col">
          <div class="two-col__aside">
            <p class="eyebrow">The process</p>
            <h2 class="display-2" id="process-title">A sale planned from the house outward.</h2>
          </div>
          ${steps([
            {
              title: "Goals and timing",
              body: "<p>Your next move and ideal timeline shape every decision that follows.</p>",
            },
            {
              title: "Pricing with context",
              body: "<p>Recent comparable sales and current competition, adjusted for your home’s condition, updates, and location. A judgment about the market, not an automated estimate.</p>",
            },
            {
              title: "Preparation that pays attention",
              body: "<p>Walk the home together and sort potential work into worth doing, optional, and skip, with realistic scope and timing.</p>",
            },
            {
              title: "Presentation and marketing",
              body: "<p>Photography, an accurate description, and showing preparation so the home’s real strengths come through.</p>",
            },
            {
              title: "Offers and closing",
              body: "<p>Compare offers on more than price, then coordinate inspection responses, appraisal, and escrow through closing.</p>",
            },
          ])}
        </div>
      </section>

      <section class="section section--slate prep" aria-labelledby="prep-title">
        <div class="container">
          <div class="prep__head">
            <p class="eyebrow eyebrow--light">Preparation</p>
            <h2 class="display-2" id="prep-title">Where a builder’s eye helps before you list.</h2>
            <p class="lead">Starting points for a conversation, not a checklist.</p>
          </div>
          <div class="prep__columns">
            <div>
              <h3>Often worth considering</h3>
              <ul class="tick-list tick-list--light">
                <li>Visible deferred maintenance buyers and inspectors will notice</li>
                <li>Small repairs that remove easy objections</li>
                <li>Paint, lighting, and landscaping touch-ups</li>
                <li>Records of past repairs, permits, and upgrades</li>
              </ul>
            </div>
            <div>
              <h3>Often worth a second thought</h3>
              <ul class="tick-list tick-list--light tick-list--muted">
                <li>Major remodels started shortly before listing</li>
                <li>Highly personal finish choices</li>
                <li>Projects that can’t be finished well before listing</li>
                <li>Cosmetic work that hides a problem instead of fixing it</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      ${closingCta({
        id: "sellers-cta-title",
        title: "Thinking about selling?",
        lead: "Start with a conversation about your home, its condition, and recent comparable sales.",
        href: "/contact/?topic=selling",
        label: "Discuss your home’s value",
      })}`,
};
