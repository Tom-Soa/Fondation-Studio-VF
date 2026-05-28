import { defineType, defineField } from 'sanity'

export const tarifs = defineType({
  name: 'tarifs',
  title: 'Tarifs & Offres',
  type: 'document',
  // Singleton — un seul document via sanity.config.ts
  __experimental_actions: ['update', 'publish'],
  fields: [
    defineField({
      name: 'offres',
      title: 'Offres principales',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'offre',
          fields: [
            defineField({
              name: 'slug',
              title: 'Identifiant technique',
              type: 'string',
              description: 'Ne pas modifier : standard | conversion | prestige',
              readOnly: true,
            }),
            defineField({
              name: 'nom',
              title: "Nom de l'offre",
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'prix',
              title: 'Prix affiché (ex : 1 400€)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'note',
              title: "Note avant le prix (ex : 'À partir de')",
              type: 'string',
              description: 'Laisser vide pour Standard et Conversion.',
            }),
            defineField({
              name: 'pour',
              title: 'Pour qui (sous-titre carte)',
              type: 'string',
            }),
            defineField({
              name: 'delai',
              title: 'Délai livraison',
              type: 'string',
            }),
            defineField({
              name: 'miseEnAvant',
              title: 'Mise en avant (featured)',
              type: 'boolean',
              initialValue: false,
            }),
          ],
          preview: {
            select: { title: 'nom', subtitle: 'prix' },
          },
        },
      ],
      initialValue: [
        { slug: 'standard', nom: 'Standard', prix: '1 400€', pour: 'PME locale, budget maîtrisé', delai: 'Livraison en 14 à 21 jours', miseEnAvant: false },
        { slug: 'conversion', nom: 'Conversion', prix: '1 900€', pour: 'PME ambitieuse, croissance accélérée', delai: 'Livraison en 14 à 21 jours', miseEnAvant: true },
        { slug: 'prestige', nom: 'Prestige', prix: '2 400€', note: 'À partir de', pour: 'Image ultra premium · Tarif sur devis', delai: 'Devis personnalisé', miseEnAvant: false },
      ],
    }),
    defineField({
      name: 'options',
      title: 'Options à la carte',
      type: 'array',
      of: [
        {
          type: 'object',
          name: 'option',
          fields: [
            defineField({
              name: 'slug',
              title: 'Identifiant technique',
              type: 'string',
              description: 'maintenance | google-ads | emails | branding | blog | logo',
              readOnly: true,
            }),
            defineField({
              name: 'nom',
              title: "Nom de l'option",
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'prix',
              title: 'Prix (ex : 150 €/mois)',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            }),
          ],
          preview: {
            select: { title: 'nom', subtitle: 'prix' },
          },
        },
      ],
      initialValue: [
        { slug: 'maintenance', nom: 'Maintenance mensuelle', prix: '150 €/mois', description: 'Modifications régulières du site après la période offerte incluse dans votre formule.' },
        { slug: 'google-ads', nom: 'Publicité sur Google', prix: '300 €', description: 'Création et mise en place de votre publicité sur Google pour attirer de nouveaux clients, configuration complète incluse.' },
        { slug: 'emails', nom: 'Séquences de mails', prix: '300 €', description: 'Rédaction et mise en place de séquences automatiques : mail de bienvenue, relances, suivi après achat.' },
        { slug: 'branding', nom: 'Refonte branding', prix: '500 €', description: "Logo, identité visuelle, polices, couleurs, packaging. Tout ce qui rend votre marque reconnaissable." },
        { slug: 'blog', nom: 'Système de blog', prix: '300 €', description: 'Ajout d\'un blog à votre site, avec gestion des articles, catégories et optimisation pour Google.' },
        { slug: 'logo', nom: 'Création de logo', prix: '150 €', description: 'Conception d\'un logo professionnel adapté à votre activité : typographie, couleurs, déclinaisons. Fichiers livrés en haute définition.' },
      ],
    }),
    defineField({
      name: 'noteGlobale',
      title: 'Note globale (ligne sous les offres)',
      type: 'string',
      initialValue: 'Maintenance optionnelle : 150€/mois · Hébergement gratuit illimité',
    }),
  ],
})
