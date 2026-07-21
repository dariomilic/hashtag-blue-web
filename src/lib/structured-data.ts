import { logos } from "@/lib/brand";
import {
  OPEN_GRAPH_IMAGE,
  SITE_NAME,
  SITE_PUBLISHER,
  SITE_URL,
} from "@/lib/seo";

/** Confirmed company data from legal documents / site contact block only. */
export const ORGANIZATION = {
  legalName: SITE_PUBLISHER,
  name: SITE_NAME,
  url: SITE_URL,
  email: "blue@hashtag-blue.com",
  telephone: "+385955115111",
  address: {
    streetAddress: "Mirka Viriusa 14",
    addressLocality: "Zagreb",
    postalCode: "10000",
    addressCountry: "HR",
  },
} as const;

const ORGANIZATION_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

type StructuredDataInput = {
  description: string;
};

export function buildPageStructuredData({ description }: StructuredDataInput) {
  const logoUrl = `${SITE_URL}${logos.color}`;
  const imageUrl = `${SITE_URL}${OPEN_GRAPH_IMAGE}`;

  const postalAddress = {
    "@type": "PostalAddress",
    streetAddress: ORGANIZATION.address.streetAddress,
    addressLocality: ORGANIZATION.address.addressLocality,
    postalCode: ORGANIZATION.address.postalCode,
    addressCountry: ORGANIZATION.address.addressCountry,
  };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORGANIZATION_ID,
        name: ORGANIZATION.legalName,
        url: ORGANIZATION.url,
        email: ORGANIZATION.email,
        telephone: ORGANIZATION.telephone,
        logo: {
          "@type": "ImageObject",
          url: logoUrl,
        },
        address: postalAddress,
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#professional-service`,
        name: ORGANIZATION.name,
        url: ORGANIZATION.url,
        description,
        email: ORGANIZATION.email,
        telephone: ORGANIZATION.telephone,
        image: imageUrl,
        address: postalAddress,
        areaServed: {
          "@type": "City",
          name: "Zagreb",
        },
        provider: {
          "@id": ORGANIZATION_ID,
        },
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: ORGANIZATION.name,
        url: ORGANIZATION.url,
        inLanguage: ["hr", "en", "de"],
        publisher: {
          "@id": ORGANIZATION_ID,
        },
      },
    ],
  };
}
