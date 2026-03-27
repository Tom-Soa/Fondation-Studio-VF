---
name: composants-21st-dev
description: Base de données de composants 21st.dev / Aceternity UI / Magic UI avec code réel, props et exemples. Utilise ce skill pour construire des interfaces modernes avec des composants production-ready.
license: Components from https://21st.dev, aceternity.com, magicui.design (open source MIT)
---

# Base de Données Composants 21st.dev

Référence complète de composants production-ready. Chaque entrée inclut : URL, dépendances, code, props, et exemple d'usage.

## Stack de Base

```bash
# Dépendances communes
npm install framer-motion clsx tailwind-merge
npm install @radix-ui/react-slot
```

```typescript
// lib/utils.ts (requis par tous les composants)
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

---

## CATÉGORIE : BACKGROUNDS & EFFETS

---

### Aurora Background
**URL**: https://21st.dev/aceternity/aurora-background
**Auteur**: Aceternity UI
**Likes**: 781+
**Dépendances**: `framer-motion`, `tailwind-merge`, `clsx`

```typescript
"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
              [--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]
              [--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]
              [--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]
              [background-image:var(--white-gradient),var(--aurora)]
              dark:[background-image:var(--dark-gradient),var(--aurora)]
              [background-size:300%,_200%]
              [background-position:50%_50%,50%_50%]
              filter blur-[10px] invert dark:invert-0
              after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)]
              after:dark:[background-image:var(--dark-gradient),var(--aurora)]
              after:[background-size:200%,_100%]
              after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
              pointer-events-none
              absolute -inset-[10px] opacity-50 will-change-transform`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
```

**tailwind.config.ts** (animation requise):
```typescript
theme: {
  extend: {
    animation: { aurora: "aurora 60s linear infinite" },
    keyframes: {
      aurora: {
        from: { backgroundPosition: "50% 50%, 50% 50%" },
        to: { backgroundPosition: "350% 50%, 350% 50%" },
      },
    },
  },
}
```

**Usage**:
```tsx
<AuroraBackground>
  <h1 className="text-4xl font-bold">Hello World</h1>
</AuroraBackground>
```

---

### Particles
**URL**: https://21st.dev/magicui/particles
**Auteur**: Magic UI
**Dépendances**: aucune externe (canvas natif)

```typescript
"use client";
import { useEffect, useRef } from "react";

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  size?: number;
  refresh?: boolean;
  color?: string;
  vx?: number;
  vy?: number;
}

export function Particles({
  className = "",
  quantity = 100,
  staticity = 50,
  ease = 50,
  size = 0.4,
  refresh = false,
  color = "#ffffff",
  vx = 0,
  vy = 0,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<Circle[]>([]);
  const mousePosition = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const dpr = typeof window !== "undefined" ? window.devicePixelRatio : 1;

  // [Implementation complète sur https://21st.dev/magicui/particles]

  return (
    <div className={className} ref={canvasContainerRef} aria-hidden="true">
      <canvas ref={canvasRef} className="size-full" />
    </div>
  );
}
```

**Usage**:
```tsx
<div className="relative min-h-screen bg-black">
  <Particles className="absolute inset-0" quantity={200} color="#6366f1" />
  <div className="relative z-10">Content</div>
</div>
```

---

### Meteors
**URL**: https://21st.dev/magicui/meteors
**Auteur**: Magic UI
**Dépendances**: `tailwind-merge`, `clsx`

```typescript
import { cn } from "@/lib/utils";

interface MeteorsProps {
  number?: number;
}

export const Meteors = ({ number = 20 }: MeteorsProps) => {
  const meteors = new Array(number).fill(true);
  return (
    <>
      {meteors.map((_, idx) => (
        <span
          key={idx}
          className={cn(
            "animate-meteor-effect absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10] rotate-[215deg]",
            "before:content-[''] before:absolute before:top-1/2 before:transform before:-translate-y-[50%] before:w-[50px] before:h-[1px] before:bg-gradient-to-r before:from-[#64748b] before:to-transparent"
          )}
          style={{
            top: 0,
            left: Math.floor(Math.random() * (400 - -400) + -400) + "px",
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + "s",
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + "s",
          }}
        ></span>
      ))}
    </>
  );
};
```

**tailwind.config.ts**:
```typescript
keyframes: {
  "meteor-effect": {
    "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
    "70%": { opacity: "1" },
    "100%": { transform: "rotate(215deg) translateX(-500px)", opacity: "0" },
  },
},
animation: { "meteor-effect": "meteor-effect 5s linear infinite" },
```

---

### Dot Pattern
**URL**: https://21st.dev/magicui/dot-pattern
**Auteur**: Magic UI

```typescript
import { useId } from "react";
import { cn } from "@/lib/utils";

interface DotPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
}

export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  ...props
}: DotPatternProps) {
  const id = useId();
  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 h-full w-full fill-neutral-400/80", className)}
      {...props}
    >
      <defs>
        <pattern id={id} width={width} height={height} patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse" x={x} y={y}>
          <circle id="pattern-circle" cx={cx} cy={cy} r={cr} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </svg>
  );
}
```

**Usage**:
```tsx
<div className="relative h-[500px] w-full overflow-hidden bg-background">
  <DotPattern className="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]" />
</div>
```

---

### Grid Pattern
**URL**: https://21st.dev/magicui/grid-pattern
**Auteur**: Magic UI

```typescript
import { useId } from "react";
import { cn } from "@/lib/utils";

interface GridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  squares?: Array<[x: number, y: number]>;
  strokeDasharray?: string | number;
  className?: string;
}

export function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  squares,
  className,
  ...props
}: GridPatternProps) {
  const id = useId();
  return (
    <svg
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30", className)}
      {...props}
    >
      <defs>
        <pattern id={id} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" strokeDasharray={strokeDasharray} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]) => (
            <rect strokeWidth="0" key={`${x}-${y}`} width={width - 1} height={height - 1} x={x * width + 1} y={y * height + 1} />
          ))}
        </svg>
      )}
    </svg>
  );
}
```

---

### Background Gradient (Aceternity)
**URL**: https://21st.dev/aceternity/background-gradient
**Auteur**: Aceternity UI
**Dépendances**: `framer-motion`

```typescript
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: { backgroundPosition: "0 50%" },
    animate: { backgroundPosition: ["0, 50%", "100% 50%", "0 50%"] },
  };
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={animate ? { duration: 5, repeat: Infinity, repeatType: "reverse" } : undefined}
        style={{ backgroundSize: animate ? "400% 400%" : undefined }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur transition duration-500",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        )}
      />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
```

---

### Wavy Background
**URL**: https://21st.dev/aceternity/wavy-background
**Auteur**: Aceternity UI

```typescript
"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise"; // npm install simplex-noise

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
}) => {
  // [Full canvas animation implementation - see https://21st.dev/aceternity/wavy-background]
  const canvasRef = useRef<HTMLCanvasElement>(null);

  return (
    <div className={cn("h-screen flex flex-col items-center justify-center", containerClassName)}>
      <canvas className="absolute inset-0 z-0" ref={canvasRef} id="canvas" style={{ filter: `blur(${blur}px)` }} />
      <div className={cn("relative z-10", className)} {...props}>{children}</div>
    </div>
  );
};
```

---

### Vortex
**URL**: https://21st.dev/aceternity/vortex
**Auteur**: Aceternity UI
**Dépendances**: `simplex-noise`, `framer-motion`

```typescript
// Usage simple
<Vortex backgroundColor="black" className="flex items-center justify-center px-2 md:px-10 py-4 w-full h-full">
  <h2 className="text-white text-2xl font-bold">Vortex background</h2>
  <p className="text-white text-sm max-w-xl mt-2 text-center">...</p>
  <div className="flex items-center gap-4 mt-6">
    <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">Get started</button>
  </div>
</Vortex>

// Props
interface VortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;    // default: 700
  rangeY?: number;           // default: 100
  baseHue?: number;          // default: 220
  baseSpeed?: number;        // default: 0.0
  rangeSpeed?: number;       // default: 1.5
  baseRadius?: number;       // default: 1
  rangeRadius?: number;      // default: 2
  backgroundColor?: string;  // default: "black"
}
```

---

## CATÉGORIE : BOUTONS & CTAs

---

### Rainbow Button
**URL**: https://21st.dev/magicui/rainbow-button
**Auteur**: Magic UI
**Likes**: 625+

```typescript
import { cn } from "@/lib/utils";
import React from "react";

interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export function RainbowButton({ children, className, ...props }: RainbowButtonProps) {
  return (
    <button
      className={cn(
        "group relative inline-flex h-11 animate-rainbow cursor-pointer items-center justify-center rounded-xl border-0 bg-[length:200%] px-8 py-2 font-medium text-primary-foreground transition-colors [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
        "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0 before:h-1/5 before:w-3/5 before:-translate-x-1/2 before:animate-rainbow before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))] before:bg-[length:200%] before:[filter:blur(calc(0.8*1rem))]",
        "bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
        "dark:bg-[linear-gradient(#fff,#fff),linear-gradient(#fff_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
```

**CSS variables requises** (globals.css):
```css
:root {
  --color-1: 0 100% 63%;
  --color-2: 270 100% 63%;
  --color-3: 210 100% 63%;
  --color-4: 195 100% 63%;
  --color-5: 90 100% 63%;
}
```

**tailwind.config.ts**:
```typescript
animation: { rainbow: "rainbow var(--speed, 2s) infinite linear" },
keyframes: {
  rainbow: { "0%": { backgroundPosition: "0%" }, "100%": { backgroundPosition: "200%" } },
},
```

---

### Shimmer Button
**URL**: https://21st.dev/magicui/shimmer-button
**Auteur**: Magic UI

```typescript
import React, { CSSProperties } from "react";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  ({
    shimmerColor = "#ffffff",
    shimmerSize = "0.05em",
    shimmerDuration = "3s",
    borderRadius = "100px",
    background = "rgba(0, 0, 0, 1)",
    className,
    children,
    ...props
  }, ref) => {
    return (
      <button
        style={{ "--spread": "90deg", "--shimmer-color": shimmerColor, "--radius": borderRadius, "--speed": shimmerDuration, "--cut": shimmerSize, "--bg": background } as CSSProperties}
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--bg)] [border-radius:var(--radius)]",
          "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
          "before:absolute before:inset-0 before:overflow-hidden before:[border-radius:var(--radius)] before:[mask:linear-gradient(white,_transparent_50%)]",
          "before:animate-shimmer-slide before:[aspect-ratio:1] before:[background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,hsl(0_0%_100%/1)_var(--spread),transparent_var(--spread))]",
          className,
        )}
        ref={ref}
        {...props}
      >
        {children}
        <div className={cn("insert-0 absolute size-full", "rounded-2xl px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#ffffff1f]", "transform-gpu transition-all duration-300 ease-in-out group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]", "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]")} />
      </button>
    );
  }
);
```

---

### Moving Border
**URL**: https://21st.dev/aceternity/moving-border
**Auteur**: Aceternity UI
**Likes**: 284+
**Dépendances**: `framer-motion`

```typescript
"use client";
import React, { useRef } from "react";
import { motion, useAnimationFrame, useMotionTemplate, useMotionValue, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export function MovingBorder({
  children,
  duration = 2000,
  rx,
  ry,
  ...otherProps
}: { children: React.ReactNode; as?: React.ElementType; containerClassName?: string; borderClassName?: string; duration?: number; className?: string; rx?: string; ry?: string; } & Record<string, unknown>) {
  // [Full implementation sur https://21st.dev/aceternity/moving-border]
  return (
    <button className={cn("relative text-xl h-16 w-40 p-[1px] overflow-hidden", otherProps.containerClassName as string)}>
      {/* Animated border */}
      <span className={cn("absolute inset-0 rounded-[inherit]", otherProps.borderClassName as string)} />
      <div className={cn("relative bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white flex items-center justify-center w-full h-full text-sm antialiased", otherProps.className as string)}>
        {children}
      </div>
    </button>
  );
}
```

---

### Interactive Hover Button
**URL**: https://21st.dev/magicui/interactive-hover-button
**Auteur**: Magic UI
**Likes**: 353+

```typescript
import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export const InteractiveHoverButton = React.forwardRef<HTMLButtonElement, InteractiveHoverButtonProps>(
  ({ text = "Button", className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative w-32 cursor-pointer overflow-hidden rounded-full border bg-background p-2 text-center font-semibold",
          className,
        )}
        {...props}
      >
        <span className="inline-block translate-x-1 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {text}
        </span>
        <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 text-primary-foreground opacity-0 transition-all duration-300 group-hover:-translate-x-1 group-hover:opacity-100">
          <span>{text}</span>
          <ArrowRight />
        </div>
        <div className="absolute left-[20%] top-[40%] h-2 w-2 scale-[1] rounded-full bg-primary transition-all duration-300 group-hover:left-[0%] group-hover:top-[0%] group-hover:h-full group-hover:w-full group-hover:scale-[1.8] group-hover:bg-primary" />
      </button>
    );
  }
);
```

---

## CATÉGORIE : TEXTE & TYPOGRAPHIE

---

### Animated Gradient Text
**URL**: https://21st.dev/magicui/animated-gradient-text
**Auteur**: Magic UI

```typescript
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function AnimatedGradientText({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(
      "group relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-2xl bg-white/40 px-4 py-1.5 text-sm font-medium shadow-[inset_0_-8px_10px_#8fdfff1f] backdrop-blur-sm transition-shadow duration-500 ease-out [--bg-size:300%] hover:shadow-[inset_0_-5px_10px_#8fdfff3f] dark:bg-black/40",
      className,
    )}>
      <div className={`absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:var(--bg-size)_100%] p-[1px] ![mask-composite:subtract] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)]`} />
      {children}
    </div>
  );
}
```

**tailwind.config.ts**:
```typescript
animation: { gradient: "gradient 8s linear infinite" },
keyframes: {
  gradient: { to: { backgroundPosition: "var(--bg-size) 0" } },
},
```

**Usage**:
```tsx
<AnimatedGradientText>
  🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />
  <span className="inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent">
    Introducing Magic UI
  </span>
</AnimatedGradientText>
```

---

### Word Rotate
**URL**: https://21st.dev/magicui/word-rotate
**Auteur**: Magic UI
**Dépendances**: `framer-motion`

```typescript
"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface WordRotateProps {
  words: string[];
  duration?: number;
  framerProps?: object;
  className?: string;
}

export function WordRotate({
  words,
  duration = 2500,
  framerProps = {
    initial: { opacity: 0, y: -50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 50 },
    transition: { duration: 0.25, ease: "easeOut" },
  },
  className,
}: WordRotateProps) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => setIndex((prevIndex) => (prevIndex + 1) % words.length), duration);
    return () => clearInterval(interval);
  }, [words, duration]);

  return (
    <div className="overflow-hidden py-2">
      <AnimatePresence mode="wait">
        <motion.h1 key={words[index]} className={cn(className)} {...framerProps}>
          {words[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}
```

**Usage**:
```tsx
<WordRotate className="text-4xl font-bold" words={["Fast", "Beautiful", "Modern", "Powerful"]} />
```

---

### Typing Animation
**URL**: https://21st.dev/magicui/typing-animation
**Auteur**: Magic UI
**Dépendances**: `framer-motion`

```typescript
"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
}

export function TypingAnimation({ text, duration = 100, className }: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    const typingEffect = setInterval(() => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        setI(i + 1);
      } else {
        clearInterval(typingEffect);
      }
    }, duration);
    return () => clearInterval(typingEffect);
  }, [duration, i, text]);

  return (
    <h1 className={cn("font-display text-center text-4xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm", className)}>
      {displayedText ? displayedText : <span className="invisible">{text}</span>}
    </h1>
  );
}
```

---

### Blur In
**URL**: https://21st.dev/magicui/blur-in
**Auteur**: Magic UI
**Dépendances**: `framer-motion`

```typescript
"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BlurInProps {
  word: string;
  className?: string;
  variant?: { hidden: { filter: string; opacity: number }; visible: { filter: string; opacity: number } };
  duration?: number;
}

export const BlurIn = ({ word, className, variant, duration = 1 }: BlurInProps) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn("font-display text-center text-4xl font-bold tracking-[-0.02em] drop-shadow-sm", className)}
    >
      {word}
    </motion.h1>
  );
};
```

---

### Text Shimmer
**URL**: https://21st.dev/magicui/shimmer-text (aussi disponible via Magic UI)
**Auteur**: Magic UI

```typescript
import { CSSProperties } from "react";
import { cn } from "@/lib/utils";

interface TextShimmerProps {
  children: string;
  as?: React.ElementType;
  className?: string;
  duration?: number;
  spread?: number;
}

export function TextShimmer({
  children,
  as: Component = "p",
  className,
  duration = 2,
  spread = 2,
}: TextShimmerProps) {
  return (
    <Component
      style={{ "--shimmer-spread": spread, "--shimmer-duration": `${duration}s` } as CSSProperties}
      className={cn(
        "relative inline-block bg-[length:250%_100%,auto] bg-clip-text text-transparent",
        "[--shimmer-from:0%] [--shimmer-to:100%]",
        "animate-shimmer bg-[linear-gradient(110deg,theme(colors.slate.600/.3)_0%,theme(colors.slate.100)_calc(50%-calc(var(--shimmer-spread)*1%)),theme(colors.slate.600/.3)_calc(50%+calc(var(--shimmer-spread)*1%)),theme(colors.slate.600/.3)_100%),linear-gradient(theme(colors.slate.500)_0%,theme(colors.slate.500)_100%)]",
        "dark:bg-[linear-gradient(110deg,theme(colors.slate.500/.3)_0%,theme(colors.slate.300)_calc(50%-calc(var(--shimmer-spread)*1%)),theme(colors.slate.500/.3)_calc(50%+calc(var(--shimmer-spread)*1%)),theme(colors.slate.500/.3)_100%),linear-gradient(theme(colors.slate.600)_0%,theme(colors.slate.600)_100%)]",
        className,
      )}
    >
      {children}
    </Component>
  );
}
```

---

### Gooey Text Morphing
**URL**: https://21st.dev
**Auteur**: Divers
**Likes**: 521+
**Dépendances**: SVG filters natifs

```typescript
// Approche SVG avec feGaussianBlur + feColorMatrix (gooey filter)
const GooeyText = ({ words, className }: { words: string[]; className?: string }) => {
  const [current, setCurrent] = useState(0);

  return (
    <div className={cn("relative", className)}>
      <svg className="h-0 w-0 absolute">
        <defs>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10" result="gooey" />
          </filter>
        </defs>
      </svg>
      <div style={{ filter: "url(#gooey)" }}>
        <AnimatePresence>
          {/* Animated words */}
        </AnimatePresence>
      </div>
    </div>
  );
};
```

---

## CATÉGORIE : LAYOUTS & CARDS

---

### Bento Grid
**URL**: https://21st.dev/aceternity/bento-grid
**Auteur**: Aceternity UI
**Likes**: 815+
**Dépendances**: `framer-motion`

```typescript
import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto", className)}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className,
      )}
    >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">{title}</div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">{description}</div>
      </div>
    </div>
  );
};
```

**Usage**:
```tsx
<BentoGrid>
  <BentoGridItem title="Feature 1" description="Description..." className="md:col-span-2" header={<Skeleton />} icon={<Icon />} />
  <BentoGridItem title="Feature 2" description="Description..." header={<Skeleton />} icon={<Icon />} />
</BentoGrid>
```

---

### Display Cards (Magic UI)
**URL**: https://21st.dev/magicui/animated-list
**Auteur**: Magic UI
**Likes**: 872+

```typescript
"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedList({
  className,
  children,
  delay = 1000,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  const [index, setIndex] = useState(0);
  const childrenArray = React.Children.toArray(children);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % childrenArray.length);
    }, delay);
    return () => clearTimeout(timeout);
  }, [index, delay, childrenArray.length]);

  const itemsToShow = childrenArray.slice(0, index + 1).reverse();

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`}>
      <AnimatePresence>
        {itemsToShow.map((item) => (
          <AnimatedListItem key={(item as React.ReactElement).key}>{item}</AnimatedListItem>
        ))}
      </AnimatePresence>
    </div>
  );
}

export function AnimatedListItem({ children }: { children: React.ReactNode }) {
  const animations = {
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1, originY: 0 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: "spring", stiffness: 350, damping: 40 },
  };
  return <motion.div {...animations} layout>{children}</motion.div>;
}
```

---

### Animated Beam
**URL**: https://21st.dev/magicui/animated-beam
**Auteur**: Magic UI

```typescript
"use client";
import { RefObject, useEffect, useId, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface AnimatedBeamProps {
  className?: string;
  containerRef: RefObject<HTMLElement>;
  fromRef: RefObject<HTMLElement>;
  toRef: RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export const AnimatedBeam: React.FC<AnimatedBeamProps> = ({
  className,
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = Math.random() * 3 + 4,
  delay = 0,
  pathColor = "gray",
  pathWidth = 2,
  pathOpacity = 0.2,
  gradientStartColor = "#ffaa40",
  gradientStopColor = "#9c40ff",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}) => {
  const id = useId();
  // [Calcul des positions SVG - voir https://21st.dev/magicui/animated-beam]

  return (
    <svg className={cn("pointer-events-none absolute left-0 top-0 transform-gpu stroke-2", className)} fill="none">
      <defs>
        <linearGradient id={id} gradientUnits="userSpaceOnUse">
          <stop stopColor={gradientStartColor} stopOpacity="0" offset="0%" />
          <stop stopColor={gradientStartColor} offset="32.5%" />
          <stop stopColor={gradientStopColor} offset="67.5%" />
          <stop stopColor={gradientStopColor} stopOpacity="0" offset="100%" />
        </linearGradient>
      </defs>
      {/* Path elements */}
    </svg>
  );
};
```

---

### Globe
**URL**: https://21st.dev/magicui/globe
**Auteur**: Magic UI
**Dépendances**: `cobe` (npm install cobe)

```typescript
"use client";
import createGlobe, { COBEOptions } from "cobe";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  onRender: () => {},
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.3,
  dark: 0,
  diffuse: 0.4,
  mapSamples: 16000,
  mapBrightness: 1.2,
  baseColor: [1, 1, 1],
  markerColor: [251 / 255, 100 / 255, 21 / 255],
  glowColor: [1, 1, 1],
  markers: [
    { location: [14.5995, 120.9842], size: 0.03 },
    { location: [19.076, 72.8777], size: 0.1 },
    { location: [23.8103, 90.4125], size: 0.05 },
    { location: [48.8566, 2.3522], size: 0.1 },  // Paris
    { location: [40.7128, -74.006], size: 0.1 },  // NYC
    { location: [35.6762, 139.6503], size: 0.1 }, // Tokyo
  ],
};

export function Globe({ className, config = GLOBE_CONFIG }: { className?: string; config?: COBEOptions }) {
  let phi = 0;
  let width = 0;
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const onRender = useCallback(
    (state: Record<string, number>) => {
      state.phi = phi;
      phi += 0.005;
      state.width = width * 2;
      state.height = width * 2;
    },
    [phi, width]
  );

  useEffect(() => {
    const globe = createGlobe(canvasRef.current!, { ...config, width: width * 2, height: width * 2, onRender });
    setTimeout(() => (canvasRef.current!.style.opacity = "1"));
    return () => globe.destroy();
  }, []);

  return (
    <div className={cn("absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]", className)}>
      <canvas ref={canvasRef} className="size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]" style={{ width: "100%", height: "100%", cursor: "auto" }} />
    </div>
  );
}
```

---

### Marquee
**URL**: https://21st.dev/magicui/marquee
**Auteur**: Magic UI
**Likes**: 601+

```typescript
import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        { "flex-row": !vertical, "flex-col": vertical },
        className,
      )}
    >
      {Array(repeat).fill(0).map((_, i) => (
        <div
          key={i}
          className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
            "animate-marquee flex-row": !vertical,
            "animate-marquee-vertical flex-col": vertical,
            "group-hover:[animation-play-state:paused]": pauseOnHover,
            "[animation-direction:reverse]": reverse,
          })}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
```

**tailwind.config.ts**:
```typescript
animation: {
  marquee: "marquee var(--duration) linear infinite",
  "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
},
keyframes: {
  marquee: { from: { transform: "translateX(0)" }, to: { transform: "translateX(calc(-100% - var(--gap)))" } },
  "marquee-vertical": { from: { transform: "translateY(0)" }, to: { transform: "translateY(calc(-100% - var(--gap)))" } },
},
```

**Usage**:
```tsx
<Marquee pauseOnHover className="[--duration:20s]">
  {reviews.map((review) => <ReviewCard key={review.username} {...review} />)}
</Marquee>
```

---

## CATÉGORIE : NAVIGATION

---

### Sidebar (Aceternity)
**URL**: https://21st.dev/aceternity/sidebar
**Auteur**: Aceternity UI
**Likes**: 859+
**Dépendances**: `framer-motion`, `@tabler/icons-react`

```typescript
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface SidebarLink {
  label: string;
  href: string;
  icon: React.JSX.Element | React.ReactNode;
}

export const Sidebar = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  return (
    <SidebarContext.Provider value={{ open, setOpen, animate: true }}>
      {children}
    </SidebarContext.Provider>
  );
};

// Usage pattern:
// <Sidebar>
//   <SidebarBody>
//     <SidebarLink link={{ label: "Dashboard", href: "/", icon: <Icon /> }} />
//   </SidebarBody>
// </Sidebar>
```

---

### Floating Navbar
**URL**: https://21st.dev/aceternity/floating-navbar
**Auteur**: Aceternity UI

```typescript
"use client";
import React, { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string; icon?: JSX.Element }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious()!;
      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) setVisible(true);
        else setVisible(false);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-4",
          className,
        )}
      >
        {navItems.map((navItem, idx) => (
          <a key={idx} href={navItem.link} className="relative dark:text-neutral-50 items-center flex space-x-1 text-neutral-600 dark:hover:text-neutral-300 hover:text-neutral-500">
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-sm">{navItem.name}</span>
          </a>
        ))}
        <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
          <span>Login</span>
        </button>
      </motion.div>
    </AnimatePresence>
  );
};
```

---

## CATÉGORIE : HEROES & SECTIONS COMPLÈTES

---

### Lamp Effect
**URL**: https://21st.dev/aceternity/lamp
**Auteur**: Aceternity UI
**Dépendances**: `framer-motion`

```typescript
"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function LampContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-slate-950 w-full rounded-md z-0", className)}>
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{ backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))` }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-cyan-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{ backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))` }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-cyan-500 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-slate-950 bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-slate-950 h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-950 blur-2xl" />
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md" />
        <div className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-cyan-500 opacity-50 blur-3xl" />
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-cyan-400 blur-2xl"
        />
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400"
        />
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-950" />
      </div>
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
}
```

**Usage**:
```tsx
<LampContainer>
  <motion.h1
    initial={{ opacity: 0.5, y: 100 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
    className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
  >
    Build great products <br /> faster than before
  </motion.h1>
</LampContainer>
```

---

### Spotlight
**URL**: https://21st.dev/aceternity/spotlight
**Auteur**: Aceternity UI

```typescript
import React from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = { className?: string; fill?: string };

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <svg
      className={cn("animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse cx="1924.71" cy="273.501" rx="1924.71" ry="273.501" transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)" fill={fill || "white"} fillOpacity="0.21" />
      </g>
      <defs>
        <filter id="filter" x="0.860352" y="0.838989" width="3785.16" height="2840.26" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur stdDeviation="151" result="effect1_foregroundBlur_1065_8" />
        </filter>
      </defs>
    </svg>
  );
};
```

**tailwind.config.ts**:
```typescript
animation: { spotlight: "spotlight 2s ease .75s 1 forwards" },
keyframes: {
  spotlight: { "0%": { opacity: 0, transform: "translate(-72%, -62%) scale(0.5)" }, "100%": { opacity: 1, transform: "translate(-50%,-40%) scale(1)" } },
},
```

---

### Tracing Beam
**URL**: https://21st.dev/aceternity/tracing-beam
**Auteur**: Aceternity UI
**Dépendances**: `framer-motion`

```typescript
"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll, useVelocity, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

export const TracingBeam = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const contentRef = useRef<HTMLDivElement>(null);
  const [svgHeight, setSvgHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) setSvgHeight(contentRef.current.offsetHeight);
  }, []);

  const y1 = useSpring(useTransform(scrollYProgress, [0, 0.8], [50, svgHeight]), { stiffness: 500, damping: 90 });
  const y2 = useSpring(useTransform(scrollYProgress, [0, 1], [50, svgHeight - 200]), { stiffness: 500, damping: 90 });

  return (
    <motion.div ref={ref} className={cn("relative mx-auto h-full w-full max-w-4xl", className)}>
      <div className="absolute -left-4 md:-left-20 top-3">
        <svg viewBox={`0 0 20 ${svgHeight}`} width="20" height={svgHeight} className="ml-4 block" aria-hidden="true">
          <motion.path d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`} fill="none" stroke="#9091A0" strokeOpacity="0.16" transition={{ duration: 10 }} />
          <motion.path d={`M 1 0V -36 l 18 24 V ${svgHeight * 0.8} l -18 24V ${svgHeight}`} fill="none" stroke="url(#gradient)" strokeWidth="1.25" className="motion-reduce:hidden" transition={{ duration: 10 }} />
          <defs>
            <motion.linearGradient id="gradient" gradientUnits="userSpaceOnUse" x1="0" x2="0" y1={y1} y2={y2}>
              <stop stopColor="#18CCFC" stopOpacity="0" />
              <stop stopColor="#18CCFC" />
              <stop offset="0.325" stopColor="#6344F5" />
              <stop offset="1" stopColor="#AE48FF" stopOpacity="0" />
            </motion.linearGradient>
          </defs>
        </svg>
      </div>
      <div ref={contentRef}>{children}</div>
    </motion.div>
  );
};
```

---

### Shooting Stars
**URL**: https://21st.dev/aceternity/shooting-stars
**Auteur**: Aceternity UI

```typescript
"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  className?: string;
}

export const ShootingStars = ({
  minSpeed = 10,
  maxSpeed = 30,
  minDelay = 1200,
  maxDelay = 4200,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 10,
  starHeight = 1,
  className,
}: ShootingStarsProps) => {
  const [star, setStar] = useState<ShootingStar | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const getRandomStartPoint = () => {
    const side = Math.floor(Math.random() * 4);
    const offset = Math.random() * (typeof window !== "undefined" ? window.innerWidth : 800);
    switch (side) {
      case 0: return { x: offset, y: 0, angle: 45 };
      case 1: return { x: typeof window !== "undefined" ? window.innerWidth : 800, y: offset, angle: 135 };
      case 2: return { x: offset, y: typeof window !== "undefined" ? window.innerHeight : 600, angle: 315 };
      case 3: return { x: 0, y: offset, angle: 225 };
      default: return { x: 0, y: 0, angle: 45 };
    }
  };

  // [Animation loop - voir https://21st.dev/aceternity/shooting-stars]

  return (
    <svg ref={svgRef} className={cn("w-full h-full absolute inset-0", className)}>
      {star && (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth}
          height={starHeight}
          fill="url(#gradient)"
          transform={`rotate(${star.angle}, ${star.x + starWidth / 2}, ${star.y + starHeight / 2})`}
        />
      )}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop offset="100%" style={{ stopColor: starColor, stopOpacity: 1 }} />
        </linearGradient>
      </defs>
    </svg>
  );
};
```

---

## CATÉGORIE : SOCIAL PROOF

---

### Testimonials with Marquee
**URL**: https://21st.dev/magicui/marquee
**Auteur**: Magic UI
**Likes**: 601+

```typescript
// Pattern complet Testimonials Marquee
const reviews = [
  { name: "Jack", username: "@jack", body: "I've never seen anything like this before.", img: "https://avatar.vercel.sh/jack" },
  { name: "Jill", username: "@jill", body: "I don't know what to say. I'm speechless.", img: "https://avatar.vercel.sh/jill" },
];

const ReviewCard = ({ img, name, username, body }: { img: string; name: string; username: string; body: string }) => (
  <figure className={cn("relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4", "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]", "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]")}>
    <div className="flex flex-row items-center gap-2">
      <img className="rounded-full" width="32" height="32" alt="" src={img} />
      <div className="flex flex-col">
        <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
        <p className="text-xs font-medium dark:text-white/40">{username}</p>
      </div>
    </div>
    <blockquote className="mt-2 text-sm">{body}</blockquote>
  </figure>
);

export function TestimonialsMarquee() {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => <ReviewCard key={review.username} {...review} />)}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {reviews.map((review) => <ReviewCard key={review.username} {...review} />)}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background" />
    </div>
  );
}
```

---

## CATÉGORIE : PRICING

---

### Pricing Section Pattern
**URL**: https://21st.dev/community/components/s/pricing-se
**Likes**: 569+

```typescript
// Pattern moderne avec toggle mensuel/annuel
const PricingToggle = ({ isAnnual, setIsAnnual }: { isAnnual: boolean; setIsAnnual: (v: boolean) => void }) => (
  <div className="flex items-center gap-3">
    <span className={cn("text-sm", !isAnnual && "font-semibold")}>Monthly</span>
    <button onClick={() => setIsAnnual(!isAnnual)} className={cn("relative w-12 h-6 rounded-full transition-colors", isAnnual ? "bg-primary" : "bg-gray-300")}>
      <span className={cn("absolute top-1 w-4 h-4 bg-white rounded-full transition-transform", isAnnual ? "left-7" : "left-1")} />
    </button>
    <span className={cn("text-sm", isAnnual && "font-semibold")}>Annual <span className="text-green-500 text-xs">-20%</span></span>
  </div>
);

const PricingCard = ({ plan, price, features, highlighted }: { plan: string; price: number; features: string[]; highlighted?: boolean }) => (
  <div className={cn("rounded-2xl p-8 border", highlighted ? "bg-primary text-primary-foreground border-primary scale-105 shadow-2xl" : "bg-card border-border")}>
    <h3 className="text-xl font-bold">{plan}</h3>
    <div className="mt-4 mb-6">
      <span className="text-5xl font-bold">${price}</span>
      <span className="text-sm opacity-70">/mo</span>
    </div>
    <ul className="space-y-3">
      {features.map((f) => (
        <li key={f} className="flex items-center gap-2 text-sm">
          <CheckIcon className="w-4 h-4" /> {f}
        </li>
      ))}
    </ul>
    <button className={cn("mt-8 w-full py-3 rounded-xl font-semibold transition-all", highlighted ? "bg-white text-primary hover:bg-white/90" : "bg-primary text-primary-foreground hover:bg-primary/90")}>
      Get Started
    </button>
  </div>
);
```

---

## INDEX RAPIDE PAR USE CASE

| Besoin | Composant | URL |
|--------|-----------|-----|
| Hero animé background | Aurora Background | https://21st.dev/aceternity/aurora-background |
| Particules flottantes | Particles | https://21st.dev/magicui/particles |
| Étoiles filantes | Meteors / Shooting Stars | https://21st.dev/magicui/meteors |
| Grille de points | Dot Pattern | https://21st.dev/magicui/dot-pattern |
| Grille géométrique | Grid Pattern | https://21st.dev/magicui/grid-pattern |
| Bouton rainbow | Rainbow Button | https://21st.dev/magicui/rainbow-button |
| Bouton shimmer | Shimmer Button | https://21st.dev/magicui/shimmer-button |
| Bouton avec bordure animée | Moving Border | https://21st.dev/aceternity/moving-border |
| Bouton hover interactif | Interactive Hover Button | https://21st.dev/magicui/interactive-hover-button |
| Texte gradient animé | Animated Gradient Text | https://21st.dev/magicui/animated-gradient-text |
| Texte shimmer | Text Shimmer | https://21st.dev/magicui/shimmer-text |
| Texte qui tourne | Word Rotate | https://21st.dev/magicui/word-rotate |
| Typewriter | Typing Animation | https://21st.dev/magicui/typing-animation |
| Fade blur entrée | Blur In | https://21st.dev/magicui/blur-in |
| Grid de cards moderne | Bento Grid | https://21st.dev/aceternity/bento-grid |
| Liste animée | Animated List | https://21st.dev/magicui/animated-list |
| Connexions entre éléments | Animated Beam | https://21st.dev/magicui/animated-beam |
| Globe 3D | Globe | https://21st.dev/magicui/globe |
| Défilement testimonials | Marquee | https://21st.dev/magicui/marquee |
| Navigation latérale | Sidebar | https://21st.dev/aceternity/sidebar |
| Navbar qui apparaît au scroll | Floating Navbar | https://21st.dev/aceternity/floating-navbar |
| Effet lampe néon | Lamp Effect | https://21st.dev/aceternity/lamp |
| Spotlight background | Spotlight | https://21st.dev/aceternity/spotlight |
| Ligne défilement contenu | Tracing Beam | https://21st.dev/aceternity/tracing-beam |
| Background ondulé | Wavy Background | https://21st.dev/aceternity/wavy-background |
| Tourbillon background | Vortex | https://21st.dev/aceternity/vortex |
| Gradient animé sur card | Background Gradient | https://21st.dev/aceternity/background-gradient |
| Pricing moderne | Pricing Section | https://21st.dev/community/components/s/pricing-se |

---

## Règles d'utilisation

1. **Adapter toujours** les couleurs, tailles et contenu au projet
2. **Vérifier les dépendances** avant d'implémenter (framer-motion, cobe, simplex-noise…)
3. **Code incomplet** = les `// [voir URL]` signalent une implémentation trop longue — aller sur l'URL pour le code complet
4. **Tailwind config** = certains composants nécessitent des keyframes personnalisées
5. **"use client"** = obligatoire pour tous les composants avec animations Framer Motion dans Next.js
