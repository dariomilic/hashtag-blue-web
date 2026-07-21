import LegalPageContent from "@/components/legal/LegalPageContent";
import { createLegalMetadata } from "@/lib/seo";

export const metadata = createLegalMetadata("hr", "privacyPolicy");

export default function PolitikaPrivatnostiPage() {
  return <LegalPageContent locale="hr" documentKey="privacyPolicy" />;
}
