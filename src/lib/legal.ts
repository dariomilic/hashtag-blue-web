import fs from "fs/promises";
import path from "path";

export const LEGAL_PAGES = {
  "pravna-napomena": {
    file: "pravna-napomena.md",
    title: "Pravna napomena",
    description: "Pravna napomena Hashtag Blue d.o.o.",
  },
  "politika-privatnosti": {
    file: "politika-privatnosti.md",
    title: "Politika privatnosti",
    description: "Politika privatnosti Hashtag Blue d.o.o.",
  },
  "politika-kolacica": {
    file: "politika-kolacica.md",
    title: "Politika kolačića",
    description: "Politika kolačića Hashtag Blue d.o.o.",
  },
} as const;

export type LegalSlug = keyof typeof LEGAL_PAGES;

export const LEGAL_LINKS = Object.entries(LEGAL_PAGES).map(([slug, page]) => ({
  slug: slug as LegalSlug,
  href: `/${slug}`,
  label: page.title,
}));

const LEGAL_DIR = path.join(process.cwd(), "legal");

export async function getLegalMarkdown(slug: LegalSlug): Promise<string> {
  const { file } = LEGAL_PAGES[slug];
  const filePath = path.join(LEGAL_DIR, file);
  return fs.readFile(filePath, "utf-8");
}

export function isLegalSlug(value: string): value is LegalSlug {
  return value in LEGAL_PAGES;
}
