// Contenu local typé de la v4. Repris des sources réelles :
// index.html (#offres, #realisations-home, #pourquoi, #qui, #no-brainer),
// site-next/components/Testimonials.tsx, faq (faits confirmés).

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
  paymentUrl?: string; // Stripe Payment Link (acompte 60%) — à fournir par le client
}

export const OFFERS: Offer[] = [
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
];

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

export const OPTIONS: OptionItem[] = [
  {
    name: "Maintenance mensuelle",
    price: "150 €/mois",
    description: "Modifications régulières de votre site après la période offerte incluse dans votre forfait.",
  },
  {
    name: "Publicité sur Google",
    price: "300 €",
    description: "Création et mise en place de votre publicité Google pour attirer de nouveaux clients, configuration complète incluse. 300 € par régie.",
  },
  {
    name: "Publicité sur Meta",
    price: "300 €",
    description: "Création et mise en place de vos campagnes sur Instagram et Facebook pour générer des contacts qualifiés, configuration complète incluse. 300 € par régie.",
  },
  {
    name: "Séquences de mails",
    price: "300 €",
    description: "Rédaction et mise en place de séquences automatiques : mail de bienvenue, relances, suivi après achat.",
  },
  {
    name: "Refonte branding",
    price: "500 €",
    description: "Logo, identité visuelle, polices, couleurs, packaging. Tout ce qui rend votre marque reconnaissable.",
  },
  {
    name: "Système de blog",
    price: "300 €",
    description: "Ajout d'un blog à votre site, avec gestion des articles, catégories et optimisation pour Google.",
  },
  {
    name: "Création de logo",
    price: "150 €",
    description: "Conception d'un logo professionnel : typographie, couleurs, déclinaisons. Fichiers livrés en haute définition.",
  },
];

export const OPTIONS_NOTE =
  "Ces forfaits sont une base. Chaque option ci-dessous s'ajoute à n'importe quel forfait, sans dépendance technique ni abonnement caché.";

export const PAYMENT_NOTE =
  "Acompte de 60 % à la commande, solde de 40 % à la livraison. Paiement en plusieurs fois possible. Prix hors taxes (TVA non applicable, art. 293 B du CGI).";

// ── Services sur-mesure (e-commerce + acquisition) ─────────────────
export interface Service {
  title: string;
  price: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    title: "Boutique en ligne Shopify",
    price: "À partir de 3 900 €",
    description:
      "Vous vendez vos produits en ligne ? On crée votre boutique Shopify complète : catalogue, panier, paiement sécurisé et gestion des commandes. Pensée pour vendre, simple à gérer au quotidien.",
  },
  {
    title: "Publicité Meta & Google",
    price: "Sur devis",
    description:
      "On ne fait pas que votre site : on vous amène des clients. Grâce à notre expérience de la publicité sur Instagram, Facebook et Google, on met en place des campagnes pour générer des contacts qualifiés et des ventes.",
  },
];

// ── Chiffres clés (compteurs animés) ───────────────────────────────
export interface Stat {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
}

export const STATS: Stat[] = [
  { value: 25, prefix: "+", label: "projets réalisés" },
  { value: 21, label: "jours en moyenne" },
  { value: 0, suffix: " €", label: "d'abonnement, hébergement offert" },
  { value: 100, suffix: " %", label: "site qui vous appartient" },
];

// ── Prise de contact ──────────────────────────────────────────────
// Lien de réservation d'appel (Calendly officiel Fondation Studio).
export const CALENDLY_URL = "https://calendly.com/fondation-studio/appel-video-fondation-studio";
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

export const SHOWCASE: ShowcaseItem[] = [
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
];

// ── Réalisations (cartes gradient, pas de screenshots) ─────────────
export interface Realisation {
  slug: string;
  title: string;
  category: string;
  sector: string;
  metric: string;
  description: string;
}

export const REALISATIONS: Realisation[] = [
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
];

// ── Pourquoi nous (piliers) ────────────────────────────────────────
export interface Pillar {
  num: string;
  title: string;
  description: string;
}

export const PILLARS: Pillar[] = [
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
];

// ── Équipe (rôles) ─────────────────────────────────────────────────
export interface Role {
  name: string;
  description: string;
}

export const TEAM_INTRO =
  "Fondation Studio rassemble un réseau de freelances sélectionnés : designers, développeurs, stratèges. Pas d'agence surdimensionnée, pas d'intermédiaires. Vous travaillez avec les personnes qui créent votre site.";

export const ROLES: Role[] = [
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
];

// ── Témoignages ────────────────────────────────────────────────────
export interface Testimonial {
  text: string;
  initials: string;
  name: string;
  role: string;
  project: string; // nom affiché en "logo" client
  realisationSlug?: string; // ancre vers la réalisation (sinon /realisations)
}

export const TESTIMONIALS: Testimonial[] = [
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
];

// ── FAQ (faits confirmés) ──────────────────────────────────────────
export interface FaqItem {
  q: string;
  a: string;
}

export const FAQ: FaqItem[] = [
  {
    q: "Combien coûte un site ?",
    a: "Nos offres démarrent à 1 400 € pour un site vitrine sur-mesure (offre Standard), 1 900 € pour l'offre Conversion, et à partir de 2 400 € sur devis pour l'offre Premium. Votre site vous appartient totalement, sans abonnement caché.",
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
];
