import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { ressourcesTriees } from "@/lib/ressources";

const BASE = "https://fondationstudio.fr";

// Toutes les pages publiques du site, par ordre d'importance SEO, déclinées en /fr et /en.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]; lastModified?: Date }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/offres", priority: 0.9, changeFrequency: "monthly" },
    { path: "/sites-vitrine", priority: 0.9, changeFrequency: "monthly" },
    { path: "/sites-marchands", priority: 0.9, changeFrequency: "monthly" },
    { path: "/tarifs", priority: 0.8, changeFrequency: "monthly" },
    { path: "/realisations", priority: 0.8, changeFrequency: "monthly" },
    { path: "/qui-sommes-nous", priority: 0.7, changeFrequency: "monthly" },
    // Les ressources bougent souvent : nouvelles vidéos et articles réguliers.
    { path: "/ressources", priority: 0.8, changeFrequency: "weekly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
    { path: "/mentions-legales", priority: 0.3, changeFrequency: "yearly" },
    { path: "/politique-confidentialite", priority: 0.3, changeFrequency: "yearly" },
    { path: "/cgv", priority: 0.3, changeFrequency: "yearly" },
  ];

  // Une entrée par ressource publiée, dans les deux langues. La date de
  // publication sert de lastModified pour que l'indexation reste juste.
  const ressourcePages = ressourcesTriees().map((r) => ({
    path: `/ressources/${r.slug}`,
    priority: 0.6,
    changeFrequency: "monthly" as const,
    lastModified: new Date(`${r.date}T12:00:00Z`),
  }));

  return locales.flatMap((lang) =>
    [...pages, ...ressourcePages].map(({ path, priority, changeFrequency, lastModified }) => ({
      url: `${BASE}/${lang}${path}`,
      lastModified: lastModified ?? now,
      changeFrequency,
      // Le français est la langue principale : légère priorité au-dessus de l'anglais.
      priority: lang === "fr" ? priority : Math.max(0.1, priority - 0.2),
      alternates: {
        languages: {
          fr: `${BASE}/fr${path}`,
          en: `${BASE}/en${path}`,
        },
      },
    })),
  );
}
