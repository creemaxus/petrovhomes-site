import { site } from "../site.config.mjs";
import { communities } from "../content/communities.mjs";
import { picture, esc } from "../layout.mjs";

const inquiryAllowlist = {
  topics: { buying: "Buying", selling: "Selling" },
  communities: Object.fromEntries(communities.map((c) => [c.slug, c.name])),
};

export default {
  path: "/contact/",
  output: "contact/index.html",
  title: "Contact Max Petrov | Petrov Homes",
  description:
    "Talk with Max Petrov about buying or selling a home in Snohomish or King County, Washington. Available in English and Russian.",
  content: () => {
    const { email, phone, phoneDisplay } = site.contact;
    return `
      <section class="section section--ivory contact-page">
        <div class="container contact-page__inner">
          <div class="contact-page__intro">
            <p class="eyebrow">Contact</p>
            <h1 class="display-2">Let’s talk.</h1>
            <p class="contact-page__lead">Tell me what you’re considering. We’ll start with your goals and timing.</p>
            <p class="contact-context" data-inquiry-context hidden></p>
          </div>

          <div class="contact-card">
            ${picture("maxStudioClose", { sizes: "(min-width: 60em) 280px, 42vw", eager: true, className: "contact-card__media", alt: "Studio portrait of Max Petrov" })}
            <div class="contact-card__body">
              <p class="contact-card__name">${esc(site.agentName)}</p>
              <p class="contact-card__firm">${esc(site.brokerage.name)}</p>
              <ul class="contact-card__details">
                ${phone ? `<li><a href="tel:${esc(phone)}">${esc(phoneDisplay || phone)}</a></li>` : ""}
                ${email ? `<li><a href="mailto:${esc(email)}" data-contact-email>${esc(email)}</a></li>` : ""}
              </ul>
              <div class="contact-card__actions">
                ${phone ? `<a class="button button--dark" href="tel:${esc(phone)}">Call Max</a>` : ""}
                ${email ? `<a class="button button--outline-dark" href="mailto:${esc(email)}" data-contact-email>Email Max</a>` : ""}
              </div>
              <p class="contact-card__meta">Snohomish and King counties · English and Russian</p>
            </div>
          </div>
        </div>
        <script type="application/json" id="contact-allowlist">${JSON.stringify(inquiryAllowlist)}</script>
      </section>`;
  },
};
