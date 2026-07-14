import type { Metadata } from "next";
import LegalPageContent from "@/components/legal/LegalPageContent";
import { LEGAL_PAGES } from "@/lib/legal";

export const metadata: Metadata = {
  title: `${LEGAL_PAGES["politika-kolacica"].title} | HASHTAG BLUE`,
  description: LEGAL_PAGES["politika-kolacica"].description,
};

export default function PolitikaKolacicaPage() {
  return <LegalPageContent slug="politika-kolacica" />;
}
