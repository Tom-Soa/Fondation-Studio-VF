// Données FAQ partagées : consommées par le composant client (affichage)
// ET par la page serveur (génération du schema.org FAQPage pour l'AEO).
export interface FaqQuestion {
  q: string;
  a: string;
}

export interface FaqCategory {
  id: string;
  label: string;
  questions: FaqQuestion[];
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: "general",
    label: "Général",
    questions: [
      { q: "Qu'est-ce que Fondation Studio ?", a: "Fondation Studio est une agence web premium fondée par Tom-Soa Cyprien et Andylane Chatenay. On crée des sites vitrines et e-commerce sur-mesure pour PME ambitieuses. Notre équipe réunit les deux fondateurs et un réseau de freelances diplômés sélectionnés selon les projets." },
      { q: "Où êtes-vous basés ?", a: "On est basés en France et on travaille avec des clients partout dans le monde, entièrement à distance. Paris, Lyon, Bordeaux, La Réunion, les États-Unis, le Canada : notre organisation 100 % digitale nous rend aussi efficaces peu importe la localisation." },
      { q: "Travaillez-vous avec des clients à l'étranger ?", a: "Oui, sans aucun problème. La totalité de notre process est en ligne : appels vidéo, maquettes partagées, livraison digitale. On a travaillé avec des clients en France métropolitaine, dans les DOM-TOM et à l'international." },
      { q: "Comment se passe le premier contact ?", a: "Tout commence par un appel gratuit de 20 minutes. On discute de votre activité, vos objectifs et vos besoins. Aucun engagement, aucun devis surprise. Vous repartez avec une vision claire de ce qu'on peut faire pour vous." },
      { q: "Faites-vous des devis gratuits ?", a: "Oui. L'appel de découverte est gratuit, et on crée votre maquette de page d'accueil avant tout engagement financier. Vous voyez le résultat avant de signer quoi que ce soit." },
      { q: "Avec qui est-ce que je travaille directement ?", a: "Avec Tom-Soa et Andylane, les deux fondateurs. Pas d'intermédiaire, pas de chef de projet externe. Ce sont les mêmes personnes qui répondent à vos messages et qui pilotent votre projet de A à Z." },
      { q: "Combien de projets avez-vous réalisés ?", a: "Plus de 25 projets livrés : boulangerie, immobilier, cabinet comptable, club sportif, formation professionnelle, construction, e-commerce audio, institutions publiques, cession d'entreprise, et d'autres." },
    ],
  },
  {
    id: "tarifs",
    label: "Offres et paiement",
    questions: [
      { q: "Comment fixez-vous vos prix ?", a: "Chaque projet fait l'objet d'un devis personnalisé, selon le nombre de pages, le contenu et le niveau de sur-mesure. Trois offres structurent nos prestations : Standard (jusqu'à 5 pages), Conversion (jusqu'à 8 pages avec texte optimisé) et Premium (pages illimitées). Les boutiques e-commerce Shopify sont aussi sur devis, avec 1 mois de publicité Facebook & Instagram ou Google offert." },
      { q: "Comment se passe le paiement ?", a: "Un acompte de 60 % est demandé à la commande pour démarrer le projet. Le solde de 40 % est réglé à la livraison, une fois que vous avez validé votre site." },
      { q: "Peut-on payer en plusieurs fois ?", a: "Oui, le paiement en plusieurs fois est possible. On en discute lors de l'appel de découverte selon votre situation." },
      { q: "La TVA s'applique-t-elle ?", a: "Non. La TVA n'est pas applicable (article 293 B du CGI). Vous ne payez pas de TVA sur nos prestations." },
      { q: "Y a-t-il des frais cachés ou des abonnements ?", a: "Non. L'hébergement est gratuit et illimité. Pas d'abonnement mensuel obligatoire, pas de frais de licence, pas de coûts cachés. Une maintenance mensuelle optionnelle est disponible si vous souhaitez des modifications régulières." },
      { q: "Que comprend la maintenance mensuelle ?", a: "Modifications de textes, ajout de photos, changements de pages, petites évolutions. Chaque forfait inclut déjà 1 mois offert (6 mois pour le Premium)." },
      { q: "Quelles options peut-on ajouter ?", a: "Maintenance mensuelle, media buying (publicité Google & Meta), séquences de mails, refonte branding, blog, création de logo. Aucune dépendance entre les options : on en discute selon vos besoins." },
      { q: "Peut-on payer directement en ligne pour démarrer rapidement ?", a: "Oui. Une fois votre devis validé, vous pouvez régler l'acompte de 60 % directement en ligne via un lien de paiement sécurisé. Votre dossier est pris en charge sous 24 h et le projet démarre immédiatement." },
    ],
  },
  {
    id: "process",
    label: "Process et délais",
    questions: [
      { q: "Combien de temps faut-il pour livrer un site ?", a: "14 à 21 jours à partir du démarrage. Ce délai inclut la maquette, les retours, le développement et la mise en ligne. On respecte nos délais sur 100 % de nos projets." },
      { q: "Comment se déroule un projet de A à Z ?", a: "1. Appel de découverte gratuit. 2. Maquette de la page d'accueil offerte. 3. Validation et acompte. 4. Développement complet. 5. Retours et corrections. 6. Mise en ligne. 7. Livraison et solde." },
      { q: "Combien de retours peut-on faire ?", a: "Deux tours de retours sur la maquette avant développement, et un tour après. C'est largement suffisant pour arriver exactement au résultat souhaité." },
      { q: "Faut-il préparer quelque chose avant de démarrer ?", a: "Idéalement : vos textes (ou on les écrit), vos photos, votre logo, et une idée des sites que vous aimez. Si vous n'avez rien de tout ça, on s'occupe de tout." },
      { q: "Est-ce que vous écrivez les textes ?", a: "Oui. L'optimisation du texte est incluse dans les offres Conversion et Premium. Pour le Standard, c'est une option. Nos textes sont écrits pour vendre : ils parlent à vos clients et les poussent à agir." },
      { q: "Travaillez-vous en dehors des heures de bureau ?", a: "Oui. Notre organisation flexible nous permet de répondre rapidement même en dehors des horaires classiques. On s'adapte à votre planning." },
    ],
  },
  {
    id: "design",
    label: "Design et contenu",
    questions: [
      { q: "Les designs sont-ils vraiment sur-mesure ?", a: "Oui, entièrement. Aucun template, aucun constructeur de page. Chaque site est conçu de zéro selon votre identité et vos objectifs. Deux projets Fondation Studio ne se ressemblent jamais." },
      { q: "Peut-on voir des exemples de votre travail ?", a: "Oui, consultez notre page Réalisations. Vous y trouverez des projets récents avec leurs résultats concrets." },
      { q: "Pouvez-vous créer mon logo et mon identité visuelle ?", a: "Oui. Refonte branding complète (logo, couleurs, typographie, déclinaisons) ou logo seul, en option selon vos besoins." },
      { q: "Est-ce que je peux fournir mes propres photos ?", a: "Absolument. On intègre vos photos professionnelles. Si vous n'en avez pas, on utilise des banques d'images premium cohérentes avec votre identité." },
      { q: "Le site sera-t-il adapté aux mobiles ?", a: "Oui, à 100 %. Tous nos sites sont responsive et testés sur plusieurs appareils avant livraison." },
      { q: "Dans quelle langue peut-on faire le site ?", a: "Français par défaut. On peut créer des sites bilingues (français/anglais) ou multilingues sur demande." },
    ],
  },
  {
    id: "technique",
    label: "Technique, SEO et hébergement",
    questions: [
      { q: "Avec quelles technologies construisez-vous les sites ?", a: "Next.js (React) pour les sites vitrines, Shopify pour l'e-commerce. Hébergement sur infrastructures cloud de premier plan. Aucun WordPress, aucun Wix, aucun page builder. Du code propre et sur-mesure." },
      { q: "L'hébergement est vraiment gratuit ?", a: "Oui, l'hébergement est inclus et gratuit pour toujours. Pas d'abonnement, pas de frais annuels. Votre site reste en ligne sans coût supplémentaire." },
      { q: "Est-ce que le site sera rapide ?", a: "Oui. Nos sites sont optimisés pour la vitesse de chargement. La rapidité améliore directement votre référencement et réduit le taux de rebond." },
      { q: "Le SEO est-il inclus ?", a: "Oui. SEO technique intégré dès le développement : titres, balises méta, données structurées, sitemap, Core Web Vitals, optimisation des images. Le SEO éditorial (textes optimisés pour mots-clés) est inclus en Conversion et Premium." },
      { q: "Mon site sera-t-il sécurisé ?", a: "Oui. HTTPS, sans WordPress (pas de vulnérabilités de plugins), mises à jour de sécurité automatiques." },
      { q: "Est-ce que je serai propriétaire de mon site ?", a: "Oui, à 100 %. Le code source vous appartient intégralement à la livraison. Aucun verrou, aucune dépendance. Vous êtes libre de faire ce que vous voulez de votre site." },
      { q: "Puis-je utiliser mon propre nom de domaine ?", a: "Oui. On configure votre domaine existant ou on vous aide à en acheter un. Le nom de domaine (env. 10-15 €/an) est à votre charge." },
      { q: "Le site apparaîtra-t-il sur Google ?", a: "Oui. On soumet votre site à Google Search Console à la livraison. Les premiers résultats sur Google apparaissent généralement dans les 2 à 8 semaines." },
    ],
  },
  {
    id: "apres",
    label: "Après la livraison",
    questions: [
      { q: "Que se passe-t-il après la mise en ligne ?", a: "Vous bénéficiez d'une maintenance offerte (1 mois en Standard/Conversion, 6 mois en Premium). Passé ce délai, maintenance mensuelle optionnelle ou autonomie totale, c'est vous qui choisissez." },
      { q: "Peut-on ajouter des pages après la livraison ?", a: "Oui. Toute modification après la période offerte est facturée au cas par cas ou incluse dans l'abonnement mensuel." },
      { q: "Assurez-vous le support technique ?", a: "Oui. En cas de bug sur ce qu'on a développé, on intervient rapidement. Toujours." },
      { q: "Que se passe-t-il si vous cessez votre activité ?", a: "Comme vous êtes propriétaire à 100 % du code, vous pouvez continuer à l'utiliser et le faire évoluer avec n'importe quel autre développeur. Aucune dépendance à notre existence." },
    ],
  },
  {
    id: "ecommerce",
    label: "E-commerce",
    questions: [
      { q: "Faites-vous des boutiques en ligne ?", a: "Oui. On crée des boutiques Shopify complètes : catalogue, panier, paiement sécurisé, gestion des commandes. Sur devis selon votre catalogue. 1 mois de publicité Facebook & Instagram ou Google offert." },
      { q: "Pourquoi Shopify ?", a: "C'est la référence mondiale de l'e-commerce : fiable, sécurisé, facile à gérer au quotidien. Vous ajoutez des produits, gérez vos stocks et vos commandes sans aucune compétence technique." },
      { q: "Peut-on vendre à l'international ?", a: "Oui. On configure devises, langues, taxes et modes de livraison pour chaque marché. Boutique multilingue et multi-devises tout à fait réalisable." },
      { q: "Quels modes de paiement peut-on intégrer ?", a: "Tous les grands moyens de paiement via Shopify Payments : CB, Apple Pay, Google Pay, PayPal, et plus. Paiement sécurisé par défaut." },
      { q: "La publicité est-elle obligatoire avec une boutique e-commerce ?", a: "Pas obligatoire, mais quasi indispensable pour démarrer. Sans trafic, pas de ventes. On peut s'occuper de toute la stratégie pub Meta et Google, créer vos visuels et gérer vos campagnes mensuellement." },
    ],
  },
];
