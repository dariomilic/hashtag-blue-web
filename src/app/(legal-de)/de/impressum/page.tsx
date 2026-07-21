import LegalPageContent from "@/components/legal/LegalPageContent";
import { createLegalMetadata } from "@/lib/seo";

export const metadata = createLegalMetadata("de", "legalNotice");

export default function ImpressumPage() {
  return <LegalPageContent locale="de" documentKey="legalNotice" />;
}
