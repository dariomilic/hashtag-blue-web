import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { getLegalPath } from "@/content/legal";
import type { Locale, TranslationDictionary } from "@/content/translations";

type SiteFooterProps = {
  locale: Locale;
  content: TranslationDictionary["footer"];
};

export default function SiteFooter({ locale, content }: SiteFooterProps) {
  const legalLinks = [
    { href: getLegalPath(locale, "legalNotice"), label: content.legal.notice },
    { href: getLegalPath(locale, "privacyPolicy"), label: content.legal.privacy },
    { href: getLegalPath(locale, "cookiePolicy"), label: content.legal.cookies },
  ];

  return (
    <footer className="bg-[#1C1C1C] px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-3 md:items-start md:gap-10">
        <div>
          <BrandLogo variant="white" className="h-[52px] w-auto" />
          <ul className="mt-8 space-y-2">
            {content.disciplines.map((item) => (
              <li
                key={item}
                className="text-[11px] font-medium tracking-[0.14em] text-white/55 uppercase"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:pt-2 md:text-center">
          <p className="text-[15px] leading-relaxed text-white/60">
            {content.tagline}
          </p>
          <nav aria-label={content.legalAriaLabel} className="mt-8">
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[12px] tracking-wide text-white/45 transition-colors duration-200 hover:text-white/75"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="text-[12px] leading-relaxed tracking-wide text-white/45 md:pt-2 md:text-right">
          Copyright © 2026 Hashtag Blue d.o.o.
          <br />
          {content.rights}
        </p>
      </div>
    </footer>
  );
}
