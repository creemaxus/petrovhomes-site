// Optimized images in public/assets/images/, served as AVIF with a WebP
// fallback at each listed width (file-WIDTH.avif / file-WIDTH.webp).
//
// `position` is the object-position used when the image is cropped, chosen so
// the face stays in frame. `positionMobile` overrides it below 760px.
//
// Portraits are derived from the originals in references/ (not published).
// The Mukilteo photo is public domain (CC0); see IMAGE_CREDITS.md.

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
  maxInterior: {
    ...portrait,
    file: "max-petrov-interior",
    position: "50% 22%",
    alt: "Max Petrov in a cream sweater, smiling, in a bright room",
  },
  maxBrick: {
    ...portrait,
    file: "max-petrov-brick-wall",
    position: "50% 30%",
    positionMobile: "50% 16%",
    alt: "Max Petrov in a navy blazer, seated at a table with a coffee mug in front of a brick wall",
  },
  maxStudio: {
    ...portrait,
    file: "max-petrov-studio",
    position: "50% 22%",
    alt: "Studio portrait of Max Petrov in a dark polo shirt with arms crossed",
  },
  maxStudioClose: {
    ...portrait,
    file: "max-petrov-studio-close",
    position: "50% 22%",
    alt: "Studio portrait of Max Petrov in a dark polo shirt, arms crossed, looking at the camera",
  },
  maxSkyline: {
    ...portrait,
    file: "max-petrov-city-skyline",
    position: "50% 22%",
    alt: "Max Petrov in a navy blazer with a city skyline behind him",
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
  mukilteoLighthouse: {
    file: "mukilteo-lighthouse-park",
    widths: [800, 1400],
    ratio: [16, 9],
    position: "50% 50%",
    alt: "Aerial view of Mukilteo Lighthouse Park, with the white lighthouse, historic quarters, and the shoreline beyond",
  },
};
