// Données FAQ partagées : consommées par le composant client (affichage)
// ET par la page serveur (génération du schema.org FAQPage pour l'AEO).
// Chaque question/réponse existe en FR et EN ; utiliser faqCategories(lang).
import type { Locale } from "@/lib/i18n";

export interface FaqQuestion {
  q: string;
  a: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  questions: FaqQuestion[];
}

interface FaqQuestionByLocale {
  q: Record<Locale, string>;
  a: Record<Locale, string>;
}

interface FaqCategoryByLocale {
  id: string;
  label: Record<Locale, string>;
  questions: FaqQuestionByLocale[];
}

const CATEGORIES: FaqCategoryByLocale[] = [
  {
    id: "general",
    label: { fr: "Général", en: "General" },
    questions: [
      {
        q: { fr: "Qu'est-ce qu'ACTC ?", en: "What is ACTC?" },
        a: {
          fr: "ACTC est une agence web premium fondée par Tom-Soa Cyprien et Andylane Chatenay. On crée des sites vitrines et e-commerce sur-mesure pour PME ambitieuses. Notre équipe réunit les deux fondateurs et un réseau de freelances diplômés sélectionnés selon les projets.",
          en: "ACTC is a premium web agency founded by Tom-Soa Cyprien and Andylane Chatenay. We build custom showcase and e-commerce websites for ambitious small businesses. Our team brings together the two founders and a network of vetted, degree-qualified freelancers selected for each project.",
        },
      },
      {
        q: { fr: "Où êtes-vous basés ?", en: "Where are you based?" },
        a: {
          fr: "On est basés en France et on travaille avec des clients partout dans le monde, entièrement à distance. Paris, Lyon, Bordeaux, La Réunion, les États-Unis, le Canada : notre organisation 100 % digitale nous rend aussi efficaces peu importe la localisation.",
          en: "We are based in France and work with clients all over the world, fully remotely. Paris, Lyon, Bordeaux, Reunion Island, the United States, Canada: our 100% digital organization makes us just as effective wherever you are.",
        },
      },
      {
        q: { fr: "Travaillez-vous avec des clients à l'étranger ?", en: "Do you work with clients abroad?" },
        a: {
          fr: "Oui, sans aucun problème. La totalité de notre process est en ligne : appels vidéo, maquettes partagées, livraison digitale. On a travaillé avec des clients en France métropolitaine, dans les DOM-TOM et à l'international.",
          en: "Yes, absolutely. Our entire process happens online: video calls, shared mockups, digital delivery. We have worked with clients in mainland France, in the French overseas territories and internationally.",
        },
      },
      {
        q: { fr: "Comment se passe le premier contact ?", en: "How does the first contact work?" },
        a: {
          fr: "Tout commence par le formulaire de contact. Vous nous décrivez votre activité, vos objectifs et vos besoins, et on vous répond rapidement. Aucun engagement, aucun devis surprise. Vous repartez avec une vision claire de ce qu'on peut faire pour vous.",
          en: "It all starts with the contact form. You tell us about your business, your goals and your needs, and we reply quickly. No commitment, no surprise quote. You leave with a clear picture of what we can do for you.",
        },
      },
      {
        q: { fr: "Faites-vous des devis gratuits ?", en: "Do you provide free quotes?" },
        a: {
          fr: "Oui. L'appel de découverte est gratuit, et on crée votre maquette de page d'accueil avant tout engagement financier. Vous voyez le résultat avant de signer quoi que ce soit.",
          en: "Yes. The discovery call is free, and we design your homepage mockup before any financial commitment. You see the result before signing anything.",
        },
      },
      {
        q: { fr: "Avec qui est-ce que je travaille directement ?", en: "Who do I work with directly?" },
        a: {
          fr: "Avec Tom-Soa et Andylane, les deux fondateurs. Pas d'intermédiaire, pas de chef de projet externe. Ce sont les mêmes personnes qui répondent à vos messages et qui pilotent votre projet de A à Z.",
          en: "With Tom-Soa and Andylane, the two founders. No middlemen, no external project manager. The same people answer your messages and run your project from start to finish.",
        },
      },
      {
        q: { fr: "Combien de projets avez-vous réalisés ?", en: "How many projects have you delivered?" },
        a: {
          fr: "Plus de 25 projets livrés : boulangerie, immobilier, cabinet comptable, club sportif, formation professionnelle, construction, e-commerce audio, institutions publiques, cession d'entreprise, et d'autres.",
          en: "More than 25 projects delivered: a bakery, real estate, an accounting firm, a sports club, professional training, construction, audio e-commerce, public institutions, business sales, and more.",
        },
      },
    ],
  },
  {
    id: "tarifs",
    label: { fr: "Offres et paiement", en: "Plans and payment" },
    questions: [
      {
        q: { fr: "Comment fixez-vous vos prix ?", en: "How do you set your prices?" },
        a: {
          fr: "Nos forfaits démarrent à 1 400 € (Standard, jusqu'à 5 pages), 1 900 € (Conversion, jusqu'à 8 pages avec texte optimisé), et 2 400 € et plus (Premium, pages illimitées, sur devis). Les boutiques e-commerce Shopify démarrent à 2 900 €, avec 1 mois de publicité Facebook & Instagram ou Google offert.",
          en: "Our packages start at €1,400 (Standard, up to 5 pages), €1,900 (Conversion, up to 8 pages with optimized copy), and €2,400 and up (Premium, unlimited pages, custom quote). Shopify e-commerce stores start at €2,900, with 1 month of Facebook & Instagram or Google advertising included.",
        },
      },
      {
        q: { fr: "Comment se passe le paiement ?", en: "How does payment work?" },
        a: {
          fr: "Un acompte de 60 % est demandé à la commande pour démarrer le projet. Le solde de 40 % est réglé à la livraison, une fois que vous avez validé votre site.",
          en: "A 60% deposit is due at order to start the project. The remaining 40% is paid on delivery, once you have approved your site.",
        },
      },
      {
        q: { fr: "Peut-on payer en plusieurs fois ?", en: "Can I pay in installments?" },
        a: {
          fr: "Oui. L'offre Standard se règle en 3 fois sans frais maximum, les offres Conversion et Premium en 4 fois sans frais maximum. On fixe l'échéancier ensemble lors de l'appel de découverte.",
          en: "Yes. The Standard plan can be split into up to 3 interest-free installments, and the Conversion and Premium plans into up to 4. We set the schedule together during the discovery call.",
        },
      },
      {
        q: { fr: "La TVA s'applique-t-elle ?", en: "Does VAT apply?" },
        a: {
          fr: "Non. La TVA n'est pas applicable (article 293 B du CGI). Vous ne payez pas de TVA sur nos prestations.",
          en: "No. VAT does not apply (article 293 B of the French tax code). You pay no VAT on our services.",
        },
      },
      {
        q: { fr: "Y a-t-il des frais cachés ou des abonnements ?", en: "Are there hidden fees or subscriptions?" },
        a: {
          fr: "Non. L'hébergement est gratuit et illimité. Pas d'abonnement mensuel obligatoire, pas de frais de licence, pas de coûts cachés. Une maintenance mensuelle optionnelle est disponible si vous souhaitez des modifications régulières.",
          en: "No. Hosting is free and unlimited. No mandatory monthly subscription, no license fees, no hidden costs. An optional monthly maintenance plan is available if you want regular updates.",
        },
      },
      {
        q: { fr: "Que comprend la maintenance mensuelle ?", en: "What does monthly maintenance include?" },
        a: {
          fr: "Modifications de textes, ajout de photos, changements de pages, petites évolutions. Chaque forfait inclut déjà 1 mois offert (6 mois pour le Premium).",
          en: "Copy updates, new photos, page changes, small improvements. Every plan already includes 1 free month (6 months with Premium).",
        },
      },
      {
        q: { fr: "Quelles options peut-on ajouter ?", en: "What options can I add?" },
        a: {
          fr: "Maintenance mensuelle, media buying (publicité Google & Meta), séquences de mails, refonte branding, blog, création de logo. Aucune dépendance entre les options : on en discute selon vos besoins.",
          en: "Monthly maintenance, media buying (Google & Meta advertising), email sequences, brand redesign, blog, logo design. No dependencies between options: we discuss them based on your needs.",
        },
      },
      {
        q: { fr: "Peut-on payer directement en ligne pour démarrer rapidement ?", en: "Can I pay online to get started quickly?" },
        a: {
          fr: "Oui. Une fois votre devis validé, vous pouvez régler l'acompte de 60 % directement en ligne via un lien de paiement sécurisé. Votre dossier est pris en charge sous 24 h et le projet démarre immédiatement.",
          en: "Yes. Once your quote is approved, you can pay the 60% deposit directly online through a secure payment link. Your file is handled within 24 hours and the project starts immediately.",
        },
      },
    ],
  },
  {
    id: "process",
    label: { fr: "Process et délais", en: "Process and timelines" },
    questions: [
      {
        q: { fr: "Combien de temps faut-il pour livrer un site ?", en: "How long does it take to deliver a website?" },
        a: {
          fr: "14 à 21 jours à partir du démarrage. Ce délai inclut la maquette, les retours, le développement et la mise en ligne. On respecte nos délais sur 100 % de nos projets.",
          en: "14 to 21 days from kickoff. That includes the mockup, your feedback, development and launch. We have met our deadlines on 100% of our projects.",
        },
      },
      {
        q: { fr: "Comment se déroule un projet de A à Z ?", en: "How does a project run from start to finish?" },
        a: {
          fr: "1. Appel de découverte gratuit. 2. Maquette de la page d'accueil offerte. 3. Validation et acompte. 4. Développement complet. 5. Retours et corrections. 6. Mise en ligne. 7. Livraison et solde.",
          en: "1. Free discovery call. 2. Free homepage mockup. 3. Approval and deposit. 4. Full development. 5. Feedback and revisions. 6. Launch. 7. Delivery and final payment.",
        },
      },
      {
        q: { fr: "Combien de retours peut-on faire ?", en: "How many rounds of feedback do I get?" },
        a: {
          fr: "Deux tours de retours sur la maquette avant développement, et un tour après. C'est largement suffisant pour arriver exactement au résultat souhaité.",
          en: "Two rounds on the mockup before development, and one round after. More than enough to land exactly on the result you want.",
        },
      },
      {
        q: { fr: "Faut-il préparer quelque chose avant de démarrer ?", en: "Do I need to prepare anything before we start?" },
        a: {
          fr: "Idéalement : vos textes (ou on les écrit), vos photos, votre logo, et une idée des sites que vous aimez. Si vous n'avez rien de tout ça, on s'occupe de tout.",
          en: "Ideally: your copy (or we write it), your photos, your logo, and an idea of websites you like. If you have none of that, we handle everything.",
        },
      },
      {
        q: { fr: "Est-ce que vous écrivez les textes ?", en: "Do you write the copy?" },
        a: {
          fr: "Oui. L'optimisation du texte est incluse dans les offres Conversion et Premium. Pour le Standard, c'est une option. Nos textes sont écrits pour vendre : ils parlent à vos clients et les poussent à agir.",
          en: "Yes. Copy optimization is included in the Conversion and Premium plans. For Standard, it is an option. Our copy is written to sell: it speaks to your customers and moves them to act.",
        },
      },
      {
        q: { fr: "Travaillez-vous en dehors des heures de bureau ?", en: "Do you work outside office hours?" },
        a: {
          fr: "Oui. Notre organisation flexible nous permet de répondre rapidement même en dehors des horaires classiques. On s'adapte à votre planning.",
          en: "Yes. Our flexible organization lets us respond quickly even outside standard hours. We adapt to your schedule.",
        },
      },
    ],
  },
  {
    id: "design",
    label: { fr: "Design et contenu", en: "Design and content" },
    questions: [
      {
        q: { fr: "Les designs sont-ils vraiment sur-mesure ?", en: "Are the designs really custom?" },
        a: {
          fr: "Oui, entièrement. Aucun template, aucun constructeur de page. Chaque site est conçu de zéro selon votre identité et vos objectifs. Deux projets ACTC ne se ressemblent jamais.",
          en: "Yes, entirely. No templates, no page builders. Every site is designed from scratch around your identity and your goals. No two ACTC projects ever look alike.",
        },
      },
      {
        q: { fr: "Peut-on voir des exemples de votre travail ?", en: "Can I see examples of your work?" },
        a: {
          fr: "Oui, consultez notre page Réalisations. Vous y trouverez des projets récents avec leurs résultats concrets.",
          en: "Yes, take a look at our Portfolio page. You will find recent projects along with their concrete results.",
        },
      },
      {
        q: { fr: "Pouvez-vous créer mon logo et mon identité visuelle ?", en: "Can you create my logo and visual identity?" },
        a: {
          fr: "Oui. Refonte branding complète (logo, couleurs, typographie, déclinaisons) ou logo seul, en option selon vos besoins.",
          en: "Yes. A full brand redesign (logo, colors, typography, variations) or a standalone logo, as an option based on your needs.",
        },
      },
      {
        q: { fr: "Est-ce que je peux fournir mes propres photos ?", en: "Can I provide my own photos?" },
        a: {
          fr: "Absolument. On intègre vos photos professionnelles. Si vous n'en avez pas, on utilise des banques d'images premium cohérentes avec votre identité.",
          en: "Absolutely. We integrate your professional photos. If you do not have any, we use premium stock libraries consistent with your identity.",
        },
      },
      {
        q: { fr: "Le site sera-t-il adapté aux mobiles ?", en: "Will the site work on mobile?" },
        a: {
          fr: "Oui, à 100 %. Tous nos sites sont responsive et testés sur plusieurs appareils avant livraison.",
          en: "Yes, 100%. All our sites are responsive and tested on multiple devices before delivery.",
        },
      },
      {
        q: { fr: "Dans quelle langue peut-on faire le site ?", en: "In which languages can the site be built?" },
        a: {
          fr: "Français par défaut. On peut créer des sites bilingues (français/anglais) ou multilingues sur demande.",
          en: "French by default. We can build bilingual (French/English) or multilingual sites on request.",
        },
      },
    ],
  },
  {
    id: "technique",
    label: { fr: "Technique, SEO et hébergement", en: "Tech, SEO and hosting" },
    questions: [
      {
        q: { fr: "Avec quelles technologies construisez-vous les sites ?", en: "What technologies do you build with?" },
        a: {
          fr: "Next.js (React) pour les sites vitrines, Shopify pour l'e-commerce. Hébergement sur infrastructures cloud de premier plan. Aucun WordPress, aucun Wix, aucun page builder. Du code propre et sur-mesure.",
          en: "Next.js (React) for showcase websites, Shopify for e-commerce. Hosting on leading cloud infrastructure. No WordPress, no Wix, no page builders. Clean, custom code.",
        },
      },
      {
        q: { fr: "L'hébergement est vraiment gratuit ?", en: "Is hosting really free?" },
        a: {
          fr: "Oui, l'hébergement est inclus et gratuit pour toujours. Pas d'abonnement, pas de frais annuels. Votre site reste en ligne sans coût supplémentaire.",
          en: "Yes, hosting is included and free forever. No subscription, no annual fees. Your site stays online at no extra cost.",
        },
      },
      {
        q: { fr: "Est-ce que le site sera rapide ?", en: "Will the site be fast?" },
        a: {
          fr: "Oui. Nos sites sont optimisés pour la vitesse de chargement. La rapidité améliore directement votre référencement et réduit le taux de rebond.",
          en: "Yes. Our sites are optimized for loading speed. Speed directly improves your search rankings and reduces bounce rate.",
        },
      },
      {
        q: { fr: "Le SEO est-il inclus ?", en: "Is SEO included?" },
        a: {
          fr: "Oui. SEO technique intégré dès le développement : titres, balises méta, données structurées, sitemap, Core Web Vitals, optimisation des images. Le SEO éditorial (textes optimisés pour mots-clés) est inclus en Conversion et Premium.",
          en: "Yes. Technical SEO is built in from day one: titles, meta tags, structured data, sitemap, Core Web Vitals, image optimization. Editorial SEO (keyword-optimized copy) is included in Conversion and Premium.",
        },
      },
      {
        q: { fr: "Mon site sera-t-il sécurisé ?", en: "Will my site be secure?" },
        a: {
          fr: "Oui. HTTPS, sans WordPress (pas de vulnérabilités de plugins), mises à jour de sécurité automatiques.",
          en: "Yes. HTTPS, no WordPress (so no plugin vulnerabilities), automatic security updates.",
        },
      },
      {
        q: { fr: "Est-ce que je serai propriétaire de mon site ?", en: "Will I own my website?" },
        a: {
          fr: "Oui, à 100 %. Le code source vous appartient intégralement à la livraison. Aucun verrou, aucune dépendance. Vous êtes libre de faire ce que vous voulez de votre site.",
          en: "Yes, 100%. The source code is fully yours on delivery. No lock-in, no dependency. You are free to do whatever you want with your site.",
        },
      },
      {
        q: { fr: "Puis-je utiliser mon propre nom de domaine ?", en: "Can I use my own domain name?" },
        a: {
          fr: "Oui. On configure votre domaine existant ou on vous aide à en acheter un. Le nom de domaine (env. 10-15 €/an) est à votre charge.",
          en: "Yes. We configure your existing domain or help you buy one. The domain name (about 10-15 €/year) is at your expense.",
        },
      },
      {
        q: { fr: "Le site apparaîtra-t-il sur Google ?", en: "Will my site show up on Google?" },
        a: {
          fr: "Oui. On soumet votre site à Google Search Console à la livraison. Les premiers résultats sur Google apparaissent généralement dans les 2 à 8 semaines.",
          en: "Yes. We submit your site to Google Search Console at delivery. The first Google results usually appear within 2 to 8 weeks.",
        },
      },
    ],
  },
  {
    id: "apres",
    label: { fr: "Après la livraison", en: "After delivery" },
    questions: [
      {
        q: { fr: "Que se passe-t-il après la mise en ligne ?", en: "What happens after launch?" },
        a: {
          fr: "Vous bénéficiez d'une maintenance offerte : 1 mois en Standard, 3 mois en Conversion, 6 mois en Premium, et 3 mois sur les boutiques e-commerce. Passé ce délai, maintenance mensuelle optionnelle ou autonomie totale, c'est vous qui choisissez.",
          en: "You get free maintenance: 1 month with Standard, 3 months with Conversion, 6 months with Premium, and 3 months with e-commerce stores. After that, optional monthly maintenance or full autonomy, you choose.",
        },
      },
      {
        q: { fr: "Peut-on ajouter des pages après la livraison ?", en: "Can I add pages after delivery?" },
        a: {
          fr: "Oui. Toute modification après la période offerte est facturée au cas par cas ou incluse dans l'abonnement mensuel.",
          en: "Yes. Any change after the free period is billed case by case or included in the monthly maintenance plan.",
        },
      },
      {
        q: { fr: "Assurez-vous le support technique ?", en: "Do you provide technical support?" },
        a: {
          fr: "Oui. En cas de bug sur ce qu'on a développé, on intervient rapidement. Toujours.",
          en: "Yes. If a bug appears in anything we built, we fix it fast. Always.",
        },
      },
      {
        q: { fr: "Que se passe-t-il si vous cessez votre activité ?", en: "What happens if you shut down?" },
        a: {
          fr: "Comme vous êtes propriétaire à 100 % du code, vous pouvez continuer à l'utiliser et le faire évoluer avec n'importe quel autre développeur. Aucune dépendance à notre existence.",
          en: "Since you own 100% of the code, you can keep using it and evolve it with any other developer. No dependency on our existence.",
        },
      },
    ],
  },
  {
    id: "ecommerce",
    label: { fr: "E-commerce", en: "E-commerce" },
    questions: [
      {
        q: { fr: "Faites-vous des boutiques en ligne ?", en: "Do you build online stores?" },
        a: {
          fr: "Oui. On crée des boutiques Shopify complètes : catalogue, panier, paiement sécurisé, gestion des commandes. Tarif à partir de 2 900 €, sur devis selon votre catalogue. 1 mois de publicité Facebook & Instagram ou Google offert.",
          en: "Yes. We build complete Shopify stores: catalog, cart, secure checkout, order management. From €2,900, quoted based on your catalog. 1 month of Facebook & Instagram or Google advertising included.",
        },
      },
      {
        q: { fr: "Pourquoi Shopify ?", en: "Why Shopify?" },
        a: {
          fr: "C'est la référence mondiale de l'e-commerce : fiable, sécurisé, facile à gérer au quotidien. Vous ajoutez des produits, gérez vos stocks et vos commandes sans aucune compétence technique.",
          en: "It is the global reference for e-commerce: reliable, secure, easy to manage day to day. You add products, manage stock and orders without any technical skills.",
        },
      },
      {
        q: { fr: "Peut-on vendre à l'international ?", en: "Can I sell internationally?" },
        a: {
          fr: "Oui. On configure devises, langues, taxes et modes de livraison pour chaque marché. Boutique multilingue et multi-devises tout à fait réalisable.",
          en: "Yes. We configure currencies, languages, taxes and shipping methods for each market. A multilingual, multi-currency store is entirely doable.",
        },
      },
      {
        q: { fr: "Quels modes de paiement peut-on intégrer ?", en: "Which payment methods can be integrated?" },
        a: {
          fr: "Tous les grands moyens de paiement via Shopify Payments : CB, Apple Pay, Google Pay, PayPal, et plus. Paiement sécurisé par défaut.",
          en: "All major payment methods through Shopify Payments: credit card, Apple Pay, Google Pay, PayPal and more. Secure checkout by default.",
        },
      },
      {
        q: { fr: "La publicité est-elle obligatoire avec une boutique e-commerce ?", en: "Is advertising mandatory with an e-commerce store?" },
        a: {
          fr: "Pas obligatoire, mais quasi indispensable pour démarrer. Sans trafic, pas de ventes. On peut s'occuper de toute la stratégie pub Meta et Google, créer vos visuels et gérer vos campagnes mensuellement.",
          en: "Not mandatory, but nearly essential to get started. No traffic means no sales. We can handle your entire Meta and Google ad strategy, create your visuals and manage your campaigns month to month.",
        },
      },
    ],
  },
];

// Catégories FAQ dans la langue demandée.
export function faqCategories(lang: Locale): FaqCategory[] {
  return CATEGORIES.map((cat) => ({
    id: cat.id,
    label: cat.label[lang],
    questions: cat.questions.map((it) => ({ q: it.q[lang], a: it.a[lang] })),
  }));
}

// Compatibilité : version française (consommée par lib/schema.ts).
export const FAQ_CATEGORIES: FaqCategory[] = faqCategories("fr");
