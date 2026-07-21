import LegalPageContent from "@/components/legal/LegalPageContent";
import { createLegalMetadata } from "@/lib/seo";

export const metadata = createLegalMetadata("en", "legalNotice");

export default function LegalNoticePage() {
  return <LegalPageContent locale="en" documentKey="legalNotice" />;
}
