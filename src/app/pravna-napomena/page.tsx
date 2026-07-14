import type { Metadata } from "next";
import LegalPageContent from "@/components/legal/LegalPageContent";
import { LEGAL_PAGES } from "@/lib/legal";

export const metadata: Metadata = {
  title: `${LEGAL_PAGES["pravna-napomena"].title} | HASHTAG BLUE`,
  description: LEGAL_PAGES["pravna-napomena"].description,
};

export default function PravnaNapomenaPage() {
  return <LegalPageContent slug="pravna-napomena" />;
}
