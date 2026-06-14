import { Inter, Inter_Tight, Instrument_Serif, DM_Mono } from "next/font/google";

// Corps de texte.
export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

// Titres (grotesk serré, équivalent du "Inter Tight" de Miniamea).
export const display = Inter_Tight({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// Emphase : serif italic des mots accentués (signature Miniamea).
export const emphasis = Instrument_Serif({
  variable: "--font-emphasis",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

// Détails techniques (labels, chiffres, eyebrows).
export const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  display: "swap",
});
