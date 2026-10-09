import { pageHeader, steps, closingCta } from "../layout.mjs";

const faqs = [
  {
    q: "Do I need a pre-approval before touring homes?",
    a: "It isn’t required to start looking, but a pre-approval clarifies your budget and is expected with most offers. Questions about loan programs and rates are best answered by your lender.",
  },
  {
    q: "Can Max tell me whether a house has problems?",
    a: "Max can point out things that may deserve a closer look and talk through what a renovation might involve. He is not a home inspector, engineer, or appraiser; a professional inspection remains an essential part of your due diligence.",
  },
  {
    q: "Is a fixer-upper a good idea?",
    a: "It depends on your budget, timeline, and appetite for projects. Max can help you think through scope and tradeoffs; get inspections and contractor estimates before relying on any renovation plan.",
  },
  {
    q: "How does buyer representation work in Washington?",
    a: "Washington requires a written agreement for buyer representation. Max will walk you through it, including how compensation is handled, before you start working together. For legal questions, consult a real estate attorney.",
  },
  {
    q: "Can we work together in Russian?",
    a: "Yes. Max works with clients in English and Russian.",
  },
];

export default {
  path: "/buyers/",
  output: "buyers/index.html",
  title: "Buying a Home in Snohomish & King County | Petrov Homes",
  description:
    "A clear home-buying process with Max Petrov: goals and budget, lender coordination, evaluating condition and renovation potential, offers, and closing.",
  content: () => `
      ${pageHeader({
        eyebrow: "Buyers",
        title: "Buying a home in Snohomish and King counties",
        lead: "A clear process, and a practical second look at every house you’re seriously considering.",
        image: "serviceBuyersInterior",
        layout: "bleed",
      })}

      <section class="section section--white" aria-labelledby="process-title">
        <div class="container two-col">
          <div class="two-col__aside">
            <p class="eyebrow">The process</p>
            <h2 class="display-2" id="process-title">Five steps from first conversation to keys.</h2>
          </div>
          ${steps([
            {
              title: "Set goals and budget",
              body: "<p>Location, commute, space, timing, and how much renovation you’re comfortable with. Your budget frames the search; your lender determines what you can borrow.</p>",
            },
            {
              title: "Line up financing",
              body: "<p>Max works alongside the lender you choose so pre-approval, timelines, and offer terms stay aligned. Need a lender? He can suggest a few to interview.</p>",
            },
            {
              title: "Compare homes and condition",
              body: "<p>On tours, Max points out condition questions and renovation considerations, so you compare homes on more than finishes.</p>",
            },
            {
              title: "Make an offer",
              body: "<p>Decide price and terms using comparable sales, condition, and competition, with a clear explanation of inspection, financing, and appraisal contingencies.</p>",
            },
            {
              title: "Close with confidence",
              body: "<p>Max keeps inspections, any follow-up negotiation, lender milestones, and escrow on schedule through to the keys.</p>",
            },
          ])}
        </div>
      </section>

      <section class="section section--ivory" aria-labelledby="faq-title">
        <div class="container two-col">
          <div class="two-col__aside">
            <p class="eyebrow">Questions</p>
            <h2 class="display-2" id="faq-title">Buyer FAQ</h2>
            <p class="muted">General information only, not legal, tax, or lending advice.</p>
          </div>
          <div class="faq">
            ${faqs
              .map(
                ({ q, a }) => `<details class="faq__item">
              <summary>${q}</summary>
              <p>${a}</p>
            </details>`,
              )
              .join("\n            ")}
          </div>
        </div>
      </section>

      ${closingCta({
        id: "buyers-cta-title",
        title: "Start your search with a conversation.",
        lead: "Share what you’re looking for and where. Max will help you plan the next step.",
        href: "/contact/?topic=buying",
      })}`,
};
