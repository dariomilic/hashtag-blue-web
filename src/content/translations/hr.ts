import type { TranslationDictionary } from "@/content/translations/types";

export const hr = {
  locale: "hr",
  htmlLang: "hr",
  homePath: "/",
  openGraphLocale: "hr_HR",
  seo: {
    title: "Hashtag Blue | Arhitektonski ured i nekretnine Zagreb",
    description:
      "Hashtag Blue je arhitektonski ured iz Zagreba specijaliziran za projektiranje, urbanizam, razvoj nekretnina i investicijsko savjetovanje.",
    imageAlt: "Hashtag Blue — arhitektonski ured i nekretnine Zagreb",
  },
  header: {
    navAriaLabel: "Glavna navigacija",
    logoAriaLabel: "Povratak na početak",
    openMenuLabel: "Otvori izbornik",
    closeMenuLabel: "Zatvori izbornik",
    mobileDialogLabel: "Glavni izbornik",
    mobileNavAriaLabel: "Mobilna navigacija",
    languageAriaLabel: "Odaberite jezik",
    nav: {
      architecture: "Arhitektura",
      realEstate: "Nekretnine",
      businessAddress: "Poslovna adresa",
      contact: "Kontakt",
    },
    mobileFooterDisciplines: "Arhitektura | Urbanizam | Nekretnine",
  },
  hero: {
    disciplines: ["Arhitektura.", "Urbanizam.", "Nekretnine."],
    description:
      "Arhitektonski ured iz Zagreba specijaliziran za projektiranje privatnih kuća i zgrada te poslovanje nekretninama.",
    servicesCta: "Naše usluge",
    contactCta: "Kontakt",
    scrollLabel: "Scrollaj prema dolje",
  },
  statement: {
    title: ["Projektiramo prostore", "koji ostaju vrijedni desetljećima."],
    description: [
      "Arhitektura nije samo oblikovanje građevine.",
      "Ona je stvaranje prostora koji odgovara načinu života, poštuje lokaciju i zadržava svoju vrijednost kroz vrijeme.",
    ],
  },
  stats: [
    { value: "10+", label: "godina iskustva" },
    { value: "100+", label: "izrađenih projekata" },
    { value: "100%", label: "individualan pristup" },
  ],
  architecture: {
    title: "Arhitektonske usluge",
    description:
      "Od ideje do realizacije. Projektiramo prostore koji su funkcionalni, estetski i dugotrajni.",
    services: [
      {
        title: "Iskustvo i stručnost",
        description:
          "S više od 10 godina radnog iskustva u struci, imamo znanje za rješavanje i najsloženijih projekata. Radili smo na širem spektru projekata, od stambenih kuća do stambenih i stambeno-poslovnih zgrada.",
      },
      {
        title: "Inovativni dizajn",
        description:
          "Vjerujemo da izvrstan dizajn proizlazi iz funkcionalnosti i volumena. Timski surađujemo kako bismo stvorili inovativna rješenja koja zadovoljavaju potrebe naših klijenata.",
      },
      {
        title: "Pristup klijentu",
        description:
          "Smatramo da je svaki klijent jedinstven te izdvajamo vrijeme kako bismo razumjeli njegove potrebe i ciljeve. Naš pristup usmjeren na klijenta osigurava rezultate koji premašuju njegova očekivanja.",
      },
    ],
  },
  projectLead: {
    label: "Voditelj projekata",
    name: "Dario Milić",
    degree: "mag.ing.arh. i urb.",
    role: "Osnivač i direktor | Hashtag Blue",
    description: [
      "Specijaliziran za projektiranje stambenih i višestambenih građevina, urbanističke analize te razvoj nekretninskih projekata.",
      "Cilj nam je svakom klijentu pružiti stručno, funkcionalno i dugoročno održivo rješenje prilagođeno njegovim potrebama.",
    ],
    expertiseAriaLabel: "Područja rada",
    expertise: ["Arhitektura", "Urbanizam", "Razvoj nekretnina"],
    cta: "Dogovorite konzultacije",
    imageAlt: "Dario Milić – voditelj projekata Hashtag Blue",
  },
  realEstate: {
    title: "Poslovanje nekretninama",
    description:
      "Stručno, sigurno i transparentno vođenje kroz cijeli proces kupoprodaje nekretnina.",
    services: [
      {
        title: "Rješavanje imovinsko-pravnih odnosa",
        description:
          "Imate neriješene suvlasničke odnose, nasljedstvo, posjedovni spor ili dvojbenu dokumentaciju? Naš tim pravnih stručnjaka sustavno analizira svaki slučaj i vodi vas do jasnog i pravno čistog rješenja.",
      },
      {
        title: "Zemljišnoknjižni i vlasnički problemi",
        description:
          "Od upisa vlasništva, promjene podataka, etažiranja do rješavanja starijih zemljišnoknjižnih zastoja — preuzimamo cijeli proces. Brzo, točno i u skladu s propisima.",
      },
      {
        title: "Sigurnost u svakom koraku",
        description:
          "Profesionalno surađujemo u kupoprodaji nekretnina, provjeri, usklađenju i izradi ugovora. Fokus je na sigurnoj transakciji, transparentnoj komunikaciji i najboljem mogućem rezultatu za klijenta.",
      },
    ],
  },
  businessAddress: {
    title: "Poslovna adresa za vaše poslovanje",
    subtitle: "Profesionalna poslovna adresa za trgovačka društva, obrte i poduzetnike.",
    description:
      "Osigurajte pouzdano i profesionalno sjedište za svoje trgovačko društvo ili obrt. Nudimo uslugu registracije poslovne adrese uz sigurno zaprimanje pošte i administrativnu podršku.",
    services: [
      {
        title: "Registracija poslovne adrese",
        description: "Koristite našu adresu kao službeno sjedište vašeg društva ili obrta.",
      },
      {
        title: "Zaprimanje pošte",
        description: "Sigurno zaprimanje i čuvanje pristigle pošte.",
      },
      {
        title: "Obavijest o pošti",
        description: "Pravovremena obavijest o svakoj pristigloj pošiljci.",
      },
      {
        title: "Skeniranje i prosljeđivanje",
        description: "Po dogovoru omogućujemo skeniranje i prosljeđivanje pošte.",
      },
    ],
    contactLabel: "Kontakt",
    name: "Sara Milić",
    role: "Poslovna podrška",
    imageAlt: "Sara Milić – kontakt za uslugu poslovne adrese",
    businessHoursLabel: "Radno vrijeme",
    businessHours: "Pon – Pet | 09:00 – 17:00",
    cta: "Zatražite informacije",
    mailSubject: "Upit za uslugu poslovne adrese",
  },
  process: {
    title: "Kako izgleda suradnja",
    steps: [
      { title: "Uvodni razgovor", description: "Upoznavanje, ideje i osnovne informacije." },
      { title: "Analiza potreba", description: "Analiziramo lokaciju, želje i mogućnosti." },
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
    ],
  },
  contact: {
    title: "Razgovarajmo o Vašem projektu.",
    paragraphs: [
      "Svaki kvalitetan projekt započinje dobrim razgovorom.",
      "Bilo da planirate izgradnju obiteljske kuće, vile, stambene građevine ili trebate stručnu pomoć u području nekretnina, stojimo Vam na raspolaganju.",
      "Rado ćemo saslušati Vaše ideje, analizirati mogućnosti i pomoći pronaći najbolje rješenje.",
    ],
    workingHours: [
      { day: "Pon", hours: "09:00–17:00" },
      { day: "Uto", hours: "09:00–17:00" },
      { day: "Sri", hours: "09:00–17:00" },
      { day: "Čet", hours: "09:00–17:00" },
      { day: "Pet", hours: "09:00–17:00" },
      { day: "Sub", hours: "Zatvoreno" },
      { day: "Ned", hours: "Zatvoreno" },
    ],
    cta: "Pošaljite upit",
    mailSubject: "Upit za arhitektonske konzultacije",
  },
  footer: {
    disciplines: ["Arhitektura", "Urbanizam", "Nekretnine"],
    tagline: "Projektiranje prostora za budućnost.",
    legalAriaLabel: "Pravne stranice",
    legal: {
      notice: "Pravna napomena",
      privacy: "Politika privatnosti",
      cookies: "Politika kolačića",
    },
    rights: "All Rights Reserved.",
  },
} satisfies TranslationDictionary;
