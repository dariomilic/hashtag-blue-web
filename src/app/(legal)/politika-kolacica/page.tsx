import LegalPageContent from "@/components/legal/LegalPageContent";
import { createLegalMetadata } from "@/lib/seo";

export const metadata = createLegalMetadata("hr", "cookiePolicy");

export default function PolitikaKolacicaPage() {
  return <LegalPageContent locale="hr" documentKey="cookiePolicy" />;
}
