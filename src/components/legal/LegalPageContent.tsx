import LegalLayout from "@/components/legal/LegalLayout";
import MarkdownRenderer from "@/components/legal/MarkdownRenderer";
import {
  getLegalDocument,
  getLegalLanguagePaths,
  type LegalDocumentKey,
} from "@/content/legal";
import type { Locale } from "@/content/translations";

type LegalPageContentProps = {
  locale: Locale;
  documentKey: LegalDocumentKey;
};

export default async function LegalPageContent({
  locale,
  documentKey,
}: LegalPageContentProps) {
  const document = await getLegalDocument(locale, documentKey);
  const languagePaths = getLegalLanguagePaths(documentKey);

  return (
    <LegalLayout locale={locale} languagePaths={languagePaths}>
      <article aria-label={document.title}>
        <div className="section-rule mb-10" aria-hidden="true" />
        <MarkdownRenderer content={document.markdown} />
      </article>
    </LegalLayout>
  );
}
