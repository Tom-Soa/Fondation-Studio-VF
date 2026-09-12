import LpIcon from "@/components/lp/LpIcon";
import { LP } from "@/lib/lp-content";

/**
 * Comparatif frontal "ce que font les autres / ce qu'on fait".
 *
 * Le verdict se lit avant le texte : la colonne des agences est rouge, la
 * notre verte. Chaque ligne est une carte a part entiere plutot qu'une puce,
 * pour que l'oeil puisse comparer deux affirmations a la meme hauteur.
 */
export default function Versus() {
  const t = LP.versus;

  return (
    <section className="relative overflow-hidden bg-alabaster py-20 lg:py-28">
      {/* Deux halos, un par camp, qui teintent le fond sans le charger */}
      <div
        className="pointer-events-none absolute -left-40 top-1/4 h-[420px] w-[420px] rounded-full bg-rose-500/[0.07] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-emerald-500/[0.09] blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-5xl px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <div className="mb-5 text-[11px] font-medium uppercase tracking-[0.18em] text-terra">
            {t.kicker}
          </div>
          <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-midnight">
            {t.h2Start}{" "}
            <span className="font-emphasis font-normal text-terra">{t.h2Em}</span>
          </h2>
        </div>

        <div
          className="reveal-on-scroll grid gap-5 md:grid-cols-2 md:gap-6"
        >
          {/* ── Une agence classique ─────────────────────────────────── */}
          <div className="overflow-hidden rounded-3xl border-2 border-rose-300/70 bg-white shadow-[0_18px_44px_-28px_rgba(190,18,60,0.45)]">
            <div className="flex items-center gap-3 border-b-2 border-rose-200/70 bg-rose-50 px-6 py-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-rose-500 text-white shadow-[0_6px_16px_-6px_rgba(190,18,60,0.7)]">
                <LpIcon name="x" size={19} />
              </span>
              <h3 className="font-display text-[15.5px] font-bold uppercase tracking-wide text-rose-700">
                {t.themTitle}
              </h3>
            </div>

            <ul className="divide-y divide-rose-100">
              {t.rows.map((r) => (
                <li
                  key={r.them}
                  className="flex gap-3 px-6 py-4 text-[14.5px] leading-relaxed text-midnight/70"
                >
                  <span
                    className="mt-[3px] grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-rose-100 text-rose-600"
                    aria-hidden
                  >
                    <LpIcon name="x" size={11} />
                  </span>
                  {r.them}
                </li>
              ))}
            </ul>
          </div>

          {/* ── ACTC ─────────────────────────────────────────────────── */}
          <div className="overflow-hidden rounded-3xl border-2 border-emerald-400/70 bg-white shadow-[0_20px_50px_-26px_rgba(5,150,105,0.5)]">
            <div className="flex items-center gap-3 border-b-2 border-emerald-200/70 bg-emerald-50 px-6 py-5">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white shadow-[0_6px_16px_-6px_rgba(5,150,105,0.8)]">
                <LpIcon name="check" size={19} />
              </span>
              <h3 className="font-display text-[15.5px] font-bold uppercase tracking-wide text-emerald-700">
                {t.usTitle}
              </h3>
            </div>

            <ul className="divide-y divide-emerald-100">
              {t.rows.map((r) => (
                <li
                  key={r.us}
                  className="flex gap-3 px-6 py-4 text-[14.5px] font-medium leading-relaxed text-midnight/90"
                >
                  <span
                    className="mt-[3px] grid h-[18px] w-[18px] shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700"
                    aria-hidden
                  >
                    <LpIcon name="check" size={11} />
                  </span>
                  {r.us}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
