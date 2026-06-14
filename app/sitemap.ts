import type { MetadataRoute } from "next";

const BASE = "https://fondationstudio.fr";

// Toutes les pages publiques du site, par ordre d'importance SEO.
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, changeFrequency: "weekly" },
    { path: "/offres", priority: 0.9, changeFrequency: "monthly" },
    { path: "/sites-vitrine", priority: 0.9, changeFrequency: "monthly" },
    { path: "/sites-marchands", priority: 0.9, changeFrequency: "monthly" },
    { path: "/tarifs", priority: 0.8, changeFrequency: "monthly" },
    { path: "/realisations", priority: 0.8, changeFrequency: "monthly" },
    { path: "/qui-sommes-nous", priority: 0.7, changeFrequency: "monthly" },
    { path: "/faq", priority: 0.7, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "monthly" },
    { path: "/mentions-legales", priority: 0.3, changeFrequency: "yearly" },
    { path: "/politique-confidentialite", priority: 0.3, changeFrequency: "yearly" },
    { path: "/cgv", priority: 0.3, changeFrequency: "yearly" },
  ];

  return pages.map(({ path, priority, changeFrequency }) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
