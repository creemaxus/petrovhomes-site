import { site } from "../site.config.mjs";
import { communities } from "../content/communities.mjs";
import { pageHeader, esc } from "../layout.mjs";

const inquiryTypes = [
  ["buying", "Buying"],
  ["selling", "Selling"],
  ["community", "Exploring communities"],
  ["other", "Other"],
];

const inquiryAllowlist = {
  topics: { buying: "Buying", selling: "Selling" },
  communities: Object.fromEntries(communities.map((c) => [c.slug, c.name])),
};

// Rendered only when site.contact.formEndpoint is configured with a real
// delivery path. A successful 2xx means the provider accepted the message.
function contactForm() {
  return `<form class="contact-form" action="${esc(site.contact.formEndpoint)}" method="post" novalidate data-contact-form>
            <h2 class="contact-panel__title">Send a message</h2>
            <p class="contact-form__intro">Fields marked <span aria-hidden="true">*</span><span class="visually-hidden">required</span> are required.</p>

            <div class="field">
              <label for="cf-name">Name <span class="field__req" aria-hidden="true">*</span></label>
              <input id="cf-name" name="name" type="text" autocomplete="name" required maxlength="120" aria-describedby="cf-name-error">
              <p class="field__error" id="cf-name-error" data-error-for="cf-name"></p>
            </div>

            <div class="field">
              <label for="cf-email">Email <span class="field__req" aria-hidden="true">*</span></label>
              <input id="cf-email" name="email" type="email" autocomplete="email" required maxlength="200" aria-describedby="cf-email-error">
              <p class="field__error" id="cf-email-error" data-error-for="cf-email"></p>
            </div>

            <div class="field">
              <label for="cf-phone">Phone <span class="field__optional">(optional)</span></label>
              <input id="cf-phone" name="phone" type="tel" autocomplete="tel" maxlength="40" aria-describedby="cf-phone-error">
              <p class="field__error" id="cf-phone-error" data-error-for="cf-phone"></p>
            </div>

            <div class="field">
              <label for="cf-type">Inquiry type <span class="field__req" aria-hidden="true">*</span></label>
              <select id="cf-type" name="inquiry_type" required aria-describedby="cf-type-error">
                <option value="">Choose one</option>
                ${inquiryTypes.map(([value, label]) => `<option value="${value}">${label}</option>`).join("\n                ")}
              </select>
              <p class="field__error" id="cf-type-error" data-error-for="cf-type"></p>
            </div>

            <input type="hidden" id="cf-community" name="community" value="">

            <div class="field">
              <label for="cf-message">Message <span class="field__req" aria-hidden="true">*</span></label>
              <textarea id="cf-message" name="message" rows="6" required maxlength="5000" aria-describedby="cf-message-error"></textarea>
              <p class="field__error" id="cf-message-error" data-error-for="cf-message"></p>
            </div>

            <div class="field field--trap" aria-hidden="true">
              <label for="cf-company">Leave this field empty</label>
              <input id="cf-company" name="company" type="text" tabindex="-1" autocomplete="off">
            </div>

            <button class="button button--dark contact-form__submit" type="submit">
              <span data-submit-label>Send message</span>
            </button>
            <p class="contact-form__status" role="status" aria-live="polite" data-form-status></p>
          </form>`;
}

function contactPanel() {
  const { email, phone, phoneDisplay } = site.contact;
  const actions = [];
  if (phone) {
    actions.push(`<li>
              <a class="button button--dark" href="tel:${esc(phone)}">Call Max</a>
              <span>${esc(phoneDisplay || phone)}</span>
            </li>`);
  }
  if (email) {
    actions.push(`<li>
              <a class="button button--outline-dark" href="mailto:${esc(email)}" data-contact-email>Email Max</a>
              <span>${esc(email)}</span>
            </li>`);
  }

  return `<div class="contact-direct">
            <h2 class="contact-panel__title">Reach Max directly</h2>
            <p class="contact-context" data-inquiry-context hidden></p>
            ${actions.length ? `<ul class="contact-actions">${actions.join("")}</ul>` : ""}
            <dl class="contact__meta">
              ${site.brokerage.name ? `<div><dt>Brokerage</dt><dd>${esc(site.brokerage.name)}</dd></div>` : ""}
              <div><dt>Service area</dt><dd>Snohomish and King counties</dd></div>
              <div><dt>Languages</dt><dd>English and Russian</dd></div>
            </dl>
          </div>
          ${site.contact.formEndpoint ? contactForm() : ""}`;
}

export default {
  path: "/contact/",
  output: "contact/index.html",
  title: "Contact Max Petrov | Petrov Homes",
  description:
    "Talk with Max Petrov about buying or selling a home in Snohomish or King County, Washington. Available in English and Russian.",
  content: () => `
      ${pageHeader({
        eyebrow: "Contact",
        title: "Let’s talk about your move",
        lead: "Starting to explore or ready to make a plan, the first step is a conversation about your goals and timing.",
      })}

      <section class="section section--white">
        <div class="container contact">
          <div class="contact-panel">
          ${contactPanel()}
          </div>
          <div class="contact__info">
            <p class="contact__intro">Buying, selling, or exploring your options? Tell me a little about your plans.</p>
          </div>
        </div>
        <script type="application/json" id="contact-allowlist">${JSON.stringify(inquiryAllowlist)}</script>
      </section>`,
};
