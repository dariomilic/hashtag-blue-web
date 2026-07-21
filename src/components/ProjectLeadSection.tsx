import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import type { TranslationDictionary } from "@/content/translations";

type ProjectLeadSectionProps = {
  content: TranslationDictionary["projectLead"];
};

export default function ProjectLeadSection({ content }: ProjectLeadSectionProps) {
  return (
    <section
      id="project-lead"
      className="bg-white px-6 py-32 md:px-10 md:py-40 lg:py-44"
      aria-labelledby="project-lead-title"
    >
      <div className="mx-auto grid max-w-[1200px] gap-16 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-20 xl:gap-24">
        <FadeIn>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[560px] overflow-hidden rounded-[20px] bg-light-grey shadow-[0_20px_55px_rgba(28,28,28,0.14)]">
            <Image
              src="/images/dario-milic.jpg"
              alt={content.imageAlt}
              fill
              loading="lazy"
              quality={100}
              sizes="(max-width: 607px) calc(187.5vw - 90px), 1050px"
              className="object-cover object-[33%_center]"
            />
          </div>
        </FadeIn>

        <div className="text-center lg:text-left">
          <FadeIn>
            <p className="mb-5 text-[11px] font-medium tracking-[0.16em] text-accent uppercase">
              {content.label}
            </p>
            <div className="section-rule mx-auto mb-7 lg:mx-0" aria-hidden="true" />
            <h2
              id="project-lead-title"
              className="font-heading text-[2.75rem] leading-[1.05] text-charcoal md:text-[3.5rem]"
            >
              {content.name}
            </h2>
            <p className="mt-5 text-[15px] font-medium text-charcoal md:text-base">
              {content.degree}
            </p>
            <p className="mt-2 text-[13px] tracking-[0.08em] text-muted uppercase">
              {content.role}
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="mx-auto mt-10 max-w-xl space-y-5 text-[15px] leading-[1.9] text-muted md:text-base lg:mx-0">
              <p>{content.description[0]}</p>
              <p>{content.description[1]}</p>
            </div>
          </FadeIn>

          <FadeIn delay={160}>
            <ul
              className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start"
              aria-label={content.expertiseAriaLabel}
            >
              {content.expertise.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border-light bg-background px-4 py-2 text-[11px] font-medium tracking-[0.1em] text-charcoal uppercase"
                >
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn delay={220}>
            <a href="#contact" className="btn-cta mt-12">
              {content.cta}
            </a>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
