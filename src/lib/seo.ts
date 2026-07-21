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

export const SITE_URL = "https://www.hashtag-blue.com";

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

export const rootMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  authors: [{ name: SITE_PUBLISHER }],
  creator: SITE_PUBLISHER,
  publisher: SITE_PUBLISHER,
  keywords: SITE_KEYWORDS,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
  },
};

const languageAlternates = {
  "hr-HR": "/",
  en: "/en",
  de: "/de",
  "x-default": "/",
};

export function createHomepageMetadata(dictionary: TranslationDictionary): Metadata {
  const canonical = dictionary.homePath;
  const alternateLocales = ["hr_HR", "en_US", "de_DE"].filter(
    (locale) => locale !== dictionary.openGraphLocale,
  );

  return {
    title: dictionary.seo.title,
    description: dictionary.seo.description,
    alternates: {
      canonical,
      languages: languageAlternates,
    },
    openGraph: {
      title: dictionary.seo.title,
      description: dictionary.seo.description,
      url: canonical,
      locale: dictionary.openGraphLocale,
      alternateLocale: alternateLocales,
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
  const languages = {
    "hr-HR": languagePaths.hr,
    en: languagePaths.en,
    de: languagePaths.de,
    "x-default": languagePaths.hr,
  };
  const alternateLocales = ["hr_HR", "en_US", "de_DE"].filter(
    (item) => item !== dictionary.openGraphLocale,
  );

  return {
    title,
    description: document.description,
    alternates: {
      canonical: languagePaths[locale],
      languages,
    },
    openGraph: {
      title,
      description: document.description,
      url: languagePaths[locale],
      locale: dictionary.openGraphLocale,
      alternateLocale: alternateLocales,
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
