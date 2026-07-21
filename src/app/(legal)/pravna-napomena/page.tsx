import LegalPageContent from "@/components/legal/LegalPageContent";
import { createLegalMetadata } from "@/lib/seo";

export const metadata = createLegalMetadata("hr", "legalNotice");

export default function PravnaNapomenaPage() {
  return <LegalPageContent locale="hr" documentKey="legalNotice" />;
}
