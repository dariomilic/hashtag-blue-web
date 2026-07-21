import type { LegalLocaleContent } from "@/content/legal/types";

export const hrLegalContent = {
  locale: "hr",
  documents: {
    legalNotice: {
      key: "legalNotice",
      slug: "pravna-napomena",
      file: "pravna-napomena.md",
      title: "Pravna napomena",
      description: "Pravna napomena društva Hashtag Blue d.o.o.",
    },
    privacyPolicy: {
      key: "privacyPolicy",
      slug: "politika-privatnosti",
      file: "politika-privatnosti.md",
      title: "Politika privatnosti",
      description: "Politika privatnosti društva Hashtag Blue d.o.o.",
    },
    cookiePolicy: {
      key: "cookiePolicy",
      slug: "politika-kolacica",
      file: "politika-kolacica.md",
      title: "Politika kolačića",
      description: "Politika kolačića društva Hashtag Blue d.o.o.",
    },
  },
} satisfies LegalLocaleContent;
