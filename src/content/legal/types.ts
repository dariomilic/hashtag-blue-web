import type { Locale } from "@/content/translations";

export const legalDocumentKeys = ["legalNotice", "privacyPolicy", "cookiePolicy"] as const;

export type LegalDocumentKey = (typeof legalDocumentKeys)[number];

export type LegalDocumentDefinition = {
  key: LegalDocumentKey;
  slug: string;
  file: string;
  title: string;
  description: string;
};

export type LegalLocaleContent = {
  locale: Locale;
  documents: Record<LegalDocumentKey, LegalDocumentDefinition>;
};

export type LegalDocument = LegalDocumentDefinition & {
  locale: Locale;
  markdown: string;
};
