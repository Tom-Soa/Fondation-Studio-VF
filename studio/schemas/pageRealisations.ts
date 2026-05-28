import { defineType, defineField } from 'sanity'

export const pageRealisations = defineType({
  name: 'pageRealisations',
  title: 'Page Réalisations (textes)',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'heroTitre',
      title: 'Titre H1 (hero)',
      type: 'string',
      initialValue: 'Nos réalisations.',
    }),
    defineField({
      name: 'heroSousTitre',
      title: 'Sous-titre hero',
      type: 'text',
      rows: 2,
      initialValue: '42 projets livrés. Chaque site pensé pour convertir, conçu pour durer.',
    }),
    defineField({
      name: 'ctaTitre',
      title: 'Titre section CTA bas de page',
      type: 'string',
      initialValue: 'Votre projet',
    }),
    defineField({
      name: 'ctaDescription',
      title: 'Description section CTA',
      type: 'text',
      rows: 2,
      initialValue: 'Chaque site est unique. Parlons du vôtre.',
    }),
    defineField({
      name: 'ctaPrincipal',
      title: 'Bouton CTA principal',
      type: 'string',
      initialValue: 'Démarrer mon projet',
    }),
    defineField({
      name: 'ctaSecondaire',
      title: 'Bouton secondaire',
      type: 'string',
      initialValue: 'Voir les tarifs',
    }),
  ],
})
