import LegalPageContent from "@/components/legal/LegalPageContent";
import { createLegalMetadata } from "@/lib/seo";

export const metadata = createLegalMetadata("en", "cookiePolicy");

export default function CookiePolicyPage() {
  return <LegalPageContent locale="en" documentKey="cookiePolicy" />;
}
