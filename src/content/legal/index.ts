import fs from "fs/promises";
import path from "path";
import { deLegalContent } from "@/content/legal/de";
import { enLegalContent } from "@/content/legal/en";
import { hrLegalContent } from "@/content/legal/hr";
import type {
  LegalDocument,
  LegalDocumentKey,
  LegalLocaleContent,
} from "@/content/legal/types";
import type { Locale } from "@/content/translations";

export type { LegalDocument, LegalDocumentKey, LegalLocaleContent };

const legalContent: Record<Locale, LegalLocaleContent> = {
  hr: hrLegalContent,
  en: enLegalContent,
  de: deLegalContent,
};

const legalDirectory = path.join(process.cwd(), "legal");

export function getLegalDefinition(locale: Locale, key: LegalDocumentKey) {
  return legalContent[locale].documents[key];
}

export function getLegalPath(locale: Locale, key: LegalDocumentKey): string {
  const { slug } = getLegalDefinition(locale, key);
  return locale === "hr" ? `/${slug}` : `/${locale}/${slug}`;
}

export function getLegalLanguagePaths(key: LegalDocumentKey): Record<Locale, string> {
  return {
    hr: getLegalPath("hr", key),
    en: getLegalPath("en", key),
    de: getLegalPath("de", key),
  };
}

export async function getLegalDocument(
  locale: Locale,
  key: LegalDocumentKey,
): Promise<LegalDocument> {
  const definition = getLegalDefinition(locale, key);
  const markdown = await fs.readFile(path.join(legalDirectory, definition.file), "utf-8");

  return {
    ...definition,
    locale,
    markdown,
  };
}
