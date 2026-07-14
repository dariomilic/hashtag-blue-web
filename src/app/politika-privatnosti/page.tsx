import type { Metadata } from "next";
import LegalPageContent from "@/components/legal/LegalPageContent";
import { LEGAL_PAGES } from "@/lib/legal";

export const metadata: Metadata = {
  title: `${LEGAL_PAGES["politika-privatnosti"].title} | HASHTAG BLUE`,
  description: LEGAL_PAGES["politika-privatnosti"].description,
};

export default function PolitikaPrivatnostiPage() {
  return <LegalPageContent slug="politika-privatnosti" />;
}
