import LegalPageContent from "@/components/legal/LegalPageContent";
import { createLegalMetadata } from "@/lib/seo";

export const metadata = createLegalMetadata("de", "cookiePolicy");

export default function CookieRichtliniePage() {
  return <LegalPageContent locale="de" documentKey="cookiePolicy" />;
}
