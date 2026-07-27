import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FAQClient } from "@/components/faq/FAQClient";
import { JsonLd } from "@/components/JsonLd";
import { faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import type { Locale } from "@/lib/i18n";
import { hasLocale, localeHref } from "@/lib/i18n";

const T: Record<
  Locale,
  {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
    breadcrumbHome: string;
  }
> = {
  fr: {
    metaTitle: "FAQ · Questions fréquentes",
    metaDescription:
      "Réponses à toutes vos questions sur ACTC : offres, délais, process, SEO, hébergement, e-commerce. Plus de 50 questions répondues par les fondateurs.",
    keywords: ["faq agence web", "questions site internet", "prix site web pme", "délai création site web"],
    ogTitle: "FAQ ACTC · 50+ questions répondues",
    ogDescription: "Offres, délais, process, SEO, hébergement, e-commerce. Toutes les réponses sur ACTC.",
    breadcrumbHome: "Accueil",
  },
  en: {
    metaTitle: "FAQ · Frequently asked questions",
    metaDescription:
      "Answers to every question about ACTC: plans, timelines, process, SEO, hosting, e-commerce. 50+ questions answered by the founders.",
    keywords: ["web agency faq", "website questions", "small business website price", "website delivery time"],
    ogTitle: "ACTC FAQ · 50+ questions answered",
    ogDescription: "Plans, timelines, process, SEO, hosting, e-commerce. All the answers about ACTC.",
    breadcrumbHome: "Home",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = hasLocale(lang) ? lang : "fr";
  const t = T[locale];
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    keywords: t.keywords,
    alternates: { canonical: localeHref(locale, "/faq") },
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
    },
  };
}

export default async function FAQPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = T[lang];
  return (
    <>
      <JsonLd
        schema={[
          faqPageSchema(),
          breadcrumbSchema([
            { name: t.breadcrumbHome, path: localeHref(lang, "/") },
            { name: "FAQ", path: localeHref(lang, "/faq") },
          ]),
        ]}
      />
      <FAQClient lang={lang} />
    </>
  );
}
