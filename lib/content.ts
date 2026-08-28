// Contenu local typé de la v4, localisé FR/EN. Repris des sources réelles :
// index.html (#offres, #realisations-home, #pourquoi, #qui, #no-brainer),
// site-next/components/Testimonials.tsx, faq (faits confirmés).
// Chaque collection est un Record<Locale, ...> : CONTENU[lang].

import type { Locale } from "./i18n";

// ── Offres (forfaits réels fondationstudio.fr) ─────────────────────
export interface OfferFeature {
  text: string;
  included: boolean;
}

export interface Offer {
  slug: string;
  name: string;
  price: string;
  priceValue?: number; // pour calcul de l'acompte (60%)
  priceNote?: string; // ex: "À partir de"
  forWho: string;
  features: OfferFeature[];
  note: string;
  ctaLabel: string;
  highlighted?: boolean;
  badge?: string;
  quoteOnly?: boolean; // Premium : sur devis, pas de paiement direct
  paymentUrl?: string; // Stripe Payment Link (acompte 60%), à fournir par le client
}

export const OFFERS: Record<Locale, Offer[]> = {
  fr: [
    {
      slug: "standard",
      name: "Standard",
      price: "1 400 €",
      priceValue: 1400,
      forWho: "PME locale, budget maîtrisé",
      features: [
        { text: "Site vitrine jusqu'à 5 pages", included: true },
        { text: "Design sur-mesure pensé pour vendre", included: true },
        { text: "Optimisation du texte", included: false },
        { text: "Gestion autonome de votre site", included: false },
        { text: "Animations & interactions", included: false },
        { text: "SEO technique de base", included: true },
        { text: "Formulaire de contact", included: true },
        { text: "Hébergement gratuit (illimité)", included: true },
        { text: "1 mois de maintenance offert", included: true },
        { text: "Support prioritaire", included: false },
      ],
      note: "Livraison en 14 à 21 jours · Contrat signé avant démarrage",
      ctaLabel: "Voir le détail",
      paymentUrl: "",
    },
    {
      slug: "conversion",
      name: "Conversion",
      price: "1 900 €",
      priceValue: 1900,
      forWho: "PME ambitieuse, croissance accélérée",
      features: [
        { text: "Site vitrine jusqu'à 8 pages", included: true },
        { text: "Design sur-mesure pensé pour vendre", included: true },
        { text: "Optimisation du texte incluse", included: true },
        { text: "Autonomie sur votre site (jusqu'à 80%)", included: true },
        { text: "Animations & interactions", included: true },
        { text: "SEO technique avancé", included: true },
        { text: "Intégration d'outils & formulaires avancés", included: true },
        { text: "Hébergement gratuit (illimité)", included: true },
        { text: "3 mois de maintenance offerts", included: true },
        { text: "Support prioritaire", included: false },
      ],
      note: "Livraison en 14 à 21 jours · Contrat signé avant démarrage",
      ctaLabel: "Voir le détail",
      highlighted: true,
      badge: "Le plus choisi",
      paymentUrl: "",
    },
    {
      slug: "premium",
      name: "Premium",
      price: "2 400 €",
      priceNote: "À partir de",
      forWho: "Image ultra premium · sur devis",
      features: [
        { text: "Pages illimitées & fonctionnalités sur-mesure", included: true },
        { text: "Design ultra premium pensé pour vendre", included: true },
        { text: "Optimisation du texte premium", included: true },
        { text: "Autonomie totale : modifiez textes & images vous-même", included: true },
        { text: "Animations & effets visuels premium", included: true },
        { text: "SEO technique avancé + audit de performances", included: true },
        { text: "Intégration IA & outils avancés", included: true },
        { text: "Hébergement gratuit (illimité)", included: true },
        { text: "6 mois de maintenance offerts", included: true },
        { text: "Support prioritaire", included: true },
      ],
      note: "Devis personnalisé · Contrat signé avant démarrage",
      ctaLabel: "Voir le détail",
      quoteOnly: true,
    },
  ],
  en: [
    {
      slug: "standard",
      name: "Standard",
      price: "€1,400",
      priceValue: 1400,
      forWho: "Local small business, controlled budget",
      features: [
        { text: "Showcase website with up to 5 pages", included: true },
        { text: "Custom design built to sell", included: true },
        { text: "Copy optimization", included: false },
        { text: "Manage your site on your own", included: false },
        { text: "Animations & interactions", included: false },
        { text: "Essential technical SEO", included: true },
        { text: "Contact form", included: true },
        { text: "Free hosting (unlimited)", included: true },
        { text: "1 month of maintenance included", included: true },
        { text: "Priority support", included: false },
      ],
      note: "Delivered in 14 to 21 days · Contract signed before kickoff",
      ctaLabel: "See details",
      paymentUrl: "",
    },
    {
      slug: "conversion",
      name: "Conversion",
      price: "€1,900",
      priceValue: 1900,
      forWho: "Ambitious SMB, accelerated growth",
      features: [
        { text: "Showcase website with up to 8 pages", included: true },
        { text: "Custom design built to sell", included: true },
        { text: "Copy optimization included", included: true },
        { text: "Run your site yourself (up to 80%)", included: true },
        { text: "Animations & interactions", included: true },
        { text: "Advanced technical SEO", included: true },
        { text: "Advanced tools & form integrations", included: true },
        { text: "Free hosting (unlimited)", included: true },
        { text: "3 months of maintenance included", included: true },
        { text: "Priority support", included: false },
      ],
      note: "Delivered in 14 to 21 days · Contract signed before kickoff",
      ctaLabel: "See details",
      highlighted: true,
      badge: "Most popular",
      paymentUrl: "",
    },
    {
      slug: "premium",
      name: "Premium",
      price: "€2,400",
      priceNote: "From",
      forWho: "Ultra premium brand image · custom quote",
      features: [
        { text: "Unlimited pages & custom features", included: true },
        { text: "Ultra premium design built to sell", included: true },
        { text: "Premium copy optimization", included: true },
        { text: "Full autonomy: edit text & images yourself", included: true },
        { text: "Premium animations & visual effects", included: true },
        { text: "Advanced technical SEO + performance audit", included: true },
        { text: "AI integration & advanced tools", included: true },
        { text: "Free hosting (unlimited)", included: true },
        { text: "6 months of maintenance included", included: true },
        { text: "Priority support", included: true },
      ],
      note: "Personalized quote · Contract signed before kickoff",
      ctaLabel: "See details",
      quoteOnly: true,
    },
  ],
};

// Acompte demandé à la commande (le reste à la livraison).
export const DEPOSIT_RATE = 0.6;

export function depositLabel(offer: Offer): string | null {
  if (!offer.priceValue) return null;
  const v = Math.round(offer.priceValue * DEPOSIT_RATE);
  return `${v.toLocaleString("fr-FR")} €`;
}

// ── Options à la carte (s'ajoutent à n'importe quel forfait) ───────
export interface OptionItem {
  name: string;
  price: string;
  description: string;
}

export const OPTIONS: Record<Locale, OptionItem[]> = {
  fr: [
    {
      name: "Maintenance mensuelle",
      price: "Sur devis",
      description: "Modifications régulières de votre site après la période offerte incluse dans votre forfait.",
    },
    {
      name: "Media Buying",
      price: "Sur devis",
      description: "Gestion de votre publicité sur Google et Meta (Instagram/Facebook) pour attirer de nouveaux clients, avec un suivi mensuel de vos campagnes.",
    },
    {
      name: "Séquences de mails",
      price: "Sur devis",
      description: "Rédaction et mise en place de séquences automatiques : mail de bienvenue, relances, suivi après achat.",
    },
    {
      name: "Refonte branding",
      price: "Sur devis",
      description: "Logo, identité visuelle, polices, couleurs, packaging. Tout ce qui rend votre marque reconnaissable.",
    },
    {
      name: "Système de blog",
      price: "Sur devis",
      description: "Ajout d'un blog à votre site, avec gestion des articles, catégories et optimisation pour Google.",
    },
    {
      name: "Création de logo",
      price: "Sur devis",
      description: "Conception d'un logo professionnel : typographie, couleurs, déclinaisons. Fichiers livrés en haute définition.",
    },
  ],
  en: [
    {
      name: "Monthly maintenance",
      price: "Custom quote",
      description: "Regular updates to your site after the free maintenance period included in your plan.",
    },
    {
      name: "Media buying",
      price: "Custom quote",
      description: "We manage your advertising on Google and Meta (Instagram/Facebook) to bring in new customers, with monthly campaign reporting.",
    },
    {
      name: "Email sequences",
      price: "Custom quote",
      description: "Writing and setting up automated sequences: welcome email, follow-ups, post-purchase check-ins.",
    },
    {
      name: "Brand refresh",
      price: "Custom quote",
      description: "Logo, visual identity, typography, colors, packaging. Everything that makes your brand recognizable.",
    },
    {
      name: "Blog system",
      price: "Custom quote",
      description: "Add a blog to your site, with article management, categories and Google optimization.",
    },
    {
      name: "Logo design",
      price: "Custom quote",
      description: "A professional logo: typography, colors, variations. Files delivered in high definition.",
    },
  ],
};

export const OPTIONS_NOTE: Record<Locale, string> = {
  fr: "Ces forfaits sont une base. Chaque option ci-dessous s'ajoute à n'importe quel forfait, sans dépendance technique ni abonnement caché.",
  en: "These plans are a starting point. Every option below can be added to any plan, with no technical lock-in and no hidden subscription.",
};

export const PAYMENT_NOTE: Record<Locale, string> = {
  fr: "Acompte de 60 % à la commande, solde de 40 % à la livraison. Paiement en plusieurs fois possible. Prix hors taxes (TVA non applicable, art. 293 B du CGI).",
  en: "60% deposit when you order, 40% balance on delivery. Installment payments available. Prices before tax (VAT not applicable, art. 293 B of the French CGI).",
};

// ── Services sur-mesure (e-commerce + acquisition) ─────────────────
export interface Service {
  title: string;
  price: string;
  description: string;
}

export const SERVICES: Record<Locale, Service[]> = {
  fr: [
    {
      title: "Boutique en ligne Shopify",
      price: "À partir de 2 900 €",
      description:
        "Vous vendez vos produits en ligne ? On crée votre boutique Shopify complète : catalogue, panier, paiement sécurisé et gestion des commandes. Pensée pour vendre, simple à gérer au quotidien.",
    },
    {
      title: "Publicité Meta & Google",
      price: "Sur devis",
      description:
        "On ne fait pas que votre site : on vous amène des clients. Grâce à notre expérience de la publicité sur Instagram, Facebook et Google, on met en place des campagnes pour générer des contacts qualifiés et des ventes.",
    },
  ],
  en: [
    {
      title: "Shopify online store",
      price: "From €2,900",
      description:
        "Selling products online? We build your complete Shopify store: catalog, cart, secure checkout and order management. Built to sell, simple to run day to day.",
    },
    {
      title: "Meta & Google advertising",
      price: "Custom quote",
      description:
        "We do more than your website: we bring you customers. Drawing on our experience with Instagram, Facebook and Google advertising, we set up campaigns that generate qualified leads and sales.",
    },
  ],
};

// ── Chiffres clés (compteurs animés) ───────────────────────────────
export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export const STATS: Record<Locale, Stat[]> = {
  fr: [
    { value: 25, prefix: "+", label: "projets réalisés" },
    { value: 21, label: "jours en moyenne" },
    { value: 0, suffix: " €", label: "d'abonnement, hébergement offert" },
    { value: 100, suffix: " %", label: "site qui vous appartient" },
  ],
  en: [
    { value: 25, prefix: "+", label: "projects delivered" },
    { value: 21, label: "days on average" },
    { value: 0, suffix: " €", label: "in subscriptions, hosting included" },
    { value: 100, suffix: " %", label: "of the site belongs to you" },
  ],
};

// ── Prise de contact ──────────────────────────────────────────────
// WhatsApp (numéro +33 6 37 99 97 38, format international sans + ni 0).
export const WHATSAPP_URL = "https://wa.me/33637999738";

// ── Aperçus de sites réalisés (marquee du hero + cartes réalisations) ─
export interface ShowcaseItem {
  src: string;
  alt: string;
  name: string;
  offer: string;
  sector: string;     // secteur d'activité
  duration: string;   // délai de réalisation
  type: string;       // type de site (vitrine, e-commerce…)
  summary: string;    // description longue (fiche détail)
  highlights: string[]; // points clés livrés
}

export const SHOWCASE: Record<Locale, ShowcaseItem[]> = {
  fr: [
    {
      src: "/showcase/academie-sportive.jpg",
      alt: "Site web Académie Sportive La Redoute",
      name: "Académie Sportive",
      offer: "Offre Conversion",
      sector: "Club sportif / association",
      duration: "3 semaines",
      type: "Site vitrine",
      summary:
        "Site vitrine pour une académie de football qui voulait recruter de nouveaux jeunes et rassurer les parents. Mise en avant des valeurs du club, des pôles et des actualités.",
      highlights: ["Présentation des 4 pôles", "Espace actualités", "Formulaire d'inscription", "Section partenaires & dons"],
    },
    {
      src: "/showcase/elity.jpg",
      alt: "Site web Elity Conseils",
      name: "Elity Conseils",
      offer: "Offre Premium",
      sector: "Conseil / cession d'entreprise",
      duration: "4 semaines",
      type: "Site vitrine premium",
      summary:
        "Site haut de gamme pour un cabinet de conseil en cession et rachat d'entreprise à La Réunion. Une image premium et confidentielle, pensée pour des dirigeants.",
      highlights: ["Direction artistique premium", "Méthode détaillée", "Cas clients", "Prise de contact qualifiée"],
    },
    {
      src: "/showcase/roboli.jpg",
      alt: "Site e-commerce Roboli Audio",
      name: "Roboli Audio",
      offer: "E-commerce Shopify",
      sector: "Hi-Fi / produits audio",
      duration: "4 semaines",
      type: "Boutique e-commerce",
      summary:
        "Boutique en ligne pour une marque de câbles et meubles Hi-Fi artisanaux. Catalogue produits, panier, paiement sécurisé et mise en avant de la garantie à vie.",
      highlights: ["Catalogue & fiches produits", "Panier & paiement sécurisé", "Bandeau réassurance", "Multi-langues FR/EN"],
    },
    {
      src: "/showcase/forminter.jpg",
      alt: "Site web Forminter",
      name: "Forminter",
      offer: "Offre Conversion",
      sector: "Centre de formation (CFA)",
      duration: "3 semaines",
      type: "Site vitrine",
      summary:
        "Site pour un centre de formation en alternance. Objectif : présenter les formations et générer des candidatures, côté apprentis comme côté entreprises.",
      highlights: ["Catalogue de formations", "Espace entreprises", "Blog & FAQ", "Tunnel de candidature"],
    },
    {
      src: "/showcase/vsp-location.jpg",
      alt: "Site web VSP Location",
      name: "VSP Location",
      offer: "Offre Conversion",
      sector: "Location de véhicules sans permis",
      duration: "3 semaines",
      type: "Site vitrine",
      summary:
        "Site pour un réseau d'agences de location de voitures sans permis. Mise en avant des véhicules, des agences et d'un parcours de réservation simple.",
      highlights: ["Catalogue de véhicules", "Réseau d'agences", "Devenir loueur", "Réservation en ligne"],
    },
    {
      src: "/showcase/cias.jpg",
      alt: "Site web CIAS Sud Mayotte",
      name: "CIAS Sud Mayotte",
      offer: "Offre Standard",
      sector: "Établissement public / solidarité",
      duration: "2 semaines",
      type: "Site vitrine",
      summary:
        "Site institutionnel pour un centre intercommunal d'action sociale. Clarté de l'information, accès aux droits et aux services pour les habitants du Sud de Mayotte.",
      highlights: ["Présentation des services", "Gouvernance & membres", "Actualités & projets", "Contact accessible"],
    },
    {
      src: "/showcase/sico-prefa.jpg",
      alt: "Site web Sico Prefa",
      name: "Sico Prefa",
      offer: "Offre Premium",
      sector: "Construction préfabriquée",
      duration: "4 semaines",
      type: "Site vitrine premium",
      summary:
        "Site pour un constructeur de maisons préfabriquées dans l'Océan Indien et les Antilles. Mise en valeur des réalisations et estimation de projet en ligne.",
      highlights: ["Galerie de réalisations", "Estimateur de projet", "Présentation des services", "Demande de devis"],
    },
  ],
  en: [
    {
      src: "/showcase/academie-sportive.jpg",
      alt: "Académie Sportive La Redoute website",
      name: "Académie Sportive",
      offer: "Conversion plan",
      sector: "Sports club / nonprofit",
      duration: "3 weeks",
      type: "Showcase website",
      summary:
        "Showcase website for a football academy looking to recruit new young players and reassure parents. Highlights the club's values, its programs and its news.",
      highlights: ["Presentation of the 4 programs", "News section", "Sign-up form", "Partners & donations section"],
    },
    {
      src: "/showcase/elity.jpg",
      alt: "Elity Conseils website",
      name: "Elity Conseils",
      offer: "Premium plan",
      sector: "Consulting / business sales",
      duration: "4 weeks",
      type: "Premium showcase website",
      summary:
        "High-end website for a consulting firm specialized in buying and selling businesses in Reunion Island. A premium, confidential image designed for executives.",
      highlights: ["Premium art direction", "Detailed methodology", "Client case studies", "Qualified contact flow"],
    },
    {
      src: "/showcase/roboli.jpg",
      alt: "Roboli Audio e-commerce website",
      name: "Roboli Audio",
      offer: "Shopify e-commerce",
      sector: "Hi-Fi / audio products",
      duration: "4 weeks",
      type: "E-commerce store",
      summary:
        "Online store for a brand of handcrafted Hi-Fi cables and furniture. Product catalog, cart, secure checkout and a lifetime warranty front and center.",
      highlights: ["Catalog & product pages", "Cart & secure checkout", "Reassurance banner", "FR/EN multi-language"],
    },
    {
      src: "/showcase/forminter.jpg",
      alt: "Forminter website",
      name: "Forminter",
      offer: "Conversion plan",
      sector: "Vocational training center",
      duration: "3 weeks",
      type: "Showcase website",
      summary:
        "Website for a work-study training center. The goal: present the programs and generate applications, from both apprentices and companies.",
      highlights: ["Training catalog", "Company area", "Blog & FAQ", "Application funnel"],
    },
    {
      src: "/showcase/vsp-location.jpg",
      alt: "VSP Location website",
      name: "VSP Location",
      offer: "Conversion plan",
      sector: "License-free vehicle rental",
      duration: "3 weeks",
      type: "Showcase website",
      summary:
        "Website for a network of license-free car rental agencies. Showcases the vehicles, the agencies and a simple booking journey.",
      highlights: ["Vehicle catalog", "Agency network", "Become a rental partner", "Online booking"],
    },
    {
      src: "/showcase/cias.jpg",
      alt: "CIAS Sud Mayotte website",
      name: "CIAS Sud Mayotte",
      offer: "Standard plan",
      sector: "Public institution / social services",
      duration: "2 weeks",
      type: "Showcase website",
      summary:
        "Institutional website for an intercommunal social action center. Clear information, access to rights and services for the residents of southern Mayotte.",
      highlights: ["Services overview", "Governance & members", "News & projects", "Accessible contact"],
    },
    {
      src: "/showcase/sico-prefa.jpg",
      alt: "Sico Prefa website",
      name: "Sico Prefa",
      offer: "Premium plan",
      sector: "Prefabricated construction",
      duration: "4 weeks",
      type: "Premium showcase website",
      summary:
        "Website for a builder of prefabricated homes across the Indian Ocean and the Caribbean. Showcases completed projects with an online project estimator.",
      highlights: ["Project gallery", "Project estimator", "Services overview", "Quote request"],
    },
  ],
};

// ── Réalisations (cartes gradient, pas de screenshots) ─────────────
export interface Realisation {
  slug: string;
  title: string;
  category: string;
  sector: string;
  metric: string;
  description: string;
}

export const REALISATIONS: Record<Locale, Realisation[]> = {
  fr: [
    {
      slug: "maison-leconte",
      title: "Maison Leconte",
      category: "Standard",
      sector: "Boulangerie artisanale",
      metric: "×2 demandes de contact",
      description:
        "Boulangerie artisanale à Saint-Denis. Demandes de contact doublées en 3 mois grâce à un site clair et rassurant.",
    },
    {
      slug: "cabinet-merle",
      title: "Cabinet Merle",
      category: "Conversion",
      sector: "Expertise comptable",
      metric: "×3 prospects qualifiés",
      description:
        "Cabinet d'expertise comptable. Tunnel de prise de RDV optimisé. 3× plus de prospects qualifiés.",
    },
    {
      slug: "atelier-durif",
      title: "Atelier Durif",
      category: "Standard",
      sector: "Artisanat",
      metric: "Image qui rassure",
      description:
        "Site vitrine net et soigné. Une présence en ligne qui inspire confiance et que les clients remarquent.",
    },
    {
      slug: "fabre-immobilier",
      title: "Fabre Immobilier",
      category: "Conversion",
      sector: "Agence immobilière",
      metric: "+ demandes de visite",
      description:
        "Agence immobilière. Hausse des demandes de visite dès la première semaine. Le site inspire confiance.",
    },
    {
      slug: "guerin-couverture",
      title: "Guérin Couverture",
      category: "Standard",
      sector: "BTP / couverture",
      metric: "Identité sur-mesure",
      description:
        "Couvreur. Un site qui reflète enfin l'entreprise, loin du template traîné pendant 5 ans.",
    },
    {
      slug: "studio-roussel",
      title: "Studio Roussel",
      category: "Conversion",
      sector: "Studio créatif",
      metric: "Livré en 3 semaines",
      description:
        "Maquette présentée en 5 jours, site en ligne sous 3 semaines. Aucun retard, suivi irréprochable.",
    },
  ],
  en: [
    {
      slug: "maison-leconte",
      title: "Maison Leconte",
      category: "Standard",
      sector: "Artisan bakery",
      metric: "×2 contact requests",
      description:
        "Artisan bakery in Saint-Denis. Contact requests doubled in 3 months thanks to a clear, reassuring website.",
    },
    {
      slug: "cabinet-merle",
      title: "Cabinet Merle",
      category: "Conversion",
      sector: "Accounting firm",
      metric: "×3 qualified leads",
      description:
        "Accounting firm. Optimized appointment booking funnel. 3× more qualified leads.",
    },
    {
      slug: "atelier-durif",
      title: "Atelier Durif",
      category: "Standard",
      sector: "Craftsmanship",
      metric: "An image that reassures",
      description:
        "A clean, polished showcase website. An online presence that inspires trust and gets noticed by clients.",
    },
    {
      slug: "fabre-immobilier",
      title: "Fabre Immobilier",
      category: "Conversion",
      sector: "Real estate agency",
      metric: "+ viewing requests",
      description:
        "Real estate agency. Viewing requests rose from the very first week. The website inspires trust.",
    },
    {
      slug: "guerin-couverture",
      title: "Guérin Couverture",
      category: "Standard",
      sector: "Construction / roofing",
      metric: "Tailor-made identity",
      description:
        "Roofing company. A website that finally reflects the business, far from the template they had dragged along for 5 years.",
    },
    {
      slug: "studio-roussel",
      title: "Studio Roussel",
      category: "Conversion",
      sector: "Creative studio",
      metric: "Delivered in 3 weeks",
      description:
        "Mockup presented in 5 days, website live within 3 weeks. No delays, flawless follow-through.",
    },
  ],
};

// ── Pourquoi nous (piliers) ────────────────────────────────────────
export interface Pillar {
  num: string;
  title: string;
  description: string;
}

export const PILLARS: Record<Locale, Pillar[]> = {
  fr: [
    {
      num: "01",
      title: "Un site qui vous appartient",
      description:
        "Pas de WordPress, pas de Wix, aucun abonnement caché. Votre site est rapide, sécurisé et 100 % à vous.",
    },
    {
      num: "02",
      title: "Livré en 21 jours chrono",
      description:
        "Un process éprouvé sur 25 projets. Chaque étape a une date et un livrable. Zéro attente, zéro zone grise.",
    },
    {
      num: "03",
      title: "Design orienté conversion",
      description:
        "Chaque section, chaque CTA est pensé pour transformer vos visiteurs en clients. Pas de décoration gratuite.",
    },
    {
      num: "04",
      title: "SEO intégré dès le jour 1",
      description:
        "Structure pensée pour Google et balisage complet. Votre site est visible et bien référencé dès le lancement.",
    },
  ],
  en: [
    {
      num: "01",
      title: "A website you own",
      description:
        "No WordPress, no Wix, no hidden subscription. Your website is fast, secure and 100% yours.",
    },
    {
      num: "02",
      title: "Delivered in 21 days flat",
      description:
        "A process proven across 25 projects. Every step has a date and a deliverable. Zero waiting, zero gray areas.",
    },
    {
      num: "03",
      title: "Conversion-driven design",
      description:
        "Every section, every CTA is designed to turn your visitors into customers. No decoration for decoration's sake.",
    },
    {
      num: "04",
      title: "SEO built in from day 1",
      description:
        "A structure designed for Google with complete markup. Your website is visible and well ranked from launch.",
    },
  ],
};

// ── Équipe (rôles) ─────────────────────────────────────────────────
export interface Role {
  name: string;
  description: string;
}

export const TEAM_INTRO: Record<Locale, string> = {
  fr: "ACTC rassemble un réseau de freelances sélectionnés : designers, développeurs, stratèges. Pas d'agence surdimensionnée, pas d'intermédiaires. Vous travaillez avec les personnes qui créent votre site.",
  en: "ACTC brings together a network of hand-picked freelancers: designers, developers, strategists. No oversized agency, no middlemen. You work with the people who build your website.",
};

export const ROLES: Record<Locale, Role[]> = {
  fr: [
    {
      name: "Design & Identité",
      description:
        "Maquettes, direction artistique, systèmes de design. Chaque projet a sa propre identité visuelle.",
    },
    {
      name: "Développement",
      description:
        "Code sur-mesure, performance, accessibilité. Aucun template, aucun constructeur de page.",
    },
    {
      name: "Stratégie & SEO",
      description:
        "Architecture de l'information, conversion, référencement. Le site travaille pour vous 24h/24.",
    },
  ],
  en: [
    {
      name: "Design & Identity",
      description:
        "Mockups, art direction, design systems. Every project gets its own visual identity.",
    },
    {
      name: "Development",
      description:
        "Custom code, performance, accessibility. No templates, no page builders.",
    },
    {
      name: "Strategy & SEO",
      description:
        "Information architecture, conversion, search rankings. Your website works for you around the clock.",
    },
  ],
};

// ── Témoignages ────────────────────────────────────────────────────
export interface Testimonial {
  text: string;
  initials: string;
  name: string;
  role: string;
  project: string; // nom affiché en "logo" client
  realisationSlug?: string; // ancre vers la réalisation (sinon /realisations)
}

export const TESTIMONIALS: Record<Locale, Testimonial[]> = {
  fr: [
    {
      text: "En 3 semaines après la mise en ligne, notre taux de demandes de contact a doublé. Le site attire des clients qu'on n'aurait jamais touchés avec notre ancien WordPress.",
      initials: "ML",
      name: "Marie-Laure Donnet",
      role: "Gérante · Maison Leconte",
      project: "Maison Leconte",
      realisationSlug: "maison-leconte",
    },
    {
      text: "Mon site est rapide et super simple à utiliser. Les clients me le font remarquer spontanément, et ça se sent sur les réservations.",
      initials: "TD",
      name: "Thomas Durif",
      role: "Artisan · Atelier Durif",
      project: "Atelier Durif",
      realisationSlug: "atelier-durif",
    },
    {
      text: "J'avais un budget serré et des doutes. Finalement, c'est le meilleur investissement de l'année. Process simple, livraison rapide, et le résultat dépasse mes attentes.",
      initials: "SC",
      name: "Sophie Carpentier",
      role: "Avocate · Cabinet Moreau",
      project: "Cabinet Moreau",
    },
    {
      text: "Résultat professionnel, délai tenu. Notre agence immobilière a vu ses demandes de visite augmenter dès la première semaine. Le site inspire vraiment confiance.",
      initials: "PL",
      name: "Pierre-Louis Fabre",
      role: "Directeur · Fabre Immobilier",
      project: "Fabre Immobilier",
      realisationSlug: "fabre-immobilier",
    },
    {
      text: "Le sur-mesure se voit. Mes clients me disent que le site reflète enfin qui nous sommes. Très différent du template précédent qu'on traînait depuis 5 ans.",
      initials: "AG",
      name: "Alexandre Guérin",
      role: "Gérant · Guérin Couverture",
      project: "Guérin Couverture",
      realisationSlug: "guerin-couverture",
    },
    {
      text: "Maquette présentée en 5 jours, site en ligne sous 3 semaines. Pas un retard, pas un mail sans réponse. Du sérieux comme on n'en voit plus souvent.",
      initials: "CR",
      name: "Camille Roussel",
      role: "Co-fondatrice · Studio Roussel",
      project: "Studio Roussel",
      realisationSlug: "studio-roussel",
    },
  ],
  en: [
    {
      text: "Within 3 weeks of going live, our contact request rate doubled. The website attracts clients we would never have reached with our old WordPress.",
      initials: "ML",
      name: "Marie-Laure Donnet",
      role: "Owner · Maison Leconte",
      project: "Maison Leconte",
      realisationSlug: "maison-leconte",
    },
    {
      text: "My website is fast and incredibly easy to use. Clients spontaneously comment on it, and I can feel it in the bookings.",
      initials: "TD",
      name: "Thomas Durif",
      role: "Craftsman · Atelier Durif",
      project: "Atelier Durif",
      realisationSlug: "atelier-durif",
    },
    {
      text: "I had a tight budget and some doubts. In the end, it was the best investment of the year. Simple process, fast delivery, and the result exceeded my expectations.",
      initials: "SC",
      name: "Sophie Carpentier",
      role: "Lawyer · Cabinet Moreau",
      project: "Cabinet Moreau",
    },
    {
      text: "Professional result, deadline met. Our real estate agency saw viewing requests increase from the very first week. The website truly inspires trust.",
      initials: "PL",
      name: "Pierre-Louis Fabre",
      role: "Director · Fabre Immobilier",
      project: "Fabre Immobilier",
      realisationSlug: "fabre-immobilier",
    },
    {
      text: "The custom work shows. My clients tell me the website finally reflects who we are. Very different from the template we had dragged along for 5 years.",
      initials: "AG",
      name: "Alexandre Guérin",
      role: "Owner · Guérin Couverture",
      project: "Guérin Couverture",
      realisationSlug: "guerin-couverture",
    },
    {
      text: "Mockup presented in 5 days, website live within 3 weeks. Not a single delay, not one unanswered email. The kind of reliability you rarely see anymore.",
      initials: "CR",
      name: "Camille Roussel",
      role: "Co-founder · Studio Roussel",
      project: "Studio Roussel",
      realisationSlug: "studio-roussel",
    },
  ],
};

// ── FAQ (faits confirmés) ──────────────────────────────────────────
export interface FaqItem {
  q: string;
  a: string;
}

export const FAQ: Record<Locale, FaqItem[]> = {
  fr: [
    {
      q: "Combien coûte un site ?",
      a: "Nos forfaits démarrent à 1 400 € (Standard), 1 900 € (Conversion) et 2 400 € et plus (Premium, sur devis). Votre site vous appartient totalement, sans abonnement caché.",
    },
    {
      q: "En combien de temps mon site est-il livré ?",
      a: "Entre 2 et 4 semaines selon l'offre et la complexité du projet. Chaque étape a une date et un livrable précis.",
    },
    {
      q: "Le site m'appartient-il vraiment ?",
      a: "Oui, à 100 %. Pas de WordPress, pas de Wix, aucune dépendance. Votre site vous appartient entièrement : vous en faites ce que vous voulez, sans abonnement caché.",
    },
    {
      q: "La maquette est-elle vraiment gratuite ?",
      a: "Oui. On vous présente une vraie proposition visuelle sur-mesure, en appel vidéo. Si elle vous convient, on démarre. Sinon, vous ne payez rien.",
    },
    {
      q: "Mon site sera-t-il bien référencé sur Google ?",
      a: "Le SEO est intégré dès le premier jour : structure sémantique, balisage schema et contenus optimisés, pour être visible sur Google avant même le lancement.",
    },
    {
      q: "Puis-je modifier mon site moi-même ensuite ?",
      a: "Oui. On vous remet un code clair et, selon l'offre, une interface pour gérer vos contenus. Vous n'êtes jamais prisonnier d'un prestataire.",
    },
  ],
  en: [
    {
      q: "How much does a website cost?",
      a: "Our packages start at €1,400 (Standard), €1,900 (Conversion) and €2,400 and up (Premium, custom quote). Your website belongs entirely to you, with no hidden subscription.",
    },
    {
      q: "How long until my website is delivered?",
      a: "Between 2 and 4 weeks depending on the plan and the complexity of the project. Every step has a precise date and deliverable.",
    },
    {
      q: "Do I really own the website?",
      a: "Yes, 100%. No WordPress, no Wix, no dependencies. Your website belongs entirely to you: do whatever you want with it, with no hidden subscription.",
    },
    {
      q: "Is the mockup really free?",
      a: "Yes. We present a real, custom visual proposal over a video call. If you like it, we start. If not, you pay nothing.",
    },
    {
      q: "Will my website rank well on Google?",
      a: "SEO is built in from day one: semantic structure, schema markup and optimized content, so you are visible on Google even before launch.",
    },
    {
      q: "Can I edit my website myself afterwards?",
      a: "Yes. You get clean code and, depending on the plan, an interface to manage your content. You are never locked in to a provider.",
    },
  ],
};
