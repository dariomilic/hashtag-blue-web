export const locales = ["hr", "en", "de"] as const;

export type Locale = (typeof locales)[number];

export type ServiceContent = {
  title: string;
  description: string;
};

export type ProcessStepContent = {
  title: string;
  description: string;
};

export type FaqItemContent = {
  question: string;
  answer: string;
};

export type WorkingHoursRow = {
  day: string;
  hours: string;
};

export type TranslationDictionary = {
  locale: Locale;
  htmlLang: "hr" | "en" | "de";
  homePath: "/" | "/en" | "/de";
  openGraphLocale: "hr_HR" | "en_GB" | "de_DE";
  seo: {
    title: string;
    description: string;
    imageAlt: string;
  };
  header: {
    navAriaLabel: string;
    logoAriaLabel: string;
    openMenuLabel: string;
    closeMenuLabel: string;
    mobileDialogLabel: string;
    mobileNavAriaLabel: string;
    languageAriaLabel: string;
    nav: {
      architecture: string;
      realEstate: string;
      businessAddress: string;
      contact: string;
    };
    mobileFooterDisciplines: string;
  };
  hero: {
    disciplines: readonly [string, string, string];
    description: string;
    servicesCta: string;
    contactCta: string;
    scrollLabel: string;
  };
  statement: {
    title: readonly [string, string];
    description: readonly [string, string];
  };
  stats: readonly [
    { value: string; label: string },
    { value: string; label: string },
    { value: string; label: string },
  ];
  architecture: {
    title: string;
    description: string;
    services: readonly [ServiceContent, ServiceContent, ServiceContent];
  };
  projectLead: {
    label: string;
    name: "Dario Milić";
    degree: "mag.ing.arh. i urb.";
    role: string;
    description: readonly [string, string];
    expertiseAriaLabel: string;
    expertise: readonly [string, string, string];
    cta: string;
    imageAlt: string;
  };
  realEstate: {
    title: string;
    description: string;
    services: readonly [ServiceContent, ServiceContent, ServiceContent];
  };
  businessAddress: {
    title: string;
    description: string;
    benefits: readonly [string, string, string];
    whyTitle: string;
    services: readonly [
      ServiceContent,
      ServiceContent,
      ServiceContent,
      ServiceContent,
    ];
    includedTitle: string;
    includedItems: readonly [
      string,
      string,
      string,
      string,
      string,
      string,
      string,
      string,
    ];
    audienceTitle: string;
    audienceDescription: readonly [string, string];
    processTitle: string;
    processSteps: readonly [
      ProcessStepContent,
      ProcessStepContent,
      ProcessStepContent,
    ];
    faqTitle: string;
    faq: readonly [
      FaqItemContent,
      FaqItemContent,
      FaqItemContent,
      FaqItemContent,
      FaqItemContent,
      FaqItemContent,
    ];
    contactLabel: string;
    contactDescription: string;
    name: "Sara Milić";
    role: string;
    imageAlt: string;
    businessHoursLabel: string;
    businessHours: string;
    cta: string;
    mailSubject: string;
  };
  process: {
    title: string;
    steps: readonly [
      ProcessStepContent,
      ProcessStepContent,
      ProcessStepContent,
      ProcessStepContent,
      ProcessStepContent,
    ];
  };
  contact: {
    title: string;
    paragraphs: readonly [string, string, string];
    workingHours: readonly [
      WorkingHoursRow,
      WorkingHoursRow,
      WorkingHoursRow,
      WorkingHoursRow,
      WorkingHoursRow,
      WorkingHoursRow,
      WorkingHoursRow,
    ];
    cta: string;
    mailSubject: string;
  };
  footer: {
    disciplines: readonly [string, string, string];
    tagline: string;
    legalAriaLabel: string;
    legal: {
      notice: string;
      privacy: string;
      cookies: string;
    };
    rights: string;
  };
};
