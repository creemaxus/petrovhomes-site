import { pageHeader, steps } from "../layout.mjs";

const faqs = [
  {
    q: "Do I need a pre-approval before touring homes?",
    a: "It isn’t required to start looking, but a pre-approval from your lender clarifies your budget and is expected with most offers. Questions about qualification, loan programs, and rates are best answered by your lender.",
  },
  {
    q: "Can Max tell me whether a house has problems?",
    a: "Max can point out things that may deserve a closer look and talk through what a renovation might involve, based on his construction and flipping background. He is not a home inspector, engineer, or appraiser. A professional inspection, and specialists where needed, remain an essential part of your due diligence.",
  },
  {
    q: "Is a fixer-upper a good idea?",
    a: "It depends on your budget, timeline, and appetite for projects. Max can help you think through scope and tradeoffs, and he recommends getting inspections and contractor estimates before relying on any renovation plan.",
  },
  {
    q: "How does buyer representation work in Washington?",
    a: "Washington requires a written agreement for buyer representation. Max will walk you through that agreement, including how compensation is handled, before you start working together. For legal questions about any document, consult a real estate attorney.",
  },
  {
    q: "Do you work with buyers in King County?",
    a: "Yes. Max’s primary focus is Snohomish County, and he also works with buyers in King County, including communities such as Bothell that span both counties.",
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
        title: "Buying a home in Snohomish and King County",
        lead: "A clear process, and a practical second look at every house you’re seriously considering.",
      })}

      <section class="section section--ivory" aria-labelledby="process-title">
        <div class="container two-col">
          <div class="two-col__aside">
            <p class="eyebrow">The process</p>
            <h2 class="display-2" id="process-title">Five steps from first conversation to keys.</h2>
            <p class="muted">Every purchase is different, but the shape of a well-run one is consistent.</p>
          </div>
          ${steps([
            {
              title: "Understand your goals and budget",
              body: "<p>We start with how you want to live: location, commute, space, timing, and how much renovation you’re comfortable taking on. Your budget frames the search; your lender determines what you can borrow.</p>",
            },
            {
              title: "Coordinate financing with your lender",
              body: "<p>Max works alongside the lender you choose so that pre-approval, timelines, and offer terms stay aligned. If you don’t have a lender yet, he can suggest local lenders to interview. The choice is always yours.</p>",
            },
            {
              title: "Compare homes and evaluate condition",
              body: "<p>On tours, Max points out condition questions and renovation considerations, such as layout changes, aging systems, and signs of deferred maintenance, so you can compare homes on more than finishes.</p><p class=\"note\">These observations help you decide what to investigate. They don’t replace a professional home inspection, which remains part of your due diligence.</p>",
            },
            {
              title: "Prepare an offer and navigate contingencies",
              body: "<p>Together you’ll decide on price and terms using comparable sales, the home’s condition, and the level of competition. Max explains common contingencies, including inspection, financing, and appraisal, and the tradeoffs of each.</p>",
            },
            {
              title: "Coordinate through closing",
              body: "<p>After your offer is accepted, Max helps keep inspections, any follow-up negotiation, lender milestones, and escrow on schedule, and walks you through what to expect before you get the keys.</p>",
            },
          ])}
        </div>
      </section>

      <section class="section section--ivory-deep" aria-labelledby="faq-title">
        <div class="container two-col">
          <div class="two-col__aside">
            <p class="eyebrow">Questions</p>
            <h2 class="display-2" id="faq-title">Buyer FAQ</h2>
            <p class="muted">General information only. It is not legal, tax, or lending advice.</p>
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

      <section class="section section--navy closing-cta" aria-labelledby="buyers-cta-title">
        <div class="container closing-cta__inner" data-reveal>
          <h2 class="display-2" id="buyers-cta-title">Start your search with a conversation.</h2>
          <p class="lead">Share what you’re looking for and where. Max will help you plan the next step.</p>
          <a class="button button--light" href="/contact/?topic=buying">Let’s talk about your move</a>
        </div>
      </section>`,
};
