import { defineType, defineField } from 'sanity'

export const pageProcessus = defineType({
  name: 'pageProcessus',
  title: 'Page Processus',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  groups: [
    { name: 'etapes', title: 'Étapes du processus' },
    { name: 'techno', title: 'Section Technologie' },
  ],
  fields: [
    // ── ÉTAPES ──
    defineField({
      name: 'etapes',
      title: 'Étapes du processus (4 cartes)',
      type: 'array',
      group: 'etapes',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'tag', title: 'Tag (ex: Appel découverte)', type: 'string' }),
          defineField({ name: 'duree', title: 'Durée (ex: ~30 min)', type: 'string' }),
          defineField({ name: 'titre', title: 'Titre', type: 'string' }),
          defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
        ],
        preview: { select: { title: 'titre', subtitle: 'tag' } },
      }],
      initialValue: [
        { tag: 'Appel découverte', duree: '~30 min', titre: 'On apprend à se connaître', description: '20–30 minutes pour comprendre votre activité. Pas de pression, pas de jargon.' },
        { tag: 'Maquette offerte', duree: '~7 jours · 0€', titre: 'On vous montre le résultat, gratuitement', description: 'On conçoit la page d\'accueil sans engagement. Vous voyez avant de décider.' },
        { tag: 'Contrat & brief', duree: 'J+1', titre: 'Tout est cadré avant de commencer', description: 'Contrat signé, brief complet : textes, photos, objectifs. On démarre sur des bases solides.' },
        { tag: 'Développement & mise en ligne', duree: '14–21 jours', titre: '14 à 21 jours, et c\'est à vous', description: "On développe, on ajuste sur vos retours, puis on met en ligne. Le site vous appartient à 100%." },
      ],
    }),

    // ── TECHNOLOGIE ──
    defineField({
      name: 'technoTitre',
      title: 'Titre section Technologie',
      type: 'string',
      group: 'techno',
      initialValue: 'La technologie qui change tout.',
    }),
    defineField({
      name: 'technoFeatures',
      title: 'Fonctionnalités (7 avantages)',
      type: 'array',
      group: 'techno',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'titre', title: 'Titre', type: 'string' }),
          defineField({ name: 'description', title: 'Description', type: 'text', rows: 2 }),
        ],
        preview: { select: { title: 'titre' } },
      }],
      initialValue: [
        { titre: 'Chargement ultra-rapide', description: 'Votre site s\'affiche en une fraction de seconde. Une expérience fluide qui retient vos visiteurs.' },
        { titre: 'Sécurité renforcée', description: 'Sans base de données ni CMS, les risques de piratage sont considérablement réduits.' },
        { titre: '100 % sur-mesure', description: 'Pas de modèle préfabriqué. Chaque page est conçue pour votre secteur et vos clients.' },
        { titre: 'Référencement intégré', description: 'Google, ChatGPT, Perplexity, assistants vocaux. Votre site est trouvé partout dès le lancement.' },
        { titre: 'Vous voyez avant de payer', description: 'La maquette est livrée gratuitement avant tout engagement. Si elle ne vous convient pas : zéro obligation, zéro frais.' },
        { titre: 'Un seul interlocuteur', description: 'Du brief à la mise en ligne, vous parlez directement aux fondateurs. Pas d\'intermédiaire, pas de jargon.' },
        { titre: 'Le site est à vous', description: 'Hébergement naturellement gratuit, domaine à votre nom, aucun abonnement imposé. Aucune dépendance à notre agence.' },
      ],
    }),
  ],
})
