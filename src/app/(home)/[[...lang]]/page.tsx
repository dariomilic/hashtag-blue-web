import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalizedHomePage from "@/components/LocalizedHomePage";
import { getDictionary, getLocaleFromSegments } from "@/content/translations";
import { createHomepageMetadata } from "@/lib/seo";

type LocalizedPageProps = {
  params: Promise<{ lang?: string[] }>;
};

async function resolveDictionary(params: LocalizedPageProps["params"]) {
  const locale = getLocaleFromSegments((await params).lang);

  if (!locale) {
    notFound();
  }

  return getDictionary(locale);
}

export async function generateMetadata({ params }: LocalizedPageProps): Promise<Metadata> {
  return createHomepageMetadata(await resolveDictionary(params));
}

export default async function LocalizedPage({ params }: LocalizedPageProps) {
  const dictionary = await resolveDictionary(params);

  return <LocalizedHomePage dictionary={dictionary} />;
}
