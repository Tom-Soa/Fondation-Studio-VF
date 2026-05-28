import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'

const singletonDoc = (S: any, id: string, schemaType: string, title: string) =>
  S.listItem()
    .title(title)
    .child(
      S.editor()
        .id(id)
        .schemaType(schemaType)
        .documentId(id)
    )

export default defineConfig({
  name: 'fondation-studio',
  title: 'Fondation Studio CMS',
  projectId: 'm2u2eg5e',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Fondation Studio')
          .items([
            S.listItem()
              .title('Réalisations')
              .child(
                S.documentTypeList('realisation')
                  .title('Réalisations')
                  .defaultOrdering([{ field: 'ordre', direction: 'asc' }])
              ),
            S.divider(),
            S.listItem()
              .title('Pages du site')
              .child(
                S.list()
                  .title('Pages')
                  .items([
                    singletonDoc(S, 'page-accueil', 'pageAccueil', "Accueil"),
                    singletonDoc(S, 'page-realisations', 'pageRealisations', "Réalisations (textes)"),
                    singletonDoc(S, 'page-qui-sommes-nous', 'pageQuiSommesNous', "Qui sommes-nous"),
                    singletonDoc(S, 'page-processus', 'pageProcessus', "Processus"),
                    singletonDoc(S, 'page-faq', 'pageFaq', "FAQ"),
                    singletonDoc(S, 'page-contact', 'pageContact', "Contact"),
                  ])
              ),
            S.divider(),
            singletonDoc(S, 'tarifs-singleton', 'tarifs', 'Tarifs & Offres'),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
})
