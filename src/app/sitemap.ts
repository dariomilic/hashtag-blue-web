import type { MetadataRoute } from "next";
import { getLegalLanguagePaths } from "@/content/legal";
import { legalDocumentKeys } from "@/content/legal/types";
import type { Locale } from "@/content/translations";
import { SITE_URL } from "@/lib/seo";

const languages = {
  "hr-HR": `${SITE_URL}/`,
  en: `${SITE_URL}/en`,
  de: `${SITE_URL}/de`,
  "x-default": `${SITE_URL}/`,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const legalLocales = ["hr", "en", "de"] as const satisfies readonly Locale[];
  const legalEntries: MetadataRoute.Sitemap = legalDocumentKeys.flatMap((key) => {
    const paths = getLegalLanguagePaths(key);
    const legalLanguages = {
      "hr-HR": `${SITE_URL}${paths.hr}`,
      en: `${SITE_URL}${paths.en}`,
      de: `${SITE_URL}${paths.de}`,
      "x-default": `${SITE_URL}${paths.hr}`,
    };

    return legalLocales.map((locale) => ({
      url: `${SITE_URL}${paths[locale]}`,
      changeFrequency: "yearly" as const,
      priority: 0.4,
      alternates: { languages: legalLanguages },
    }));
  });

  return [
    {
      url: `${SITE_URL}/`,
      changeFrequency: "monthly",
      priority: 1,
      alternates: { languages },
    },
    {
      url: `${SITE_URL}/en`,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages },
    },
    {
      url: `${SITE_URL}/de`,
      changeFrequency: "monthly",
      priority: 0.9,
      alternates: { languages },
    },
    ...legalEntries,
  ];
}
