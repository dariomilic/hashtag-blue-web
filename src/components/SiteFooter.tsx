import Link from "next/link";
import BrandLogo from "@/components/BrandLogo";
import { LEGAL_LINKS } from "@/lib/legal";

const footerDisciplines = ["Arhitektura", "Urbanizam", "Nekretnine"] as const;

export default function SiteFooter() {
  return (
    <footer className="bg-[#1C1C1C] px-6 py-20 md:px-10 md:py-24">
      <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-3 md:items-start md:gap-10">
        <div>
          <BrandLogo variant="white" className="h-[52px] w-auto" />
          <ul className="mt-8 space-y-2">
            {footerDisciplines.map((item) => (
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
            Projektiranje prostora za budućnost.
          </p>
          <nav aria-label="Pravne stranice" className="mt-8">
            <ul className="space-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.slug}>
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
          All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
