import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import RealisationsGrid from "@/components/realisations/RealisationsGrid";
import LiveSiteCard from "@/components/realisations/LiveSiteCard";
import { SHOWCASE, isLive } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { hasLocale, localeHref } from "@/lib/i18n";
import { RevealWords } from "@/components/ui/motion-kit";

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
    othersTitle: string;
    othersText: string;
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
    h1Start: "Nos sites en ligne,",
    h1Em: "à visiter.",
    intro:
      "Ces sites sont en ligne, sous le nom de domaine de nos clients. Cliquez sur l'un d'eux pour le visiter, comme le ferait un de leurs clients.",
    othersTitle: "D'autres projets livrés",
    othersText: "Sites en cours de mise en ligne, maquettes validées et projets plus anciens.",
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
    h1Start: "Our live websites,",
    h1Em: "go take a look.",
    intro:
      "These websites are live, on our clients' own domain names. Click any of them to visit it, just like their customers do.",
    othersTitle: "More projects we delivered",
    othersText: "Websites about to go live, approved mockups and earlier projects.",
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
  const live = SHOWCASE[lang].filter(isLive);
  return (
    <main>
      {/* En-tête centré */}
      <section className="bg-alabaster pt-32 pb-10 lg:pt-44 lg:pb-14">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-[11px] uppercase tracking-[0.18em] text-terra mb-6 font-medium">{t.kicker}</div>
          <RevealWords
            className="mx-auto font-display font-extrabold tracking-[-0.035em] text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] text-midnight max-w-3xl"
            emClassName="font-emphasis font-normal text-terra"
            segments={[{ text: t.h1Start }, { text: t.h1Em, em: true }]}
          />
          <p className="mt-6 mx-auto max-w-2xl text-[clamp(1rem,1.2vw,1.2rem)] leading-relaxed text-steel">
            {t.intro}
          </p>
        </div>
      </section>

      {/* Sites en ligne : chaque carte ouvre le vrai site */}
      <section className="bg-alabaster pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 grid gap-6 md:grid-cols-2">
          {live.map((s) => (
            <LiveSiteCard key={s.url} s={s} lang={lang} />
          ))}
        </div>
      </section>

      {/* Autres projets, avec fiche détaillée */}
      <section className="bg-white border-t border-grid-line py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10 text-center">
            <h2 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(1.75rem,3.5vw,2.5rem)] text-midnight">{t.othersTitle}</h2>
            <p className="mt-3 mx-auto max-w-xl text-steel">{t.othersText}</p>
          </div>
          <RealisationsGrid lang={lang} />

          {/* CTA bas de page */}
          <div className="mt-16 rounded-3xl border border-grid-line bg-alabaster p-10 lg:p-14 text-center">
            <h2 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(1.75rem,3.5vw,2.75rem)] text-midnight">
              {t.ctaTitleStart} <span className="font-emphasis font-normal text-terra">{t.ctaTitleEm}</span>
            </h2>
            <p className="mt-4 max-w-xl mx-auto text-steel">
              {t.ctaText}
            </p>
            <Link
              href={localeHref(lang, "/contact")}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-terra hover:bg-terra-hover text-white px-7 py-3.5 text-[15px] font-semibold transition-colors glow-terra"
            >
              {t.ctaButton}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
