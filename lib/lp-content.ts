// Contenu éditorial de la landing page publicitaire.
// Angle : comparaison frontale avec la concurrence + promesse "plus de clients".

export const LP = {
  // ── Au-dessus de la vidéo ──────────────────────────────────────────────
  hero: {
    pill: "Places limitées ce mois",
    h1Start: "Un site internet qui",
    h1Em: "se rentabilise",
    h1End: "vraiment tout seul.",
    sub: "Que votre site actuel ne vous rapporte rien ou que vous n'en ayez pas encore, on vous montre en 8 minutes pourquoi la plupart des sites ne génèrent jamais un seul appel, et la méthode qui fait rentrer les premières demandes en moins de 30 jours.",
    watchNote: "Regardez la vidéo en entier avant de remplir le formulaire.",
  },

  // ── Juste sous la vidéo ────────────────────────────────────────────────
  underVideo: {
    cta: "Remplir le formulaire",
    ctaNote: "2 minutes · sans engagement · réponse sous 24 h",

    // Rappel du contenu de la vidéo, sous le CTA.
    title: "Ce que vous apprenez dans la vidéo",
    bullets: [
      "Les 3 raisons pour lesquelles un site, même refait à neuf, ne génère aucun appel.",
      "Comment reconnaître un prestataire qui vend du design d'un prestataire qui vend des clients.",
      "La méthode qui fait rentrer les premières demandes en moins de 30 jours.",
      "Ce qu'il faut exiger avant de signer : propriété du site, hébergement, autonomie.",
    ],
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
        them: "Livre un joli site, sans se soucier de ce qu'il rapporte.",
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
      {
        them: "Disparaît une fois le site livré et la facture payée.",
        us: "Reste à vos côtés après la mise en ligne : référencement, réseaux sociaux, conseils pour faire grandir votre activité.",
      },
      {
        them: "Met des semaines à répondre pour la moindre modification.",
        us: "Répond vite et applique vos modifications sans vous faire attendre.",
      },
    ],
  },

  // ── Vocaux clients ─────────────────────────────────────────────────────
  voices: {
    kicker: "Ce qu'en disent nos clients",
    h2Start: "Écoutez-les",
    h2Em: "le raconter eux-mêmes.",
    sub: "Deux messages vocaux reçus après la mise en ligne de leur site.",
  },

  // ── Sites en ligne ─────────────────────────────────────────────────────
  sites: {
    kicker: "Nos réalisations",
    h2Start: "Jugez sur pièce.",
    h2Em: "Voici nos sites.",
    sub: "Cliquez sur un site pour l'ouvrir et le parcourir comme le ferait un de vos clients.",
    linkLabel: "Voir le site",
  },

  // ── Objections ─────────────────────────────────────────────────────────
  faq: {
    kicker: "Vos questions",
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
        q: "Le formulaire m'engage à quelque chose ?",
        a: "Non. Il sert à comprendre votre activité et votre situation. On revient vers vous sous 24 h avec une réponse claire, et vous décidez ensuite.",
      },
      {
        q: "Vous travaillez avec quels types d'entreprises ?",
        a: "Des PME, des artisans, des commerces et des cabinets de conseil. Le point commun : une activité qui a besoin de demandes entrantes régulières, pas d'une vitrine décorative.",
      },
    ],
  },

  // ── CTA final ──────────────────────────────────────────────────────────
  finalCta: {
    badge: "Places limitées ce mois",
    h2Start: "Passez au site qui",
    h2Em: "vous rapporte.",
    body: "Dites-nous où vous en êtes et ce que vous visez. On revient vers vous sous 24 h avec une réponse claire sur ce qu'on peut faire, et en combien de temps.",
    cta: "Remplir le formulaire",
    note: "2 minutes · sans engagement",
  },
} as const;

// Les deux messages vocaux clients.
//
// `src: null` affiche un lecteur désactivé avec la mention "à venir" : c'est
// l'état par défaut tant que le fichier audio n'est pas fourni. Pour publier,
// déposer le .mp3 (ou .m4a) dans /public/vocaux/ et remplacer null par son
// chemin, par exemple "/vocaux/medium.mp3".
export type Voice = {
  name: string;
  job: string;
  quote: string;
  result: string;
  src: string | null;
};

export const VOICES: Voice[] = [
  {
    name: "Un médium",
    job: "Voyance / accompagnement",
    quote:
      "Dix nouveaux clients dans la semaine qui a suivi la mise en ligne de son site.",
    result: "10 clients en 1 semaine",
    src: null,
  },
  {
    name: "Un photographe",
    job: "Photographie",
    quote:
      "Il ne s'attendait pas à ce niveau de qualité pour son site : il nous le dit de vive voix.",
    result: "Surpris par la qualité",
    src: null,
  },
];

// Les sites clients en ligne, ouverts dans un nouvel onglet.
// La capture est générée depuis l'URL et déposée dans /public/sites-clients/.
export type ClientSite = {
  name: string;
  sector: string;
  url: string;
  shot: string;
};

export const CLIENT_SITES: ClientSite[] = [
  {
    name: "La Conciergerie Bunel",
    sector: "Conciergerie / location meublée",
    url: "https://concierge-chi-three.vercel.app/",
    shot: "/sites-clients/conciergerie-bunel.jpg",
  },
  {
    name: "Saint-Martin Autrement",
    sector: "Association / seniors",
    url: "https://association-autrement.vercel.app/",
    shot: "/sites-clients/saint-martin-autrement.jpg",
  },
  {
    name: "SICO PREFA",
    sector: "BTP / construction préfabriquée",
    url: "https://sico-prefa.vercel.app/",
    shot: "/sites-clients/sico-prefa.jpg",
  },
  {
    name: "Épicerie Lafonke",
    sector: "Épicerie / produits naturels",
    url: "https://lafonke.vercel.app/",
    shot: "/sites-clients/lafonke.jpg",
  },
  {
    name: "Chez Andy's",
    sector: "Grossiste alimentaire",
    url: "https://andys-mayotte-refonte.vercel.app/",
    shot: "/sites-clients/andys.jpg",
  },
  {
    name: "L'Arbradelis",
    sector: "Restaurant créole",
    url: "https://abradelis-restaurant.vercel.app/",
    shot: "/sites-clients/arbradelis.jpg",
  },
  {
    name: "Tuy Run · Dien Chan",
    sector: "Bien-être / réflexothérapie faciale",
    url: "https://dienchan-re.vercel.app/",
    shot: "/sites-clients/dienchan.jpg",
  },
  {
    name: "Soumoili Auto",
    sector: "Concession / véhicules d'occasion",
    url: "https://soumoili-auto-main.vercel.app/",
    shot: "/sites-clients/soumoili-auto.jpg",
  },
];

