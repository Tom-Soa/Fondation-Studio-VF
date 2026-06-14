// Bande confiance — chips clients défilants (section-confiance Miniamea), en clair.
import { REALISATIONS } from "@/lib/content";

const CLIENTS = REALISATIONS.map((r) => `${r.title} · ${r.sector}`);

export default function TrustStrip() {
  const loop = [...CLIENTS, ...CLIENTS];
  return (
    <section className="bg-white border-y border-grid-line py-10">
      <p className="text-center font-mono text-[11px] uppercase tracking-[0.18em] text-steel mb-7">
        Ils nous font confiance
      </p>
      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="flex w-max items-center gap-3 animate-marquee-x" style={{ animationDuration: "32s" }}>
          {loop.map((c, i) => (
            <span
              key={i}
              className="shrink-0 rounded-full border border-grid-line bg-alabaster px-5 py-2 text-sm font-medium text-midnight/75"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
