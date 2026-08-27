import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RessourcesGrid from "@/components/ressources/RessourcesGrid";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumbSchema, SITE_URL } from "@/lib/schema";
import type { Locale } from "@/lib/i18n";
import { hasLocale, localeHref } from "@/lib/i18n";
import { ressourcesTriees } from "@/lib/ressources";

const T: Record<
  Locale,
  {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    ogTitle: string;
    ogDescription: string;
    kicker: string;
    h1Start: string;
    h1Em: string;
    intro: string;
    breadcrumbHome: string;
    breadcrumbLabel: string;
    ctaTitleStart: string;
    ctaTitleEm: string;
    ctaText: string;
    ctaButton: string;
  }
> = {
  fr: {
    metaTitle: "Ressources · Vidéos et articles",
    metaDescription:
      "Vidéos courtes et articles pour tirer le maximum de votre site internet : conversion, référencement, autonomie. Nouvelles ressources régulièrement.",
    keywords: [
      "ressources site internet",
      "conseils site web pme",
      "vidéos référencement local",
      "blog agence web",
    ],
    ogTitle: "Ressources ACTC · Vidéos et articles",
    ogDescription:
      "Vidéos courtes et articles pour tirer le maximum de votre site internet. Conversion, référencement, autonomie.",
    kicker: "Ressources",
    h1Start: "Tout ce qu'on sait,",
    h1Em: "en accès libre.",
    intro:
      "Des vidéos de 5 à 10 minutes et des articles courts, à regarder directement ici. On y explique concrètement ce qui fait qu'un site attire des clients, et ce que vous pouvez piloter vous-même.",
    breadcrumbHome: "Accueil",
    breadcrumbLabel: "Ressources",
    ctaTitleStart: "Une question sur",
    ctaTitleEm: "votre projet ?",
    ctaText:
      "On vous offre la maquette de votre page d'accueil, sur-mesure, avant tout engagement.",
    ctaButton: "Demander un devis gratuit",
  },
  en: {
    metaTitle: "Resources · Videos and articles",
    metaDescription:
      "Short videos and articles to get the most out of your website: conversion, SEO, independence. New resources added regularly.",
    keywords: [
      "website resources",
      "small business website advice",
      "local seo videos",
      "web agency blog",
    ],
    ogTitle: "ACTC Resources · Videos and articles",
    ogDescription:
      "Short videos and articles to get the most out of your website. Conversion, SEO, independence.",
    kicker: "Resources",
    h1Start: "Everything we know,",
    h1Em: "freely available.",
    intro:
      "Five to ten minute videos and short articles, watchable right here. We explain in concrete terms what makes a website bring in clients, and what you can run yourself.",
    breadcrumbHome: "Home",
    breadcrumbLabel: "Resources",
    ctaTitleStart: "A question about",
    ctaTitleEm: "your project?",
    ctaText:
      "We design your homepage mockup for free, fully custom, before any commitment.",
    ctaButton: "Get a free quote",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = hasLocale(lang) ? lang : "fr";
  const t = T[locale];
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    keywords: t.keywords,
    alternates: { canonical: localeHref(locale, "/ressources") },
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
    },
  };
}

export default async function RessourcesPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = T[lang];
  const ressources = ressourcesTriees();

  return (
    <main>
      <JsonLd
        schema={[
          breadcrumbSchema([
            { name: t.breadcrumbHome, path: localeHref(lang, "/") },
            { name: t.breadcrumbLabel, path: localeHref(lang, "/ressources") },
          ]),
          // Liste des ressources : aide les moteurs et les IA a comprendre
          // qu'il s'agit d'une collection de contenus datee.
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: t.metaTitle,
            description: t.metaDescription,
            url: `${SITE_URL}${localeHref(lang, "/ressources")}`,
            inLanguage: lang === "fr" ? "fr-FR" : "en-US",
            hasPart: ressources.map((r) => ({
              "@type": r.type === "video" ? "VideoObject" : "Article",
              headline: r.titre[lang],
              name: r.titre[lang],
              description: r.resume[lang],
              datePublished: r.date,
              url: `${SITE_URL}${localeHref(lang, `/ressources/${r.slug}`)}`,
            })),
          },
        ]}
      />

      {/* Titre de page */}
      <section className="bg-alabaster pt-32 pb-10 lg:pt-44 lg:pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-[11px] uppercase tracking-[0.18em] text-terra mb-6 font-medium">
            {t.kicker}
          </div>
          <h1 className="font-display font-extrabold tracking-[-0.035em] text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] text-midnight max-w-3xl">
            {t.h1Start}{" "}
            <span className="font-emphasis font-normal text-terra">{t.h1Em}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[clamp(1rem,1.2vw,1.2rem)] leading-relaxed text-steel">
            {t.intro}
          </p>
        </div>
      </section>

      {/* Grille + CTA */}
      <section className="bg-alabaster pb-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <RessourcesGrid lang={lang} />

          <div className="mt-16 rounded-3xl border border-grid-line bg-white p-10 lg:p-14 text-center">
            <h2 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(1.75rem,3.5vw,2.75rem)] text-midnight">
              {t.ctaTitleStart}{" "}
              <span className="font-emphasis font-normal text-terra">{t.ctaTitleEm}</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-steel">{t.ctaText}</p>
            <a
              href={localeHref(lang, "/contact")}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-terra hover:bg-terra-hover text-white px-7 py-3.5 text-[15px] font-semibold transition-colors glow-terra"
            >
              {t.ctaButton}
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
