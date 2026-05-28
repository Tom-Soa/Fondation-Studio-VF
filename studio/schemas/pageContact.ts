import { defineType, defineField } from 'sanity'

export const pageContact = defineType({
  name: 'pageContact',
  title: 'Page Contact',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'eyebrow',
      title: 'Eyebrow (petite ligne au-dessus du titre)',
      type: 'string',
      initialValue: 'Nous contacter',
    }),
    defineField({
      name: 'titre',
      title: 'Titre H2',
      type: 'string',
      initialValue: 'Coordonnées et infos utiles.',
    }),
    defineField({
      name: 'lead',
      title: 'Lead (intro)',
      type: 'text',
      rows: 2,
      initialValue: 'Choisissez le canal qui vous convient. On vous répond sous 24h avec une proposition claire.',
    }),
    defineField({
      name: 'email',
      title: 'Adresse email de contact',
      type: 'string',
      initialValue: 'fondationstudio.fr@gmail.com',
    }),
    defineField({
      name: 'whatsapp',
      title: 'Numéro WhatsApp (format international, ex: 33637999738)',
      type: 'string',
      initialValue: '33637999738',
    }),
    defineField({
      name: 'whatsappLabel',
      title: 'Label bouton WhatsApp',
      type: 'string',
      initialValue: 'Écrire sur WhatsApp',
    }),
    defineField({
      name: 'formulaireNote',
      title: 'Note sous le formulaire',
      type: 'string',
      initialValue: 'Réponse sous 24h · Sans engagement · 0€ carte bleue',
    }),
    defineField({
      name: 'formulaireCtaLabel',
      title: 'Texte du bouton de soumission',
      type: 'string',
      initialValue: 'Envoyer ma demande',
    }),
  ],
})
