import type { Metadata } from "next";
import {
  getLegalDefinition,
  getLegalLanguagePaths,
  type LegalDocumentKey,
} from "@/content/legal";
import {
  getDictionary,
  type Locale,
  type TranslationDictionary,
} from "@/content/translations";

export const SITE_URL = "https://hashtag-blue.com";

export const SITE_NAME = "Hashtag Blue";

export const SITE_PUBLISHER = "Hashtag Blue d.o.o.";

export const OPEN_GRAPH_IMAGE = "/brand/og/hashtag-blue-og.jpg";

export const SITE_KEYWORDS = [
  "Hashtag Blue",
  "arhitekt Zagreb",
  "arhitektonski ured",
  "projektiranje",
  "urbanizam",
  "razvoj nekretnina",
  "investicijsko savjetovanje",
  "glavni projekt",
  "idejni projekt",
  "arhitektura Hrvatska",
];

export const INDEX_FOLLOW_ROBOTS = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  authors: [{ name: SITE_PUBLISHER }],
  creator: SITE_PUBLISHER,
  publisher: SITE_PUBLISHER,
  keywords: SITE_KEYWORDS,
  robots: INDEX_FOLLOW_ROBOTS,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
  },
};

/** Reciprocal hreflang codes: hr | en | de | x-default */
export const homepageLanguageAlternates = {
  hr: `${SITE_URL}/`,
  en: `${SITE_URL}/en`,
  de: `${SITE_URL}/de`,
  "x-default": `${SITE_URL}/`,
} as const;

const OPEN_GRAPH_LOCALES = ["hr_HR", "en_GB", "de_DE"] as const;

function absoluteUrl(path: string): string {
  if (path === "/") {
    return `${SITE_URL}/`;
  }
  return `${SITE_URL}${path}`;
}

export function createHomepageMetadata(dictionary: TranslationDictionary): Metadata {
  const canonical = absoluteUrl(dictionary.homePath);
  const alternateLocales = OPEN_GRAPH_LOCALES.filter(
    (locale) => locale !== dictionary.openGraphLocale,
  );

  return {
    title: dictionary.seo.title,
    description: dictionary.seo.description,
    robots: INDEX_FOLLOW_ROBOTS,
    alternates: {
      canonical,
      languages: homepageLanguageAlternates,
    },
    openGraph: {
      title: dictionary.seo.title,
      description: dictionary.seo.description,
      url: canonical,
      locale: dictionary.openGraphLocale,
      alternateLocale: [...alternateLocales],
      type: "website",
      siteName: SITE_NAME,
      images: [
        {
          url: OPEN_GRAPH_IMAGE,
          width: 1200,
          height: 630,
          alt: dictionary.seo.imageAlt,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dictionary.seo.title,
      description: dictionary.seo.description,
      images: [OPEN_GRAPH_IMAGE],
    },
  };
}

export function createLegalMetadata(locale: Locale, key: LegalDocumentKey): Metadata {
  const document = getLegalDefinition(locale, key);
  const dictionary = getDictionary(locale);
  const languagePaths = getLegalLanguagePaths(key);
  const title = `${SITE_NAME} | ${document.title}`;
  const canonical = absoluteUrl(languagePaths[locale]);
  const languages = {
    hr: absoluteUrl(languagePaths.hr),
    en: absoluteUrl(languagePaths.en),
    de: absoluteUrl(languagePaths.de),
    "x-default": absoluteUrl(languagePaths.hr),
  };
  const alternateLocales = OPEN_GRAPH_LOCALES.filter(
    (item) => item !== dictionary.openGraphLocale,
  );

  return {
    title,
    description: document.description,
    robots: INDEX_FOLLOW_ROBOTS,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description: document.description,
      url: canonical,
      locale: dictionary.openGraphLocale,
      alternateLocale: [...alternateLocales],
      type: "website",
      siteName: SITE_NAME,
      images: [
        {
          url: OPEN_GRAPH_IMAGE,
          width: 1200,
          height: 630,
          alt: `${SITE_NAME} — ${document.title}`,
          type: "image/jpeg",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: document.description,
      images: [OPEN_GRAPH_IMAGE],
    },
  };
}
