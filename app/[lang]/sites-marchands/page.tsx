import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Icon } from "@iconify/react";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import type { Locale } from "@/lib/i18n";
import { hasLocale, localeHref } from "@/lib/i18n";

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
  heroBadge: string;
  heroTitle1: string;
  heroTitleEm: string;
  heroSub: string;
  heroCtaPrimary: string;
  heroCtaSecondary: string;
  offerBadge: string;
  offerTitle: string;
  offerSub: string;
  offerPrice: string;
  offerPriceNote: string;
  offerGift: string;
  offerCta: string;
  offerFeatures: string[];
  whyKicker: string;
  whyTitle: string;
  shopifyAtouts: { icon: string; title: string; body: string }[];
  pubKicker: string;
  pubTitle: string;
  pubSub: string;
  pubWhyTitle: string;
  pubWhy: { icon: string; text: string }[];
  pubHowTitle: string;
  pubSteps: { num: string; label: string }[];
  ecoKicker: string;
  ecoTitle: string;
  ecosysteme: { icon: string; title: string; body: string }[];
  ctaBadge: string;
  ctaTitle1: string;
  ctaTitleEm: string;
  ctaSub: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

const T: Record<Locale, Dict> = {
  fr: {
    metaTitle: "Création de boutique e-commerce Shopify",
    metaDescription:
      "On crée votre boutique Shopify sur-mesure et on s'occupe de tout l'écosystème : publicité Meta & Google, newsletter, SEO, relances email. À partir de 2 900 €, sur devis. 1 mois de publicité offert.",
    ogTitle: "Création de boutique e-commerce Shopify",
    ogDescription:
      "Boutique Shopify sur-mesure et écosystème complet : publicité Meta & Google, newsletter, SEO. À partir de 2 900 €. 1 mois de publicité offert.",
    schemaName: "Création de boutique e-commerce Shopify",
    schemaServiceType: "Création de boutique e-commerce",
    schemaDescription:
      "Boutique Shopify sur-mesure et écosystème complet : publicité Meta & Google, newsletter, SEO, relances email. À partir de 2 900 €, 1 mois de publicité offert.",
    breadcrumbHome: "Accueil",
    breadcrumbPage: "Sites marchands",
    heroBadge: "E-commerce Shopify · À partir de 2 900 €",
    heroTitle1: "Une boutique en ligne",
    heroTitleEm: "qui vend vraiment.",
    heroSub:
      "On crée votre boutique Shopify et on s'occupe de tout pour la faire tourner : pub, emails, SEO, trafic. Un projet complet, pas juste un site.",
    heroCtaPrimary: "Obtenir un devis gratuit",
    heroCtaSecondary: "Voir nos réalisations",
    offerBadge: "E-commerce Shopify",
    offerTitle: "Boutique en ligne",
    offerSub: "Vendez vos produits, on s'occupe de tout",
    offerPrice: "2 900 €",
    offerPriceNote: "Selon la taille de votre catalogue et vos besoins",
    offerGift: "1 mois de publicité Facebook & Instagram ou Google offert",
    offerCta: "Obtenir un devis gratuit",
    offerFeatures: [
      "Boutique Shopify sur-mesure",
      "Catalogue, panier & paiement sécurisé",
      "Gestion des commandes simplifiée",
      "Design pensé pour vendre",
      "SEO & visibilité sur Google",
      "Hébergement & écosystème complet",
      "3 mois de maintenance offerts",
    ],
    whyKicker: "Pourquoi Shopify ?",
    whyTitle: "La plateforme qui crée tout un écosystème autour de vos ventes.",
    shopifyAtouts: [
      {
        icon: "ph:chart-line-up-duotone",
        title: "Plus de ventes",
        body: "Fiches produits optimisées, tunnel d'achat fluide, paiement rapide. Tout est pensé pour que le visiteur achète.",
      },
      {
        icon: "ph:plug-duotone",
        title: "Un écosystème complet",
        body: "Pub, emails, SEO, newsletter, relances automatiques : tout se connecte à Shopify pour faire tourner votre boutique.",
      },
      {
        icon: "ph:sliders-duotone",
        title: "Simple à gérer",
        body: "Ajoutez vos produits, gérez vos commandes, lancez une promo. Sans technicien, depuis votre téléphone.",
      },
      {
        icon: "ph:lock-duotone",
        title: "Fiable et sécurisé",
        body: "Des millions de boutiques dans le monde tournent sur Shopify. La technique est maintenue par Shopify lui-même.",
      },
    ],
    pubKicker: "La publicité",
    pubTitle: "Sans pub, votre boutique est invisible.",
    pubSub:
      "C'est comme ouvrir un magasin dans une rue déserte. La pub amène des clients devant votre vitrine, tous les jours.",
    pubWhyTitle: "Ce que ça change",
    pubWhy: [
      { icon: "ph:target-duotone", text: "On cible vos futurs clients : âge, intérêts, localisation, comportement d'achat" },
      { icon: "ph:currency-eur-duotone", text: "Vous choisissez le budget. On peut démarrer petit et scaler selon les résultats" },
      { icon: "ph:chart-bar-duotone", text: "Chaque vente est tracée. Vous savez exactement ce que rapporte chaque euro investi" },
      { icon: "ph:arrows-clockwise-duotone", text: "Chaque mois : nouveaux visuels, nouvelles campagnes, rapport de résultats" },
    ],
    pubHowTitle: "Comment on travaille",
    pubSteps: [
      { num: "01", label: "On comprend votre produit et votre client idéal" },
      { num: "02", label: "On crée les visuels : photos, vidéos, carrousels" },
      { num: "03", label: "On lance sur Meta (Instagram/Facebook) et/ou Google" },
      { num: "04", label: "On mesure : ventes, coût par achat, produits qui marchent" },
      { num: "05", label: "On optimise chaque mois et on amplifie ce qui fonctionne" },
    ],
    ecoKicker: "On s'occupe de tout",
    ecoTitle: "L'écosystème complet autour de votre boutique.",
    ecosysteme: [
      {
        icon: "ph:megaphone-duotone",
        title: "Publicité Meta & Google",
        body: "On crée vos visuels et on les diffuse aux bonnes personnes. Chaque euro investi est tracé et optimisé.",
      },
      {
        icon: "ph:envelope-duotone",
        title: "Newsletter & emails auto",
        body: "Mail de bienvenue, promo flash, relance client. Des ventes générées automatiquement, sans effort.",
      },
      {
        icon: "ph:arrow-counter-clockwise-duotone",
        title: "Relance panier abandonné",
        body: "70 % des acheteurs partent sans payer. On les relance automatiquement pour récupérer ces ventes.",
      },
      {
        icon: "ph:magnifying-glass-duotone",
        title: "Référencement naturel",
        body: "Du trafic gratuit et constant depuis Google, sans dépendre de la pub.",
      },
      {
        icon: "ph:users-duotone",
        title: "Trafic & acquisition",
        body: "Réseaux sociaux, influence, contenu. On met en place les canaux qui amènent vos futurs clients.",
      },
      {
        icon: "ph:chart-line-up-duotone",
        title: "Suivi mensuel",
        body: "Chaque mois : nouveaux visuels, nouvelles campagnes, rapport de résultats. On améliore en continu.",
      },
    ],
    ctaBadge: "Gestion mensuelle disponible",
    ctaTitle1: "On peut tout gérer",
    ctaTitleEm: "pour vous.",
    ctaSub:
      "Visuels, campagnes pub, newsletter, SEO. Vous vous occupez de vos produits. On s'occupe du reste, mois après mois.",
    ctaPrimary: "Parler de mon projet",
    ctaSecondary: "Voir nos offres",
  },
  en: {
    metaTitle: "Shopify E-commerce Store Design",
    metaDescription:
      "We build your custom Shopify store and run the entire ecosystem: Meta & Google ads, newsletter, SEO, email follow-ups. From €2,900, custom quote. 1 month of advertising free.",
    ogTitle: "Shopify E-commerce Store Design",
    ogDescription:
      "Custom Shopify store and a complete ecosystem: Meta & Google ads, newsletter, SEO. From €2,900. 1 month of advertising free.",
    schemaName: "Shopify e-commerce store design",
    schemaServiceType: "E-commerce store design",
    schemaDescription:
      "Custom Shopify store and a complete ecosystem: Meta & Google ads, newsletter, SEO, email follow-ups. From €2,900, 1 month of advertising free.",
    breadcrumbHome: "Home",
    breadcrumbPage: "Online stores",
    heroBadge: "Shopify e-commerce · From €2,900",
    heroTitle1: "An online store",
    heroTitleEm: "that actually sells.",
    heroSub:
      "We build your Shopify store and handle everything that makes it run: ads, emails, SEO, traffic. A complete project, not just a website.",
    heroCtaPrimary: "Get a free quote",
    heroCtaSecondary: "See our work",
    offerBadge: "Shopify e-commerce",
    offerTitle: "Online store",
    offerSub: "Sell your products, we handle everything",
    offerPrice: "€2,900",
    offerPriceNote: "Based on your catalog size and your needs",
    offerGift: "1 month of Facebook & Instagram or Google advertising free",
    offerCta: "Get a free quote",
    offerFeatures: [
      "Custom Shopify store",
      "Catalog, cart & secure checkout",
      "Simplified order management",
      "Design built to sell",
      "SEO & Google visibility",
      "Hosting & complete ecosystem",
      "3 months of maintenance included",
    ],
    whyKicker: "Why Shopify?",
    whyTitle: "The platform that builds an entire ecosystem around your sales.",
    shopifyAtouts: [
      {
        icon: "ph:chart-line-up-duotone",
        title: "More sales",
        body: "Optimized product pages, a smooth checkout flow, fast payment. Everything is designed to turn visitors into buyers.",
      },
      {
        icon: "ph:plug-duotone",
        title: "A complete ecosystem",
        body: "Ads, emails, SEO, newsletter, automatic follow-ups: everything connects to Shopify to keep your store running.",
      },
      {
        icon: "ph:sliders-duotone",
        title: "Easy to manage",
        body: "Add products, manage orders, launch a promo. No technician needed, right from your phone.",
      },
      {
        icon: "ph:lock-duotone",
        title: "Reliable and secure",
        body: "Millions of stores worldwide run on Shopify. The technology is maintained by Shopify itself.",
      },
    ],
    pubKicker: "Advertising",
    pubTitle: "Without ads, your store is invisible.",
    pubSub:
      "It's like opening a shop on an empty street. Ads bring customers to your storefront, every single day.",
    pubWhyTitle: "What it changes",
    pubWhy: [
      { icon: "ph:target-duotone", text: "We target your future customers: age, interests, location, buying behavior" },
      { icon: "ph:currency-eur-duotone", text: "You set the budget. We can start small and scale based on results" },
      { icon: "ph:chart-bar-duotone", text: "Every sale is tracked. You know exactly what every euro invested brings back" },
      { icon: "ph:arrows-clockwise-duotone", text: "Every month: new creatives, new campaigns, a results report" },
    ],
    pubHowTitle: "How we work",
    pubSteps: [
      { num: "01", label: "We get to know your product and your ideal customer" },
      { num: "02", label: "We create the visuals: photos, videos, carousels" },
      { num: "03", label: "We launch on Meta (Instagram/Facebook) and/or Google" },
      { num: "04", label: "We measure: sales, cost per purchase, best-selling products" },
      { num: "05", label: "We optimize every month and scale what works" },
    ],
    ecoKicker: "We handle everything",
    ecoTitle: "The complete ecosystem around your store.",
    ecosysteme: [
      {
        icon: "ph:megaphone-duotone",
        title: "Meta & Google ads",
        body: "We create your visuals and put them in front of the right people. Every euro invested is tracked and optimized.",
      },
      {
        icon: "ph:envelope-duotone",
        title: "Newsletter & automated emails",
        body: "Welcome email, flash promo, customer follow-up. Sales generated automatically, effortlessly.",
      },
      {
        icon: "ph:arrow-counter-clockwise-duotone",
        title: "Abandoned cart recovery",
        body: "70% of shoppers leave without paying. We follow up automatically to win those sales back.",
      },
      {
        icon: "ph:magnifying-glass-duotone",
        title: "Organic SEO",
        body: "Free, steady traffic from Google, without depending on ads.",
      },
      {
        icon: "ph:users-duotone",
        title: "Traffic & acquisition",
        body: "Social media, influencers, content. We set up the channels that bring in your future customers.",
      },
      {
        icon: "ph:chart-line-up-duotone",
        title: "Monthly follow-up",
        body: "Every month: new creatives, new campaigns, a results report. We keep improving.",
      },
    ],
    ctaBadge: "Monthly management available",
    ctaTitle1: "We can handle everything",
    ctaTitleEm: "for you.",
    ctaSub:
      "Creatives, ad campaigns, newsletter, SEO. You focus on your products. We take care of the rest, month after month.",
    ctaPrimary: "Talk about my project",
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
      canonical: `/${locale}/sites-marchands`,
      languages: { fr: "/fr/sites-marchands", en: "/en/sites-marchands" },
    },
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
    },
  };
}

export default async function SitesMarchandsPage({ params }: { params: Promise<{ lang: string }> }) {
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
            path: localeHref(lang, "/sites-marchands"),
          }),
          breadcrumbSchema([
            { name: t.breadcrumbHome, path: localeHref(lang, "/") },
            { name: t.breadcrumbPage, path: localeHref(lang, "/sites-marchands") },
          ]),
        ]}
      />
      {/* Hero + tarif intégré */}
      <section className="relative isolate overflow-hidden bg-alabaster pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div
          className="absolute inset-x-0 top-0 -z-10 h-[60vh]"
          style={{ background: "radial-gradient(60% 60% at 50% 0%, rgba(194,65,12,0.10) 0%, transparent 70%)" }}
          aria-hidden
        />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-grid-line bg-white px-4 py-1.5 shadow-card-light mb-6">
            <Icon icon="fa6-brands:shopify" width={15} height={15} className="text-[#5E8E3E]" aria-hidden />
            <span className="text-[12px] font-semibold text-midnight/70">{t.heroBadge}</span>
          </div>
          <h1 className="font-display font-extrabold tracking-[-0.035em] text-[clamp(2.5rem,6.5vw,5rem)] leading-[1.02] text-midnight">
            {t.heroTitle1}{" "}
            <span className="font-emphasis font-normal text-terra">{t.heroTitleEm}</span>
          </h1>
          <p className="mt-6 max-w-xl mx-auto text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-steel">
            {t.heroSub}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={localeHref(lang, "/contact")} className="group inline-flex items-center gap-2.5 rounded-full bg-terra hover:bg-terra-hover px-7 py-4 text-white font-semibold text-[15px] transition-all glow-terra">
              {t.heroCtaPrimary}
              <Icon icon="lucide:arrow-right" width={16} height={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
            </a>
            <a href={localeHref(lang, "/realisations")} className="inline-flex items-center gap-2 rounded-full border border-midnight/15 hover:border-midnight/40 px-6 py-4 text-midnight font-medium text-[15px] transition-colors">
              {t.heroCtaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* Tarif : carte offre visuelle horizontale (rectangle large sur desktop) */}
      <section className="bg-white py-14 border-b border-grid-line">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_1px_1fr] rounded-3xl border border-terra bg-white p-7 lg:p-9 shadow-[0_24px_60px_-24px_rgba(194,65,12,0.45)]">
            <span className="absolute -top-3 left-7 inline-flex items-center gap-1.5 rounded-full bg-terra px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-terra">
              <Icon icon="fa6-brands:shopify" width={12} height={12} aria-hidden />
              {t.offerBadge}
            </span>

            {/* Colonne gauche : identité + prix + offre + CTA */}
            <div className="flex flex-col">
              <div className="font-display text-2xl font-bold text-midnight">{t.offerTitle}</div>
              <div className="mt-1 text-[13px] text-steel">{t.offerSub}</div>
              <div className="mt-5 flex items-end gap-1">
                <span className="font-display text-4xl font-extrabold tracking-tight text-midnight">{t.offerPrice}</span>
              </div>
              <div className="mt-2 text-[12.5px] text-steel">{t.offerPriceNote}</div>

              {/* Offre pub mise en avant */}
              <div className="mt-4 flex items-center gap-2 rounded-xl bg-terra/8 border border-terra/20 px-3.5 py-3 text-[13px] font-semibold text-terra">
                <Icon icon="ph:gift-duotone" width={18} height={18} className="shrink-0" aria-hidden />
                {t.offerGift}
              </div>

              <a href={localeHref(lang, "/contact")} className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-terra hover:bg-terra-hover px-6 py-3.5 text-[14px] font-bold text-white transition-all glow-terra">
                {t.offerCta}
                <Icon icon="lucide:arrow-right" width={16} height={16} aria-hidden />
              </a>
            </div>

            {/* Séparateur (vertical sur desktop, horizontal sur mobile) */}
            <div className="h-px w-full lg:h-full lg:w-px bg-grid-line" aria-hidden />

            {/* Colonne droite : features */}
            <ul className="flex flex-col justify-center gap-3.5">
              {t.offerFeatures.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-[14px]">
                  <Icon icon="lucide:check" width={18} height={18} className="mt-0.5 shrink-0 text-terra" aria-hidden />
                  <span className="text-midnight/80">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pourquoi Shopify */}
      <section className="bg-alabaster py-16 lg:py-20 border-b border-grid-line">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 mb-4">
              <Icon icon="fa6-brands:shopify" width={18} height={18} className="text-[#5E8E3E]" aria-hidden />
              <div className="text-[11px] uppercase tracking-[0.18em] text-terra font-medium">{t.whyKicker}</div>
            </div>
            <h2 className="font-display font-bold tracking-[-0.03em] text-[clamp(1.6rem,3.5vw,2.4rem)] text-midnight max-w-xl mx-auto">
              {t.whyTitle}
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {t.shopifyAtouts.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.07}>
                <div className="h-full rounded-2xl border border-grid-line bg-white p-6">
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-terra/10 text-terra">
                    <Icon icon={item.icon} width={22} height={22} aria-hidden />
                  </div>
                  <h3 className="font-display text-[15px] font-semibold text-midnight mb-2">{item.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-steel">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* La publicité */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-[11px] uppercase tracking-[0.18em] text-terra font-medium mb-3">{t.pubKicker}</div>
            <h2 className="font-display font-bold tracking-[-0.03em] text-[clamp(1.6rem,3.5vw,2.5rem)] text-midnight max-w-2xl mx-auto">
              {t.pubTitle}
            </h2>
            <p className="mt-4 text-[15px] text-steel max-w-lg mx-auto">
              {t.pubSub}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {/* Pourquoi */}
            <Reveal>
              <div className="rounded-3xl border border-grid-line bg-alabaster p-7 h-full">
                <h3 className="font-display text-[16px] font-semibold text-midnight mb-5">{t.pubWhyTitle}</h3>
                <ul className="space-y-4">
                  {t.pubWhy.map((item) => (
                    <li key={item.text} className="flex items-start gap-3">
                      <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-terra/10 text-terra">
                        <Icon icon={item.icon} width={16} height={16} aria-hidden />
                      </div>
                      <span className="text-[14px] text-steel leading-relaxed">{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Comment on travaille */}
            <Reveal delay={0.08}>
              <div className="rounded-3xl border border-terra/20 bg-white p-7 h-full">
                <h3 className="font-display text-[16px] font-semibold text-midnight mb-5">{t.pubHowTitle}</h3>
                <ol className="space-y-4">
                  {t.pubSteps.map((step) => (
                    <li key={step.num} className="flex items-start gap-4">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-terra text-white text-[11px] font-bold mt-0.5">
                        {parseInt(step.num)}
                      </span>
                      <span className="text-[14px] text-midnight leading-snug">{step.label}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Écosystème */}
      <section className="bg-white py-20 lg:py-28 border-t border-grid-line">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-[11px] uppercase tracking-[0.18em] text-terra font-medium mb-3">{t.ecoKicker}</div>
            <h2 className="font-display font-bold tracking-[-0.03em] text-[clamp(1.6rem,3.5vw,2.5rem)] text-midnight max-w-xl mx-auto">
              {t.ecoTitle}
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.ecosysteme.map((e, i) => (
              <Reveal key={e.title} delay={(i % 3) * 0.07}>
                <div className="h-full rounded-2xl border border-grid-line bg-alabaster p-6">
                  <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-terra/10 text-terra">
                    <Icon icon={e.icon} width={22} height={22} aria-hidden />
                  </div>
                  <h3 className="font-display text-[15px] font-semibold text-midnight mb-1.5">{e.title}</h3>
                  <p className="text-[13.5px] leading-relaxed text-steel">{e.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-alabaster py-16 lg:py-24">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-terra px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20 text-center">
              {/* grain */}
              <div className="absolute inset-0 opacity-[0.12] mix-blend-overlay pointer-events-none" aria-hidden>
                <svg className="w-full h-full">
                  <filter id="cta-grain-shop">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
                  </filter>
                  <rect width="100%" height="100%" filter="url(#cta-grain-shop)" />
                </svg>
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
