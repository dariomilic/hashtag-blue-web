import type { LegalLocaleContent } from "@/content/legal/types";

export const enLegalContent = {
  locale: "en",
  documents: {
    legalNotice: {
      key: "legalNotice",
      slug: "legal-notice",
      file: "en/legal-notice.md",
      title: "Legal Notice",
      description: "Legal information for Hashtag Blue d.o.o.",
    },
    privacyPolicy: {
      key: "privacyPolicy",
      slug: "privacy-policy",
      file: "en/privacy-policy.md",
      title: "Privacy Policy",
      description: "How Hashtag Blue d.o.o. processes personal data.",
    },
    cookiePolicy: {
      key: "cookiePolicy",
      slug: "cookie-policy",
      file: "en/cookie-policy.md",
      title: "Cookie Policy",
      description: "How Hashtag Blue d.o.o. uses cookies on this website.",
    },
  },
} satisfies LegalLocaleContent;
