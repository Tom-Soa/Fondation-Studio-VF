import { cn } from "@/lib/utils";

// Palettes de "vignettes de sites" (fallback quand aucune image n'est fournie).
const SCHEMES = [
  "linear-gradient(135deg,#0f1424 0%,#1b2740 50%,#3a1d0e 100%)",
  "linear-gradient(135deg,#1a1208 0%,#3a2410 55%,#c2410c 140%)",
  "linear-gradient(135deg,#0e1a14 0%,#13243a 60%,#1f1208 110%)",
  "linear-gradient(135deg,#241016 0%,#3a1d2a 50%,#0f1424 120%)",
  "linear-gradient(135deg,#0f1424 0%,#2a1810 70%,#9a3412 130%)",
  "linear-gradient(135deg,#101820 0%,#22150c 55%,#3a1d0e 120%)",
];

export interface Mockup {
  title: string;
  tag: string;
  metric?: string;
}

export function MockupCard({
  mockup,
  image,
  alt,
  index = 0,
  className,
}: {
  mockup?: Mockup;
  image?: string;
  alt?: string;
  index?: number;
  className?: string;
}) {
  const bg = SCHEMES[index % SCHEMES.length];
  return (
    <div
      className={cn(
        "relative aspect-[16/10] shrink-0 overflow-hidden rounded-2xl border border-midnight/10 bg-white shadow-card-light",
        className,
      )}
    >
      {/* Barre navigateur */}
      <div className="flex items-center gap-1.5 bg-white px-3 py-2 border-b border-grid-line">
        <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
        <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
        <span className="h-2 w-2 rounded-full bg-[#28c840]" />
        <span className="ml-2 h-3 flex-1 rounded-full bg-grid-line/70" />
      </div>

      {/* Aperçu réel du site */}
      {image ? (
        <div className="relative h-full w-full bg-white">
          <img
            src={image}
            alt={alt ?? "Aperçu d'un site réalisé par Fondation Studio"}
            loading="lazy"
            decoding="async"
            draggable={false}
            className="h-full w-full object-cover object-top"
          />
        </div>
      ) : (
        /* Écran factice (fallback) */
        <div className="relative h-full w-full" style={{ background: bg }}>
          <div
            className="absolute inset-0 opacity-70"
            style={{ background: "radial-gradient(60% 70% at 25% 18%, rgba(249,115,22,0.35) 0%, transparent 60%)" }}
            aria-hidden
          />
          <div className="absolute inset-0 p-4 flex flex-col justify-between">
            <div className="space-y-1.5">
              <div className="h-2 w-16 rounded-full bg-white/30" />
              <div className="h-4 w-3/4 rounded bg-white/80" />
              <div className="h-4 w-1/2 rounded bg-terra" />
            </div>
            {mockup && (
              <div className="flex items-end justify-between">
                <div className="space-y-1">
                  <div className="font-display text-sm font-semibold text-white">{mockup.title}</div>
                  <div className="font-mono text-[9px] uppercase tracking-wider text-white/60">{mockup.tag}</div>
                </div>
                {mockup.metric && (
                  <div className="rounded-full bg-white/10 px-2 py-1 font-mono text-[9px] uppercase tracking-wider text-terra backdrop-blur-sm">
                    {mockup.metric}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
