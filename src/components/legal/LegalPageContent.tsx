import JsonLd from "@/components/JsonLd";
import LegalLayout from "@/components/legal/LegalLayout";
import MarkdownRenderer from "@/components/legal/MarkdownRenderer";
import {
  getLegalDocument,
  getLegalLanguagePaths,
  type LegalDocumentKey,
} from "@/content/legal";
import { getDictionary, type Locale } from "@/content/translations";
import { buildPageStructuredData } from "@/lib/structured-data";

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
  const dictionary = getDictionary(locale);
  const structuredData = buildPageStructuredData({
    description: dictionary.seo.description,
  });

  return (
    <LegalLayout locale={locale} languagePaths={languagePaths}>
      <JsonLd data={structuredData} />
      <article aria-label={document.title}>
        <div className="section-rule mb-10" aria-hidden="true" />
        <MarkdownRenderer content={document.markdown} />
      </article>
    </LegalLayout>
  );
}
