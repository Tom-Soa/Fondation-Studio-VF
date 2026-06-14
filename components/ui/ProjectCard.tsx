import { cn } from "@/lib/utils";
import type { Realisation } from "@/lib/content";

/**
 * Carte projet "gradient" (sans screenshot) : visuel généré + métadonnées.
 * Réutilisée en marquee (home) et en grille (page réalisations).
 */
export function ProjectCard({
  project,
  className,
}: {
  project: Realisation;
  className?: string;
}) {
  return (
    <article
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border border-grid-line bg-white transition-shadow hover:shadow-card-light",
        className,
      )}
    >
      {/* Visuel gradient + initiale */}
      <div
        className="relative aspect-[16/10] overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0f1424 0%, #1a2236 55%, #2a1810 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-60"
          style={{
            background:
              "radial-gradient(60% 70% at 25% 20%, rgba(249,115,22,0.30) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <span className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[10px] font-mono uppercase tracking-wider text-white/80 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-terra" />
          {project.category}
        </span>
        <div className="absolute bottom-5 left-5 font-display text-3xl font-medium tracking-tight text-white">
          {project.title}
        </div>
        <div className="absolute bottom-5 right-5 font-mono text-[11px] uppercase tracking-wider text-terra">
          {project.metric}
        </div>
      </div>

      {/* Corps */}
      <div className="flex flex-1 flex-col p-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-steel mb-2">
          {project.sector}
        </div>
        <p className="text-[14.5px] leading-relaxed text-steel">{project.description}</p>
      </div>
    </article>
  );
}
