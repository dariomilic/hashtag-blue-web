import type { LegalLocaleContent } from "@/content/legal/types";

export const deLegalContent = {
  locale: "de",
  documents: {
    legalNotice: {
      key: "legalNotice",
      slug: "impressum",
      file: "de/impressum.md",
      title: "Impressum",
      description: "Rechtliche Angaben der Hashtag Blue d.o.o.",
    },
    privacyPolicy: {
      key: "privacyPolicy",
      slug: "datenschutz",
      file: "de/datenschutz.md",
      title: "Datenschutzerklärung",
      description: "Informationen zur Verarbeitung personenbezogener Daten durch Hashtag Blue d.o.o.",
    },
    cookiePolicy: {
      key: "cookiePolicy",
      slug: "cookie-richtlinie",
      file: "de/cookie-richtlinie.md",
      title: "Cookie-Richtlinie",
      description: "Informationen zur Verwendung von Cookies auf dieser Website.",
    },
  },
} satisfies LegalLocaleContent;
