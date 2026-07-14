// Schemas schema.org centralisés (JSON-LD). Invisibles pour l'utilisateur,
// lus par Google, Bing, Perplexity et les IA génératives (SEO / AEO / GEO).
import { FAQ_CATEGORIES } from "@/lib/faq";

export const SITE_URL = "https://fondationstudio.fr";
const ORG_ID = `${SITE_URL}/#organization`;
const WEBSITE_ID = `${SITE_URL}/#website`;

const SAME_AS = [
  "https://www.instagram.com/tomso.ads",
  "https://www.linkedin.com/in/tom-soa-cyprien-934798333/",
];

// Organisation : entité de marque, référencée par tous les autres schemas via @id.
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": ORG_ID,
  name: "Fondation Studio",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/icon.png`,
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}/icon.png`,
  description:
    "Studio web pour PME et artisans. Sites vitrines et e-commerce sur-mesure, design premium, hébergement gratuit, référencement intégré, livrés en 21 jours.",
  email: "fondationstudio.fr@gmail.com",
  telephone: "+33637999738",
  priceRange: "€€",
  areaServed: [
    { "@type": "Country", name: "France" },
    { "@type": "AdministrativeArea", name: "La Réunion" },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "FR",
  },
  knowsAbout: [
    "Création de site internet",
    "Site vitrine",
    "E-commerce Shopify",
    "Référencement naturel",
    "Publicité Meta et Google",
    "Design web sur-mesure",
  ],
  sameAs: SAME_AS,
};

// Site web : active la recherche sitelinks et rattache le nom du site.
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: "Fondation Studio",
  inLanguage: "fr-FR",
  publisher: { "@id": ORG_ID },
};

// Fil d'ariane pour l'affichage hiérarchique dans les SERP.
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_URL}${it.path}`,
    })),
  };
}

// Service (pages sites vitrine / marchands).
export function serviceSchema(opts: {
  name: string;
  description: string;
  path: string;
  serviceType: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    provider: { "@id": ORG_ID },
    areaServed: [
      { "@type": "Country", name: "France" },
      { "@type": "AdministrativeArea", name: "La Réunion" },
    ],
    offers: {
      "@type": "Offer",
      description: "Devis gratuit et maquette offerte avant tout engagement",
      priceCurrency: "EUR",
    },
  };
}

// Personne (page équipe).
export function personSchema(opts: {
  name: string;
  jobTitle: string;
  description: string;
  image?: string;
  sameAs?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: opts.name,
    jobTitle: opts.jobTitle,
    description: opts.description,
    ...(opts.image ? { image: `${SITE_URL}${opts.image}` } : {}),
    ...(opts.sameAs ? { sameAs: opts.sameAs } : {}),
    worksFor: { "@id": ORG_ID },
  };
}

// FAQPage : construit à partir de toutes les questions de la FAQ.
export function faqPageSchema() {
  const mainEntity = FAQ_CATEGORIES.flatMap((cat) =>
    cat.questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  );
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
}
