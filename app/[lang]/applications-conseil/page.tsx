import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage, { type ServiceDict } from "@/components/ServicePage";
import type { Locale } from "@/lib/i18n";
import { hasLocale } from "@/lib/i18n";

const PATH = "/applications-conseil";

const T: Record<Locale, ServiceDict> = {
  fr: {
    metaTitle: "Application web sur-mesure et conseil pour PME",
    metaDescription:
      "Une application faite pour votre métier (suivi clients, planning, devis, factures) et du conseil pour savoir où investir avant de dépenser. Sur devis.",
    schemaName: "Application web et conseil",
    schemaServiceType: "Développement d'application web et conseil en stratégie",
    breadcrumbHome: "Accueil",
    breadcrumbPage: "Applications et conseil",
    heroKicker: "Application web et conseil",
    heroTitle: "Moins de temps perdu,",
    heroTitleEm: "de meilleures décisions.",
    heroSub:
      "Un outil fait pour votre métier, pour en finir avec les fichiers éparpillés. Et un regard extérieur pour savoir où mettre votre budget avant de le dépenser.",
    heroCta: "Parlons de votre projet",
    cardTitle: "Application et conseil",
    cardPrice: "Sur devis",
    cardItems: [
      { icon: "ph:users-duotone", label: "Suivi clients" },
      { icon: "ph:calendar-duotone", label: "Planning" },
      { icon: "ph:receipt-duotone", label: "Devis et factures" },
      { icon: "ph:devices-duotone", label: "Accessible partout, sans installation" },
      { icon: "ph:compass-duotone", label: "Conseil en positionnement et en acquisition" },
    ],
    blocks: [
      {
        title: "Une application",
        titleEm: "faite pour votre métier.",
        body: "Fini les fichiers partout et les devis sur un coin de table. Un seul endroit où toute l'équipe travaille, depuis un ordinateur ou un téléphone.",
        items: [
          { icon: "ph:users-duotone", label: "Vos clients et leur historique" },
          { icon: "ph:calendar-duotone", label: "Le planning de l'équipe" },
          { icon: "ph:receipt-duotone", label: "Devis et factures au même endroit" },
          { icon: "ph:clock-duotone", label: "Des heures gagnées chaque semaine" },
        ],
      },
      {
        title: "Savoir où investir",
        titleEm: "avant de dépenser.",
        body: "Développement commercial et marketing digital réunis : on vous aide à choisir avant de vous lancer, pour éviter de construire la mauvaise chose.",
        items: [
          { icon: "ph:crosshair-duotone", label: "Positionnement" },
          { icon: "ph:package-duotone", label: "Offre" },
          { icon: "ph:path-duotone", label: "Stratégie d'acquisition" },
          { icon: "ph:signpost-duotone", label: "Choix des canaux" },
        ],
      },
    ],
    stepsKicker: "Comment ça se passe",
    stepsTitle: "Un projet cadré avant d'écrire une ligne.",
    steps: [
      { title: "Vous nous décrivez votre quotidien", body: "Ce qui vous fait perdre du temps, ce que vous voulez développer. Sans engagement." },
      { title: "On vous propose une solution et un prix", body: "Un devis clair, adapté à votre activité, avant tout démarrage." },
      { title: "On construit avec vous", body: "Vous validez chaque étape. L'outil ou le plan d'action vous appartient." },
    ],
    ctaBadge: "Sans engagement",
    ctaTitle: "Parlons de votre",
    ctaTitleEm: "projet.",
    ctaSub: "Décrivez-nous votre activité : on vous répond sous 24 h avec une première piste.",
    ctaPrimary: "Parlons de votre projet",
    ctaSecondary: "Voir nos réalisations",
  },
  en: {
    metaTitle: "Custom web apps and consulting for small businesses",
    metaDescription:
      "An app built for your trade (client tracking, scheduling, quotes, invoices) and consulting to know where to invest before you spend. Custom quote.",
    schemaName: "Web apps and consulting",
    schemaServiceType: "Web application development and strategy consulting",
    breadcrumbHome: "Home",
    breadcrumbPage: "Apps & consulting",
    heroKicker: "Web apps and consulting",
    heroTitle: "Less time wasted,",
    heroTitleEm: "better decisions.",
    heroSub:
      "A tool built for your trade, to put an end to scattered files. And an outside view to know where to put your budget before you spend it.",
    heroCta: "Let's talk about your project",
    cardTitle: "Apps and consulting",
    cardPrice: "Custom quote",
    cardItems: [
      { icon: "ph:users-duotone", label: "Client tracking" },
      { icon: "ph:calendar-duotone", label: "Scheduling" },
      { icon: "ph:receipt-duotone", label: "Quotes and invoices" },
      { icon: "ph:devices-duotone", label: "Accessible anywhere, nothing to install" },
      { icon: "ph:compass-duotone", label: "Positioning and acquisition consulting" },
    ],
    blocks: [
      {
        title: "An app",
        titleEm: "built for your trade.",
        body: "No more files everywhere and quotes scribbled on a corner of the table. One place where the whole team works, from a computer or a phone.",
        items: [
          { icon: "ph:users-duotone", label: "Your clients and their history" },
          { icon: "ph:calendar-duotone", label: "The team schedule" },
          { icon: "ph:receipt-duotone", label: "Quotes and invoices in one place" },
          { icon: "ph:clock-duotone", label: "Hours saved every week" },
        ],
      },
      {
        title: "Know where to invest",
        titleEm: "before you spend.",
        body: "Business development and digital marketing together: we help you choose before you start, to avoid building the wrong thing.",
        items: [
          { icon: "ph:crosshair-duotone", label: "Positioning" },
          { icon: "ph:package-duotone", label: "Offer" },
          { icon: "ph:path-duotone", label: "Acquisition strategy" },
          { icon: "ph:signpost-duotone", label: "Choice of channels" },
        ],
      },
    ],
    stepsKicker: "How it works",
    stepsTitle: "A project scoped before anything is built.",
    steps: [
      { title: "Tell us about your day-to-day", body: "What wastes your time, what you want to grow. No commitment." },
      { title: "We propose a solution and a price", body: "A clear quote, suited to your business, before anything starts." },
      { title: "We build it with you", body: "You approve every step. The tool or the action plan is yours." },
    ],
    ctaBadge: "No commitment",
    ctaTitle: "Let's talk about your",
    ctaTitleEm: "project.",
    ctaSub: "Tell us about your business: we reply within 24 hours with a first direction.",
    ctaPrimary: "Let's talk about your project",
    ctaSecondary: "See our work",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = hasLocale(lang) ? lang : "fr";
  const t = T[locale];
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: { canonical: `/${locale}${PATH}`, languages: { fr: `/fr${PATH}`, en: `/en${PATH}` } },
    openGraph: { title: t.metaTitle, description: t.metaDescription },
  };
}

export default async function ApplicationsConseilPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <ServicePage lang={lang} path={PATH} t={T[lang]} />;
}
