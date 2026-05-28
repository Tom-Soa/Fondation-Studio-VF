import { defineType, defineField } from 'sanity'

export const pageAccueil = defineType({
  name: 'pageAccueil',
  title: "Page d'accueil",
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'probleme', title: 'Section Problème' },
    { name: 'piliers', title: 'Section Piliers' },
    { name: 'realisations', title: 'Section Réalisations' },
    { name: 'processus', title: 'Section Processus' },
    { name: 'nobrainer', title: 'Section Maquette Gratuite' },
  ],
  fields: [
    // ── HERO ──
    defineField({
      name: 'heroTitre',
      title: 'Titre H1 (hero)',
      type: 'string',
      group: 'hero',
      initialValue: 'Votre site. Conçu pour vendre. Livré en 21 jours.',
    }),
    defineField({
      name: 'heroSousTitre',
      title: 'Sous-titre (hero)',
      type: 'text',
      rows: 2,
      group: 'hero',
      initialValue: 'IA maîtrisée. Design singulier. Sites qui durent des années. À partir de 1 400 €. Maquette offerte avant tout engagement.',
    }),
    defineField({
      name: 'heroCta',
      title: 'Bouton CTA principal',
      type: 'string',
      group: 'hero',
      initialValue: 'Démarrer mon projet',
    }),
    defineField({
      name: 'heroCtaSecondaire',
      title: 'Bouton secondaire',
      type: 'string',
      group: 'hero',
      initialValue: 'Voir les réalisations',
    }),

    // ── PROBLÈME ──
    defineField({
      name: 'problemeTitre',
      title: 'Titre section Problème',
      type: 'string',
      group: 'probleme',
      initialValue: 'Votre site perd des clients chaque jour.',
    }),
    defineField({
      name: 'problemeCorps',
      title: 'Paragraphe principal',
      type: 'text',
      rows: 3,
      group: 'probleme',
      initialValue: "La plupart des PME ont un site qui n'inspire ni confiance, ni action. Les visiteurs arrivent, hésitent, et repartent chez un concurrent. Ce n'est pas un problème de budget. C'est un problème de design.",
    }),
    defineField({
      name: 'problemeSousCorps',
      title: 'Second paragraphe',
      type: 'text',
      rows: 3,
      group: 'probleme',
      initialValue: "Un site mal conçu coûte. En trafic perdu, en conversions manquées, en crédibilité dilapidée. Chaque jour sans optimisation, c'est du chiffre d'affaires offert à vos concurrents.",
    }),
    defineField({
      name: 'problemeItems',
      title: 'Les 4 douleurs (bullets)',
      type: 'array',
      group: 'probleme',
      of: [{ type: 'string' }],
      initialValue: [
        'Sans preuve ni confiance immédiate, le visiteur part avant d\'avoir lu une ligne',
        'Navigation confuse, parcours illisible, action impossible à identifier',
        'Votre site travaille activement contre vous. Pas pour vous.',
        'L\'information clé enfouie sous des menus. Le visiteur abandonne.',
      ],
    }),

    // ── PILIERS ──
    defineField({
      name: 'piliersTitre',
      title: 'Titre section Piliers',
      type: 'string',
      group: 'piliers',
      initialValue: 'Quatre piliers. Zéro friction.',
    }),
    defineField({
      name: 'piliersCorps',
      title: 'Introduction piliers',
      type: 'text',
      rows: 2,
      group: 'piliers',
      initialValue: "Une méthode conçue pour convertir. Chaque décision de design sert un seul objectif : transformer vos visiteurs en clients. Pas de compromis, pas de raccourcis, pas de template.",
    }),
    defineField({
      name: 'piliersItems',
      title: 'Les 4 piliers',
      type: 'array',
      group: 'piliers',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'titre', title: 'Titre', type: 'string' }),
          defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
        ],
        preview: { select: { title: 'titre' } },
      }],
      initialValue: [
        { titre: 'Design orienté conversion', description: 'Un seul CTA par page. Une seule action attendue. Le visiteur sait exactement quoi faire et pourquoi le faire maintenant.' },
        { titre: 'Livré en 21 jours chrono', description: 'Process rigoureux avec jalons clairs. Pas d\'attente à 6 mois. Votre site en ligne avant que vos concurrents terminent leur brief.' },
        { titre: 'Propriété totale du code', description: 'Aucun abonnement, aucune plateforme SaaS, aucune dépendance. Le code vous appartient entièrement et pour toujours.' },
        { titre: 'SEO intégré dès le jour 1', description: 'Structure sémantique, Core Web Vitals, balisage schema. PageSpeed 95+ garanti. Visible sur Google avant même le lancement.' },
      ],
    }),

    // ── RÉALISATIONS ──
    defineField({
      name: 'realisationsTitre',
      title: 'Titre section Réalisations',
      type: 'string',
      group: 'realisations',
      initialValue: 'Des sites qui convertissent.',
    }),
    defineField({
      name: 'realisationsCorps',
      title: 'Introduction réalisations',
      type: 'text',
      rows: 2,
      group: 'realisations',
      initialValue: '42 projets livrés. Restaurants, artisans, cabinets, e-commerces. Chaque site pensé pour son secteur, conçu pour se démarquer de la concurrence.',
    }),

    // ── PROCESSUS ──
    defineField({
      name: 'processusTitre',
      title: 'Titre section Processus',
      type: 'string',
      group: 'processus',
      initialValue: "De l'idée au site en 21 jours.",
    }),
    defineField({
      name: 'processusCorps',
      title: 'Introduction processus',
      type: 'text',
      rows: 2,
      group: 'processus',
      initialValue: "Un process éprouvé sur 42 projets. Chaque étape a une date, un livrable, un responsable. Aucune zone grise, aucune surprise en fin de projet.",
    }),
    defineField({
      name: 'processusEtapes',
      title: 'Étapes du processus',
      type: 'array',
      group: 'processus',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'titre', title: 'Titre', type: 'string' }),
          defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
        ],
        preview: { select: { title: 'titre' } },
      }],
      initialValue: [
        { titre: 'Brief et stratégie', description: "Analyse de votre secteur, de vos concurrents, de vos clients cibles. Définition de l'objectif unique et de la structure qui le sert." },
        { titre: 'Identité visuelle et maquette', description: 'Design sur-mesure : palette, typographie, hiérarchie, ton. Vous validez chaque décision avant qu\'une ligne de code soit écrite.' },
        { titre: 'Développement sur-mesure', description: "IA maîtrisée par des experts. Là où d'autres produisent des sites identiques, nous construisons une identité digitale que vos concurrents ne peuvent pas reproduire." },
        { titre: 'Tests et optimisations', description: '' },
        { titre: 'Mise en ligne et passation', description: "Déploiement, formation, documentation, suivi post-livraison inclus. Le code vous appartient. Vous en faites ce que vous voulez." },
      ],
    }),

    // ── NO-BRAINER ──
    defineField({
      name: 'nobrainerTitre',
      title: 'Titre section Maquette gratuite',
      type: 'string',
      group: 'nobrainer',
      initialValue: 'La maquette de votre futur site. Gratuite.',
    }),
    defineField({
      name: 'nobrainerDescription',
      title: 'Description',
      type: 'text',
      rows: 2,
      group: 'nobrainer',
      initialValue: 'Une vraie proposition visuelle, sur-mesure. Présentée en appel vidéo. Si ça vous convient, on démarre.',
    }),
    defineField({
      name: 'nobrainerCta',
      title: 'Bouton CTA',
      type: 'string',
      group: 'nobrainer',
      initialValue: 'Obtenir ma maquette gratuite',
    }),
  ],
})
