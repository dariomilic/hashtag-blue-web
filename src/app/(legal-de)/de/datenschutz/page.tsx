import LegalPageContent from "@/components/legal/LegalPageContent";
import { createLegalMetadata } from "@/lib/seo";

export const metadata = createLegalMetadata("de", "privacyPolicy");

export default function DatenschutzPage() {
  return <LegalPageContent locale="de" documentKey="privacyPolicy" />;
}
