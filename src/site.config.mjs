// Business details for Petrov Homes.
//
// This is the only file you should need for business facts. After editing,
// run `npm run build` to regenerate the pages in public/.
//
// Leave a value as null until it is verified. Anything null is hidden from
// visitors automatically: no placeholders are ever rendered.

export const site = {
  brand: "Petrov Homes",
  agentName: "Max Petrov",
  url: "https://petrovhomes.com",

  primaryMarket: "Snohomish County",
  secondaryMarket: "King County",
  state: "Washington",
  stateAbbr: "WA",

  constructionExperience: "10+ years of construction and flipping experience",
  languages: ["English", "Russian"],

  // Washington requires real estate advertising to identify the brokerage
  // the agent is licensed with. Fill these in before publishing.
  brokerage: {
    name: null, // TODO: Licensed brokerage name exactly as registered, e.g. "Example Realty"
    url: null, // TODO: Optional brokerage website, e.g. "https://example.com"
    address: null, // TODO: Optional office address if the brokerage requires it
  },

  license: {
    number: null, // TODO: Washington real estate license number, if you want it shown
  },

  contact: {
    email: null, // TODO: Verified email, e.g. "max@petrovhomes.com"
    phone: null, // TODO: Verified phone for tel: links, e.g. "+14255550123"
    phoneDisplay: null, // TODO: How the phone number should read, e.g. "(425) 555-0123"

    // TODO: URL that accepts a JSON POST and returns a 2xx status on success
    // (for example a Formspree form URL or a future Worker route such as
    // "/api/contact"). The contact form stays hidden until this is set.
    formEndpoint: process.env.CONTACT_FORM_ENDPOINT || null,
  },

  // Social profiles shown in the footer and on the contact page. Add only
  // real, active profiles, e.g. { label: "Instagram", url: "https://instagram.com/…" }.
  social: [],
};
