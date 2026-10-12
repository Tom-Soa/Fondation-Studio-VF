// Footer : colonnes nav + contact, puis grande signature de marque tout en bas.
"use client";

import Link from "next/link";

import { motion } from "motion/react";
import { localeHref, type Locale } from "@/lib/i18n";

const T: Record<
  Locale,
  {
    blurb: string;
    navTitle: string;
    legalTitle: string;
    nav: [string, string][];
    legal: [string, string][];
    copyright: string;
    tagline: string;
  }
> = {
  fr: {
    blurb:
      "Sites internet, publicité, applications et conseil pour les entreprises de France, de Suisse, de Belgique et des DOM-TOM. Maquette de votre page d'accueil offerte, avant tout engagement.",
    navTitle: "Navigation",
    legalTitle: "Légal",
    nav: [
      ["Accueil", "/"],
      ["Sites internet", "/sites-vitrine"],
      ["Publicité", "/publicite"],
      ["Applications et conseil", "/applications-conseil"],
      ["Réalisations", "/realisations"],
      ["Tarifs", "/tarifs"],
      ["L'équipe", "/qui-sommes-nous"],
      ["Ressources", "/ressources"],
      ["FAQ", "/faq"],
      ["Contact", "/contact"],
    ],
    legal: [
      ["Mentions légales", "/mentions-legales"],
      ["CGV", "/cgv"],
      ["Politique de confidentialité", "/politique-confidentialite"],
      ["Cookies", "/mentions-legales#politique-cookies"],
    ],
    copyright: "© 2026 ACTC Studio · Tous droits réservés",
    tagline: "Plus de clients pour les entreprises qui veulent grandir",
  },
  en: {
    blurb:
      "Websites, ads, web apps and consulting for businesses in France, Switzerland, Belgium and the French overseas territories. Free homepage mockup, before any commitment.",
    navTitle: "Navigation",
    legalTitle: "Legal",
    nav: [
      ["Home", "/"],
      ["Websites", "/sites-vitrine"],
      ["Ads", "/publicite"],
      ["Apps & consulting", "/applications-conseil"],
      ["Our work", "/realisations"],
      ["Pricing", "/tarifs"],
      ["The team", "/qui-sommes-nous"],
      ["Resources", "/ressources"],
      ["FAQ", "/faq"],
      ["Contact", "/contact"],
    ],
    legal: [
      ["Legal notice", "/mentions-legales"],
      ["Terms of sale", "/cgv"],
      ["Privacy policy", "/politique-confidentialite"],
      ["Cookies", "/mentions-legales#politique-cookies"],
    ],
    copyright: "© 2026 ACTC Studio · All rights reserved",
    tagline: "More customers for businesses that want to grow",
  },
};

export default function Footer({ lang }: { lang: Locale }) {
  const t = T[lang];
  return (
    <footer className="relative bg-midnight text-white/70 border-t border-white/[0.06] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-16">
          <div className="md:col-span-5">
            <p className="text-[14.5px] leading-relaxed text-white/55 max-w-sm mb-6">
              {t.blurb}
            </p>
            <div className="space-y-2 text-[13px]">
              <a
                href="tel:+33672758478"
                className="flex items-center gap-2 text-white/55 hover:text-white transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 14a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 3.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10.91a16 16 0 0 0 6 6l.91-1.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 17z" />
                </svg>
                +33 6 72 75 84 78
              </a>
              <a
                href="mailto:andylane.actc@gmail.com"
                className="flex items-center gap-2 text-white/55 hover:text-white transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                andylane.actc@gmail.com
              </a>
              <a
                href="https://www.instagram.com/actcstudio.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/55 hover:text-white transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                @actcstudio.fr
              </a>
              <a
                href="https://www.linkedin.com/in/tom-soa-cyprien-934798333/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/55 hover:text-white transition-colors"
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                Tom-Soa Cyprien (LinkedIn)
              </a>
            </div>
          </div>

          <div className="md:col-span-3 md:col-start-7">
            <div className="text-[10px] uppercase tracking-[0.18em] text-white/40 mb-5 font-medium">
              {t.navTitle}
            </div>
            <ul className="space-y-2.5 text-[14px]">
              {t.nav.map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={localeHref(lang, href)}
                    className="text-white/65 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[10px] uppercase tracking-[0.18em] text-white/40 mb-5 font-medium">
              {t.legalTitle}
            </div>
            <ul className="space-y-2.5 text-[14px]">
              {t.legal.map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={localeHref(lang, href)}
                    className="text-white/65 hover:text-white transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bas de page : copyright */}
        <div className="pt-8 border-t border-white/[0.06] text-[12px] uppercase tracking-[0.14em] text-white/40">
          <div>{t.copyright}</div>
        </div>

        {/* Grande signature de marque + tagline, tout en bas (même police que la navbar) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mt-14"
        >
          <h2 className="font-display font-extrabold tracking-[-0.04em] text-[clamp(2.5rem,9vw,7rem)] leading-[0.95] text-white">
            AC<span className="text-terra">TC</span>
          </h2>
          <p className="mt-3 font-display font-medium text-[clamp(0.95rem,2vw,1.25rem)] tracking-[-0.01em] text-white/40">
            {t.tagline}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
