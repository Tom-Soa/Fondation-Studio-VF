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

export default function GenerateurMiseEnLigne() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [capture, setCapture] = useState<HTMLImageElement | null>(null);
  const [nomFichier, setNomFichier] = useState("");
  const [champs, setChamps] = useState<Champs>({
    entreprise: "",
    url: "",
    mention: "Nouveau site en ligne",
  });

  // Redessine à chaque changement de champ ou de capture.
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    dessiner(ctx, champs, capture);
  }, [champs, capture]);

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
    lien.download = `${nom}-mise-en-ligne.png`;
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

// ─── Dessin du visuel ────────────────────────────────────────────────────────

function dessiner(
  ctx: CanvasRenderingContext2D,
  champs: Champs,
  capture: HTMLImageElement | null,
) {
  const T = TAILLE;

  // Fond
  ctx.fillStyle = ALABASTER;
  ctx.fillRect(0, 0, T, T);

  // Halo terracotta en haut, comme sur le site
  const halo = ctx.createRadialGradient(T / 2, 0, 0, T / 2, 0, T * 0.75);
  halo.addColorStop(0, "rgba(194,65,12,0.16)");
  halo.addColorStop(1, "rgba(194,65,12,0)");
  ctx.fillStyle = halo;
  ctx.fillRect(0, 0, T, T * 0.6);

  const marge = 72;

  // ── Pastille de mention, en haut ──────────────────────────────────────────
  const mention = (champs.mention || "Nouveau site en ligne").toUpperCase();
  ctx.font = "700 24px Inter, system-ui, sans-serif";
  ctx.letterSpacing = "2px";
  const largeurTexte = ctx.measureText(mention).width - 2;
  ctx.letterSpacing = "0px";
  const pastilleL = largeurTexte + 96;
  const pastilleH = 60;
  const pastilleX = (T - pastilleL) / 2;
  const pastilleY = marge;

  arrondi(ctx, pastilleX, pastilleY, pastilleL, pastilleH, pastilleH / 2);
  ctx.fillStyle = BLANC;
  ctx.fill();
  ctx.strokeStyle = "#e5e5e1";
  ctx.lineWidth = 2;
  ctx.stroke();

  // Point terracotta
  ctx.beginPath();
  ctx.arc(pastilleX + 34, pastilleY + pastilleH / 2, 7, 0, Math.PI * 2);
  ctx.fillStyle = TERRA;
  ctx.fill();

  ctx.fillStyle = MIDNIGHT;
  ctx.textAlign = "left";
  ctx.textBaseline = "middle";
  ctx.letterSpacing = "2px";
  ctx.fillText(mention, pastilleX + 56, pastilleY + pastilleH / 2 + 1);
  ctx.letterSpacing = "0px";

  // ── Nom de l'entreprise ───────────────────────────────────────────────────
  const nom = champs.entreprise || "Nom du client";
  ctx.textAlign = "center";
  ctx.fillStyle = MIDNIGHT;

  // Réduit la taille si le nom est long, pour qu'il tienne toujours sur une ligne.
  let taille = 76;
  ctx.font = `800 ${taille}px Inter, system-ui, sans-serif`;
  while (ctx.measureText(nom).width > T - marge * 2 && taille > 40) {
    taille -= 2;
    ctx.font = `800 ${taille}px Inter, system-ui, sans-serif`;
  }
  const nomY = pastilleY + pastilleH + 76;
  ctx.textBaseline = "top";
  ctx.fillText(nom, T / 2, nomY);

  // ── Capture du site, dans un cadre de navigateur ──────────────────────────
  const cadreX = marge;
  const cadreY = nomY + taille + 56;
  const cadreL = T - marge * 2;
  const barreH = 44;
  const cadreH = 470;

  ctx.save();
  arrondi(ctx, cadreX, cadreY, cadreL, cadreH, 22);
  ctx.fillStyle = BLANC;
  ctx.fill();
  ctx.strokeStyle = "#e5e5e1";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.clip();

  // Barre du navigateur
  ctx.fillStyle = BLANC;
  ctx.fillRect(cadreX, cadreY, cadreL, barreH);
  const pastilles = ["#ff5f57", "#febc2e", "#28c840"];
  pastilles.forEach((c, i) => {
    ctx.beginPath();
    ctx.arc(cadreX + 28 + i * 24, cadreY + barreH / 2, 7, 0, Math.PI * 2);
    ctx.fillStyle = c;
    ctx.fill();
  });
  // Barre d'adresse
  arrondi(ctx, cadreX + 108, cadreY + 13, cadreL - 140, 18, 9);
  ctx.fillStyle = "#eceae4";
  ctx.fill();

  // La capture, recadrée pour remplir la zone sans se déformer
  if (capture) {
    const zoneY = cadreY + barreH;
    const zoneH = cadreH - barreH;
    const ratioZone = cadreL / zoneH;
    const ratioImg = capture.width / capture.height;

    let sx = 0,
      sy = 0,
      sw = capture.width,
      sh = capture.height;

    if (ratioImg > ratioZone) {
      // Image trop large : on rogne les côtés.
      sw = capture.height * ratioZone;
      sx = (capture.width - sw) / 2;
    } else {
      // Image trop haute : on garde le haut de la page.
      sh = capture.width / ratioZone;
    }
    ctx.drawImage(capture, sx, sy, sw, sh, cadreX, zoneY, cadreL, zoneH);
  } else {
    ctx.fillStyle = "#f1efe9";
    ctx.fillRect(cadreX, cadreY + barreH, cadreL, cadreH - barreH);
    ctx.fillStyle = GRIS;
    ctx.font = "500 26px Inter, system-ui, sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(
      "Déposez la capture du site",
      T / 2,
      cadreY + barreH + (cadreH - barreH) / 2,
    );
  }
  ctx.restore();

  // Trait de séparation
  const basY = cadreY + cadreH;

  // ── Adresse du site ───────────────────────────────────────────────────────
  if (champs.url.trim()) {
    const url = champs.url.replace(/^https?:\/\//, "").replace(/\/$/, "");
    const urlY = basY + 46;
    ctx.font = "700 34px Inter, system-ui, sans-serif";
    const urlL = ctx.measureText(url).width + 72;
    const urlH = 66;
    arrondi(ctx, (T - urlL) / 2, urlY, urlL, urlH, urlH / 2);
    ctx.fillStyle = TERRA;
    ctx.fill();

    ctx.fillStyle = BLANC;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(url, T / 2, urlY + urlH / 2 + 1);
  }

  // ── Signature ACTC, en bas ────────────────────────────────────────────────
  const sigY = T - marge - 30;

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  ctx.font = "500 24px Inter, system-ui, sans-serif";
  ctx.fillStyle = GRIS;
  ctx.fillText("Site créé par", T / 2, sigY - 22);

  ctx.font = "800 40px Inter, system-ui, sans-serif";
  ctx.fillStyle = MIDNIGHT;
  ctx.letterSpacing = "6px";
  ctx.fillText("ACTC", T / 2, sigY + 18);
  ctx.letterSpacing = "0px";

  ctx.font = "500 22px Inter, system-ui, sans-serif";
  ctx.fillStyle = TERRA;
  ctx.fillText("actcstudio.fr", T / 2, sigY + 54);
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
