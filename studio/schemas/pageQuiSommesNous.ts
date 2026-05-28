import { defineType, defineField } from 'sanity'

export const pageQuiSommesNous = defineType({
  name: 'pageQuiSommesNous',
  title: 'Page Qui sommes-nous',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'fondateurs', title: 'Fondateurs' },
    { name: 'vision', title: 'Vision & Mission' },
    { name: 'methode', title: 'Méthode' },
  ],
  fields: [
    // ── HERO ──
    defineField({
      name: 'heroTitre',
      title: 'Titre H1',
      type: 'string',
      group: 'hero',
      initialValue: 'Deux entrepreneurs. Une obsession commune.',
    }),

    // ── FONDATEURS ──
    defineField({
      name: 'fondateurs',
      title: 'Fondateurs',
      type: 'array',
      group: 'fondateurs',
      of: [{
        type: 'object',
        fields: [
          defineField({ name: 'nom', title: 'Nom', type: 'string' }),
          defineField({ name: 'descriptionCourte', title: 'Description courte (carte)', type: 'text', rows: 2 }),
          defineField({ name: 'descriptionLongue', title: 'Biographie complète (modal)', type: 'array', of: [{ type: 'text' }] }),
          defineField({ name: 'photo', title: 'Photo', type: 'image', options: { hotspot: true } }),
        ],
        preview: { select: { title: 'nom', media: 'photo' } },
      }],
      initialValue: [
        {
          nom: 'Tom-Soa',
          descriptionCourte: 'Spécialiste en acquisition client. Il a accompagné +30 entreprises à générer du chiffre d\'affaires via Meta Ads & Google Ads.',
          descriptionLongue: [
            'Tom-Soa entreprend depuis ses 15 ans. Passionné par le marketing digital et la performance, il s\'est spécialisé dans l\'acquisition client via Meta Ads, Google Ads et le SEO.',
            'Il a accompagné plus de 30 entreprises à générer du chiffre d\'affaires grâce à des stratégies digitales concrètes. Pas du bruit. Des résultats mesurables.',
            'Son constat : attirer du trafic ne suffit pas. Il faut le convertir. C\'est exactement ce que fait chaque site qu\'il conçoit : transformer les visiteurs en clients.',
            'Fondation Studio est né de cette obsession : offrir aux PME des outils digitaux qui rivalisent avec ceux des grandes marques, sans les tarifs d\'agence.',
          ],
        },
        {
          nom: 'Andylane',
          descriptionCourte: 'Originaire de La Réunion et de Mayotte. A lancé et développé une vingtaine d\'entreprises avec une seule obsession : la rentabilité.',
          descriptionLongue: [
            'Andylane est entrepreneur et grossiste basé à Mayotte. Depuis plusieurs années, il accompagne des entreprises dans leur lancement et leur développement commercial.',
            'Il a contribué à une vingtaine de projets de création d\'entreprise et de sites internet, toujours avec la même conviction : la rentabilité avant l\'esthétique.',
            'Sa vision est simple : les PME n\'ont pas besoin d\'un site "impressionnant". Elles ont besoin d\'un site qui leur apporte des clients. L\'efficacité avant la complexité.',
          ],
        },
      ],
    }),

    // ── VISION ──
    defineField({
      name: 'visionTitre',
      title: 'Titre section Vision',
      type: 'string',
      group: 'vision',
      initialValue: "Un site, c'est un levier de croissance. Pas une dépense.",
    }),
    defineField({
      name: 'visionParagraphes',
      title: 'Paragraphes vision',
      type: 'array',
      group: 'vision',
      of: [{ type: 'text' }],
      initialValue: [
        "Aujourd'hui trop de sites sont moches et vendus cher, ou alors beaux mais qui ne convertissent pas du tout.",
        "Design moyen, aucune stratégie, aucun impact réel sur le chiffre d'affaires. Le site est en ligne, mais il n'apporte rien.",
        "Notre conviction est simple : un site ne devrait pas être une case à cocher. C'est l'outil le plus puissant de votre acquisition client, à condition qu'il soit construit pour ça.",
        "Notre objectif : des sites qui attirent, rassurent et convertissent. Pas juste des sites \"beaux\".",
      ],
    }),

    // ── MÉTHODE ──
    defineField({
      name: 'methodeTitre',
      title: 'Titre section Méthode',
      type: 'string',
      group: 'methode',
      initialValue: "Pas une agence. Pas des freelances seuls. Le meilleur des deux.",
    }),
    defineField({
      name: 'methodeCorps',
      title: 'Description méthode',
      type: 'text',
      rows: 3,
      group: 'methode',
      initialValue: "On s'appuie sur un réseau de freelances spécialisés (designers, développeurs, copywriters) sélectionnés sur leur niveau d'exigence. Chaque projet mobilise les bonnes compétences, sans intermédiaire inutile.",
    }),
  ],
})
