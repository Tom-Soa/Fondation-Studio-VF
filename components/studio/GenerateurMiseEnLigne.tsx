"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Générateur du visuel carré de mise en ligne.
 *
 * Tout se passe dans le navigateur : la capture déposée n'est jamais envoyée
 * nulle part, et le rendu se fait sur un canvas 1080x1080 exporté en PNG.
 *
 * Le dessin est fait à la main plutôt qu'avec une bibliothèque : le visuel a
 * une mise en page fixe, et une capture DOM produirait un rendu moins net.
 */

const TAILLE = 1080;

// Palette du site.
const TERRA = "#c2410c";
const MIDNIGHT = "#0f172a";
const ALABASTER = "#f9f9f7";
const BLANC = "#ffffff";
const GRIS = "#64748b";

type Champs = {
  entreprise: string;
  url: string;
  mention: string;
};

/**
 * Un style de fond, c'est un tracé plus une palette de texte : sur les fonds
 * sombres, le nom et la signature passent en blanc, sinon ils resteraient
 * illisibles. Chaque style porte donc ses propres couleurs de texte.
 */
type Theme = {
  id: string;
  nom: string;
  sombre: boolean;
  texte: string;      // nom du client, signature
  texteFaible: string; // mention « Site créé par »
  accent: string;      // pastille d'URL, liseré
  pastilleFond: string;
  pastilleTexte: string;
  pastilleBord: string;
  peindre: (ctx: CanvasRenderingContext2D, T: number) => void;
};

export default function GenerateurMiseEnLigne() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [capture, setCapture] = useState<HTMLImageElement | null>(null);
  const [nomFichier, setNomFichier] = useState("");
  const [champs, setChamps] = useState<Champs>({
    entreprise: "",
    url: "",
    mention: "Nouveau site en ligne",
  });
  const [themeId, setThemeId] = useState(THEMES[0].id);
  const theme = THEMES.find((t) => t.id === themeId) ?? THEMES[0];

  // Redessine à chaque changement de champ ou de capture.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    dessiner(ctx, champs, capture, theme);
  }, [champs, capture, theme]);

  const chargerCapture = (fichier: File) => {
    const lecteur = new FileReader();
    lecteur.onload = () => {
      const img = new Image();
      img.onload = () => setCapture(img);
      img.src = lecteur.result as string;
    };
    lecteur.readAsDataURL(fichier);
    setNomFichier(fichier.name);
  };

  const telecharger = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const lien = document.createElement("a");
    const nom = champs.entreprise
      ? champs.entreprise.toLowerCase().replace(/[^a-z0-9]+/g, "-")
      : "mise-en-ligne";
    lien.download = `${nom}-mise-en-ligne-${theme.id}.png`;
    lien.href = canvas.toDataURL("image/png");
    lien.click();
  };

  const pret = champs.entreprise.trim() !== "" && capture !== null;

  return (
    <main className="min-h-screen bg-alabaster px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <div className="font-display text-[13px] font-extrabold uppercase tracking-[0.22em] text-midnight/60">
            ACTC · outil interne
          </div>
          <h1 className="mt-3 font-display text-[clamp(1.8rem,4vw,2.6rem)] font-extrabold tracking-[-0.03em] text-midnight">
            Visuel de mise en ligne
          </h1>
          <p className="mt-2 max-w-xl text-[15px] leading-relaxed text-midnight/70">
            Composez le visuel carré à remettre au client le jour où son site
            part en ligne. Il le publie sur ses réseaux, et notre nom voyage
            avec.
          </p>
        </header>

        <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
          {/* Formulaire */}
          <div className="space-y-5">
            <label className="block">
              <span className="mb-2 block text-[13px] font-semibold text-midnight">
                Nom de l&apos;entreprise
              </span>
              <input
                type="text"
                value={champs.entreprise}
                onChange={(e) => setChamps({ ...champs, entreprise: e.target.value })}
                placeholder="La Villa des Pêcheurs"
                className="w-full rounded-xl border border-grid-line bg-white px-4 py-3 text-[15px] text-midnight outline-none focus:border-terra"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-[13px] font-semibold text-midnight">
                Adresse du site
              </span>
              <input
                type="text"
                value={champs.url}
                onChange={(e) => setChamps({ ...champs, url: e.target.value })}
                placeholder="lavilladespecheurs.fr"
                className="w-full rounded-xl border border-grid-line bg-white px-4 py-3 text-[15px] text-midnight outline-none focus:border-terra"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-[13px] font-semibold text-midnight">
                Mention du haut
              </span>
              <input
                type="text"
                value={champs.mention}
                onChange={(e) => setChamps({ ...champs, mention: e.target.value })}
                className="w-full rounded-xl border border-grid-line bg-white px-4 py-3 text-[15px] text-midnight outline-none focus:border-terra"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-[13px] font-semibold text-midnight">
                Capture de la page d&apos;accueil
              </span>
              <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const f = e.target.files?.[0];
                  if (f) chargerCapture(f);
                }}
                className="w-full rounded-xl border border-dashed border-grid-line bg-white px-4 py-3 text-[13.5px] text-midnight/70 file:mr-3 file:rounded-lg file:border-0 file:bg-terra file:px-3 file:py-1.5 file:text-[13px] file:font-semibold file:text-white"
              />
              {nomFichier && (
                <span className="mt-2 block text-[12.5px] text-midnight/60">
                  {nomFichier}
                </span>
              )}
              <span className="mt-2 block text-[12.5px] leading-snug text-midnight/60">
                Prenez la capture en 1440 de large, cadrée sur le haut de la page.
              </span>
            </label>

            <div>
              <span className="mb-2 block text-[13px] font-semibold text-midnight">
                Arrière-plan
              </span>
              <div className="grid grid-cols-3 gap-2">
                {THEMES.map((th) => (
                  <button
                    key={th.id}
                    type="button"
                    onClick={() => setThemeId(th.id)}
                    aria-pressed={th.id === themeId}
                    className={`overflow-hidden rounded-xl border-2 bg-white transition-all ${
                      th.id === themeId
                        ? "border-terra shadow-[0_4px_14px_rgba(194,65,12,0.28)]"
                        : "border-grid-line hover:border-terra/40"
                    }`}
                  >
                    <VignetteFond theme={th} />
                    <span className="block px-1 py-1.5 text-[11.5px] font-semibold text-midnight">
                      {th.nom}
                    </span>
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => {
                  const autres = THEMES.filter((t) => t.id !== themeId);
                  setThemeId(autres[Math.floor(Math.random() * autres.length)].id);
                }}
                className="mt-2 w-full rounded-lg border border-grid-line bg-white px-3 py-2 text-[12.5px] font-semibold text-midnight/70 transition-colors hover:border-terra hover:text-terra"
              >
                Au hasard
              </button>
            </div>

            <button
              type="button"
              onClick={telecharger}
              disabled={!pret}
              className="w-full rounded-full bg-terra px-6 py-4 text-[15px] font-bold text-white transition-colors hover:bg-terra-hover disabled:cursor-not-allowed disabled:opacity-40"
            >
              Télécharger le visuel
            </button>

            {!pret && (
              <p className="text-center text-[12.5px] text-midnight/60">
                Renseignez le nom et déposez une capture.
              </p>
            )}
          </div>

          {/* Aperçu */}
          <div>
            <div className="overflow-hidden rounded-2xl border border-grid-line bg-white shadow-card-light">
              <canvas
                ref={canvasRef}
                width={TAILLE}
                height={TAILLE}
                className="block h-auto w-full"
              />
            </div>
            <p className="mt-3 text-center text-[12.5px] text-midnight/60">
              Aperçu à l&apos;échelle. Le fichier exporté fait 1080 × 1080 pixels.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}


/** Vignette d'aperçu d'un fond, dessinée sur un petit canvas. */
function VignetteFond({ theme }: { theme: Theme }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const c = ref.current;
    const ctx = c?.getContext("2d");
    if (!c || !ctx) return;
    // Le tracé est écrit pour 1080 : on dessine en grand puis on réduit.
    ctx.save();
    ctx.scale(c.width / TAILLE, c.height / TAILLE);
    theme.peindre(ctx, TAILLE);
    ctx.restore();
  }, [theme]);

  return <canvas ref={ref} width={132} height={132} className="block h-auto w-full" />;
}

// ─── Arrière-plans ───────────────────────────────────────────────────────────

/** Générateur pseudo-aléatoire à graine fixe : deux rendus sont identiques. */
function alea(graine: number) {
  let g = graine;
  return () => {
    g = (g * 1103515245 + 12345) % 2147483648;
    return g / 2147483648;
  };
}

/** Réseau de points relié, repris du hero du site. */
function reseau(
  ctx: CanvasRenderingContext2D,
  T: number,
  couleur: string,
  opacite: number,
) {
  const r = alea(20260831);
  const points: { x: number; y: number }[] = [];
  for (let i = 0; i < 46; i++) points.push({ x: r() * T, y: r() * T });

  ctx.lineWidth = 1.4;
  for (let a = 0; a < points.length; a++) {
    for (let b = a + 1; b < points.length; b++) {
      const dx = points[a].x - points[b].x;
      const dy = points[a].y - points[b].y;
      const d = Math.sqrt(dx * dx + dy * dy);
      if (d < 210) {
        ctx.strokeStyle = `rgba(${couleur},${(1 - d / 210) * opacite})`;
        ctx.beginPath();
        ctx.moveTo(points[a].x, points[a].y);
        ctx.lineTo(points[b].x, points[b].y);
        ctx.stroke();
      }
    }
  }
  for (const pt of points) {
    ctx.fillStyle = `rgba(${couleur},${opacite * 1.5})`;
    ctx.beginPath();
    ctx.arc(pt.x, pt.y, 2.6, 0, Math.PI * 2);
    ctx.fill();
  }
}

/** 1. Clair : le fond d'origine, halo terracotta et réseau de points. */
function fondClair(ctx: CanvasRenderingContext2D, T: number) {
  ctx.fillStyle = ALABASTER;
  ctx.fillRect(0, 0, T, T);

  const haut = ctx.createRadialGradient(T / 2, 0, 0, T / 2, 0, T * 0.8);
  haut.addColorStop(0, "rgba(194,65,12,0.18)");
  haut.addColorStop(1, "rgba(194,65,12,0)");
  ctx.fillStyle = haut;
  ctx.fillRect(0, 0, T, T * 0.65);

  const bas = ctx.createRadialGradient(T / 2, T, 0, T / 2, T, T * 0.55);
  bas.addColorStop(0, "rgba(194,65,12,0.10)");
  bas.addColorStop(1, "rgba(194,65,12,0)");
  ctx.fillStyle = bas;
  ctx.fillRect(0, T * 0.5, T, T * 0.5);

  reseau(ctx, T, "194,65,12", 0.22);

  ctx.fillStyle = "rgba(249,249,247,0.55)";
  ctx.fillRect(0, 0, T, T);
}

/** 2. Terra plein : dégradé orange franc, halo clair derrière le cadre. */
function fondTerra(ctx: CanvasRenderingContext2D, T: number) {
  const g = ctx.createLinearGradient(0, 0, T * 0.35, T);
  g.addColorStop(0, "#e2570f");
  g.addColorStop(0.55, "#c2410c");
  g.addColorStop(1, "#8f2d06");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, T, T);

  // Arcs concentriques très discrets, pour éviter l'aplat plat.
  ctx.strokeStyle = "rgba(255,255,255,0.09)";
  ctx.lineWidth = 2;
  for (let i = 1; i <= 6; i++) {
    ctx.beginPath();
    ctx.arc(T * 0.5, T * 0.42, i * 118, 0, Math.PI * 2);
    ctx.stroke();
  }

  const halo = ctx.createRadialGradient(T / 2, T * 0.5, 0, T / 2, T * 0.5, T * 0.6);
  halo.addColorStop(0, "rgba(255,255,255,0.20)");
  halo.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = halo;
  ctx.fillRect(0, 0, T, T);
}

/** 3. Navy : fond sombre premium, la capture blanche ressort au maximum. */
function fondNavy(ctx: CanvasRenderingContext2D, T: number) {
  const g = ctx.createLinearGradient(0, 0, T * 0.3, T);
  g.addColorStop(0, "#182742");
  g.addColorStop(0.5, "#0f172a");
  g.addColorStop(1, "#070d18");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, T, T);

  reseau(ctx, T, "226,87,15", 0.30);

  const halo = ctx.createRadialGradient(T / 2, T * 0.30, 0, T / 2, T * 0.30, T * 0.72);
  halo.addColorStop(0, "rgba(194,65,12,0.30)");
  halo.addColorStop(1, "rgba(194,65,12,0)");
  ctx.fillStyle = halo;
  ctx.fillRect(0, 0, T, T);

  ctx.fillStyle = "rgba(7,13,24,0.30)";
  ctx.fillRect(0, 0, T, T);
}

/** 4. Rayures : diagonales larges, façon store de commerçant. */
function fondRayures(ctx: CanvasRenderingContext2D, T: number) {
  ctx.fillStyle = "#fdf6f1";
  ctx.fillRect(0, 0, T, T);

  ctx.save();
  ctx.translate(T / 2, T / 2);
  ctx.rotate(-Math.PI / 6);
  ctx.translate(-T, -T);
  const pas = 96;
  for (let x = 0; x < T * 3; x += pas * 2) {
    ctx.fillStyle = "rgba(194,65,12,0.10)";
    ctx.fillRect(x, 0, pas, T * 3);
  }
  ctx.restore();

  const halo = ctx.createRadialGradient(T / 2, T * 0.45, 0, T / 2, T * 0.45, T * 0.62);
  halo.addColorStop(0, "rgba(253,246,241,0.92)");
  halo.addColorStop(1, "rgba(253,246,241,0.30)");
  ctx.fillStyle = halo;
  ctx.fillRect(0, 0, T, T);
}

/** 5. Blueprint : grille technique sur fond encre, clin d'œil au « sur-mesure ». */
function fondBlueprint(ctx: CanvasRenderingContext2D, T: number) {
  const g = ctx.createLinearGradient(0, 0, 0, T);
  g.addColorStop(0, "#12314f");
  g.addColorStop(1, "#0a1c30");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, T, T);

  // Grille fine, puis lignes maîtresses tous les 5 carreaux.
  const pas = 54;
  ctx.lineWidth = 1;
  ctx.strokeStyle = "rgba(255,255,255,0.07)";
  ctx.beginPath();
  for (let i = pas; i < T; i += pas) {
    ctx.moveTo(i, 0); ctx.lineTo(i, T);
    ctx.moveTo(0, i); ctx.lineTo(T, i);
  }
  ctx.stroke();

  ctx.lineWidth = 1.6;
  ctx.strokeStyle = "rgba(255,255,255,0.13)";
  ctx.beginPath();
  for (let i = pas * 5; i < T; i += pas * 5) {
    ctx.moveTo(i, 0); ctx.lineTo(i, T);
    ctx.moveTo(0, i); ctx.lineTo(T, i);
  }
  ctx.stroke();

  const halo = ctx.createRadialGradient(T / 2, T * 0.42, 0, T / 2, T * 0.42, T * 0.66);
  halo.addColorStop(0, "rgba(194,65,12,0.26)");
  halo.addColorStop(1, "rgba(194,65,12,0)");
  ctx.fillStyle = halo;
  ctx.fillRect(0, 0, T, T);
}

/** 6. Tropical : formes organiques dans des tons chauds, pour l'outre-mer. */
function fondTropical(ctx: CanvasRenderingContext2D, T: number) {
  const g = ctx.createLinearGradient(0, 0, T, T);
  g.addColorStop(0, "#0d3b34");
  g.addColorStop(0.55, "#12564a");
  g.addColorStop(1, "#07231f");
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, T, T);

  // Grandes taches molles, tracées à graine fixe.
  const r = alea(4071988);
  const teintes = ["rgba(226,87,15,0.30)", "rgba(240,180,41,0.20)", "rgba(20,138,111,0.34)"];
  for (let i = 0; i < 7; i++) {
    const cx = r() * T;
    const cy = r() * T;
    const rayon = 150 + r() * 260;
    const tache = ctx.createRadialGradient(cx, cy, 0, cx, cy, rayon);
    tache.addColorStop(0, teintes[i % teintes.length]);
    tache.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = tache;
    ctx.fillRect(0, 0, T, T);
  }

  ctx.fillStyle = "rgba(7,35,31,0.34)";
  ctx.fillRect(0, 0, T, T);
}

const THEMES: Theme[] = [
  {
    id: "clair", nom: "Clair", sombre: false,
    texte: MIDNIGHT, texteFaible: GRIS, accent: TERRA,
    pastilleFond: BLANC, pastilleTexte: MIDNIGHT, pastilleBord: "#e5e5e1",
    peindre: fondClair,
  },
  {
    id: "terra", nom: "Terra", sombre: true,
    texte: BLANC, texteFaible: "rgba(255,255,255,0.82)", accent: MIDNIGHT,
    pastilleFond: BLANC, pastilleTexte: MIDNIGHT, pastilleBord: "rgba(255,255,255,0.55)",
    peindre: fondTerra,
  },
  {
    id: "navy", nom: "Navy", sombre: true,
    texte: BLANC, texteFaible: "rgba(255,255,255,0.72)", accent: TERRA,
    pastilleFond: "rgba(255,255,255,0.10)", pastilleTexte: BLANC, pastilleBord: "rgba(255,255,255,0.30)",
    peindre: fondNavy,
  },
  {
    id: "rayures", nom: "Rayures", sombre: false,
    texte: MIDNIGHT, texteFaible: GRIS, accent: TERRA,
    pastilleFond: BLANC, pastilleTexte: MIDNIGHT, pastilleBord: "#ecd9cc",
    peindre: fondRayures,
  },
  {
    id: "blueprint", nom: "Blueprint", sombre: true,
    texte: BLANC, texteFaible: "rgba(255,255,255,0.70)", accent: TERRA,
    pastilleFond: "rgba(255,255,255,0.10)", pastilleTexte: BLANC, pastilleBord: "rgba(255,255,255,0.32)",
    peindre: fondBlueprint,
  },
  {
    id: "tropical", nom: "Tropical", sombre: true,
    texte: BLANC, texteFaible: "rgba(255,255,255,0.74)", accent: "#e2570f",
    pastilleFond: "rgba(255,255,255,0.12)", pastilleTexte: BLANC, pastilleBord: "rgba(255,255,255,0.32)",
    peindre: fondTropical,
  },
];

// ─── Dessin du visuel ────────────────────────────────────────────────────────

function dessiner(
  ctx: CanvasRenderingContext2D,
  champs: Champs,
  capture: HTMLImageElement | null,
  theme: Theme,
) {
  const T = TAILLE;

  theme.peindre(ctx, T);

  const marge = 64;

  // ── Pastille de mention, en haut ──────────────────────────────────────────
  const mention = (champs.mention || "Nouveau site en ligne").toUpperCase();
  ctx.font = "700 23px Inter, system-ui, sans-serif";
  ctx.letterSpacing = "2px";
  const largeurTexte = ctx.measureText(mention).width - 2;
  ctx.letterSpacing = "0px";

  const pastilleL = largeurTexte + 92;
  const pastilleH = 56;
  const pastilleX = (T - pastilleL) / 2;
  const pastilleY = marge;

  arrondi(ctx, pastilleX, pastilleY, pastilleL, pastilleH, pastilleH / 2);
  ctx.fillStyle = theme.pastilleFond;
  ctx.fill();
  ctx.strokeStyle = theme.pastilleBord;
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.beginPath();
  ctx.arc(pastilleX + 32, pastilleY + pastilleH / 2, 6.5, 0, Math.PI * 2);
  ctx.fillStyle = theme.sombre && theme.id !== "terra" ? theme.accent : TERRA;
  ctx.fill();

  ctx.fillStyle = theme.pastilleTexte;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.letterSpacing = "2px";
  ctx.fillText(mention, pastilleX + 52, pastilleY + pastilleH / 2 + 1);
  ctx.letterSpacing = "0px";

  // ── Nom de l'entreprise ───────────────────────────────────────────────────
  const nom = champs.entreprise || "Nom du client";
  ctx.textAlign = "center";
  ctx.fillStyle = theme.texte;

  let taille = 68;
  ctx.font = `800 ${taille}px Inter, system-ui, sans-serif`;
  while (ctx.measureText(nom).width > T - marge * 2 && taille > 36) {
    taille -= 2;
    ctx.font = `800 ${taille}px Inter, system-ui, sans-serif`;
  }
  const nomY = pastilleY + pastilleH + 52;
  ctx.textBaseline = "top";
  ctx.fillText(nom, T / 2, nomY);

  // ── Bloc du bas, mesuré d'abord : le cadre occupe tout ce qui reste ───────
  const hauteurUrl = champs.url.trim() ? 62 : 0;
  const hauteurSignature = 132;
  const basReserve = hauteurSignature + hauteurUrl + 40;

  const cadreY = nomY + taille + 44;
  const hauteurDispo = T - cadreY - basReserve;

  // Le cadre épouse les proportions de la capture pour l'afficher en entier,
  // dans la limite de la place disponible.
  const barreH = 40;
  const ratioCapture = capture ? capture.width / capture.height : 16 / 10;

  let cadreL = T - marge * 2;
  let zoneH = cadreL / ratioCapture;

  if (zoneH + barreH > hauteurDispo) {
    zoneH = hauteurDispo - barreH;
    cadreL = zoneH * ratioCapture;
  }

  const cadreH = zoneH + barreH;
  const cadreX = (T - cadreL) / 2;

  // Ombre portée sous le cadre
  ctx.save();
  ctx.shadowColor = "rgba(15,23,42,0.18)";
  ctx.shadowBlur = 40;
  ctx.shadowOffsetY = 16;
  arrondi(ctx, cadreX, cadreY, cadreL, cadreH, 20);
  ctx.fillStyle = BLANC;
  ctx.fill();
  ctx.restore();

  ctx.save();
  arrondi(ctx, cadreX, cadreY, cadreL, cadreH, 20);
  ctx.strokeStyle = "#e5e5e1";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.clip();

  // Barre du navigateur
  ctx.fillStyle = BLANC;
  ctx.fillRect(cadreX, cadreY, cadreL, barreH);
  ["#ff5f57", "#febc2e", "#28c840"].forEach((c, i) => {
    ctx.beginPath();
    ctx.arc(cadreX + 24 + i * 21, cadreY + barreH / 2, 6, 0, Math.PI * 2);
    ctx.fillStyle = c;
    ctx.fill();
  });
  arrondi(ctx, cadreX + 96, cadreY + 12, cadreL - 124, 16, 8);
  ctx.fillStyle = "#eceae4";
  ctx.fill();

  // La capture entière, sans rognage : le cadre a été calé sur son ratio.
  if (capture) {
    ctx.drawImage(capture, cadreX, cadreY + barreH, cadreL, zoneH);
  } else {
    ctx.fillStyle = "#f1efe9";
    ctx.fillRect(cadreX, cadreY + barreH, cadreL, zoneH);
    ctx.fillStyle = GRIS;
    ctx.font = "500 24px Inter, system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Déposez la capture du site", T / 2, cadreY + barreH + zoneH / 2);
  }
  ctx.restore();

  // ── Adresse du site ───────────────────────────────────────────────────────
  const basCadre = cadreY + cadreH;

  if (champs.url.trim()) {
    const url = champs.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
    const urlY = basCadre + 30;
    ctx.font = "700 31px Inter, system-ui, sans-serif";
    const urlL = ctx.measureText(url).width + 64;
    const urlH = 60;
    arrondi(ctx, (T - urlL) / 2, urlY, urlL, urlH, urlH / 2);
    ctx.fillStyle = theme.id === "terra" ? BLANC : theme.accent;
    ctx.fill();

    ctx.fillStyle = theme.id === "terra" ? TERRA : BLANC;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(url, T / 2, urlY + urlH / 2 + 1);
  }

  // ── Signature ACTC, en bas ────────────────────────────────────────────────
  const sigY = T - marge - 26;

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.font = "500 22px Inter, system-ui, sans-serif";
  ctx.fillStyle = theme.texteFaible;
  ctx.fillText("Site créé par", T / 2, sigY - 20);

  ctx.font = "800 37px Inter, system-ui, sans-serif";
  ctx.fillStyle = theme.texte;
  ctx.letterSpacing = "6px";
  ctx.fillText("ACTC", T / 2, sigY + 16);
  ctx.letterSpacing = "0px";

  ctx.font = "500 21px Inter, system-ui, sans-serif";
  ctx.fillStyle = theme.sombre ? "rgba(255,255,255,0.90)" : TERRA;
  ctx.fillText("actcstudio.fr", T / 2, sigY + 50);
}

/** Rectangle à coins arrondis, tracé sans le remplir. */
function arrondi(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  l: number,
  h: number,
  r: number,
) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + l - r, y);
  ctx.quadraticCurveTo(x + l, y, x + l, y + r);
  ctx.lineTo(x + l, y + h - r);
  ctx.quadraticCurveTo(x + l, y + h, x + l - r, y + h);
  ctx.lineTo(x + r, y + h);
  ctx.quadraticCurveTo(x, y + h, x, y + h - r);
  ctx.lineTo(x, y + r);
  ctx.quadraticCurveTo(x, y, x + r, y);
  ctx.closePath();
}
