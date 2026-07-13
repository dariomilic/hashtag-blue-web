/**
 * Official website photography — paths match filenames on the Brand Board.
 * Place image files in: public/brand/photos/
 */
const BASE = "/brand/photos";

export const brandPhotos = {
  hero: `${BASE}/hero-villa.jpg`,
  architecture: {
    experience: `${BASE}/architecture-01-experience.jpg`,
    design: `${BASE}/architecture-02-design.jpg`,
    client: `${BASE}/architecture-03-client.jpg`,
  },
  realEstate: {
    legal: `${BASE}/realestate-01-legal.jpg`,
    cadastre: `${BASE}/realestate-02-cadastre.jpg`,
    keys: `${BASE}/realestate-03-keys.jpg`,
  },
  contact: `${BASE}/contact-building.jpg`,
} as const;

/** Required files — must exist in public/brand/photos/ */
export const requiredPhotoFiles = [
  "hero-villa.jpg",
  "architecture-01-experience.jpg",
  "architecture-02-design.jpg",
  "architecture-03-client.jpg",
  "realestate-01-legal.jpg",
  "realestate-02-cadastre.jpg",
  "realestate-03-keys.jpg",
  "contact-building.jpg",
] as const;
