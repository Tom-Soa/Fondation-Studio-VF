import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RealisationsGrid from "@/components/realisations/RealisationsGrid";
import type { Locale } from "@/lib/i18n";
import { hasLocale, localeHref } from "@/lib/i18n";

const T: Record<
  Locale,
  {
    metaTitle: string;
    metaDescription: string;
    ogTitle: string;
    ogDescription: string;
    kicker: string;
    h1Start: string;
    h1Em: string;
    intro: string;
    ctaTitleStart: string;
    ctaTitleEm: string;
    ctaText: string;
    ctaButton: string;
  }
> = {
  fr: {
    metaTitle: "Réalisations",
    metaDescription:
      "Ce qu'on a fait pour nos clients : sites vitrines et e-commerce dans tous les secteurs. Hébergement gratuit, site en propriété totale.",
    ogTitle: "Réalisations · ACTC",
    ogDescription:
      "Sites vitrines et e-commerce livrés dans tous les secteurs. Hébergement gratuit, site en propriété totale.",
    kicker: "Réalisations",
    h1Start: "Ce qu'on a fait",
    h1Em: "pour nos clients.",
    intro:
      "Chaque projet est conçu sur-mesure pour son secteur. Voici quelques sites que nous avons réalisés pour des entreprises qui voulaient se distinguer.",
    ctaTitleStart: "Votre site sera le",
    ctaTitleEm: "prochain.",
    ctaText: "On vous offre la maquette de votre page d'accueil, sur-mesure, avant tout engagement.",
    ctaButton: "Demander un devis gratuit",
  },
  en: {
    metaTitle: "Portfolio",
    metaDescription:
      "What we have built for our clients: showcase and e-commerce websites across every industry. Free hosting, a site you fully own.",
    ogTitle: "Portfolio · ACTC",
    ogDescription:
      "Showcase and e-commerce websites delivered across every industry. Free hosting, a site you fully own.",
    kicker: "Portfolio",
    h1Start: "What we have built",
    h1Em: "for our clients.",
    intro:
      "Every project is designed from scratch for its industry. Here are some of the websites we have built for businesses that wanted to stand out.",
    ctaTitleStart: "Your website could be",
    ctaTitleEm: "next.",
    ctaText: "We design your homepage mockup for free, fully custom, before any commitment.",
    ctaButton: "Get a free quote",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = hasLocale(lang) ? lang : "fr";
  const t = T[locale];
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: { canonical: localeHref(locale, "/realisations") },
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
    },
  };
}

export default async function RealisationsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = T[lang];
  return (
    <main>
      {/* Titre de page clair (inspiré de l'ancien site) */}
      <section className="bg-alabaster pt-32 pb-10 lg:pt-44 lg:pb-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-[11px] uppercase tracking-[0.18em] text-terra mb-6 font-medium">{t.kicker}</div>
          <h1 className="font-display font-extrabold tracking-[-0.035em] text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] text-midnight max-w-3xl">
            {t.h1Start}{" "}
            <span className="font-emphasis font-normal text-terra">{t.h1Em}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[clamp(1rem,1.2vw,1.2rem)] leading-relaxed text-steel">
            {t.intro}
          </p>
        </div>
      </section>

      {/* Grille de réalisations avec vrais aperçus + modale "En savoir plus" */}
      <section className="bg-alabaster pb-24 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6">
          <RealisationsGrid lang={lang} />

          {/* CTA bas de page */}
          <div className="mt-16 rounded-3xl border border-grid-line bg-white p-10 lg:p-14 text-center">
            <h2 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(1.75rem,3.5vw,2.75rem)] text-midnight">
              {t.ctaTitleStart} <span className="font-emphasis font-normal text-terra">{t.ctaTitleEm}</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-steel">
              {t.ctaText}
            </p>
            <a
              href={localeHref(lang, "/contact")}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-terra hover:bg-terra-hover text-white px-7 py-3.5 text-[15px] font-semibold transition-colors glow-terra"
            >
              {t.ctaButton}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
