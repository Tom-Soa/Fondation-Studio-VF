"use client";

import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { PIPEDRIVE_FORM_URL } from "@/lib/lp-config";

/**
 * CTA unique de la landing : envoie vers le formulaire Pipedrive.
 * Toutes les occurrences pointent au même endroit, aucun autre lien sortant
 * n'existe sur la page (pas de nav, pas de footer) pour ne pas fuiter le clic.
 */
export function CtaButton({
  children,
  variant = "terra",
  className,
  id,
}: {
  children: React.ReactNode;
  variant?: "terra" | "white";
  className?: string;
  id?: string;
}) {
  return (
    <a
      id={id}
      href={PIPEDRIVE_FORM_URL}
      className={cn(
        "group inline-flex items-center justify-center gap-2.5 rounded-full px-8 py-4 text-[16px] font-bold transition-all",
        variant === "terra"
          ? "bg-terra hover:bg-terra-hover text-white glow-terra"
          : "bg-white text-terra hover:scale-[1.02]",
        className,
      )}
    >
      {children}
      <Icon
        icon="lucide:arrow-right"
        width={18}
        height={18}
        className="transition-transform group-hover:translate-x-0.5"
        aria-hidden
      />
    </a>
  );
}
