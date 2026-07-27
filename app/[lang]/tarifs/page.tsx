import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Pricing from "@/components/home/Pricing";
import Comparison from "@/components/home/Comparison";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";
import { OPTIONS, SERVICES, FAQ } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { hasLocale, localeHref } from "@/lib/i18n";

const PUBLICITE = SERVICES.fr.find((s) => s.title.includes("Publicité"));

interface OptionText {
  name: string;
  price: string;
  description: string;
}

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
    optionsKicker: string;
    optionsTitle: string;
    optionsNote: string;
    options: OptionText[];
    finePrint: string;
    publicite: { title: string; price: string; description: string } | undefined;
    publiciteCta: string;
    faqTitle: string;
    faq: AccordionItem[];
  }
> = {
  fr: {
    metaTitle: "Nos offres",
    metaDescription:
      "Forfaits sur devis, options à la carte, sites e-commerce Shopify et publicité Meta/Google. Site en propriété, acompte 60 %, paiement en plusieurs fois.",
    ogTitle: "Nos offres · ACTC",
    ogDescription:
      "Forfaits sur devis, options à la carte, sites e-commerce Shopify et publicité Meta/Google. Site en propriété, paiement en plusieurs fois.",
    kicker: "Nos offres",
    h1Start: "Des sites qui se",
    h1Em: "remboursent.",
    intro:
      "Un investissement, pas une dépense. Devis personnalisé, tout inclus, hébergement gratuit. Votre site vous appartient. Des forfaits de base à enrichir avec des options à la carte.",
    optionsKicker: "Options",
    optionsTitle: "Personnalisez votre site à la carte.",
    optionsNote: "Chaque option s'ajoute à n'importe quel forfait, sans dépendance ni abonnement caché.",
    options: OPTIONS.fr,
    finePrint:
      "Prix hors taxes (TVA non applicable, art. 293 B du CGI) · Acompte 60 % à la commande, solde 40 % à la livraison",
    publicite: PUBLICITE,
    publiciteCta: "En parler avec nous",
    faqTitle: "Questions fréquentes",
    faq: FAQ.fr,
  },
  en: {
    metaTitle: "Our plans",
    metaDescription:
      "Custom-quoted plans, a la carte options, Shopify e-commerce stores and Meta/Google advertising. You own your site, 60% deposit, pay in installments.",
    ogTitle: "Our plans · ACTC",
    ogDescription:
      "Custom-quoted plans, a la carte options, Shopify e-commerce stores and Meta/Google advertising. You own your site, pay in installments.",
    kicker: "Our plans",
    h1Start: "Websites that pay for",
    h1Em: "themselves.",
    intro:
      "An investment, not an expense. Personalized quote, everything included, free hosting. Your site belongs to you. Base plans you can extend with a la carte options.",
    optionsKicker: "Options",
    optionsTitle: "Customize your website, a la carte.",
    optionsNote: "Each option can be added to any plan, with no dependencies and no hidden subscription.",
    options: [
      {
        name: "Monthly maintenance",
        price: "Custom quote",
        description: "Regular updates to your site after the free period included in your plan.",
      },
      {
        name: "Media buying",
        price: "Custom quote",
        description:
          "Management of your Google and Meta (Instagram/Facebook) advertising to bring in new customers, with monthly campaign reporting.",
      },
      {
        name: "Email sequences",
        price: "Custom quote",
        description: "Writing and setup of automated email sequences: welcome email, follow-ups, post-purchase.",
      },
      {
        name: "Brand redesign",
        price: "Custom quote",
        description: "Logo, visual identity, fonts, colors, packaging. Everything that makes your brand recognizable.",
      },
      {
        name: "Blog system",
        price: "Custom quote",
        description: "A blog added to your site, with article and category management, optimized for Google.",
      },
      {
        name: "Logo design",
        price: "Custom quote",
        description: "A professional logo: typography, colors, variations. Files delivered in high resolution.",
      },
    ],
    finePrint:
      "Prices before tax (VAT not applicable, art. 293 B of the French tax code) · 60% deposit at order, 40% balance on delivery",
    publicite: PUBLICITE && {
      title: "Meta & Google advertising",
      price: "Custom quote",
      description:
        "We do more than your website: we bring you customers. Drawing on our experience with Instagram, Facebook and Google advertising, we set up campaigns that generate qualified leads and sales.",
    },
    publiciteCta: "Talk it through with us",
    faqTitle: "Frequently asked questions",
    faq: [
      {
        q: "How much does a website cost?",
        a: "Every project gets a personalized quote, based on the number of pages, the content and the level of customization. Three plans structure our services: Standard, Conversion and Premium. Your site is fully yours, with no hidden subscription.",
      },
      {
        q: "How long until my site is delivered?",
        a: "Between 2 and 4 weeks depending on the plan and the complexity of the project. Every step has a date and a clear deliverable.",
      },
      {
        q: "Do I really own my website?",
        a: "Yes, 100%. No WordPress, no Wix, no dependency. Your site belongs entirely to you: do whatever you want with it, with no hidden subscription.",
      },
      {
        q: "Is the mockup really free?",
        a: "Yes. We present a real custom design proposal on a video call. If you like it, we start. If not, you pay nothing.",
      },
      {
        q: "Will my site rank well on Google?",
        a: "SEO is built in from day one: semantic structure, schema markup and optimized content, so you are visible on Google even before launch.",
      },
      {
        q: "Can I edit my site myself afterwards?",
        a: "Yes. You get clean code and, depending on the plan, an interface to manage your content. You are never locked in to a provider.",
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
    alternates: { canonical: localeHref(locale, "/tarifs") },
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
    },
  };
}

export default async function TarifsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = T[lang];
  return (
    <main>
      {/* Titre de page (clair), directement au-dessus des forfaits, même flux */}
      <section className="bg-alabaster pt-32 pb-10 lg:pt-44 lg:pb-12 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-[11px] uppercase tracking-[0.18em] text-terra mb-6 font-medium">{t.kicker}</div>
          <h1 className="font-display font-extrabold tracking-[-0.035em] text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] text-midnight">
            {t.h1Start} <span className="font-emphasis font-normal text-terra">{t.h1Em}</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-[clamp(1rem,1.2vw,1.2rem)] leading-relaxed text-steel">
            {t.intro}
          </p>
        </div>
      </section>

      {/* Forfaits : section claire, sans gros padding haut (le titre précède) */}
      <Pricing lang={lang} hideHead showOptionsButton={false} topPadded={false} optionsHref="#options" />

      {/* Options à la carte */}
      <section id="options" className="bg-alabaster py-24 lg:py-28 border-t border-grid-line">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-terra mb-3 font-medium">{t.optionsKicker}</div>
              <h2 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(1.8rem,4vw,3rem)] leading-none text-midnight whitespace-nowrap">
                {t.optionsTitle}
              </h2>
            </div>
            <p className="text-[14px] text-steel max-w-sm leading-relaxed">
              {t.optionsNote}
            </p>
          </div>

          {(() => {
            const OPTION_COLORS = [
              "bg-white border-grid-line",
              "bg-[#FFF7F3] border-terra/20",
              "bg-[#F3F7FF] border-blue-100",
              "bg-[#F3FFF6] border-emerald-100",
              "bg-[#FFFBF0] border-amber-100",
              "bg-[#FDF3FF] border-purple-100",
            ];
            const OPTION_ACCENT = [
              "text-terra",
              "text-terra",
              "text-blue-600",
              "text-emerald-600",
              "text-amber-600",
              "text-purple-600",
            ];
            return (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {t.options.map((o, i) => (
                  <Reveal key={o.name} delay={i * 0.06}>
                    <div className={`h-full rounded-2xl border p-6 ${OPTION_COLORS[i % OPTION_COLORS.length]}`}>
                      <div className={`font-display text-xl font-bold mb-1 ${OPTION_ACCENT[i % OPTION_ACCENT.length]}`}>{o.price}</div>
                      <div className="font-semibold text-midnight mb-2">{o.name}</div>
                      <div className="text-[13.5px] text-steel leading-relaxed">{o.description}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            );
          })()}

          <p className="mt-6 text-[12px] text-steel/70">
            {t.finePrint}
          </p>
        </div>
      </section>

      {/* Publicité Meta & Google */}
      {t.publicite && (
        <section className="bg-white py-24 lg:py-28 border-t border-grid-line">
          <div className="max-w-5xl mx-auto px-6">
            <Reveal>
              <div className="rounded-3xl border border-grid-line bg-alabaster p-8 lg:p-10">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <h2 className="font-display text-2xl font-bold text-midnight">{t.publicite.title}</h2>
                  <span className="rounded-full border border-terra/30 bg-terra/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-terra whitespace-nowrap">
                    {t.publicite.price}
                  </span>
                </div>
                <p className="text-[15px] leading-relaxed text-steel max-w-3xl">{t.publicite.description}</p>
                <a
                  href={localeHref(lang, "/contact")}
                  className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-terra hover:underline"
                >
                  {t.publiciteCta}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      <Comparison lang={lang} />

      {/* FAQ tarifs */}
      <section className="bg-white py-24 lg:py-28 border-t border-grid-line">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(1.8rem,4vw,3rem)] text-midnight mb-10 text-center">
            {t.faqTitle}
          </h2>
          <Accordion items={t.faq} />
        </div>
      </section>
    </main>
  );
}
