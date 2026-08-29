// Contenu éditorial de la page de vente de l'audit (/audit).
// Rédaction : vouvoiement, phrases courtes, aucun terme anglais, aucune
// promesse de résultat garanti. Les preuves restent factuelles et vérifiables.

import { PRIX, DELAI, FENETRE_DEDUCTION, SITES_CREES } from "./audit-config";

export const AUDIT = {
  meta: {
    title: `Audit de votre site en ${DELAI} · ${PRIX} · ACTC`,
    description: `Recevez une vidéo d'analyse commentée de votre site : une note sur 100, ce qui bloque, et 3 priorités classées par impact. Livrée en ${DELAI}. Les ${PRIX} sont déduits si vous nous confiez ensuite votre site.`,
  },

  hero: {
    eyebrow: "Audit de site internet",
    h1Start: "Votre site est en ligne.",
    h1Em: "Mais que fait-il vraiment",
    h1End: "de vos visiteurs ?",
    sub: `Recevez une vidéo où j'analyse votre site page par page : une note sur 100, ce qui bloque concrètement, et les 3 priorités à corriger, classées par impact.`,
    priceLabel: "Prix unique",
    delayLabel: "Livraison",
    cta: "Commander mon audit",
    ctaNote: `Paiement en ligne · vidéo reçue sous ${DELAI}`,
    deductionFlash: `Les ${PRIX} sont déduits si vous nous confiez votre site ensuite.`,
  },

  probleme: {
    kicker: "Le point de départ",
    h2: "Vous reconnaissez sûrement l'une de ces situations.",
    items: [
      {
        titre: "Votre site a l'air correct, mais le téléphone ne sonne pas",
        corps:
          "Le design vous plaît, vos proches vous disent qu'il est réussi, et pourtant les demandes n'arrivent pas. Quelque chose bloque entre la visite et le contact.",
      },
      {
        titre: "Vous ne savez pas où partent vos visiteurs",
        corps:
          "Des gens arrivent sur votre site. Vous ignorez ce qu'ils lisent, à quel moment ils s'arrêtent, et ce qui les fait repartir sans rien faire.",
      },
      {
        titre: "Vous ne savez pas par quoi commencer",
        corps:
          "On vous parle de référencement, de vitesse, de textes, de photos. Impossible de savoir ce qui compte vraiment pour votre activité, ni dans quel ordre s'y prendre.",
      },
    ],
  },

  livrables: {
    kicker: "Ce que vous recevez",
    h2: "Un livrable unique, concret, à regarder quand vous voulez.",
    items: [
      {
        icone: "ph:video-camera-duotone",
        titre: "Une vidéo commentée",
        corps:
          "Je parcours votre site à l'écran et je commente ce que je vois, comme si j'étais à côté de vous. Vous la gardez et la revoyez autant de fois que nécessaire.",
      },
      {
        icone: "ph:gauge-duotone",
        titre: "Une note sur 100",
        corps:
          "Un repère chiffré, décomposé axe par axe, pour situer votre site et mesurer les écarts entre ce qui fonctionne et ce qui reste à reprendre.",
      },
      {
        icone: "ph:list-numbers-duotone",
        titre: "3 priorités classées par impact",
        corps:
          "Pas une liste de trente points. Les trois chantiers qui méritent votre attention en premier, dans l'ordre, avec la raison de ce classement.",
      },
      {
        icone: "ph:clock-countdown-duotone",
        titre: `Reçu sous ${DELAI}`,
        corps:
          "Vous commandez aujourd'hui, vous recevez votre analyse par courriel dans les deux jours ouvrés. Sans rendez-vous, sans échange préalable.",
      },
    ],
  },

  etapes: {
    kicker: "Comment ça marche",
    h2: "Trois étapes, aucun rendez-vous.",
    items: [
      {
        titre: "Vous commandez",
        corps: `Vous payez les ${PRIX} en ligne et vous indiquez l'adresse de votre site. C'est tout ce que j'ai besoin de savoir pour commencer.`,
      },
      {
        titre: "J'analyse",
        corps:
          "Je passe votre site en revue sur les six axes qui décident du passage d'un visiteur à une demande, sur ordinateur comme sur téléphone.",
      },
      {
        titre: "Vous recevez votre vidéo",
        corps: `Sous ${DELAI}, votre analyse commentée arrive par courriel. Vous savez quoi corriger, dans quel ordre, et pourquoi.`,
      },
    ],
  },

  axes: {
    kicker: "Ce que j'analyse",
    h2: "Six axes qui décident si un visiteur vous contacte.",
    items: [
      {
        icone: "ph:eye-duotone",
        titre: "La première impression",
        corps: "Ce que votre visiteur comprend, et ressent, dans les cinq premières secondes.",
      },
      {
        icone: "ph:path-duotone",
        titre: "Le parcours vers le contact",
        corps: "Le chemin entre l'arrivée sur le site et le moment où l'on vous écrit.",
      },
      {
        icone: "ph:megaphone-duotone",
        titre: "La clarté de votre promesse",
        corps: "Ce que vous faites, pour qui, et pourquoi vous plutôt qu'un concurrent.",
      },
      {
        icone: "ph:device-mobile-duotone",
        titre: "La version téléphone",
        corps: "Là où arrive la majorité de vos visiteurs, et où le plus de choses se perdent.",
      },
      {
        icone: "ph:lightning-duotone",
        titre: "La vitesse de chargement",
        corps: "Le temps d'attente avant que votre page s'affiche vraiment, et ce qu'il coûte.",
      },
      {
        icone: "ph:magnifying-glass-duotone",
        titre: "La visibilité sur Google",
        corps: "Ce qui permet, ou empêche, qu'on vous trouve en cherchant votre métier.",
      },
    ],
  },

  auteur: {
    kicker: "Qui réalise l'audit",
    nom: "Tom-Soa Cyprien",
    role: "Fondateur d'ACTC",
    photo: "/images/tom-soa.jpg",
    corps: [
      `C'est moi qui regarde votre site et qui enregistre la vidéo. Pas un outil automatique, pas un rapport généré : une analyse commentée, faite à la main.`,
      `Nous créons des sites pour des dirigeants de PME et des indépendants en Guadeloupe, en Martinique, à La Réunion, à Saint-Martin et à Nosy Be. Ce que je regarde chez vous, je l'ai déjà corrigé ailleurs.`,
    ],
    preuveValeur: `${SITES_CREES}+`,
    preuveLabel: "sites créés ces 6 derniers mois",
  },

  offre: {
    kicker: "L'offre",
    h2Start: "Un audit à",
    h2Em: `${PRIX}`,
    h2End: "qui peut ne rien vous coûter.",
    corps: `Vous commandez votre audit ${PRIX}. Si vous nous confiez ensuite la création ou la refonte de votre site dans les ${FENETRE_DEDUCTION}, les ${PRIX} sont intégralement déduits du montant du projet.`,
    inclus: [
      "La vidéo d'analyse commentée de votre site",
      "La note sur 100, décomposée axe par axe",
      "Les 3 priorités classées par impact",
      `Livraison sous ${DELAI}, sans rendez-vous`,
    ],
    deductionTitre: "Déduction intégrale",
    deductionCorps: `Les ${PRIX} viennent en déduction du prix de votre site si vous démarrez avec nous dans les ${FENETRE_DEDUCTION} suivant l'audit.`,
    cta: "Commander mon audit",
    ctaNote: "Paiement sécurisé par Stripe",
  },

  faq: {
    kicker: "Questions fréquentes",
    h2: "Ce qu'on nous demande avant de commander.",
    items: [
      {
        q: "Que se passe-t-il juste après le paiement ?",
        a: `Vous arrivez sur une page de confirmation où vous indiquez l'adresse de votre site. Vous recevez aussi un courriel récapitulatif. Il n'y a rien d'autre à faire de votre côté : je m'occupe du reste.`,
      },
      {
        q: "En combien de temps je reçois mon audit ?",
        a: `Sous ${DELAI} ouvrées après votre commande. La vidéo vous arrive par courriel, avec un lien pour la regarder quand vous voulez, autant de fois que vous voulez.`,
      },
      {
        q: "Est-ce que ça vaut le coup si mon site est très récent ?",
        a: "Oui, et c'est souvent le meilleur moment. Corriger un parcours ou une promesse peu claire coûte beaucoup moins cher au début qu'après plusieurs mois de trafic. L'analyse porte sur ce que voit votre visiteur, pas sur l'âge du site.",
      },
      {
        q: "Est-ce que je suis obligé de travailler avec vous ensuite ?",
        a: "Non. L'audit se suffit à lui-même : vous recevez la vidéo, les priorités, et vous en faites ce que vous voulez, seul ou avec le prestataire de votre choix. La déduction est une possibilité, pas une condition.",
      },
      {
        q: "Comment fonctionne la déduction des 97 € ?",
        a: `Si vous nous confiez la création ou la refonte de votre site dans les ${FENETRE_DEDUCTION} suivant la réception de l'audit, les ${PRIX} sont retirés du montant de votre devis. Rien à réclamer : nous appliquons la déduction directement.`,
      },
      {
        q: "Et si je n'ai pas encore de site ?",
        a: "Cet audit porte sur un site existant : sans adresse à analyser, il n'a pas d'objet. Écrivez-nous directement, nous partirons de votre activité et de vos objectifs plutôt que d'une page à corriger.",
      },
    ],
  },

  final: {
    h2Start: "Vous saurez enfin",
    h2Em: "ce qui bloque.",
    corps: `Une vidéo, une note sur 100, trois priorités. Sous ${DELAI}, sans rendez-vous.`,
    cta: "Commander mon audit",
    ctaNote: `Paiement sécurisé · déduit si vous démarrez avec nous sous ${FENETRE_DEDUCTION}`,
  },
} as const;
