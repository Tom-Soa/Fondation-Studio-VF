// Contenu éditorial de la landing page publicitaire.
// Angle : comparaison frontale avec la concurrence + promesse "plus de clients".

export const LP = {
  // ── Au-dessus de la vidéo ──────────────────────────────────────────────
  hero: {
    pill: "Places limitées ce mois",
    h1Start: "La plupart des sites internet ne rapportent",
    h1Em: "aucun client.",
    h1End: "Voici comment on inverse ça.",
    sub: "Regardez la vidéo : on vous explique comment choisir un site qui vous rapporte des clients, pourquoi la majorité des sites n'en apportent aucun, et comment les nôtres commencent à en générer en moins de 30 jours en moyenne.",
    watchNote: "Regardez la vidéo en entier avant de réserver votre créneau.",
  },

  // ── Juste sous la vidéo ────────────────────────────────────────────────
  underVideo: {
    title: "Ce que vous découvrez dans cette vidéo",
    bullets: [
      "Les 3 raisons pour lesquelles un site refait à neuf ne génère toujours aucun appel.",
      "Comment reconnaître un prestataire qui vend du design et un prestataire qui vend des clients.",
      "La méthode qu'on applique pour qu'un site commence à rapporter en moins de 30 jours.",
      "Ce qu'il faut exiger avant de signer : propriété du site, hébergement, autonomie.",
    ],
    cta: "Réserver mon appel gratuit",
    ctaNote: "Sans engagement · réponse sous 24 h",
  },

  // ── Réassurance en bande ───────────────────────────────────────────────
  trust: [
    ["ph:key-duotone", "Votre site vous appartient"],
    ["ph:cloud-duotone", "Hébergement gratuit"],
    ["ph:sliders-duotone", "Vous le gérez en autonomie"],
    ["ph:seal-check-duotone", "Aucun abonnement caché"],
  ] as [string, string][],

  // ── Promesse chiffrée ──────────────────────────────────────────────────
  stats: [
    { value: "30 j", label: "en moyenne avant les premières demandes entrantes" },
    { value: "14-21 j", label: "de la validation de la maquette à la mise en ligne" },
    { value: "0 €", label: "d'hébergement et d'abonnement mensuel" },
  ],

  // ── Comparaison eux / nous ─────────────────────────────────────────────
  versus: {
    kicker: "La différence",
    h2Start: "Ce que font les autres,",
    h2Em: "et ce qu'on fait à la place.",
    themTitle: "Une agence classique",
    usTitle: "ACTC",
    rows: [
      {
        them: "Vend un site, puis passe au client suivant.",
        us: "Conçoit un parcours pensé pour transformer un visiteur en demande de devis.",
      },
      {
        them: "Réutilise un thème déjà vu chez vos concurrents.",
        us: "Crée un design original, dessiné pour votre activité et personne d'autre.",
      },
      {
        them: "Vous enferme dans un abonnement mensuel à vie.",
        us: "Vous laisse propriétaire du site, hébergement compris, sans mensualité.",
      },
      {
        them: "Vous rend dépendant pour changer une photo ou un prix.",
        us: "Vous rend autonome : vous modifiez vos contenus vous-même en quelques clics.",
      },
      {
        them: "Livre en 3 à 6 mois, parfois plus.",
        us: "Livre en 14 à 21 jours, maquette validée avant de démarrer.",
      },
      {
        them: "Facture le référencement en supplément.",
        us: "Intègre le référencement Google et IA dès la conception.",
      },
    ],
  },

  // ── Avant / après ──────────────────────────────────────────────────────
  beforeAfter: {
    kicker: "Avant / après",
    h2Start: "Le même métier.",
    h2Em: "Un tout autre effet.",
    sub: "Faites défiler pour voir ce que voyaient les visiteurs avant, puis ce qu'ils voient aujourd'hui.",
    beforeLabel: "Avant",
    afterLabel: "Après",
    hint: "Faites glisser →",
  },

  // ── Objections ─────────────────────────────────────────────────────────
  faq: {
    kicker: "Avant de réserver",
    h2Start: "Les questions",
    h2Em: "qu'on nous pose le plus.",
    items: [
      {
        q: "Combien de temps avant d'avoir des résultats ?",
        a: "En moyenne moins de 30 jours après la mise en ligne pour les premières demandes entrantes. Le site est livré en 14 à 21 jours, et le référencement est intégré dès la conception, pas ajouté après coup.",
      },
      {
        q: "Je paie quelque chose tous les mois ?",
        a: "Non. L'hébergement est gratuit et il n'y a aucun abonnement mensuel caché. Vous payez la création du site, et le site vous appartient.",
      },
      {
        q: "Je peux modifier mon site moi-même ?",
        a: "Oui. Vous changez vos textes, vos photos, vos tarifs en quelques clics, sans nous appeler et sans surcoût.",
      },
      {
        q: "Et si le design ne me plaît pas ?",
        a: "On conçoit votre page d'accueil avant tout engagement. Vous la voyez, vous la validez, et seulement ensuite on construit le reste.",
      },
      {
        q: "Vous travaillez avec quels types d'entreprises ?",
        a: "Des PME, des artisans, des commerces et des cabinets de conseil. Le point commun : une activité qui a besoin de demandes entrantes régulières, pas d'une vitrine décorative.",
      },
    ],
  },

  // ── CTA final ──────────────────────────────────────────────────────────
  finalCta: {
    badge: "Gratuit · sans engagement",
    h2Start: "Votre page d'accueil,",
    h2Em: "offerte.",
    body: "Vous nous décrivez votre activité, on conçoit une vraie maquette sur-mesure. Si elle vous convient, on construit le site. Sinon, vous ne devez rien.",
    cta: "Réserver mon appel gratuit",
    note: "2 minutes pour remplir le formulaire",
  },
} as const;

// Paires avant/après.
//
// `before: null` affiche une vignette de substitution propre : c'est l'état
// par défaut tant que les captures des anciens sites ne sont pas fournies.
// Pour publier une paire, déposer la capture dans /public/avant-apres/ et
// remplacer `null` par son chemin, par exemple "/avant-apres/elity-avant.jpg".
export type BeforeAfterItem = {
  name: string;
  sector: string;
  before: string | null;
  after: string;
  gain: string;
};

export const BEFORE_AFTER: BeforeAfterItem[] = [
  {
    name: "Cabinet de conseil",
    sector: "Conseil / cession d'entreprise",
    before: null,
    after: "/showcase/elity.jpg",
    gain: "Demandes qualifiées multipliées",
  },
  {
    name: "Constructeur",
    sector: "BTP / préfabrication",
    before: null,
    after: "/showcase/sico-prefa.jpg",
    gain: "Devis entrants dès le 1er mois",
  },
  {
    name: "Académie sportive",
    sector: "Club / association",
    before: null,
    after: "/showcase/academie-sportive.jpg",
    gain: "Inscriptions en ligne automatisées",
  },
];
