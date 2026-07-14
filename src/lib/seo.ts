import type { Metadata } from "next";

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

export const HOMEPAGE_TITLE = "Hashtag Blue | Arhitektonski ured i nekretnine Zagreb";

export const HOMEPAGE_DESCRIPTION =
  "Hashtag Blue je arhitektonski ured iz Zagreba specijaliziran za projektiranje, urbanizam, razvoj nekretnina i investicijsko savjetovanje.";

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
    locale: "hr_HR",
    type: "website",
    siteName: SITE_NAME,
  },
};

export const homepageMetadata: Metadata = {
  title: HOMEPAGE_TITLE,
  description: HOMEPAGE_DESCRIPTION,
  openGraph: {
    title: HOMEPAGE_TITLE,
    description: HOMEPAGE_DESCRIPTION,
    url: SITE_URL,
    locale: "hr_HR",
    type: "website",
    siteName: SITE_NAME,
    images: [
      {
        url: OPEN_GRAPH_IMAGE,
        width: 1200,
        height: 630,
        alt: "Hashtag Blue — arhitektonski ured i nekretnine Zagreb",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOMEPAGE_TITLE,
    description: HOMEPAGE_DESCRIPTION,
    images: [OPEN_GRAPH_IMAGE],
  },
};
