import Image from "next/image";
import {
  Bell,
  Building2,
  Mail,
  Phone,
  ScanLine,
  Inbox,
  type LucideIcon,
} from "lucide-react";
import FadeIn from "@/components/FadeIn";
import SectionNumber from "@/components/SectionNumber";
import type { TranslationDictionary } from "@/content/translations";

const businessAddressIcons: readonly LucideIcon[] = [Building2, Inbox, Bell, ScanLine];

function BusinessAddressCard({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: LucideIcon;
}) {
  return (
    <article className="business-address-service-card card-lift group flex h-full flex-col border border-transparent bg-white px-6 py-7 md:px-7 md:py-8">
      <Icon
        className="mb-5 h-5 w-5 text-accent/70 transition-colors duration-300 group-hover:text-accent"
        strokeWidth={1.25}
        aria-hidden="true"
      />
      <h3 className="font-heading mb-3 text-[1.35rem] leading-snug text-charcoal md:text-2xl">
        {title}
      </h3>
      <p className="text-[14px] leading-[1.8] text-muted md:text-[15px]">{description}</p>
    </article>
  );
}

type BusinessAddressSectionProps = {
  content: TranslationDictionary["businessAddress"];
};

export default function BusinessAddressSection({ content }: BusinessAddressSectionProps) {
  return (
    <section
      id="business-address"
      className="bg-background px-6 py-32 md:px-10 md:py-40 lg:py-44"
    >
      <div className="mx-auto grid max-w-[1200px] gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(380px,440px)] lg:items-start lg:gap-12 xl:gap-16">
        <div>
          <div className="mb-16 pt-2 md:mb-20">
            <FadeIn>
              <SectionNumber number="04" />
              <div className="section-rule mb-6" aria-hidden="true" />
              <h2 className="font-heading text-[2.25rem] leading-[1.12] text-charcoal md:text-5xl">
                {content.title}
              </h2>
              <p className="mt-5 text-[15px] leading-[1.85] text-muted md:text-base">
                {content.subtitle}
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <p className="mt-8 max-w-2xl text-[15px] leading-[1.85] text-muted md:text-base">
                {content.description}
              </p>
            </FadeIn>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:gap-9">
            {content.services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 80} className="h-full">
                <BusinessAddressCard {...service} icon={businessAddressIcons[index]} />
              </FadeIn>
            ))}
          </div>
        </div>

        <FadeIn
          delay={120}
          className="mx-auto w-full max-w-[540px] lg:sticky lg:top-[calc(var(--header-height)+2rem)] lg:max-w-none"
        >
          <aside className="card-lift overflow-hidden bg-white px-5 py-4 md:px-6 md:py-5">
            <div className="relative h-[380px] w-full overflow-hidden rounded-[22px] bg-light-grey md:h-[410px] lg:h-[390px]">
              <Image
                src="/images/sara-milic.jpg"
                alt={content.imageAlt}
                fill
                loading="lazy"
                sizes="(max-width: 1023px) calc(100vw - 128px), 400px"
                className="object-cover object-center"
              />
            </div>

            <div className="px-1 pt-6 pb-1 text-center md:px-3 lg:text-left">
              <p className="mb-3 text-[11px] font-medium tracking-[0.16em] text-accent uppercase">
                {content.contactLabel}
              </p>
              <div className="mb-5 border-b border-border-light/80 pb-5">
                <h3 className="font-heading text-[2rem] leading-tight text-charcoal md:text-[2.25rem]">
                  {content.name}
                </h3>
                <p className="mt-1 text-[14px] leading-relaxed text-muted">
                  {content.role}
                </p>
              </div>

              <div className="mb-5 flex w-full flex-col items-center lg:items-start">
                <p className="flex items-center gap-3">
                  <Phone
                    className="h-4 w-4 shrink-0 text-accent/80"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                  <a
                    href="tel:+385917212993"
                    className="business-address-link flex min-h-11 items-center text-[15px] text-muted transition-colors duration-300 hover:text-accent"
                  >
                    +385 91 721 2993
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Mail
                    className="h-4 w-4 shrink-0 text-accent/80"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                  <a
                    href="mailto:sara@hashtag-blue.com"
                    className="business-address-link flex min-h-11 items-center text-[15px] text-muted transition-colors duration-300 hover:text-accent"
                  >
                    sara@hashtag-blue.com
                  </a>
                </p>
              </div>

              <div className="mb-5 w-full space-y-1.5">
                <p className="text-[12px] font-medium tracking-[0.12em] text-charcoal uppercase">
                  {content.businessHoursLabel}
                </p>
                <p className="text-[14px] leading-relaxed text-muted">
                  {content.businessHours}
                </p>
              </div>

              <a
                href={`mailto:sara@hashtag-blue.com?subject=${encodeURIComponent(content.mailSubject)}`}
                className="business-address-link btn-cta w-full"
              >
                {content.cta}
              </a>
            </div>
          </aside>
        </FadeIn>
      </div>
    </section>
  );
}
