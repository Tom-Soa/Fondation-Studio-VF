import { defineType, defineField } from 'sanity'

export const realisation = defineType({
  name: 'realisation',
  title: 'Réalisation',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      title: 'Photo du site réalisé',
      type: 'image',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'nom',
      title: 'Nom du client ou du projet',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'offre',
      title: 'Offre choisie',
      type: 'string',
      options: {
        list: [
          { title: 'Standard', value: 'Standard' },
          { title: 'Conversion', value: 'Conversion' },
          { title: 'Prestige', value: 'Prestige' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Courte description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'siteUrl',
      title: 'Lien vers le site',
      type: 'url',
    }),
    defineField({
      name: 'ordre',
      title: "Ordre d'affichage",
      type: 'number',
      initialValue: 0,
    }),
    defineField({
      name: 'statut',
      title: 'Statut',
      type: 'string',
      options: {
        list: [
          { title: 'Visible', value: 'visible' },
          { title: 'Masqué', value: 'masque' },
          { title: 'Archivé', value: 'archive' },
        ],
        layout: 'radio',
      },
      initialValue: 'visible',
    }),
  ],
  preview: {
    select: {
      title: 'nom',
      subtitle: 'offre',
      media: 'image',
    },
  },
  orderings: [
    {
      title: "Ordre d'affichage",
      name: 'ordreAsc',
      by: [{ field: 'ordre', direction: 'asc' }],
    },
  ],
})
