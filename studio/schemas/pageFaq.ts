import { defineType, defineField } from 'sanity'

export const pageFaq = defineType({
  name: 'pageFaq',
  title: 'Page FAQ',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'heroTitre',
      title: 'Titre H1',
      type: 'string',
      initialValue: 'Tout ce que vous voulez savoir.',
    }),
    defineField({
      name: 'heroSousTitre',
      title: 'Sous-titre',
      type: 'string',
      initialValue: 'Délais, tarifs, propriété, SEO : les réponses claires à vos vraies questions.',
    }),
    defineField({
      name: 'categories',
      title: 'Catégories de questions',
      type: 'array',
      of: [{
        type: 'object',
        name: 'categorie',
        fields: [
          defineField({ name: 'titre', title: 'Titre de la catégorie', type: 'string' }),
          defineField({
            name: 'questions',
            title: 'Questions',
            type: 'array',
            of: [{
              type: 'object',
              name: 'faqItem',
              fields: [
                defineField({ name: 'question', title: 'Question', type: 'string', validation: (Rule) => Rule.required() }),
                defineField({ name: 'reponse', title: 'Réponse', type: 'text', rows: 4, validation: (Rule) => Rule.required() }),
              ],
              preview: { select: { title: 'question' } },
            }],
          }),
        ],
        preview: { select: { title: 'titre' } },
      }],
    }),
    defineField({
      name: 'ctaTitre',
      title: "Titre CTA bas de page",
      type: 'string',
      initialValue: "Vous n'avez pas trouvé votre réponse ? Parlons-en.",
    }),
    defineField({
      name: 'ctaSousTitre',
      title: "Sous-titre CTA",
      type: 'string',
      initialValue: "On répond à toutes vos questions en moins de 24h.",
    }),
  ],
})
