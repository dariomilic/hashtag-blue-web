import Header from "@/components/Header";
import SiteFooter from "@/components/SiteFooter";
import type { Locale } from "@/content/translations";
import { getDictionary } from "@/content/translations";

type LegalLayoutProps = {
  children: React.ReactNode;
  locale: Locale;
  languagePaths: Record<Locale, string>;
};

export default function LegalLayout({ children, locale, languagePaths }: LegalLayoutProps) {
  const dictionary = getDictionary(locale);

  return (
    <div className="min-h-screen bg-white text-charcoal">
      <Header
        locale={locale}
        content={dictionary.header}
        languagePaths={languagePaths}
      />
      <main className="px-6 py-16 md:px-10 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[860px]">{children}</div>
      </main>
      <SiteFooter locale={locale} content={dictionary.footer} />
    </div>
  );
}
