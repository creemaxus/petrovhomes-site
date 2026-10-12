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
  // the agent is licensed with. Leave unverified fields as null.
  brokerage: {
    name: "Eklund Real Estate",
    url: null,
    address: null,
  },

  license: {
    number: null,
  },

  contact: {
    email: "max@petrovhomes.com",
    phone: "+12063604444",
    phoneDisplay: "(206) 360-4444",

    // URL that accepts a JSON POST and returns a 2xx status on success.
    // The contact form stays hidden until a working delivery endpoint exists.
    formEndpoint: process.env.CONTACT_FORM_ENDPOINT || null,
  },

  // Social profiles shown in the footer and on the contact page. Add only
  // real, active profiles, e.g. { label: "Instagram", url: "https://instagram.com/…" }.
  social: [],
};
