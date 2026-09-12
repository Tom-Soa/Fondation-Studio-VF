import LpIcon from "@/components/lp/LpIcon";
import { LP } from "@/lib/lp-content";

/** Bande de réassurance + les trois chiffres de la promesse. */
export default function TrustRow() {
  return (
    <section className="border-y border-grid-line bg-white py-12 lg:py-16">
      <div className="mx-auto max-w-5xl px-6">
        {/* Réassurance */}
        <ul className="grid grid-cols-2 gap-3 text-[13.5px] text-midnight/80 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-x-8 sm:gap-y-3 sm:text-[14px] sm:text-midnight/70">
          {LP.trust.map(([icon, label]) => (
            <li
              key={label}
              className="flex items-center gap-2 rounded-2xl border border-grid-line bg-alabaster px-3 py-2.5 leading-snug sm:border-0 sm:bg-transparent sm:px-0 sm:py-0"
            >
              <LpIcon name={icon} size={19} className="shrink-0 text-terra" />
              {label}
            </li>
          ))}
        </ul>

        {/* Chiffres */}
        <div
          className="reveal-on-scroll mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-8 border-t border-grid-line pt-10 sm:gap-12"
        >
          {LP.stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-[clamp(2.4rem,5vw,3.4rem)] font-extrabold tracking-[-0.03em] text-terra">
                {s.value}
              </div>
              <p className="mx-auto mt-2.5 max-w-[13rem] text-[13px] leading-snug text-steel sm:max-w-[15rem] sm:text-[14.5px]">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
