// Briques d'animation partagées. Règle de fluidité : on n'anime que transform
// et opacity ; les effets au pointeur ne s'activent que sur souris (pointer: fine).
"use client";

import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { useRef, type ReactNode } from "react";
import { cn } from "@/lib/utils";

const EASE = [0.16, 1, 0.3, 1] as const;

// Titre révélé mot par mot : chaque mot monte depuis sous sa ligne de base.
export type Segment = { text: string; em?: boolean };

export function RevealWords({
  segments,
  className,
  emClassName,
  delay = 0,
  as = "h1",
  inView = false,
}: {
  segments: Segment[];
  className?: string;
  emClassName?: string;
  delay?: number;
  as?: "h1" | "h2";
  inView?: boolean;
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as];
  // Une ponctuation isolée (ex. « . » après un mot en emphase) reste collée au mot précédent.
  const words: { w: string; em?: boolean; i: number }[] = [];
  segments.forEach((seg) =>
    seg.text.split(" ").filter(Boolean).forEach((w) => {
      const prev = words[words.length - 1];
      if (prev && /^[.,!?;:]+$/.test(w)) prev.w += w;
      else words.push({ w, em: seg.em, i: words.length });
    }),
  );
  const trigger = inView
    ? { whileInView: "show", viewport: { once: true, margin: "-80px" } }
    : { animate: "show" };
  return (
    <Tag className={className} initial={reduce ? false : "hidden"} {...trigger}>
      {words.map(({ w, em, i }) => (
        <span key={i} className="inline-block overflow-hidden align-bottom pb-[0.08em] -mb-[0.08em]">
          <motion.span
            className={cn("inline-block", em && emClassName)}
            variants={{ hidden: { y: "110%" }, show: { y: "0%" } }}
            transition={{ duration: 0.9, delay: delay + i * 0.055, ease: EASE }}
          >
            {w}
          </motion.span>
          {" "}
        </span>
      ))}
    </Tag>
  );
}

// Bouton magnétique : suit légèrement le pointeur, revient avec un ressort.
export function Magnetic({ children, strength = 0.28, className }: { children: ReactNode; strength?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 });
  const y = useSpring(useMotionValue(0), { stiffness: 220, damping: 18, mass: 0.4 });
  const reduce = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      className={cn("inline-block", className)}
      style={{ x, y }}
      onPointerMove={(e) => {
        if (reduce || e.pointerType !== "mouse" || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.div>
  );
}

// Carte qui s'incline vers le pointeur (perspective), avec un reflet lumineux.
// Le reflet est un disque pré-dessiné déplacé en translate : aucune repeinture au mouvement.
export function TiltCard({ children, className, max = 7 }: { children: ReactNode; className?: string; max?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const hover = useMotionValue(0);
  const rx = useSpring(useTransform(py, [0, 1], [max, -max]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(px, [0, 1], [-max, max]), { stiffness: 200, damping: 20 });
  const gx = useTransform(px, (v) => `${(v - 0.5) * 100}%`);
  const gy = useTransform(py, (v) => `${(v - 0.5) * 100}%`);
  const glowOpacity = useSpring(hover, { stiffness: 200, damping: 30 });
  const reduce = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      className={cn("relative h-full [transform-style:preserve-3d]", className)}
      style={reduce ? undefined : { rotateX: rx, rotateY: ry, transformPerspective: 900 }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse" || !ref.current) return;
        const r = ref.current.getBoundingClientRect();
        px.set((e.clientX - r.left) / r.width);
        py.set((e.clientY - r.top) / r.height);
        hover.set(1);
      }}
      onPointerLeave={() => {
        px.set(0.5);
        py.set(0.5);
        hover.set(0);
      }}
    >
      {children}
      {/* Seule la couche du reflet est rognée : les badges qui dépassent de la carte restent visibles. */}
      <span aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]">
        <motion.span
          className="absolute left-1/2 top-1/2 -ml-[210px] -mt-[210px] h-[420px] w-[420px] rounded-full"
          style={{ x: gx, y: gy, opacity: glowOpacity, background: "radial-gradient(closest-side, rgba(255,255,255,0.22), rgba(194,65,12,0.08) 60%, transparent)" }}
        />
      </span>
    </motion.div>
  );
}

// Fine barre terracotta en haut de l'écran qui suit la lecture de la page.
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 26, restDelta: 0.001 });
  return (
    <motion.div
      aria-hidden
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-terra"
      style={{ scaleX }}
    />
  );
}

// Paragraphe qui « s'allume » mot par mot au fil du scroll (opacité seule).
function ScrollWord({ word, range, progress }: { word: string; range: [number, number]; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="inline">
      {word}{" "}
    </motion.span>
  );
}

export function ScrollWords({ text, className }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = text.split(" ");
  if (reduce) return <p className={className}>{text}</p>;
  return (
    <p ref={ref} className={className}>
      {words.map((w, i) => (
        <ScrollWord key={i} word={w} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]} />
      ))}
    </p>
  );
}
