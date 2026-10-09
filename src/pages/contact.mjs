import { site } from "../site.config.mjs";
import { communities } from "../content/communities.mjs";
import { pageHeader, contactMethods, socialLinks, esc } from "../layout.mjs";

const inquiryTypes = [
  ["buying", "Buying a home"],
  ["selling", "Selling a home"],
  ["buying-and-selling", "Buying and selling"],
  ["community", "A question about a community"],
  ["other", "Something else"],
];

// Rendered only when site.contact.formEndpoint is configured.
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
              <label for="cf-type">What can Max help with? <span class="field__req" aria-hidden="true">*</span></label>
              <select id="cf-type" name="inquiry_type" required aria-describedby="cf-type-error">
                <option value="">Choose one</option>
                ${inquiryTypes.map(([value, label]) => `<option value="${value}">${label}</option>`).join("\n                ")}
              </select>
              <p class="field__error" id="cf-type-error" data-error-for="cf-type"></p>
            </div>

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
  const methods = [...contactMethods(), ...socialLinks()];
  const direct = methods.length
    ? `<div class="contact-direct">
            <h2 class="contact-panel__title">Contact Max directly</h2>
            <ul>${methods.map((m) => `<li>${m}</li>`).join("")}</ul>
          </div>`
    : "";

  if (site.contact.formEndpoint) return `${direct}${contactForm()}`;
  if (direct) return direct;
  return `<div class="contact-soon">
            <h2 class="contact-panel__title">Contact details coming soon</h2>
            <p>Direct contact details for Max are being finalized and will be posted here shortly. Thank you for your patience.</p>
          </div>`;
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
          <div class="contact__info">
            <h2 class="display-3">What to expect</h2>
            <ul class="tick-list">
              <li>A conversation about your goals, timing, and budget</li>
              <li>Straightforward answers about the process and next steps</li>
              <li>Practical perspective on condition, preparation, and renovation questions</li>
              <li>Service in English or <span lang="ru">по-русски</span></li>
            </ul>
            <dl class="contact__meta">
              <div><dt>Service area</dt><dd>${site.primaryMarket} and ${site.secondaryMarket}, ${site.state}</dd></div>
              <div><dt>Communities</dt><dd>${communities.map((c) => c.name).join(", ")}</dd></div>
            </dl>
          </div>
          <div class="contact-panel">
          ${contactPanel()}
          </div>
        </div>
      </section>`,
};
