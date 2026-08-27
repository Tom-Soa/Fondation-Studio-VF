// Grille des ressources : filtres par categorie + cartes video/article.
// Le contenu vient de lib/ressources.ts (voir les commentaires de ce fichier).
"use client";

import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { localeHref, type Locale } from "@/lib/i18n";
import {
  CATEGORIES,
  categoriesUtilisees,
  formatDate,
  metaDuree,
  ressourcesTriees,
  type CategorieId,
} from "@/lib/ressources";

const T: Record<
  Locale,
  {
    all: string;
    watch: string;
    read: string;
    emptyTitle: string;
    emptyText: string;
    filterAria: string;
    videoLabel: string;
    articleLabel: string;
  }
> = {
  fr: {
    all: "Tout",
    watch: "Regarder",
    read: "Lire",
    emptyTitle: "Les premières ressources arrivent.",
    emptyText:
      "Vidéos courtes et articles pour vous aider à tirer le maximum de votre site. Revenez très bientôt.",
    filterAria: "Filtrer les ressources par catégorie",
    videoLabel: "Vidéo",
    articleLabel: "Article",
  },
  en: {
    all: "All",
    watch: "Watch",
    read: "Read",
    emptyTitle: "The first resources are on their way.",
    emptyText:
      "Short videos and articles to help you get the most out of your website. Check back very soon.",
    filterAria: "Filter resources by category",
    videoLabel: "Video",
    articleLabel: "Article",
  },
};

export default function RessourcesGrid({ lang }: { lang: Locale }) {
  const t = T[lang];
  const [filtre, setFiltre] = useState<CategorieId | "all">("all");

  const toutes = useMemo(() => ressourcesTriees(), []);
  const categories = useMemo(() => categoriesUtilisees(), []);
  const visibles = useMemo(
    () => (filtre === "all" ? toutes : toutes.filter((r) => r.categorie === filtre)),
    [filtre, toutes],
  );

  // Etat vide : aucune ressource publiee pour l'instant.
  if (toutes.length === 0) {
    return (
      <div className="rounded-3xl border border-grid-line bg-white p-12 lg:p-16 text-center">
        <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-terra/10 text-terra">
          <Icon icon="ph:play-circle-duotone" width={30} height={30} aria-hidden />
        </div>
        <h2 className="mt-6 font-display font-extrabold tracking-[-0.03em] text-[clamp(1.5rem,3vw,2.25rem)] text-midnight">
          {t.emptyTitle}
        </h2>
        <p className="mt-4 max-w-md mx-auto text-steel leading-relaxed">{t.emptyText}</p>
      </div>
    );
  }

  return (
    <div>
      {/* Filtres : affiches seulement s'il y a plusieurs categories utilisees */}
      {categories.length > 1 && (
        <div
          className="flex flex-wrap gap-2 mb-10"
          role="group"
          aria-label={t.filterAria}
        >
          <FiltreBtn
            actif={filtre === "all"}
            onClick={() => setFiltre("all")}
            label={t.all}
          />
          {categories.map((id) => (
            <FiltreBtn
              key={id}
              actif={filtre === id}
              onClick={() => setFiltre(id)}
              label={CATEGORIES[id][lang]}
            />
          ))}
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibles.map((r, i) => {
          const duree = metaDuree(r);
          const estVideo = r.type === "video";
          return (
            <motion.article
              key={r.slug}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: Math.min(i * 0.06, 0.3) }}
              className="group"
            >
              <a
                href={localeHref(lang, `/ressources/${r.slug}`)}
                className="flex h-full flex-col overflow-hidden rounded-3xl border border-grid-line bg-white transition-all duration-300 hover:border-terra/30 hover:shadow-card-light"
              >
                {/* Vignette : bandeau sombre avec icone de lecture pour les videos */}
                <div className="relative aspect-[16/9] overflow-hidden bg-midnight">
                  <div
                    className="absolute inset-0 opacity-[0.18]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 30% 20%, rgba(194,65,12,0.9), transparent 55%), radial-gradient(circle at 75% 80%, rgba(255,255,255,0.35), transparent 50%)",
                    }}
                    aria-hidden
                  />
                  <div className="absolute inset-0 grid place-items-center">
                    {estVideo ? (
                      <span className="grid h-14 w-14 place-items-center rounded-full bg-terra text-white shadow-terra transition-transform duration-300 group-hover:scale-110">
                        <Icon icon="lucide:play" width={22} height={22} aria-hidden />
                      </span>
                    ) : (
                      <span className="grid h-14 w-14 place-items-center rounded-full bg-white/10 text-white/80 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                        <Icon icon="ph:article-duotone" width={24} height={24} aria-hidden />
                      </span>
                    )}
                  </div>
                  {/* Badges : type + duree */}
                  <div className="absolute left-3 top-3 flex items-center gap-2">
                    <span className="rounded-full bg-white/12 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
                      {estVideo ? t.videoLabel : t.articleLabel}
                    </span>
                  </div>
                  {duree && (
                    <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-midnight/75 px-2.5 py-1 text-[11.5px] font-medium text-white backdrop-blur-sm">
                      <Icon icon="lucide:clock" width={12} height={12} aria-hidden />
                      {duree}
                    </span>
                  )}
                </div>

                {/* Texte */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.14em] text-terra font-medium">
                    {CATEGORIES[r.categorie][lang]}
                  </div>
                  <h2 className="mt-3 font-display font-bold tracking-[-0.02em] text-[19px] leading-snug text-midnight">
                    {r.titre[lang]}
                  </h2>
                  <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-steel">
                    {r.resume[lang]}
                  </p>
                  <div className="mt-5 flex items-center justify-between border-t border-grid-line pt-4">
                    <time
                      dateTime={r.date}
                      className="text-[12.5px] text-steel/80"
                    >
                      {formatDate(r.date, lang)}
                    </time>
                    <span className="flex items-center gap-1.5 text-[13.5px] font-semibold text-terra">
                      {estVideo ? t.watch : t.read}
                      <Icon
                        icon="lucide:arrow-right"
                        width={14}
                        height={14}
                        className="transition-transform duration-300 group-hover:translate-x-0.5"
                        aria-hidden
                      />
                    </span>
                  </div>
                </div>
              </a>
            </motion.article>
          );
        })}
      </div>
    </div>
  );
}

function FiltreBtn({
  actif,
  onClick,
  label,
}: {
  actif: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={actif}
      className={cn(
        "rounded-full border px-4 py-2 text-[13.5px] font-medium transition-colors",
        actif
          ? "border-terra bg-terra text-white"
          : "border-grid-line bg-white text-steel hover:border-terra/40 hover:text-midnight",
      )}
    >
      {label}
    </button>
  );
}
