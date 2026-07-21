import Image from "next/image";
import type { Metadata } from "next";
import { Clock, Mail, Phone } from "lucide-react";
import CounterStat from "@/components/CounterStat";
import FadeIn from "@/components/FadeIn";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BusinessAddressSection from "@/components/BusinessAddressSection";
import ProjectLeadSection from "@/components/ProjectLeadSection";
import SiteFooter from "@/components/SiteFooter";
import SectionNumber from "@/components/SectionNumber";
import { homepageMetadata } from "@/lib/seo";
import { brandPhotos } from "@/lib/photos";

export const metadata: Metadata = homepageMetadata;

export const siteStats = [
  { value: "10+", label: "godina iskustva" },
  { value: "100+", label: "izrađenih projekata" },
  { value: "100%", label: "individualan pristup" },
];

const architectureServices = [
  {
    title: "Iskustvo i stručnost",
    description:
      "S više od 10 godina radnog iskustva u struci, imamo znanje za rješavanje i najsloženijih projekata. Radili smo na širem spektru projekata, od stambenih kuća do stambenih i stambeno-poslovnih zgrada.",
    image: brandPhotos.architecture.experience,
  },
  {
    title: "Inovativni dizajn",
    description:
      "Vjerujemo da izvrstan dizajn proizlazi iz funkcionalnosti i volumena. Timski surađujemo kako bismo stvorili inovativna rješenja koja zadovoljavaju potrebe naših klijenata.",
    image: brandPhotos.architecture.design,
  },
  {
    title: "Pristup klijentu",
    description:
      "Smatramo da je svaki klijent jedinstven te izdvajamo vrijeme kako bismo razumjeli njegove potrebe i ciljeve. Naš pristup usmjeren na klijenta osigurava rezultate koji premašuju njegova očekivanja.",
    image: brandPhotos.architecture.client,
  },
];

const realEstateServices = [
  {
    title: "Rješavanje imovinsko-pravnih odnosa",
    description:
      "Imate neriješene suvlasničke odnose, nasljedstvo, posjedovni spor ili dvojbenu dokumentaciju? Naš tim pravnih stručnjaka sustavno analizira svaki slučaj i vodi vas do jasnog i pravno čistog rješenja.",
    image: brandPhotos.realEstate.legal,
  },
  {
    title: "Zemljišnoknjižni i vlasnički problemi",
    description:
      "Od upisa vlasništva, promjene podataka, etažiranja do rješavanja starijih zemljišnoknjižnih zastoja — preuzimamo cijeli proces. Brzo, točno i u skladu s propisima.",
    image: brandPhotos.realEstate.cadastre,
  },
  {
    title: "Sigurnost u svakom koraku",
    description:
      "Profesionalno surađujemo u kupoprodaji nekretnina, provjeri, usklađenju i izradi ugovora. Fokus je na sigurnoj transakciji, transparentnoj komunikaciji i najboljem mogućem rezultatu za klijenta.",
    image: brandPhotos.realEstate.keys,
  },
];

const processSteps = [
  {
    title: "Uvodni razgovor",
    description: "Upoznavanje, ideje i osnovne informacije.",
  },
  {
    title: "Analiza potreba",
    description: "Analiziramo lokaciju, želje i mogućnosti.",
  },
  {
    title: "Idejno rješenje",
    description: "Kreiramo konceptualna rješenja i vizualizacije.",
  },
  {
    title: "Projektiranje",
    description: "Izrađujemo kompletnu projektnu dokumentaciju.",
  },
  {
    title: "Realizacija",
    description: "Pratimo proces gradnje do konačne realizacije.",
  },
];

const workingHours = [
  { day: "Pon", hours: "09:00–17:00" },
  { day: "Uto", hours: "09:00–17:00" },
  { day: "Sri", hours: "09:00–17:00" },
  { day: "Čet", hours: "09:00–17:00" },
  { day: "Pet", hours: "09:00–17:00" },
  { day: "Sub", hours: "Zatvoreno" },
  { day: "Ned", hours: "Zatvoreno" },
];

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
  sectionNumber?: string;
}) {
  return (
    <div className="mb-20 grid gap-10 pt-2 md:mb-24 md:grid-cols-2 md:items-end md:gap-16 lg:gap-24">
      <FadeIn>
        <div>
          {sectionNumber && <SectionNumber number={sectionNumber} />}
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

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-charcoal">
      <Header />

      <Hero />

      {/* Statement */}
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
                Projektiramo prostore
                <br />
                koji ostaju vrijedni desetljećima.
              </h2>
            </div>
          </FadeIn>
          <FadeIn delay={100}>
            <p className="self-center text-[15px] leading-[1.9] text-muted md:text-base lg:pt-8">
              Arhitektura nije samo oblikovanje građevine.
              <br className="hidden lg:block" /> Ona je stvaranje prostora koji odgovara načinu
              života, poštuje lokaciju i zadržava svoju vrijednost kroz vrijeme.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-light-grey px-6 py-24 md:px-10 md:py-32">
        <div className="mx-auto max-w-[1200px]">
          <FadeIn className="mb-14 md:mb-16">
            <div className="section-rule" aria-hidden="true" />
          </FadeIn>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {siteStats.map((stat, index) => (
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

      {/* Architecture */}
      <section id="arhitektura" className="bg-background px-6 py-32 md:px-10 md:py-40 lg:py-44">
        <div className="mx-auto max-w-[1200px]">
          <MagazineSectionHeader
            sectionNumber="02"
            title="Arhitektonske usluge"
            description="Od ideje do realizacije. Projektiramo prostore koji su funkcionalni, estetski i dugotrajni."
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-stretch lg:grid-cols-3 lg:gap-7">
            {architectureServices.map((service, index) => (
              <FadeIn key={service.title} delay={index * 100} className="h-full">
                <ServiceCard
                  number={String(index + 1).padStart(2, "0")}
                  {...service}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-spacer section-divider bg-white" aria-hidden="true" />

      <ProjectLeadSection />

      <div className="section-spacer section-divider bg-white" aria-hidden="true" />

      {/* Real Estate */}
      <section
        id="poslovanje-nekretninama"
        className="bg-white px-6 py-32 md:px-10 md:py-40 lg:py-44"
      >
        <div className="mx-auto max-w-[1200px]">
          <MagazineSectionHeader
            sectionNumber="03"
            title="Poslovanje nekretninama"
            description="Stručno, sigurno i transparentno vođenje kroz cijeli proces kupoprodaje nekretnina."
          />
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-stretch lg:grid-cols-3 lg:gap-7">
            {realEstateServices.map((service, index) => (
              <FadeIn key={service.title} delay={index * 100} className="h-full">
                <ServiceCard
                  number={String(index + 1).padStart(2, "0")}
                  {...service}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <div className="section-spacer section-divider bg-background" aria-hidden="true" />

      <BusinessAddressSection />

      <div className="section-spacer section-divider bg-background" aria-hidden="true" />

      {/* Process */}
      <section className="bg-background px-6 py-32 md:px-10 md:py-40 lg:py-44">
        <div className="mx-auto max-w-[1200px]">
          <FadeIn className="mb-20 pt-2 md:mb-24">
            <SectionNumber number="05" />
            <div className="section-rule mb-6" aria-hidden="true" />
            <h2 className="font-heading text-[2.25rem] leading-[1.12] text-charcoal md:text-5xl">
              Kako izgleda suradnja
            </h2>
          </FadeIn>

          <div className="hidden lg:block">
            <FadeIn>
              <div className="relative flex items-start justify-between">
                {processSteps.map((step, index) => (
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
                    {index < processSteps.length - 1 && (
                      <div
                        className="mt-6 flex shrink-0 items-center px-1"
                        aria-hidden="true"
                      >
                        <div className="h-px w-10 bg-border-light/80" />
                        <span className="px-1 text-[10px] text-border-light/80">→</span>
                        <div className="h-px w-10 bg-border-light/80" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>

          <div className="lg:hidden">
            <ol className="flex flex-col">
              {processSteps.map((step, index) => (
                <FadeIn key={step.title} delay={index * 80}>
                  <li className="relative flex gap-5 pb-11 last:pb-0">
                    {index < processSteps.length - 1 && (
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

      {/* Contact */}
      <section id="kontakt" className="bg-white">
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
                Razgovarajmo o Vašem projektu.
              </h2>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="mb-14 space-y-5 text-[15px] leading-[1.9] text-muted md:mb-16 md:text-base">
                <p>Svaki kvalitetan projekt započinje dobrim razgovorom.</p>
                <p>
                  Bilo da planirate izgradnju obiteljske kuće, vile, stambene građevine ili trebate
                  stručnu pomoć u području nekretnina, stojimo Vam na raspolaganju.
                </p>
                <p>
                  Rado ćemo saslušati Vaše ideje, analizirati mogućnosti i pomoći pronaći najbolje
                  rješenje.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={100}>
              <div className="mb-14 space-y-4 border-t border-border-light/80 pt-10 md:mb-16">
                <p className="font-heading text-xl text-charcoal">Hashtag Blue d.o.o.</p>
                <p className="flex items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0 text-accent/80" strokeWidth={1.25} aria-hidden="true" />
                  <a
                    href="mailto:blue@hashtag-blue.com"
                    className="text-[15px] text-muted transition-colors duration-300 hover:text-accent"
                  >
                    blue@hashtag-blue.com
                  </a>
                </p>
                <p className="flex items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0 text-accent/80" strokeWidth={1.25} aria-hidden="true" />
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
                  {workingHours.map((row) => (
                    <tr key={row.day} className="border-b border-border-light/70 last:border-0">
                      <td className="py-3 pr-8 font-medium text-charcoal">{row.day}</td>
                      <td className="py-3">{row.hours}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <a href="mailto:blue@hashtag-blue.com" className="btn-cta-outline">
                Pošaljite upit
              </a>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Footer */}
      <FadeIn>
        <SiteFooter />
      </FadeIn>
    </div>
  );
}
