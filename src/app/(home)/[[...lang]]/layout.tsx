import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDictionary, getLocaleFromSegments } from "@/content/translations";
import { logos } from "@/lib/brand";
import { cormorant, inter } from "@/lib/fonts";
import { rootMetadata } from "@/lib/seo";
import "../../globals.css";

export const metadata: Metadata = {
  ...rootMetadata,
  icons: {
    icon: logos.color,
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  return [{ lang: [] }, { lang: ["en"] }, { lang: ["de"] }];
}

type LocalizedRootLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang?: string[] }>;
}>;

export default async function LocalizedRootLayout({
  children,
  params,
}: LocalizedRootLayoutProps) {
  const locale = getLocaleFromSegments((await params).lang);

  if (!locale) {
    notFound();
  }

  const dictionary = getDictionary(locale);

  return (
    <html
      lang={dictionary.htmlLang}
      className={`${cormorant.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
