import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Icon } from "@iconify/react";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import type { Locale } from "@/lib/i18n";
import { hasLocale, localeHref } from "@/lib/i18n";

interface Etape {
  num: string;
  title: string;
  body: string;
  color: string;
  textColor: string;
}

interface Dict {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  schemaName: string;
  schemaServiceType: string;
  schemaDescription: string;
  breadcrumbHome: string;
  breadcrumbPage: string;
  heroKicker: string;
  heroTitle1: string;
  heroTitleEm1: string;
  heroTitle2: string;
  heroTitleEm2: string;
  heroSub: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  cardTitle: string;
  cardPrice: string;
  cardItems: { icon: string; label: string }[];
  pourQuiLabel: string;
  pourQui: string[];
  benefitsTitle1: string;
  benefitsTitleEm: string;
  benefits: { icon: string; label: string }[];
  processKicker: string;
  processTitle: string;
  etapes: Etape[];
  ctaBadge: string;
  ctaTitle1: string;
  ctaTitleEm: string;
  ctaSub: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

const T: Record<Locale, Dict> = {
  fr: {
    metaTitle: "Création de site vitrine pour PME et artisans",
    metaDescription:
      "Site vitrine sur-mesure pour PME, artisans et indépendants : design unique, référencement intégré, hébergement gratuit. Page d'accueil offerte avant tout engagement.",
    ogTitle: "Création de site vitrine pour PME et artisans",
    ogDescription:
      "Site vitrine sur-mesure : design unique, référencement intégré, hébergement gratuit. Page d'accueil offerte avant tout engagement.",
    schemaName: "Création de site vitrine sur-mesure",
    schemaServiceType: "Création de site vitrine",
    schemaDescription:
      "Site vitrine sur-mesure pour PME, artisans et indépendants : design unique, référencement intégré, hébergement gratuit. Page d'accueil offerte avant tout engagement.",
    breadcrumbHome: "Accueil",
    breadcrumbPage: "Sites vitrines",
    heroKicker: "Sites vitrines",
    heroTitle1: "Un site qui",
    heroTitleEm1: "attire",
    heroTitle2: "et",
    heroTitleEm2: "convainc.",
    heroSub:
      "Pour PME, artisans et indépendants. Sur-mesure, crédible et bien référencé. Pensé pour transformer vos visiteurs en clients.",
    heroCtaPrimary: "Maquette offerte, sans engagement",
    heroCtaSecondary: "Voir nos offres",
    cardTitle: "Votre site vitrine",
    cardPrice: "sur devis",
    cardItems: [
      { icon: "ph:paint-brush-duotone", label: "Design 100 % sur-mesure" },
      { icon: "ph:magnifying-glass-duotone", label: "SEO intégré dès le départ" },
      { icon: "ph:cloud-duotone", label: "Hébergement gratuit à vie" },
      { icon: "ph:lock-key-duotone", label: "Site 100 % à vous" },
      { icon: "ph:device-mobile-duotone", label: "Parfait sur mobile" },
      { icon: "ph:gift-duotone", label: "Page d'accueil offerte" },
    ],
    pourQuiLabel: "Pour qui",
    pourQui: [
      "Artisans & BTP",
      "Restaurants & commerces",
      "Professions libérales",
      "Associations & clubs",
      "Indépendants & freelances",
      "PME & services",
    ],
    benefitsTitle1: "Ce qu'un bon site vitrine",
    benefitsTitleEm: "vous apporte.",
    benefits: [
      { icon: "ph:storefront-duotone", label: "Vos clients vous trouvent 24h/24" },
      { icon: "ph:device-mobile-duotone", label: "Parfait sur mobile" },
      { icon: "ph:shield-check-duotone", label: "Un design qui inspire confiance" },
      { icon: "ph:key-duotone", label: "Site 100 % à vous, hébergement gratuit" },
      { icon: "ph:magnifying-glass-duotone", label: "Visible sur Google dès le lancement" },
      { icon: "ph:lightning-duotone", label: "Livré en 14 à 21 jours" },
    ],
    processKicker: "Comment ça se passe",
    processTitle: "De votre demande à la mise en ligne.",
    etapes: [
      {
        num: "01",
        title: "Votre demande",
        body: "Vous nous décrivez votre activité, vos clients et vos objectifs. Sans engagement.",
        color: "bg-terra",
        textColor: "text-white",
      },
      {
        num: "02",
        title: "Maquette offerte",
        body: "On vous présente la maquette de votre page d'accueil avant toute signature.",
        color: "bg-midnight",
        textColor: "text-white",
      },
      {
        num: "03",
        title: "Développement",
        body: "Le site est codé sur-mesure. Aucun template, aucun WordPress. Du code propre.",
        color: "bg-[#1A3A2A]",
        textColor: "text-white",
      },
      {
        num: "04",
        title: "Mise en ligne",
        body: "On gère le déploiement, le domaine et le référencement. Livraison en 14 à 21 jours.",
        color: "bg-alabaster border border-grid-line",
        textColor: "text-midnight",
      },
    ],
    ctaBadge: "Gratuit · Sans engagement",
    ctaTitle1: "Votre page d'accueil.",
    ctaTitleEm: "Offerte.",
    ctaSub:
      "On crée la maquette de votre page d'accueil avant tout engagement. Vous voyez le résultat, puis vous décidez.",
    ctaPrimary: "Demander un devis gratuit",
    ctaSecondary: "Voir nos offres",
  },
  en: {
    metaTitle: "Custom Website Design for Small Businesses",
    metaDescription:
      "Custom-built websites for small businesses, tradespeople and independents: unique design, built-in SEO, free hosting. Free homepage mockup before any commitment.",
    ogTitle: "Custom Website Design for Small Businesses",
    ogDescription:
      "Custom-built websites: unique design, built-in SEO, free hosting. Free homepage mockup before any commitment.",
    schemaName: "Custom business website design",
    schemaServiceType: "Business website design",
    schemaDescription:
      "Custom-built websites for small businesses, tradespeople and independents: unique design, built-in SEO, free hosting. Free homepage mockup before any commitment.",
    breadcrumbHome: "Home",
    breadcrumbPage: "Business websites",
    heroKicker: "Business websites",
    heroTitle1: "A website that",
    heroTitleEm1: "attracts",
    heroTitle2: "and",
    heroTitleEm2: "converts.",
    heroSub:
      "For small businesses, tradespeople and independents. Custom-built, credible and search-ready. Designed to turn your visitors into customers.",
    heroCtaPrimary: "Free mockup, no commitment",
    heroCtaSecondary: "See our packages",
    cardTitle: "Your website",
    cardPrice: "custom quote",
    cardItems: [
      { icon: "ph:paint-brush-duotone", label: "100% custom design" },
      { icon: "ph:magnifying-glass-duotone", label: "SEO built in from day one" },
      { icon: "ph:cloud-duotone", label: "Free hosting for life" },
      { icon: "ph:lock-key-duotone", label: "You own 100% of your site" },
      { icon: "ph:device-mobile-duotone", label: "Flawless on mobile" },
      { icon: "ph:gift-duotone", label: "Free homepage mockup" },
    ],
    pourQuiLabel: "Who it's for",
    pourQui: [
      "Tradespeople & construction",
      "Restaurants & retail",
      "Professional services",
      "Associations & clubs",
      "Independents & freelancers",
      "Small businesses & services",
    ],
    benefitsTitle1: "What a great website",
    benefitsTitleEm: "does for you.",
    benefits: [
      { icon: "ph:storefront-duotone", label: "Customers find you 24/7" },
      { icon: "ph:device-mobile-duotone", label: "Flawless on mobile" },
      { icon: "ph:shield-check-duotone", label: "A design that builds trust" },
      { icon: "ph:key-duotone", label: "You own 100% of your site, free hosting" },
      { icon: "ph:magnifying-glass-duotone", label: "Visible on Google from launch" },
      { icon: "ph:lightning-duotone", label: "Delivered in 14 to 21 days" },
    ],
    processKicker: "How it works",
    processTitle: "From your request to launch.",
    etapes: [
      {
        num: "01",
        title: "Your request",
        body: "You tell us about your business, your customers and your goals. No commitment.",
        color: "bg-terra",
        textColor: "text-white",
      },
      {
        num: "02",
        title: "Free mockup",
        body: "We show you the mockup of your homepage before you sign anything.",
        color: "bg-midnight",
        textColor: "text-white",
      },
      {
        num: "03",
        title: "Development",
        body: "Your site is coded from scratch. No templates, no WordPress. Clean code.",
        color: "bg-[#1A3A2A]",
        textColor: "text-white",
      },
      {
        num: "04",
        title: "Launch",
        body: "We handle deployment, your domain and SEO. Delivered in 14 to 21 days.",
        color: "bg-alabaster border border-grid-line",
        textColor: "text-midnight",
      },
    ],
    ctaBadge: "Free · No commitment",
    ctaTitle1: "Your homepage.",
    ctaTitleEm: "On us.",
    ctaSub:
      "We design your homepage mockup before any commitment. You see the result, then you decide.",
    ctaPrimary: "Get a free quote",
    ctaSecondary: "See our packages",
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
      canonical: `/${locale}/sites-vitrine`,
      languages: { fr: "/fr/sites-vitrine", en: "/en/sites-vitrine" },
    },
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
    },
  };
}

export default async function SitesVitrinePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = T[lang];

  return (
    <main>
      <JsonLd
        schema={[
          serviceSchema({
            name: t.schemaName,
            serviceType: t.schemaServiceType,
            description: t.schemaDescription,
            path: localeHref(lang, "/sites-vitrine"),
          }),
          breadcrumbSchema([
            { name: t.breadcrumbHome, path: localeHref(lang, "/") },
            { name: t.breadcrumbPage, path: localeHref(lang, "/sites-vitrine") },
          ]),
        ]}
      />
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-alabaster pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="absolute inset-x-0 top-0 -z-10 h-[60vh]" style={{ background: "radial-gradient(60% 60% at 50% 0%, rgba(194,65,12,0.10) 0%, transparent 70%)" }} aria-hidden />
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-terra font-medium mb-5">{t.heroKicker}</div>
              <h1 className="font-display font-extrabold tracking-[-0.035em] text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.02] text-midnight">
                {t.heroTitle1}{" "}
                <span className="font-emphasis font-normal text-terra">{t.heroTitleEm1}</span>{" "}
                {t.heroTitle2}{" "}
                <span className="font-emphasis font-normal text-terra">{t.heroTitleEm2}</span>
              </h1>
              <p className="mt-6 text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-steel">
                {t.heroSub}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
                <a href={localeHref(lang, "/contact")} className="group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full bg-terra hover:bg-terra-hover px-7 py-4 text-white font-semibold text-[15px] transition-all glow-terra">
                  {t.heroCtaPrimary}
                  <Icon icon="lucide:arrow-right" width={16} height={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
                </a>
                <a href={localeHref(lang, "/tarifs")} className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border border-midnight/15 hover:border-midnight/40 px-6 py-4 text-midnight font-medium text-[15px] transition-colors">
                  {t.heroCtaSecondary}
                </a>
              </div>
            </div>

            {/* Carte prix + inclus */}
            <Reveal delay={0.15}>
              <div className="rounded-3xl border border-grid-line bg-white p-8 shadow-card-light">
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-display font-extrabold text-[2.2rem] tracking-[-0.04em] text-midnight leading-none">{t.cardTitle}</span>
                </div>
                <div className="font-display font-extrabold text-[3.5rem] tracking-[-0.05em] text-terra leading-none mb-5">
                  {t.cardPrice}
                </div>
                <div className="space-y-2.5">
                  {t.cardItems.map((item) => (
                    <div key={item.label} className="flex items-center gap-2.5">
                      <Icon icon={item.icon} width={17} height={17} className="text-terra shrink-0" aria-hidden />
                      <span className="text-[13.5px] font-medium text-midnight/80">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="bg-white py-10 border-y border-grid-line">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row sm:items-center gap-4">
          <p className="text-[11px] uppercase tracking-[0.16em] text-steel font-medium shrink-0">{t.pourQuiLabel}</p>
          <div className="flex flex-wrap gap-2">
            {t.pourQui.map((item) => (
              <span key={item} className="rounded-full border border-grid-line bg-alabaster px-4 py-1.5 text-[13px] font-medium text-midnight/80">{item}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Ce qu'un bon site vous apporte : liste compacte */}
      <section className="bg-alabaster py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="rounded-3xl border border-grid-line bg-white p-8 lg:p-10">
              <h2 className="font-display font-bold tracking-[-0.03em] text-[clamp(1.4rem,3vw,2rem)] text-midnight mb-8">
                {t.benefitsTitle1}{" "}
                <span className="font-emphasis font-normal text-terra">{t.benefitsTitleEm}</span>
              </h2>
              <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-4">
                {t.benefits.map((item) => (
                  <li key={item.label} className="flex items-center gap-3">
                    <Icon icon={item.icon} width={18} height={18} className="text-terra shrink-0" aria-hidden />
                    <span className="text-[14.5px] font-medium text-midnight">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Process en étapes : avec ronds numérotés */}
      <section className="bg-white py-20 lg:py-28 border-t border-grid-line">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-[11px] uppercase tracking-[0.18em] text-terra font-medium mb-3">{t.processKicker}</div>
            <h2 className="font-display font-bold tracking-[-0.03em] text-[clamp(1.6rem,3.5vw,2.4rem)] text-midnight">
              {t.processTitle}
            </h2>
          </div>

          {/* Étapes avec cercles et connecteurs */}
          <div className="relative">
            {/* Ligne verticale de connexion (desktop) */}
            <div className="hidden lg:block absolute left-[2.2rem] top-10 bottom-10 w-px bg-grid-line" aria-hidden />

            <div className="space-y-6">
              {t.etapes.map((e, i) => (
                <Reveal key={e.num} delay={i * 0.1}>
                  <div className="flex items-start gap-6">
                    {/* Rond numéroté */}
                    <div className={`shrink-0 grid h-[4.5rem] w-[4.5rem] place-items-center rounded-full text-center font-display font-extrabold text-[1.3rem] tracking-[-0.02em] ${e.color} ${e.textColor} shadow-sm z-10`}>
                      {e.num}
                    </div>
                    {/* Contenu */}
                    <div className="flex-1 pt-3">
                      <h3 className="font-display text-xl font-bold text-midnight mb-1">{e.title}</h3>
                      <p className="text-[14.5px] leading-relaxed text-steel max-w-lg">{e.body}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA terra */}
      <section className="bg-alabaster py-16 lg:py-24 border-t border-grid-line">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-terra px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20 text-center">
              <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none" aria-hidden>
                <svg className="w-full h-full"><filter id="cta-grain-vitrine3"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#cta-grain-vitrine3)" /></svg>
              </div>
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60%] h-64 rounded-full bg-white/20 blur-3xl pointer-events-none" aria-hidden />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  {t.ctaBadge}
                </span>
                <h2 className="mt-6 font-display font-extrabold tracking-[-0.03em] leading-[1.04] text-white text-[clamp(2rem,5vw,3.75rem)]">
                  {t.ctaTitle1}{" "}
                  <span className="font-emphasis font-normal">{t.ctaTitleEm}</span>
                </h2>
                <p className="mt-5 max-w-lg mx-auto text-[clamp(1rem,1.2vw,1.1rem)] leading-relaxed text-white/85">
                  {t.ctaSub}
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a href={localeHref(lang, "/contact")} className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-4 text-terra font-bold text-[15px] transition-transform hover:scale-[1.02]">
                    {t.ctaPrimary}
                    <Icon icon="lucide:arrow-right" width={16} height={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </a>
                  <a href={localeHref(lang, "/tarifs")} className="inline-flex items-center gap-2 rounded-full bg-white/15 hover:bg-white/25 backdrop-blur-sm text-white px-6 py-4 text-[15px] font-medium transition-colors">
                    {t.ctaSecondary}
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
