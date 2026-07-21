import Image from "next/image";
import { Clock, Mail, Phone } from "lucide-react";
import BusinessAddressSection from "@/components/BusinessAddressSection";
import CounterStat from "@/components/CounterStat";
import FadeIn from "@/components/FadeIn";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ProjectLeadSection from "@/components/ProjectLeadSection";
import SectionNumber from "@/components/SectionNumber";
import SiteFooter from "@/components/SiteFooter";
import type { TranslationDictionary } from "@/content/translations";
import { brandPhotos } from "@/lib/photos";

const architectureImages = [
  brandPhotos.architecture.experience,
  brandPhotos.architecture.design,
  brandPhotos.architecture.client,
] as const;

const realEstateImages = [
  brandPhotos.realEstate.legal,
  brandPhotos.realEstate.cadastre,
  brandPhotos.realEstate.keys,
] as const;

function ServiceCard({
  number,
  title,
  description,
  image,
}: {
  number: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <article className="group card-lift flex h-full flex-col overflow-hidden bg-white">
      <div className="image-frame relative h-[280px] w-full shrink-0 rounded-b-none bg-light-grey">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="image-zoom object-cover object-center"
        />
      </div>
      <div className="flex flex-1 flex-col px-6 py-7 md:px-7 md:py-8">
        <h3 className="font-heading mb-3 text-[1.35rem] leading-snug text-charcoal md:text-2xl">
          <span className="mr-2 text-[13px] tracking-[0.12em] text-accent">{number}</span>
          {title}
        </h3>
        <p className="text-[14px] leading-[1.8] text-muted md:text-[15px]">{description}</p>
      </div>
    </article>
  );
}

function MagazineSectionHeader({
  title,
  description,
  sectionNumber,
}: {
  title: string;
  description: string;
  sectionNumber: string;
}) {
  return (
    <div className="mb-20 grid gap-10 pt-2 md:mb-24 md:grid-cols-2 md:items-end md:gap-16 lg:gap-24">
      <FadeIn>
        <div>
          <SectionNumber number={sectionNumber} />
          <div className="section-rule mb-6" aria-hidden="true" />
          <h2 className="font-heading text-[2.25rem] leading-[1.12] text-charcoal md:text-5xl">
            {title}
          </h2>
        </div>
      </FadeIn>
      <FadeIn delay={100}>
        <p className="text-[15px] leading-[1.85] text-muted md:pb-1.5 md:text-base">{description}</p>
      </FadeIn>
    </div>
  );
}

type LocalizedHomePageProps = {
  dictionary: TranslationDictionary;
};

export default function LocalizedHomePage({ dictionary }: LocalizedHomePageProps) {
  return (
    <div id="top" className="min-h-screen bg-background text-charcoal">
      <Header locale={dictionary.locale} content={dictionary.header} />

      <Hero content={dictionary.hero} />

      <section
        id="statement"
        className="section-divider bg-background px-6 py-32 md:px-10 md:py-40 lg:py-44"
      >
        <div className="mx-auto grid max-w-[1200px] gap-14 md:grid-cols-2 md:gap-20 lg:gap-28">
          <FadeIn>
            <div>
              <SectionNumber number="01" />
              <div className="section-rule mb-6" aria-hidden="true" />
              <h2 className="font-heading text-[2.25rem] leading-[1.15] text-charcoal md:text-5xl lg:text-[3rem]">
                {dictionary.statement.title[0]}
                <br />
                {dictionary.statement.title[1]}
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="self-center text-[15px] leading-[1.9] text-muted md:text-base lg:pt-8">
              {dictionary.statement.description[0]}
              <br className="hidden lg:block" /> {dictionary.statement.description[1]}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-light-grey px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1200px]">
          <FadeIn className="mb-14 md:mb-16">
            <div className="section-rule" aria-hidden="true" />
          </FadeIn>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {dictionary.stats.map((stat, index) => (
              <CounterStat
                key={stat.label}
                value={stat.value}
                label={stat.label}
                delay={index * 120}
                iconIndex={index}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="section-spacer bg-background" aria-hidden="true" />

      <section
        id="architecture"
        className="bg-background px-6 py-32 md:px-10 md:py-40 lg:py-44"
      >
        <div className="mx-auto max-w-[1200px]">
          <MagazineSectionHeader
            sectionNumber="02"
            title={dictionary.architecture.title}
            description={dictionary.architecture.description}
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-stretch lg:grid-cols-3 lg:gap-7">
            {dictionary.architecture.services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 100} className="h-full">
                <ServiceCard
                  number={String(index + 1).padStart(2, "0")}
                  image={architectureImages[index]}
                  {...service}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-spacer section-divider bg-white" aria-hidden="true" />

      <ProjectLeadSection content={dictionary.projectLead} />

      <div className="section-spacer section-divider bg-white" aria-hidden="true" />

      <section
        id="real-estate"
        className="bg-white px-6 py-32 md:px-10 md:py-40 lg:py-44"
      >
        <div className="mx-auto max-w-[1200px]">
          <MagazineSectionHeader
            sectionNumber="03"
            title={dictionary.realEstate.title}
            description={dictionary.realEstate.description}
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-stretch lg:grid-cols-3 lg:gap-7">
            {dictionary.realEstate.services.map((service, index) => (
              <FadeIn key={service.title} delay={index * 100} className="h-full">
                <ServiceCard
                  number={String(index + 1).padStart(2, "0")}
                  image={realEstateImages[index]}
                  {...service}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-spacer section-divider bg-background" aria-hidden="true" />

      <BusinessAddressSection content={dictionary.businessAddress} />

      <div className="section-spacer section-divider bg-background" aria-hidden="true" />

      <section className="bg-background px-6 py-32 md:px-10 md:py-40 lg:py-44">
        <div className="mx-auto max-w-[1200px]">
          <FadeIn className="mb-20 pt-2 md:mb-24">
            <SectionNumber number="05" />
            <div className="section-rule mb-6" aria-hidden="true" />
            <h2 className="font-heading text-[2.25rem] leading-[1.12] text-charcoal md:text-5xl">
              {dictionary.process.title}
            </h2>
          </FadeIn>

          <div className="hidden lg:block">
            <FadeIn>
              <div className="relative flex items-start justify-between">
                {dictionary.process.steps.map((step, index) => (
                  <div key={step.title} className="flex flex-1 items-start">
                    <div className="process-step flex min-w-0 flex-1 flex-col items-center rounded-[18px] border border-transparent px-3 py-4 text-center">
                      <span className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-border-light/90 bg-white text-[11px] font-medium tracking-[0.14em] text-accent">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="font-heading mb-2 text-lg leading-snug text-charcoal">
                        {step.title}
                      </h3>
                      <p className="text-[13px] leading-[1.75] text-muted">{step.description}</p>
                    </div>
                    {index < dictionary.process.steps.length - 1 && (
                      <div className="mt-6 flex shrink-0 items-center px-1" aria-hidden="true">
                        <div className="h-px w-3 bg-border-light/80 xl:w-10" />
                        <span className="px-0.5 text-[10px] text-border-light/80 xl:px-1">→</span>
                        <div className="h-px w-3 bg-border-light/80 xl:w-10" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="lg:hidden">
            <ol className="flex flex-col">
              {dictionary.process.steps.map((step, index) => (
                <FadeIn key={step.title} delay={index * 80}>
                  <li className="relative flex gap-5 pb-11 last:pb-0">
                    {index < dictionary.process.steps.length - 1 && (
                      <div
                        className="absolute top-11 left-[21px] h-[calc(100%-2rem)] w-px bg-border-light/80"
                        aria-hidden="true"
                      />
                    )}
                    <span className="process-step relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-border-light/90 bg-white text-[11px] font-medium tracking-[0.14em] text-accent">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="process-step rounded-[18px] border border-transparent px-1 py-1 pt-0.5">
                      <h3 className="font-heading mb-2 text-xl leading-snug text-charcoal">
                        {step.title}
                      </h3>
                      <p className="text-[14px] leading-[1.8] text-muted">{step.description}</p>
                    </div>
                  </li>
                </FadeIn>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <div className="section-spacer section-divider bg-white" aria-hidden="true" />

      <section id="contact" className="bg-white">
        <div className="mx-auto grid max-w-[1200px] lg:grid-cols-2 lg:items-stretch">
          <FadeIn className="group relative min-h-[380px] lg:min-h-[680px]">
            <div className="image-frame absolute inset-0 rounded-none">
              <Image
                src={brandPhotos.contact}
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="image-zoom object-cover object-center"
              />
            </div>
          </FadeIn>

          <div className="flex flex-col justify-center px-6 py-24 md:px-10 md:py-32 lg:px-16 lg:py-40">
            <FadeIn>
              <SectionNumber number="06" />
              <div className="section-rule mb-6" aria-hidden="true" />
              <h2 className="title-accent font-heading mb-12 text-[2.25rem] leading-[1.12] text-charcoal md:mb-14 md:text-5xl">
                {dictionary.contact.title}
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="mb-14 space-y-5 text-[15px] leading-[1.9] text-muted md:mb-16 md:text-base">
                {dictionary.contact.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="mb-14 space-y-4 border-t border-border-light/80 pt-10 md:mb-16">
                <p className="font-heading text-xl text-charcoal">Hashtag Blue d.o.o.</p>
                <p className="flex items-center gap-3">
                  <Mail
                    className="h-4 w-4 shrink-0 text-accent/80"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                  <a
                    href="mailto:blue@hashtag-blue.com"
                    className="text-[15px] text-muted transition-colors duration-300 hover:text-accent"
                  >
                    blue@hashtag-blue.com
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Phone
                    className="h-4 w-4 shrink-0 text-accent/80"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                  <a
                    href="tel:+385955115111"
                    className="text-[15px] text-muted transition-colors duration-300 hover:text-accent"
                  >
                    +385 95 511 5111
                  </a>
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={200}>
              <div className="mb-6 flex items-center gap-3 text-accent/80">
                <Clock className="h-4 w-4 shrink-0" strokeWidth={1.25} aria-hidden="true" />
              </div>
              <table className="mb-12 w-full max-w-sm border-collapse text-left text-[13px] text-muted">
                <tbody>
                  {dictionary.contact.workingHours.map((row) => (
                    <tr key={row.day} className="border-b border-border-light/70 last:border-0">
                      <td className="py-3 pr-8 font-medium text-charcoal">{row.day}</td>
                      <td className="py-3">{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <a
                href={`mailto:blue@hashtag-blue.com?subject=${encodeURIComponent(dictionary.contact.mailSubject)}`}
                className="btn-cta-outline"
              >
                {dictionary.contact.cta}
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      <FadeIn>
        <SiteFooter locale={dictionary.locale} content={dictionary.footer} />
      </FadeIn>
    </div>
  );
}
