// Gabarit commun des pages service (publicité, applications et conseil) :
// hero + carte prix, bénéfices, étapes, appel final. Même grammaire que /sites-vitrine.
import Link from "next/link";
import { Icon } from "@iconify/react";
import { Reveal } from "@/components/ui/Reveal";
import { RevealWords, TiltCard } from "@/components/ui/motion-kit";
import { JsonLd } from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import type { Locale } from "@/lib/i18n";
import { localeHref } from "@/lib/i18n";

export interface ServiceBlock {
  title: string;
  titleEm: string;
  body: string;
  items: { icon: string; label: string }[];
}

export interface ServiceDict {
  metaTitle: string;
  metaDescription: string;
  schemaName: string;
  schemaServiceType: string;
  breadcrumbHome: string;
  breadcrumbPage: string;
  heroKicker: string;
  heroTitle: string;
  heroTitleEm: string;
  heroSub: string;
  heroCta: string;
  cardTitle: string;
  cardPrice: string;
  cardItems: { icon: string; label: string }[];
  blocks: ServiceBlock[];
  stepsKicker: string;
  stepsTitle: string;
  steps: { title: string; body: string }[];
  ctaBadge: string;
  ctaTitle: string;
  ctaTitleEm: string;
  ctaSub: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export default function ServicePage({ lang, path, t }: { lang: Locale; path: string; t: ServiceDict }) {
  return (
    <main>
      <JsonLd
        schema={[
          serviceSchema({
            name: t.schemaName,
            serviceType: t.schemaServiceType,
            description: t.metaDescription,
            path: localeHref(lang, path),
          }),
          breadcrumbSchema([
            { name: t.breadcrumbHome, path: localeHref(lang, "/") },
            { name: t.breadcrumbPage, path: localeHref(lang, path) },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-alabaster pt-32 pb-20 lg:pt-44 lg:pb-28">
        <div className="absolute inset-x-0 top-0 -z-10 h-[60vh]" style={{ background: "radial-gradient(60% 60% at 50% 0%, rgba(194,65,12,0.10) 0%, transparent 70%)" }} aria-hidden />
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-terra font-medium mb-5">{t.heroKicker}</div>
              <RevealWords
                className="font-display font-extrabold tracking-[-0.035em] text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.02] text-midnight"
                emClassName="font-emphasis font-normal text-terra"
                segments={[{ text: t.heroTitle }, { text: t.heroTitleEm, em: true }]}
              />
              <p className="mt-6 text-[clamp(1rem,1.2vw,1.15rem)] leading-relaxed text-steel">{t.heroSub}</p>
              <div className="mt-8">
                <Link href={localeHref(lang, "/contact")} className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-terra hover:bg-terra-hover px-7 py-4 text-white font-semibold text-[15px] transition-all glow-terra">
                  {t.heroCta}
                  <Icon icon="lucide:arrow-right" width={16} height={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </div>
            </div>

            <Reveal delay={0.15}>
              <TiltCard className="rounded-3xl" max={5}>
              <div className="rounded-3xl border border-grid-line bg-white p-8 shadow-card-light">
                <div className="font-display font-extrabold text-[1.6rem] tracking-[-0.03em] text-midnight leading-tight mb-2">{t.cardTitle}</div>
                <div className="font-display font-extrabold text-[2rem] sm:text-[2.6rem] whitespace-nowrap tracking-[-0.04em] text-terra leading-none mb-6">{t.cardPrice}</div>
                <div className="space-y-2.5">
                  {t.cardItems.map((item) => (
                    <div key={item.label} className="flex items-center gap-2.5">
                      <Icon icon={item.icon} width={17} height={17} className="text-terra shrink-0" aria-hidden />
                      <span className="text-[13.5px] font-medium text-midnight/80">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Blocs bénéfices */}
      <section className="bg-white py-16 lg:py-24 border-y border-grid-line">
        <div className="max-w-5xl mx-auto px-6 space-y-6">
          {t.blocks.map((b) => (
            <Reveal key={b.title}>
              <div className="rounded-3xl border border-grid-line bg-alabaster p-8 lg:p-10">
                <h2 className="font-display font-bold tracking-[-0.03em] text-[clamp(1.4rem,3vw,2rem)] text-midnight">
                  {b.title} <span className="font-emphasis font-normal text-terra">{b.titleEm}</span>
                </h2>
                <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-steel">{b.body}</p>
                <ul className="mt-7 grid sm:grid-cols-2 gap-x-10 gap-y-4">
                  {b.items.map((item) => (
                    <li key={item.label} className="flex items-center gap-3">
                      <Icon icon={item.icon} width={18} height={18} className="text-terra shrink-0" aria-hidden />
                      <span className="text-[14.5px] font-medium text-midnight">{item.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Étapes */}
      <section className="bg-alabaster py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="text-[11px] uppercase tracking-[0.18em] text-terra font-medium mb-3">{t.stepsKicker}</div>
            <h2 className="font-display font-bold tracking-[-0.03em] text-[clamp(1.6rem,3.5vw,2.4rem)] text-midnight">{t.stepsTitle}</h2>
          </div>
          <div className="space-y-6">
            {t.steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.1}>
                <div className="flex items-start gap-6">
                  <div className="shrink-0 grid h-14 w-14 place-items-center rounded-full bg-terra text-white font-display font-extrabold text-[1.1rem]">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="font-display text-xl font-bold text-midnight mb-1">{s.title}</h3>
                    <p className="text-[14.5px] leading-relaxed text-steel max-w-lg">{s.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Appel final */}
      <section className="bg-alabaster pb-16 lg:pb-24">
        <div className="max-w-5xl mx-auto px-6">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-terra px-6 py-14 sm:px-10 sm:py-16 lg:px-16 lg:py-20 text-center">
              <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[60%] h-64 rounded-full bg-white/20 blur-3xl pointer-events-none" aria-hidden />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-white">
                  <span className="h-1.5 w-1.5 rounded-full bg-white" />
                  {t.ctaBadge}
                </span>
                <h2 className="mt-6 font-display font-extrabold tracking-[-0.03em] leading-[1.04] text-white text-[clamp(2rem,5vw,3.75rem)]">
                  {t.ctaTitle} <span className="font-emphasis font-normal">{t.ctaTitleEm}</span>
                </h2>
                <p className="mt-5 max-w-lg mx-auto text-[clamp(1rem,1.2vw,1.1rem)] leading-relaxed text-white/85">{t.ctaSub}</p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <Link href={localeHref(lang, "/contact")} className="group inline-flex items-center gap-2.5 rounded-full bg-white px-7 py-4 text-terra font-bold text-[15px] transition-transform hover:scale-[1.02]">
                    {t.ctaPrimary}
                    <Icon icon="lucide:arrow-right" width={16} height={16} className="transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </Link>
                  <Link href={localeHref(lang, "/realisations")} className="inline-flex items-center gap-2 rounded-full bg-white/15 hover:bg-white/25 text-white px-6 py-4 text-[15px] font-medium transition-colors">
                    {t.ctaSecondary}
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
