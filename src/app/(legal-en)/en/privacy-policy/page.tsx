import LegalPageContent from "@/components/legal/LegalPageContent";
import { createLegalMetadata } from "@/lib/seo";

export const metadata = createLegalMetadata("en", "privacyPolicy");

export default function PrivacyPolicyPage() {
  return <LegalPageContent locale="en" documentKey="privacyPolicy" />;
}
