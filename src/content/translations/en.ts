import type { TranslationDictionary } from "@/content/translations/types";

export const en = {
  locale: "en",
  htmlLang: "en",
  homePath: "/en",
  openGraphLocale: "en_US",
  seo: {
    title: "Hashtag Blue | Architecture & Real Estate, Zagreb",
    description:
      "A Zagreb architecture studio specialising in design, urban planning, real estate development and investment advisory.",
    imageAlt: "Hashtag Blue — architecture and real estate, Zagreb",
  },
  header: {
    navAriaLabel: "Main navigation",
    logoAriaLabel: "Back to homepage",
    openMenuLabel: "Open menu",
    closeMenuLabel: "Close menu",
    mobileDialogLabel: "Main menu",
    mobileNavAriaLabel: "Mobile navigation",
    languageAriaLabel: "Select language",
    nav: {
      architecture: "Architecture",
      realEstate: "Real Estate",
      businessAddress: "Business Address",
      contact: "Contact",
    },
    mobileFooterDisciplines: "Architecture | Urban Planning | Real Estate",
  },
  hero: {
    disciplines: ["Architecture.", "Urban Planning.", "Real Estate."],
    description:
      "A Zagreb architecture studio specialising in private homes, residential buildings and real estate.",
    servicesCta: "Our Work",
    contactCta: "Contact",
    scrollLabel: "Scroll down",
  },
  statement: {
    title: ["We design spaces", "built to endure."],
    description: [
      "Architecture is more than form.",
      "It is the making of places that respond to how people live, respect their context and hold their value over time.",
    ],
  },
  stats: [
    { value: "10+", label: "years of practice" },
    { value: "100+", label: "projects delivered" },
    { value: "100%", label: "tailored approach" },
  ],
  architecture: {
    title: "Architecture",
    description:
      "From concept to completion. We design spaces that are functional, refined and built to last.",
    services: [
      {
        title: "Experience",
        description:
          "With more than a decade of practice, we bring the depth to resolve complex briefs. Our portfolio spans private homes, residential buildings and mixed-use projects.",
      },
      {
        title: "Design",
        description:
          "Strong design emerges from function and form. Through close collaboration, we develop solutions shaped to each client's brief.",
      },
      {
        title: "Our Approach",
        description:
          "Every client is different. We take time to understand your aims and deliver a considered process with outcomes that exceed expectation.",
      },
    ],
  },
  projectLead: {
    label: "Project Lead",
    name: "Dario Milić",
    degree: "mag.ing.arh. i urb.",
    role: "Founder & Managing Director | Hashtag Blue",
    description: [
      "Specialist in residential and multi-unit buildings, urban analysis and real estate project development.",
      "We aim to deliver expert, functional and sustainable solutions tailored to each client's needs.",
    ],
    expertiseAriaLabel: "Areas of expertise",
    expertise: ["Architecture", "Urban Planning", "Real Estate Development"],
    cta: "Arrange a Consultation",
    imageAlt: "Dario Milić — Project Lead, Hashtag Blue",
  },
  realEstate: {
    title: "Real Estate",
    description:
      "Expert, secure and transparent guidance at every stage of a property transaction.",
    services: [
      {
        title: "Property & Legal Resolution",
        description:
          "Unresolved co-ownership, inheritance, possession disputes or unclear documentation? Our legal team assesses each case systematically and guides you to a clear, legally sound outcome.",
      },
      {
        title: "Land Registry & Title",
        description:
          "From ownership registration and record updates to condominium registration and long-standing registry issues — we manage the process efficiently, accurately and in full compliance.",
      },
      {
        title: "Transaction Security",
        description:
          "Professional support for property transactions, due diligence, documentation and contract preparation — with a focus on security, clarity and the best outcome for you.",
      },
    ],
  },
  businessAddress: {
    title: "Registered Office & Business Address",
    subtitle: "A professional registered address for companies, trades and sole traders.",
    description:
      "Establish a reliable registered office for your company or trade. We provide address registration, secure mail handling and administrative support.",
    services: [
      {
        title: "Address Registration",
        description: "Use our address as the official registered office of your company or trade.",
      },
      {
        title: "Mail Handling",
        description: "Secure receipt and storage of incoming correspondence.",
      },
      {
        title: "Mail Notifications",
        description: "Prompt notification when new mail arrives.",
      },
      {
        title: "Scanning & Forwarding",
        description: "Scanning and forwarding available on request.",
      },
    ],
    contactLabel: "Contact",
    name: "Sara Milić",
    role: "Business Support",
    imageAlt: "Sara Milić — Business Address, Hashtag Blue",
    businessHoursLabel: "Business Hours",
    businessHours: "Mon – Fri | 09:00 – 17:00",
    cta: "Enquire",
    mailSubject: "Business Address Enquiry",
  },
  process: {
    title: "Our Process",
    steps: [
      {
        title: "Initial Consultation",
        description: "An introduction to your ideas and the key project parameters.",
      },
      {
        title: "Brief Analysis",
        description: "We assess the site, your requirements and the opportunities available.",
      },
      {
        title: "Concept Design",
        description: "We develop design concepts and visualisations.",
      },
      {
        title: "Project Development",
        description: "We prepare full project documentation.",
      },
      {
        title: "Delivery",
        description: "We follow the build through to completion.",
      },
    ],
  },
  contact: {
    title: "Discuss Your Project",
    paragraphs: [
      "Every successful project begins with a conversation.",
      "Whether you are planning a home, villa or residential building — or need expert real estate support — we are here to help.",
      "Share your ideas. We will assess the possibilities and help identify the right path forward.",
    ],
    workingHours: [
      { day: "Mon", hours: "09:00–17:00" },
      { day: "Tue", hours: "09:00–17:00" },
      { day: "Wed", hours: "09:00–17:00" },
      { day: "Thu", hours: "09:00–17:00" },
      { day: "Fri", hours: "09:00–17:00" },
      { day: "Sat", hours: "Closed" },
      { day: "Sun", hours: "Closed" },
    ],
    cta: "Send an Enquiry",
    mailSubject: "Architecture Enquiry",
  },
  footer: {
    disciplines: ["Architecture", "Urban Planning", "Real Estate"],
    tagline: "Spaces for the future.",
    legalAriaLabel: "Legal pages",
    legal: {
      notice: "Legal Notice",
      privacy: "Privacy Policy",
      cookies: "Cookie Policy",
    },
    rights: "All rights reserved.",
  },
} satisfies TranslationDictionary;
