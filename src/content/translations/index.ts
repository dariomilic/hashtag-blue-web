import { de } from "@/content/translations/de";
import { en } from "@/content/translations/en";
import { hr } from "@/content/translations/hr";
import { locales, type Locale, type TranslationDictionary } from "@/content/translations/types";

export { locales };
export type { Locale, TranslationDictionary };

export const dictionaries: Record<Locale, TranslationDictionary> = {
  hr,
  en,
  de,
};

export const localePaths: Record<Locale, "/" | "/en" | "/de"> = {
  hr: "/",
  en: "/en",
  de: "/de",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDictionary(locale: Locale): TranslationDictionary {
  return dictionaries[locale];
}

export function getLocaleFromSegments(segments?: string[]): Locale | null {
  if (!segments || segments.length === 0) {
    return "hr";
  }

  if (segments.length === 1 && isLocale(segments[0]) && segments[0] !== "hr") {
    return segments[0];
  }

  return null;
}
