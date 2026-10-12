// Onglets « Site vitrine / Site marchand » : les deux pages forment une seule rubrique « Sites internet ».
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localeHref } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const TABS: { href: string; label: Record<Locale, string>; price: Record<Locale, string> }[] = [
  { href: "/sites-vitrine", label: { fr: "Site vitrine", en: "Showcase website" }, price: { fr: "dès 1 400 €", en: "from €1,400" } },
  { href: "/sites-marchands", label: { fr: "Site marchand", en: "Online store" }, price: { fr: "dès 2 900 €", en: "from €2,900" } },
];

export default function SiteTypeSwitch({ lang, current }: { lang: Locale; current: "/sites-vitrine" | "/sites-marchands" }) {
  return (
    <div className="inline-flex rounded-full border border-grid-line bg-white p-1 shadow-card-light" role="tablist">
      {TABS.map((tab) => {
        const active = tab.href === current;
        return (
          <Link
            key={tab.href}
            href={localeHref(lang, tab.href)}
            role="tab"
            aria-selected={active}
            scroll={false}
            className={cn(
              "rounded-full px-4 py-2 text-[13.5px] font-semibold transition-colors whitespace-nowrap",
              active ? "bg-midnight text-white" : "text-midnight/60 hover:text-midnight",
            )}
          >
            {tab.label[lang]} <span className={cn("font-normal", active ? "text-white/60" : "text-midnight/40")}>{tab.price[lang]}</span>
          </Link>
        );
      })}
    </div>
  );
}
