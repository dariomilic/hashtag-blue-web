import LegalLayout from "@/components/legal/LegalLayout";
import MarkdownRenderer from "@/components/legal/MarkdownRenderer";
import { getLegalMarkdown, LEGAL_PAGES, type LegalSlug } from "@/lib/legal";

type LegalPageContentProps = {
  slug: LegalSlug;
};

export default async function LegalPageContent({ slug }: LegalPageContentProps) {
  const content = await getLegalMarkdown(slug);
  const { title } = LEGAL_PAGES[slug];

  return (
    <LegalLayout>
      <article aria-label={title}>
        <div className="section-rule mb-10" aria-hidden="true" />
        <MarkdownRenderer content={content} />
      </article>
    </LegalLayout>
  );
}
