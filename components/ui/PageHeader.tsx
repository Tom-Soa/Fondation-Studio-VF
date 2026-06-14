// En-tête de page interne : version CLAIRE (fond alabaster), dégage la nav fixe.
export function PageHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
}) {
  return (
    <header className="relative isolate overflow-hidden bg-alabaster pt-32 pb-16 lg:pt-44 lg:pb-20">
      {/* Halo terracotta doux */}
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[60vh]"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 0%, rgba(194,65,12,0.12) 0%, transparent 70%)",
        }}
        aria-hidden
      />
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="text-[11px] uppercase tracking-[0.18em] text-terra mb-6 font-medium">
          {eyebrow}
        </div>
        <h1 className="font-display font-extrabold tracking-[-0.035em] text-[clamp(2.5rem,6.5vw,5rem)] leading-[1.02] text-midnight mx-auto max-w-4xl">
          {title} {highlight && <span className="font-emphasis font-normal text-terra">{highlight}</span>}
        </h1>
        {subtitle && (
          <p className="mt-7 max-w-2xl mx-auto text-[clamp(1rem,1.2vw,1.2rem)] leading-relaxed text-steel">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}
