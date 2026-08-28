import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { OFFERS, depositLabel, PAYMENT_NOTE } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { hasLocale, localeHref } from "@/lib/i18n";

interface Step {
  n: string;
  t: string;
  d: string;
}

interface Dict {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  backLink: string;
  kicker: string;
  h1Before: string;
  h1Em: string;
  h1After: string;
  intro: string;
  offerHeadingPrefix: string;
  offerHeadingSuffix: string;
  depositBefore: string;
  depositAfter: string;
  ctaStart: string;
  ctaMockup: string;
  ctaQuote: string;
  priorityNote: string;
  stepsTitle: string;
  steps: Step[];
}

const T: Record<Locale, Dict> = {
  fr: {
    metaTitle: "Détail des offres · Standard, Conversion, Premium",
    metaDescription:
      "Comparez nos trois offres de création de site (Standard, Conversion, Premium) : ce qui est inclus et pour qui. Site en propriété, hébergement gratuit, à partir de 1 400 €.",
    ogTitle: "Nos offres · Standard, Conversion, Premium",
    ogDescription:
      "Comparez nos trois offres de création de site : ce qui est inclus et pour qui. Site en propriété, hébergement gratuit, à partir de 1 400 €.",
    backLink: "Retour aux offres",
    kicker: "Détail des offres",
    h1Before: "Trois offres, une seule logique : ",
    h1Em: "vous comparez",
    h1After: ".",
    intro:
      "Plus l'offre monte, plus on va loin sur le design, le contenu et les fonctionnalités. Voici précisément ce qui change d'une offre à l'autre, et pour qui chacune est faite.",
    offerHeadingPrefix: "Offre ",
    offerHeadingSuffix: "",
    depositBefore: "soit ",
    depositAfter: " d'acompte",
    ctaStart: "Démarrer mon projet en priorité",
    ctaMockup: "Obtenir d'abord ma maquette gratuite",
    ctaQuote: "Demander un devis",
    priorityNote:
      "Sans étape maquette, on commence tout de suite : votre projet est traité en priorité.",
    stepsTitle: "Comment ça se passe, une fois décidé",
    steps: [
      {
        n: "01",
        t: "On valide votre projet ensemble",
        d: "Appel de cadrage de 20 à 30 minutes pour valider le contenu, les pages et le calendrier.",
      },
      {
        n: "02",
        t: "Acompte & démarrage",
        d: "Vous réglez l'acompte de 60 % et votre projet entre en production, en priorité dans le planning.",
      },
      {
        n: "03",
        t: "Design & développement",
        d: "On conçoit et on code votre site sur-mesure, avec une validation de votre part à chaque étape clé.",
      },
      {
        n: "04",
        t: "Mise en ligne & solde",
        d: "On met votre site en ligne, on vous remet le code, et vous réglez le solde de 40 %. Livraison en 14 à 21 jours.",
      },
    ],
  },
  en: {
    metaTitle: "Package Details · Standard, Conversion, Premium",
    metaDescription:
      "Compare our three website packages (Standard, Conversion, Premium): what's included and who each one is for. You own your site, free hosting, from €1,400.",
    ogTitle: "Our packages · Standard, Conversion, Premium",
    ogDescription:
      "Compare our three website packages: what's included and who each one is for. You own your site, free hosting, from €1,400.",
    backLink: "Back to packages",
    kicker: "Package details",
    h1Before: "Three packages, one simple logic: ",
    h1Em: "you compare",
    h1After: ".",
    intro:
      "The higher the package, the further we go on design, content and features. Here is exactly what changes from one package to the next, and who each one is made for.",
    offerHeadingPrefix: "",
    offerHeadingSuffix: " package",
    depositBefore: "that is a ",
    depositAfter: " deposit",
    ctaStart: "Start my project with priority",
    ctaMockup: "Get my free mockup first",
    ctaQuote: "Request a quote",
    priorityNote:
      "By skipping the mockup step, we start right away: your project is treated as a priority.",
    stepsTitle: "How it works, once you decide",
    steps: [
      {
        n: "01",
        t: "We validate your project together",
        d: "A 20 to 30 minute scoping call to confirm the content, the pages and the timeline.",
      },
      {
        n: "02",
        t: "Deposit & kickoff",
        d: "You pay the 60% deposit and your project enters production, prioritized in our schedule.",
      },
      {
        n: "03",
        t: "Design & development",
        d: "We design and code your custom website, with your approval at every key milestone.",
      },
      {
        n: "04",
        t: "Launch & final payment",
        d: "We put your site online, hand over the code, and you pay the remaining 40%. Delivered in 14 to 21 days.",
      },
    ],
  },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = hasLocale(lang) ? lang : "fr";
  const t = T[locale];
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical: `/${locale}/offres`,
      languages: { fr: "/fr/offres", en: "/en/offres" },
    },
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
    },
  };
}

export default async function OffresPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = T[lang];
  const offers = OFFERS[lang];

  return (
    <main>
      {/* En-tête */}
      <header className="relative isolate overflow-hidden bg-alabaster pt-32 pb-12 lg:pt-44 lg:pb-16">
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[60vh]"
          style={{
            background:
              "radial-gradient(60% 60% at 50% 0%, rgba(194,65,12,0.12) 0%, transparent 70%)",
          }}
          aria-hidden
        />
        <div className="max-w-5xl mx-auto px-6 text-center">
          <a href={localeHref(lang, "/tarifs")} className="inline-flex items-center gap-2 text-[13px] text-steel hover:text-terra transition-colors mb-8">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            {t.backLink}
          </a>
          <div className="text-[11px] uppercase tracking-[0.18em] text-terra mb-5 font-medium">{t.kicker}</div>
          <h1 className="font-display font-extrabold tracking-[-0.035em] text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] text-midnight">
            {t.h1Before}<span className="font-emphasis font-normal text-terra">{t.h1Em}</span>{t.h1After}
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-steel">
            {t.intro}
          </p>
        </div>
      </header>

      {/* Les trois offres détaillées */}
      <section className="bg-alabaster pb-12">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          {offers.map((offer) => {
            const deposit = depositLabel(offer);
            const canPay = !offer.quoteOnly;
            return (
              <article
                key={offer.slug}
                id={offer.slug}
                className={`scroll-mt-28 rounded-3xl border bg-white p-7 lg:p-10 shadow-card-light ${
                  offer.highlighted ? "border-terra/40 ring-1 ring-terra/15" : "border-grid-line"
                }`}
              >
                <div className="grid lg:grid-cols-[1fr_auto] gap-6 lg:gap-10 items-start">
                  {/* En-tête de l'offre */}
                  <div>
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <h2 className="font-display text-2xl lg:text-3xl font-extrabold text-midnight tracking-[-0.02em]">
                        {t.offerHeadingPrefix}{offer.name}{t.offerHeadingSuffix}
                      </h2>
                      {offer.badge && (
                        <span className="rounded-full bg-terra px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
                          {offer.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-steel text-[15px]">{offer.forWho}</p>
                  </div>

                  {/* Prix */}
                  <div className="lg:text-right">
                    <div className="font-display text-3xl lg:text-4xl font-extrabold text-midnight tracking-[-0.03em]">
                      {offer.priceNote ? `${offer.priceNote} ` : ""}
                      {offer.price}
                    </div>
                    {canPay && deposit && (
                      <div className="text-[13px] text-steel mt-1">
                        {t.depositBefore}<span className="font-semibold text-midnight">{deposit}</span>{t.depositAfter}
                      </div>
                    )}
                  </div>
                </div>

                {/* Prestations */}
                <ul className="mt-7 grid sm:grid-cols-2 gap-x-8 gap-y-3 border-t border-grid-line pt-7">
                  {offer.features.map((f) => (
                    <li
                      key={f.text}
                      className={`flex items-start gap-3 text-[14.5px] ${
                        f.included ? "text-midnight/85" : "text-steel/60 line-through"
                      }`}
                    >
                      {f.included ? (
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-terra" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20 6 9 17l-5-5" /></svg>
                      ) : (
                        <svg className="mt-0.5 h-4 w-4 shrink-0 text-steel/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M18 6 6 18M6 6l12 12" /></svg>
                      )}
                      {f.text}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-7 flex flex-col sm:flex-row gap-3">
                  {canPay ? (
                    <>
                      <a
                        href={localeHref(lang, "/contact")}
                        className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full bg-terra hover:bg-terra-hover px-6 py-3.5 text-white font-semibold text-[14.5px] transition-colors glow-terra"
                      >
                        {t.ctaStart}
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                      </a>
                      <a
                        href={localeHref(lang, "/contact")}
                        className="inline-flex flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full border border-midnight/15 hover:border-terra hover:text-terra px-6 py-3.5 text-midnight font-semibold text-[14.5px] transition-colors"
                      >
                        {t.ctaMockup}
                      </a>
                    </>
                  ) : (
                    <a
                      href={localeHref(lang, "/contact")}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-terra hover:bg-terra-hover px-6 py-3.5 text-white font-semibold text-[14.5px] transition-colors glow-terra"
                    >
                      {t.ctaQuote}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </a>
                  )}
                </div>
                {canPay && (
                  <p className="mt-3 text-[12.5px] text-steel/80">
                    {t.priorityNote}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* Déroulé après réservation */}
      <section className="bg-white py-20 lg:py-28 border-t border-grid-line">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-display text-2xl lg:text-3xl font-bold text-midnight mb-10 text-center">
            {t.stepsTitle}
          </h2>
          <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.steps.map((s) => (
              <li key={s.n}>
                <div className="font-display text-3xl font-extrabold text-terra/30 leading-none mb-3">{s.n}</div>
                <div className="font-display font-semibold text-midnight">{s.t}</div>
                <p className="text-[14px] text-steel leading-relaxed mt-1.5">{s.d}</p>
              </li>
            ))}
          </ol>
          <p className="mt-12 text-center text-[12px] text-steel/70 max-w-2xl mx-auto">{PAYMENT_NOTE[lang]}</p>
        </div>
      </section>
    </main>
  );
}
