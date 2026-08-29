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
    h2Start: "Vous reconnaissez",
    h2Em: "sûrement l'une de ces situations.",
    items: [
      {
        icone: "ph:phone-slash-duotone",
        titre: "Votre site a l'air correct, mais le téléphone ne sonne pas",
        corps:
          "Le design vous plaît, vos proches vous disent qu'il est réussi, et pourtant les demandes n'arrivent pas. Quelque chose bloque entre la visite et le contact.",
      },
      {
        icone: "ph:users-three-duotone",
        titre: "Vous ne savez pas où partent vos visiteurs",
        corps:
          "Des gens arrivent sur votre site. Vous ignorez ce qu'ils lisent, à quel moment ils s'arrêtent, et ce qui les fait repartir sans rien faire.",
      },
      {
        icone: "ph:signpost-duotone",
        titre: "Vous ne savez pas par quoi commencer",
        corps:
          "On vous parle de référencement, de vitesse, de textes, de photos. Impossible de savoir ce qui compte vraiment pour votre activité, ni dans quel ordre s'y prendre.",
      },
    ],
  },

  livrables: {
    kicker: "Ce que vous recevez",
    h2Start: "Un livrable concret,",
    h2Em: "à revoir quand vous voulez.",
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
    h2Start: "Trois étapes,",
    h2Em: "aucun rendez-vous.",
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
    h2Start: "Six axes qui décident",
    h2Em: "si un visiteur vous contacte.",
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
    h2Start: "Ce n'est pas un outil",
    h2Em: "qui regarde votre site.",
    nom: "Tom-Soa Cyprien",
    role: "Fondateur d'ACTC",
    photo: "/images/tom-soa.jpg",
    corps: [
      `C'est moi qui parcours votre site et qui enregistre la vidéo. Pas un rapport généré automatiquement : une analyse commentée, faite à la main, par quelqu'un qui construit des sites et achète de la publicité tous les jours.`,
      `Ce que je regarde chez vous, je l'ai déjà corrigé ailleurs. C'est la seule raison pour laquelle je peux vous dire quoi traiter en premier.`,
    ],

    // Repères chiffrés, affichés en bandeau sous la présentation.
    reperes: [
      { valeur: "19 ans", label: "dont 15 à entreprendre" },
      { valeur: `${SITES_CREES}+`, label: "entreprises accompagnées" },
      { valeur: "Meta & Google", label: "publicité, formé et certifié" },
    ],

    // Le parcours en étapes : c'est ce qui légitime le regard porté sur un
    // site, davantage qu'une liste de compétences.
    parcoursKicker: "Le parcours",
    parcours: [
      {
        icone: "ph:code-duotone",
        periode: "Les débuts",
        titre: "La création de sites, vitrines et marchands",
        corps:
          "J'ai commencé par construire des sites, y compris des boutiques en ligne. C'est là que j'ai appris ce qui fait qu'une page vend, ou ne vend pas.",
      },
      {
        icone: "ph:trend-up-duotone",
        periode: "Ensuite",
        titre: "Des dizaines de millions de vues par mois",
        corps:
          "J'ai géré des comptes de réseaux sociaux qui généraient plusieurs dizaines de millions de vues mensuelles. On y apprend vite ce qui retient une attention, et ce qui la perd.",
      },
      {
        icone: "ph:target-duotone",
        periode: "À 18 ans",
        titre: "4 500 € investis dans deux formations",
        corps:
          "De ma poche, pour devenir expert en publicité Meta et Google. Depuis, je mets en avant les offres de mes clients pour leur amener des clients, et j'analyse leurs pages pour comprendre où l'argent se perd.",
      },
      {
        icone: "ph:handshake-duotone",
        periode: "Depuis début 2026",
        titre: "ACTC, officialisé avec Andy Lannes",
        corps:
          "Nous créions déjà des sites ensemble. Nous en avons fait une structure, et nous avons accompagné une cinquantaine d'entreprises depuis, dans des secteurs très différents les uns des autres.",
      },
    ],

    // Résultats : attribués à des cas précis, jamais généralisés.
    resultatsKicker: "Ce que ça donne",
    resultats: [
      {
        icone: "ph:currency-eur-duotone",
        chiffre: "1 M€",
        corps:
          "de chiffre d'affaires généré par un client du BTP dès le premier mois, avec 70 € investis en publicité. Un cas particulier, pas une moyenne.",
      },
      {
        icone: "ph:magnifying-glass-duotone",
        chiffre: "Référencement",
        corps:
          "nos clients sont positionnés sur leur métier et leur zone, et ce référencement leur amène des demandes sans publicité.",
      },
      {
        icone: "ph:seal-check-duotone",
        chiffre: "Crédibilité",
        corps:
          "un site sérieux change la façon dont on vous prend au sérieux. C'est le retour qui revient le plus souvent chez nos clients.",
      },
    ],
    resultatsNote:
      "Les clients qui s'impliquent et appliquent mes retours obtiennent des résultats. C'est la condition, et je le dis avant de commencer.",

    territoire:
      "Nous travaillons régulièrement avec des entreprises de Guadeloupe, de Martinique, de La Réunion, de Saint-Martin et de Nosy Be.",
  },

  // Les sites déjà réalisés : la liste vient de lib/lp-content.ts, un seul
  // endroit à mettre à jour quand un site s'ajoute.
  sites: {
    kicker: "Ce qu'on construit",
    h2Start: "Les sites qu'on a faits,",
    h2Em: "à parcourir vous-même.",
    sub: "Le regard que je porte sur votre site vient de là. Ouvrez-en un et jugez par vous-même.",
    linkLabel: "Voir le site",
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
        q: "Que se passe-t-il juste après le paiement ?",
        a: `L'adresse de votre site vous est demandée pendant le paiement. Vous recevez ensuite un reçu par courriel et arrivez sur une page de confirmation qui récapitule la suite. Il n'y a rien d'autre à faire de votre côté : je m'occupe du reste.`,
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
    contactAmorce: "Une question avant de commander ?",
    contactLien: "Écrivez-moi, je réponds moi-même.",
    contactMail: "tomsoa.actc@gmail.com",
  },

  final: {
    h2Start: "Vous saurez enfin",
    h2Em: "ce qui bloque.",
    corps: `Une vidéo, une note sur 100, trois priorités. Sous ${DELAI}, sans rendez-vous.`,
    cta: "Commander mon audit",
    ctaNote: `Paiement sécurisé · déduit si vous démarrez avec nous sous ${FENETRE_DEDUCTION}`,
  },

  // Page de confirmation, atteinte après le paiement Stripe.
  merci: {
    titreStart: "Paiement confirmé.",
    titreEm: "Merci.",
    sous: `Votre audit est lancé. Voici exactement ce qui se passe maintenant.`,
    etapes: [
      {
        icone: "ph:envelope-simple-duotone",
        titre: "Vous recevez un reçu par courriel",
        corps:
          "Envoyé par Stripe dans les minutes qui suivent. Pensez à vérifier vos indésirables si vous ne le voyez pas.",
      },
      {
        icone: "ph:magnifying-glass-duotone",
        titre: "J'analyse votre site",
        corps:
          "Je le parcours sur les six axes annoncés, sur ordinateur et sur téléphone, et j'enregistre la vidéo commentée.",
      },
      {
        icone: "ph:video-camera-duotone",
        titre: `Vous recevez votre vidéo sous ${DELAI}`,
        corps:
          "Par courriel, avec la note sur 100 et les 3 priorités classées par impact. Vous la gardez et la revoyez autant de fois que vous voulez.",
      },
    ],
    rappelTitre: "Vous n'avez pas indiqué l'adresse de votre site ?",
    rappelCorps:
      "Répondez simplement au courriel de confirmation en indiquant l'adresse. Sans elle, je ne peux pas démarrer l'analyse.",
    contactLabel: "Une question ?",
    contactMail: "tomsoa.actc@gmail.com",
    deduction: `Gardez ce reçu : les ${PRIX} sont déduits du montant de votre site si vous démarrez avec nous dans les ${FENETRE_DEDUCTION}.`,
  },
} as const;
