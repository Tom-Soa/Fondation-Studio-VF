// Formes plates décoratives (quart de cercle, cercle, demi-cercle, point), reprises
// des visuels Instagram ACTC. Elles apparaissent en grandissant à l'entrée dans l'écran.
"use client";

import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

export function FlatShape({ kind, color, small = false }: { kind: "quarter" | "circle" | "half" | "dot"; color: string; small?: boolean }) {
  const reduce = useReducedMotion();
  const anim = reduce
    ? {}
    : { initial: { scale: 0.4, opacity: 0 }, whileInView: { scale: 1, opacity: 1 }, viewport: { once: true }, transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const, delay: 0.2 } };
  const common = "pointer-events-none absolute";
  if (kind === "quarter")
    return <motion.span aria-hidden {...anim} style={{ background: color, transformOrigin: "100% 100%" }} className={cn(common, small ? "-bottom-px -right-px h-24 w-24 rounded-tl-full lg:h-28 lg:w-28" : "-bottom-px -right-px h-24 w-24 rounded-tl-full sm:h-40 sm:w-40 lg:h-56 lg:w-56")} />;
  if (kind === "circle")
    return <motion.span aria-hidden {...anim} style={{ background: color }} className={cn(common, small ? "-right-8 -top-8 h-20 w-20 rounded-full opacity-90" : "-right-8 -top-8 h-20 w-20 rounded-full opacity-90 sm:-right-10 sm:-top-10 sm:h-32 sm:w-32")} />;
  if (kind === "half")
    return <motion.span aria-hidden {...anim} style={{ background: color, transformOrigin: "50% 100%" }} className={cn(common, "-bottom-px right-6 h-12 w-24 rounded-t-full")} />;
  return <motion.span aria-hidden {...anim} style={{ background: color }} className={cn(common, "right-6 top-6 h-4 w-4 rounded-full")} />;
}
