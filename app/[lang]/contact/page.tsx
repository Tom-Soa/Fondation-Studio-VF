import ContactForm from "@/components/contact/ContactForm";
import { Icon } from "@iconify/react";
import { WHATSAPP_URL } from "@/lib/content";
import type { Locale } from "@/lib/i18n";
import { hasLocale, localeHref } from "@/lib/i18n";
import { notFound } from "next/navigation";

const T: Record<Locale, {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  kicker: string;
  h1Start: string;
  h1Accent: string;
  intro: string;
  divider: string;
  recommended: string;
  callTitle: string;
  callBody: string;
  callPoints: string[];
  writeUs: string;
  emailLabel: string;
  locationLabel: string;
  locationValue: string;
}> = {
  fr: {
    metaTitle: "Contact · Demandez un devis gratuit",
    metaDescription:
      "Demandez un devis gratuit, démarrez directement en ligne, ou écrivez-nous. Maquette offerte avant tout engagement. Sites premium à partir de 1 400 €.",
    ogTitle: "Contact · ACTC",
    ogDescription:
      "Demandez un devis gratuit ou écrivez-nous. Maquette offerte avant tout engagement.",
    kicker: "Contact · La première étape",
    h1Start: "Parlons de",
    h1Accent: "votre projet.",
    intro:
      "Devis gratuit, démarrage direct en ligne, ou simple message. Choisissez ce qui vous convient.",
    divider: "ou choisissez une autre option",
    recommended: "Recommandé",
    callTitle: "Demander un devis gratuit",
    callBody:
      "Décrivez-nous votre projet via le formulaire. On vous dit exactement ce qu'on peut faire et à quel tarif. Sans engagement.",
    callPoints: ["Réponse rapide", "Maquette offerte ensuite", "Zéro engagement"],
    writeUs: "Nous écrire",
    emailLabel: "Email",
    locationLabel: "Localisation",
    locationValue: "France · Projets dans le monde entier",
  },
  en: {
    metaTitle: "Contact · Get a free quote",
    metaDescription:
      "Get a free quote, get started directly online, or send us a message. Free mockup before any commitment. Premium websites from €1,400.",
    ogTitle: "Contact · ACTC",
    ogDescription:
      "Get a free quote or send us a message. Free mockup before any commitment.",
    kicker: "Contact · The first step",
    h1Start: "Let's talk about",
    h1Accent: "your project.",
    intro:
      "A free quote, a direct start online, or a simple message. Pick whatever works for you.",
    divider: "or pick another option",
    recommended: "Recommended",
    callTitle: "Get a free quote",
    callBody:
      "Tell us about your project through the form. We tell you exactly what we can do and at what price. No commitment.",
    callPoints: ["Fast response", "Free mockup afterwards", "Zero commitment"],
    writeUs: "Write to us",
    emailLabel: "Email",
    locationLabel: "Location",
    locationValue: "France · Projects worldwide",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale: Locale = hasLocale(lang) ? lang : "fr";
  const t = T[locale];
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: { canonical: localeHref(locale, "/contact") },
    openGraph: {
      title: t.ogTitle,
      description: t.ogDescription,
    },
  };
}

export const dynamic = "force-static";

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = T[lang];

  return (
    <main className="bg-alabaster min-h-screen">
      <div className="max-w-5xl mx-auto px-6 pt-28 lg:pt-36 pb-20">

        {/* Intro */}
        <div className="max-w-2xl mb-10">
          <div className="text-[11px] uppercase tracking-[0.18em] text-terra mb-5 font-medium">
            {t.kicker}
          </div>
          <h1 className="font-display font-extrabold tracking-[-0.03em] text-[clamp(2.4rem,5vw,3.6rem)] leading-[1.04] text-midnight">
            {t.h1Start}{" "}
            <span className="font-emphasis font-normal text-terra">{t.h1Accent}</span>
          </h1>
          <p className="mt-5 text-[15.5px] leading-relaxed text-steel">
            {t.intro}
          </p>
        </div>

        {/* Formulaire en premier */}
        <div className="mb-16">
          <div className="max-w-2xl mx-auto">
            <ContactForm lang={lang} />
          </div>
        </div>

        <div className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 bg-grid-line" />
          <span className="text-[13px] font-medium text-steel">{t.divider}</span>
          <div className="h-px flex-1 bg-grid-line" />
        </div>

        {/* 2 options, en bandes pleine largeur */}
        <div className="flex flex-col gap-5">

          {/* Option 1 : Appel, mise en avant */}
          <div className="relative overflow-hidden rounded-3xl border-2 border-terra bg-white p-8 shadow-[0_8px_32px_rgba(194,65,12,0.15)] lg:p-10">
            <div className="absolute -top-16 -right-12 h-48 w-48 rounded-full bg-terra/8 blur-3xl pointer-events-none" aria-hidden />
            <div className="relative lg:flex lg:items-start lg:gap-12">
             <div className="lg:flex-1">
              <div className="inline-flex items-center gap-2 rounded-full bg-terra/10 px-3 py-1 text-[11px] font-semibold text-terra mb-5">
                <Icon icon="ph:star-duotone" width={13} height={13} aria-hidden />
                {t.recommended}
              </div>
              <h2 className="font-display text-xl font-bold text-midnight mb-2">
                {t.callTitle}
              </h2>
              <p className="text-[14px] text-steel leading-relaxed mb-6">
                {t.callBody}
              </p>
             </div>
              <ul className="space-y-2 lg:w-[42%] lg:shrink-0 lg:border-l lg:border-grid-line lg:pl-10">
                {t.callPoints.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-[13.5px] text-steel">
                    <Icon icon="lucide:check" width={15} height={15} className="text-terra shrink-0" aria-hidden />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Option 2 : Coordonnées directes */}
          <div className="rounded-3xl border border-grid-line bg-white p-8 flex flex-col gap-4 lg:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-midnight/5 px-3 py-1 text-[11px] font-semibold text-midnight/60 mb-1">
              <Icon icon="ph:chat-duotone" width={13} height={13} aria-hidden />
              {t.writeUs}
            </div>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group rounded-2xl border border-grid-line p-4 hover:border-[#25D366]/40 transition-colors">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#25D366]/10 text-[#1ebe5d]">
                <Icon icon="ph:whatsapp-logo-duotone" width={20} height={20} aria-hidden />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-steel">WhatsApp</div>
                <div className="text-[15px] font-medium text-midnight group-hover:text-[#1ebe5d] transition-colors">+33 6 72 75 84 78</div>
              </div>
            </a>
            <a href="mailto:fondationstudio.fr@gmail.com" className="flex items-center gap-4 group rounded-2xl border border-grid-line p-4 hover:border-terra/40 transition-colors">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white border border-grid-line text-terra">
                <Icon icon="ph:envelope-simple-duotone" width={20} height={20} aria-hidden />
              </div>
              <div className="min-w-0">
                <div className="text-[11px] uppercase tracking-wider text-steel">{t.emailLabel}</div>
                <div className="text-[14px] font-medium text-midnight group-hover:text-terra transition-colors break-all">fondationstudio.fr@gmail.com</div>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-2xl border border-grid-line p-4">
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white border border-grid-line text-terra">
                <Icon icon="ph:map-pin-duotone" width={20} height={20} aria-hidden />
              </div>
              <div>
                <div className="text-[11px] uppercase tracking-wider text-steel">{t.locationLabel}</div>
                <div className="text-[14px] font-medium text-midnight">{t.locationValue}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  );
}
