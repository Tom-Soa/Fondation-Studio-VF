import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServicePage, { type ServiceDict } from "@/components/ServicePage";
import type { Locale } from "@/lib/i18n";
import { hasLocale } from "@/lib/i18n";

const PATH = "/publicite";

const T: Record<Locale, ServiceDict> = {
  fr: {
    metaTitle: "Publicité Meta et Google pour PME, dès 500 € par mois",
    metaDescription:
      "Campagnes Instagram, Facebook et Google montrées aux personnes qui cherchent ce que vous proposez, corrigées chaque semaine. Dès 500 € par mois.",
    schemaName: "Publicité Meta et Google",
    schemaServiceType: "Gestion de campagnes publicitaires",
    breadcrumbHome: "Accueil",
    breadcrumbPage: "Publicité",
    heroKicker: "Publicité Meta et Google",
    heroTitle: "Des demandes pendant que vous",
    heroTitleEm: "travaillez.",
    heroSub:
      "Booster un post montre votre publication à plus de monde, pas forcément aux bonnes personnes. Une vraie campagne choisit qui voit votre annonce, où, quand et avec quel message.",
    heroCta: "Parlons de votre campagne",
    cardTitle: "Publicité en ligne",
    cardPrice: "Dès 500 € / mois",
    cardItems: [
      { icon: "ph:instagram-logo-duotone", label: "Instagram et Facebook" },
      { icon: "ph:google-logo-duotone", label: "Google" },
      { icon: "ph:image-duotone", label: "Visuels créés pour vous" },
      { icon: "ph:target-duotone", label: "Annonces montrées aux bonnes personnes" },
      { icon: "ph:arrows-clockwise-duotone", label: "Corrigées chaque semaine" },
    ],
    blocks: [
      {
        title: "Booster un post,",
        titleEm: "ce n'est pas de la publicité.",
        body: "Le bouton Booster élargit l'audience, sans savoir qui est susceptible de vous appeler. Une campagne, elle, part de votre client idéal.",
        items: [
          { icon: "ph:map-pin-duotone", label: "Votre zone, pas toute la France" },
          { icon: "ph:users-three-duotone", label: "Les personnes qui cherchent votre métier" },
          { icon: "ph:chat-circle-text-duotone", label: "Un message pensé pour faire appeler" },
          { icon: "ph:phone-call-duotone", label: "Des demandes qui arrivent chez vous" },
        ],
      },
      {
        title: "Chaque semaine,",
        titleEm: "on garde ce qui marche.",
        body: "On teste plusieurs visuels et plusieurs messages. Ce qui ramène des demandes reste, le reste est coupé. Votre budget va là où il rapporte.",
        items: [
          { icon: "ph:images-duotone", label: "Plusieurs visuels testés" },
          { icon: "ph:scissors-duotone", label: "Ce qui ne marche pas est coupé" },
          { icon: "ph:chart-line-up-duotone", label: "Vous savez ce que donne chaque campagne" },
          { icon: "ph:handshake-duotone", label: "Un interlocuteur qui connaît votre activité" },
        ],
      },
    ],
    stepsKicker: "Comment on travaille",
    stepsTitle: "De votre activité à vos premières demandes.",
    steps: [
      { title: "On comprend votre client idéal", body: "Ce que vous vendez, à qui, et dans quelle zone. C'est la base de toute la campagne." },
      { title: "On crée les visuels et les messages", body: "Des annonces faites pour votre activité, sur Instagram, Facebook ou Google." },
      { title: "On lance et on corrige chaque semaine", body: "On garde ce qui ramène des demandes et on coupe le reste, pour que votre budget travaille." },
    ],
    ctaBadge: "Sans engagement",
    ctaTitle: "Parlons de votre",
    ctaTitleEm: "campagne.",
    ctaSub: "Décrivez-nous votre activité : on vous dit ce qu'une campagne peut faire pour vous, et à quel budget.",
    ctaPrimary: "Parlons de votre campagne",
    ctaSecondary: "Voir nos réalisations",
  },
  en: {
    metaTitle: "Meta and Google ads for small businesses, from €500 per month",
    metaDescription:
      "Instagram, Facebook and Google campaigns shown to people looking for what you offer, adjusted every week. From €500 per month.",
    schemaName: "Meta and Google advertising",
    schemaServiceType: "Advertising campaign management",
    breadcrumbHome: "Home",
    breadcrumbPage: "Ads",
    heroKicker: "Meta and Google ads",
    heroTitle: "Enquiries while you",
    heroTitleEm: "work.",
    heroSub:
      "Boosting a post shows it to more people, not necessarily the right ones. A real campaign chooses who sees your ad, where, when and with which message.",
    heroCta: "Let's talk about your campaign",
    cardTitle: "Online advertising",
    cardPrice: "From €500 / month",
    cardItems: [
      { icon: "ph:instagram-logo-duotone", label: "Instagram and Facebook" },
      { icon: "ph:google-logo-duotone", label: "Google" },
      { icon: "ph:image-duotone", label: "Ad creatives made for you" },
      { icon: "ph:target-duotone", label: "Shown to the right people" },
      { icon: "ph:arrows-clockwise-duotone", label: "Adjusted every week" },
    ],
    blocks: [
      {
        title: "Boosting a post",
        titleEm: "is not advertising.",
        body: "The Boost button widens the audience without knowing who is likely to call you. A campaign starts from your ideal customer.",
        items: [
          { icon: "ph:map-pin-duotone", label: "Your area, not the whole country" },
          { icon: "ph:users-three-duotone", label: "People looking for your trade" },
          { icon: "ph:chat-circle-text-duotone", label: "A message designed to make people call" },
          { icon: "ph:phone-call-duotone", label: "Enquiries that reach you" },
        ],
      },
      {
        title: "Every week,",
        titleEm: "we keep what works.",
        body: "We test several creatives and messages. What brings in enquiries stays, the rest is cut. Your budget goes where it pays off.",
        items: [
          { icon: "ph:images-duotone", label: "Several creatives tested" },
          { icon: "ph:scissors-duotone", label: "What doesn't work is cut" },
          { icon: "ph:chart-line-up-duotone", label: "You know what each campaign delivers" },
          { icon: "ph:handshake-duotone", label: "One contact who knows your business" },
        ],
      },
    ],
    stepsKicker: "How we work",
    stepsTitle: "From your business to your first enquiries.",
    steps: [
      { title: "We understand your ideal customer", body: "What you sell, to whom, and where. That is the base of the whole campaign." },
      { title: "We create the creatives and messages", body: "Ads made for your business, on Instagram, Facebook or Google." },
      { title: "We launch and adjust every week", body: "We keep what brings in enquiries and cut the rest, so your budget works." },
    ],
    ctaBadge: "No commitment",
    ctaTitle: "Let's talk about your",
    ctaTitleEm: "campaign.",
    ctaSub: "Tell us about your business: we will tell you what a campaign can do for you, and at what budget.",
    ctaPrimary: "Let's talk about your campaign",
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

export default async function PublicitePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  return <ServicePage lang={lang} path={PATH} t={T[lang]} />;
}
