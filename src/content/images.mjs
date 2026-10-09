// Optimized images in public/assets/images/, served as AVIF with a WebP
// fallback at each listed width (file-WIDTH.avif / file-WIDTH.webp).
//
// `position` is the object-position used when the image is cropped.
// `positionMobile` overrides it below 760px.
//
// Portraits are derived from the originals in references/ (not published).
// Place photographs are CC0, public domain, or Pexels (no attribution
// required). See IMAGE_CREDITS.md.

const portrait = { widths: [480, 800, 1024], ratio: [2, 3] };

export const images = {
  maxMarina: {
    ...portrait,
    file: "max-petrov-marina",
    position: "50% 18%",
    alt: "Max Petrov in a navy blazer, smiling, with sailboats behind him",
  },
  maxHouse: {
    ...portrait,
    file: "max-petrov-house-exterior",
    position: "50% 22%",
    positionMobile: "50% 6%",
    alt: "Max Petrov in a cream sweater with arms crossed, standing in front of a house",
  },
  maxBrick: {
    ...portrait,
    file: "max-petrov-brick-wall",
    position: "50% 30%",
    positionMobile: "50% 16%",
    alt: "Max Petrov in a navy blazer, seated at a table with a coffee mug in front of a brick wall",
  },
  maxStudioClose: {
    ...portrait,
    file: "max-petrov-studio-close",
    position: "50% 22%",
    alt: "Studio portrait of Max Petrov in a dark polo shirt, arms crossed, looking at the camera",
  },
  maxOutdoor: {
    ...portrait,
    file: "max-petrov-outdoor-portrait",
    position: "50% 12%",
    positionMobile: "50% 8%",
    alt: "Portrait of Max Petrov outdoors in a navy blazer",
  },
  maxCafe: {
    ...portrait,
    file: "max-petrov-cafe",
    position: "50% 26%",
    alt: "Max Petrov seated at an outdoor café table with a latte",
  },
  maxCafeLaptop: {
    ...portrait,
    file: "max-petrov-cafe-laptop",
    position: "50% 28%",
    alt: "Max Petrov at an outdoor café table with a coffee mug and laptop",
  },
  homeHeroNorthwest: {
    file: "home-hero-northwest",
    widths: [960, 1600, 2250],
    ratio: [16, 9],
    position: "42% 48%",
    positionMobile: "28% 58%",
    alt: "Mukilteo’s waterfront, with the lighthouse, historic houses, and the ferry dock on Possession Sound",
  },
  serviceBuyersInterior: {
    file: "service-buyers-interior",
    widths: [480, 900],
    ratio: [3, 2],
    position: "38% 78%",
    positionMobile: "32% 82%",
    alt: "A bright living room with a sofa, windows, and an open kitchen beyond",
  },
  serviceSellersExterior: {
    file: "service-sellers-exterior",
    widths: [480, 900],
    ratio: [2, 3],
    position: "50% 42%",
    positionMobile: "50% 36%",
    alt: "A craftsman-style house with a front porch, stone steps, and trees",
  },
  serviceCommunitiesRegion: {
    file: "service-communities-region",
    widths: [480, 900],
    ratio: [4, 3],
    position: "72% 58%",
    positionMobile: "78% 62%",
    alt: "Aerial view of Mukilteo Lighthouse Park, with the lighthouse, historic quarters, and the shoreline",
  },
  communityEdmonds: {
    file: "community-edmonds",
    widths: [480, 900],
    ratio: [4, 3],
    position: "50% 58%",
    alt: "Mount Rainier across Puget Sound, seen from the Edmonds–Kingston ferry",
  },
  communityMukilteo: {
    file: "community-mukilteo",
    widths: [480, 900],
    ratio: [1, 1],
    position: "50% 38%",
    alt: "The white Mukilteo Lighthouse and keeper’s quarters beside Possession Sound",
  },
  sellerConsultationExterior: {
    file: "seller-consultation-exterior",
    widths: [960, 1920],
    ratio: [3, 2],
    position: "38% 45%",
    positionMobile: "50% 40%",
    alt: "A craftsman-style house at dusk, with a brick path, garden, and warm interior lights",
  },
  sellersPageExterior: {
    file: "sellers-page-exterior",
    widths: [960, 1920],
    ratio: [16, 9],
    position: "50% 48%",
    alt: "A two-story house with a front porch, landscaping, and a driveway",
  },
};
