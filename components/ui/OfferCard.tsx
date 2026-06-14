import { Icon } from "@iconify/react";
import Link from "next/link";
import { type Offer, depositLabel } from "@/lib/content";
import { cn } from "@/lib/utils";

export function OfferCard({ offer }: { offer: Offer }) {
  const deposit = depositLabel(offer);
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-3xl border p-7 transition-all",
        offer.highlighted
          ? "border-terra bg-white shadow-[0_24px_60px_-24px_rgba(194,65,12,0.45)] lg:-translate-y-3"
          : "border-grid-line bg-white shadow-card-light hover:border-terra/40",
      )}
    >
      {offer.badge && (
        <span className="absolute -top-3 left-7 rounded-full bg-terra px-3 py-1 text-[11px] font-bold uppercase tracking-wide text-white shadow-terra">
          {offer.badge}
        </span>
      )}
      <div className="font-display text-xl font-bold text-midnight">{offer.name}</div>
      <div className="mt-1 text-[13px] text-steel">{offer.forWho}</div>
      <div className="mt-5 flex items-end gap-1">
        {offer.priceNote && <span className="mb-1.5 text-[13px] text-steel">{offer.priceNote}</span>}
        <span className="font-display text-4xl font-extrabold tracking-tight text-midnight">{offer.price}</span>
      </div>
      {deposit && (
        <div className="mt-2 text-[12.5px] text-steel">
          Acompte {deposit} à la commande
        </div>
      )}
      <div className="my-6 h-px bg-grid-line" />
      <ul className="flex flex-col gap-3 mb-7">
        {offer.features.map((f) => (
          <li key={f.text} className="flex items-start gap-2.5 text-[14px]">
            <Icon
              icon={f.included ? "lucide:check" : "lucide:minus"}
              width={18}
              height={18}
              className={cn("mt-0.5 shrink-0", f.included ? "text-terra" : "text-midnight/25")}
              aria-hidden
            />
            <span className={cn(f.included ? "text-midnight/80" : "text-midnight/40")}>{f.text}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto">
        <Link
          href={`/offres#${offer.slug}`}
          className={cn(
            "flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-[14px] font-bold transition-all",
            offer.highlighted
              ? "bg-terra hover:bg-terra-hover text-white glow-terra"
              : "border border-midnight/15 text-midnight hover:border-terra hover:text-terra",
          )}
        >
          {offer.ctaLabel}
          <Icon icon="lucide:arrow-right" width={16} height={16} aria-hidden />
        </Link>
      </div>
    </div>
  );
}
