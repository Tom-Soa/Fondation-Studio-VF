// Serie Instagram octobre ACTC Studio : 10 posts portrait 1080x1350.
// 100 % HTML/CSS, une seule famille typographique (ArchivoBlack + ArchivoVF).
// 1 a 5 : realisations clients. 6 a 8 : pedagogie. 9 et 10 : offre.
import { writeFileSync, mkdirSync, readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const here = dirname(fileURLToPath(import.meta.url));
mkdirSync(join(here, "pages"), { recursive: true });

const SHOT_DIR = join(here, "..", "..", "public", "showcase");
const shot = (name) =>
  `data:image/jpeg;base64,${readFileSync(join(SHOT_DIR, name)).toString("base64")}`;

const CSS = `
@font-face{font-family:'ArchivoBlack';src:url('../assets/black-ext.woff2') format('woff2');font-weight:400;font-display:block;unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF;}
@font-face{font-family:'ArchivoBlack';src:url('../assets/black-lat.woff2') format('woff2');font-weight:400;font-display:block;}
@font-face{font-family:'ArchivoVF';src:url('../assets/archivo-ext.woff2') format('woff2');font-weight:100 900;font-display:block;unicode-range:U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF;}
@font-face{font-family:'ArchivoVF';src:url('../assets/archivo-lat.woff2') format('woff2');font-weight:100 900;font-display:block;}

*{margin:0;padding:0;box-sizing:border-box;}
html,body{width:1080px;height:1350px;}
body{
  font-family:'ArchivoVF',sans-serif;
  -webkit-font-smoothing:antialiased;
  text-rendering:geometricPrecision;
  hyphens:none;-webkit-hyphens:none;
  overflow-wrap:normal;word-break:normal;
}
.slide{position:relative;width:1080px;height:1350px;overflow:hidden;}
.pad{position:absolute;inset:90px;display:flex;flex-direction:column;z-index:5;}

.shape{position:absolute;z-index:1;}
.circle{border-radius:50%;}
.qtr-tr{border-radius:0 0 0 100%;top:0;right:0;}
.qtr-bl{border-radius:0 100% 0 0;bottom:0;left:0;}
.qtr-br{border-radius:100% 0 0 0;bottom:0;right:0;}
.qtr-tl{border-radius:0 0 100% 0;top:0;left:0;}

.mark{font-family:'ArchivoBlack',sans-serif;font-size:40px;letter-spacing:-0.01em;line-height:1;}
.label{
  font-family:'ArchivoVF',sans-serif;font-weight:700;
  font-size:26px;letter-spacing:0.09em;text-transform:uppercase;
}
h1{
  font-family:'ArchivoBlack',sans-serif;font-weight:400;
  text-transform:uppercase;letter-spacing:-0.02em;line-height:0.97;
}
.support{
  font-family:'ArchivoVF',sans-serif;font-weight:500;
  font-size:33px;line-height:1.4;max-width:860px;
}
.btn{
  display:inline-flex;align-items:center;justify-content:center;
  border-radius:999px;font-family:'ArchivoVF',sans-serif;font-weight:700;
  padding:28px 54px;font-size:33px;letter-spacing:-0.005em;align-self:flex-start;
}
.photo{position:relative;border-radius:36px;overflow:hidden;z-index:4;}
.photo img{width:100%;height:100%;object-fit:cover;object-position:top center;display:block;}
.handle{font-family:'ArchivoVF',sans-serif;font-weight:700;font-size:30px;}
.spacer{flex:1;}

/* mot cle en graisse legere : agrandi et desserre pour compenser */
.lt{
  font-family:'ArchivoVF',sans-serif;font-weight:250;
  letter-spacing:0.006em;font-size:1.035em;
}

/* soulignement trace main : barre epaisse arrondie derriere les glyphes */
.uw{position:relative;display:inline-block;}
.uw > span{position:relative;z-index:2;}
.uw::after{
  content:"";position:absolute;z-index:1;
  left:var(--uwl,-0.05em);right:var(--uwr,-0.07em);bottom:var(--uwb,-0.02em);
  height:var(--uwh,0.135em);border-radius:999px;
  background:var(--uw);
  transform:rotate(-1.4deg);transform-origin:left center;
}
.uw::before{
  content:"";position:absolute;z-index:1;
  left:28%;right:var(--uwr,-0.07em);bottom:calc(var(--uwb,-0.02em) + var(--uwh,0.135em) * 0.44);
  height:0.055em;border-radius:999px;
  background:var(--uw);opacity:.55;
  transform:rotate(-2.3deg);transform-origin:left center;
}

/* bloc surligne, une seule fois sur toute la serie */
.hl{position:relative;display:inline-block;z-index:2;padding:0 0.08em 0 0.07em;}
.hl::before{
  content:"";position:absolute;z-index:-1;
  left:0;right:0;top:0.09em;bottom:0.055em;
  background:var(--hl);border-radius:12px;transform:rotate(-0.6deg);
}

/* lignes de prix */
.rows{display:flex;flex-direction:column;}
.row{
  display:flex;align-items:baseline;justify-content:space-between;gap:24px;
  padding:22px 0;border-top:3px solid currentColor;
}
.row .n{font-family:'ArchivoVF',sans-serif;font-weight:600;font-size:33px;}
.row .p{font-family:'ArchivoBlack',sans-serif;font-size:35px;letter-spacing:-0.01em;white-space:nowrap;}
`;

const WHITE = "#ffffff";
const INK = "#0b0d10";
const AMBER = "#fbbf24";
const LIME2 = "#a3e635";
const BLUE = "#2563eb";
const RASP = "#e11d48";
const VIOLET = "#7c3aed";
const TEAL = "#0f766e";
const TERRA = "#c2410c";
const LIME = "#d4f634";
const CREAM = "#fef3c7";

function mark(base, accent) {
  return `<div class="mark" style="color:${base}">AC<span style="color:${accent}">TC</span></div>`;
}

function page(body) {
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8">
<style>${CSS}</style></head><body>${body}</body></html>`;
}

/* ---------- gabarit realisation : la capture est le heros ---------- */
function realisation({ bg, fg, accent, shapes, img, name, nameSize, sector, benefit }) {
  return page(`
<div class="slide" style="background:${bg}">
  ${shapes}
  <div class="pad">
    <div style="display:flex;align-items:center;justify-content:space-between;">
      ${mark(fg, accent)}
      <div class="label" style="color:${accent};">SITE LIVRÉ</div>
    </div>
    <div class="photo" style="height:563px;margin-top:40px;">
      <img src="${img}" alt="">
    </div>
    <h1 style="color:${fg};font-size:${nameSize}px;margin-top:50px;">${name}</h1>
    <div class="label" style="color:${accent};margin-top:20px;">${sector}</div>
    <div class="support" style="color:${fg};margin-top:24px;opacity:.95;">${benefit}</div>
    <div class="spacer"></div>
    <div class="handle" style="color:${fg};opacity:.9;">@actcstudio.fr</div>
  </div>
</div>`);
}

/* ---------- gabarit pedagogie : le titre est le visuel ---------- */
function statement({ bg, fg, accent, shapes, label, title, titleSize, support, btn, btnBg, btnFg }) {
  return page(`
<div class="slide" style="background:${bg}">
  ${shapes}
  <div class="pad">
    ${mark(fg, accent)}
    <div class="label" style="color:${accent};margin-top:54px;">${label}</div>
    <h1 style="color:${fg};font-size:${titleSize}px;margin-top:26px;">${title}</h1>
    <div class="support" style="color:${fg};margin-top:40px;opacity:.95;">${support}</div>
    <div class="spacer"></div>
    ${btn ? `<a class="btn" style="background:${btnBg};color:${btnFg};margin-bottom:30px;">${btn}</a>` : ""}
    <div class="handle" style="color:${fg};opacity:.9;">@actcstudio.fr</div>
  </div>
</div>`);
}

/* ================= 1 a 5 : realisations ================= */

const p01 = realisation({
  bg: BLUE, fg: WHITE, accent: AMBER,
  shapes: `<div class="shape circle" style="width:300px;height:300px;background:${AMBER};opacity:.9;right:-130px;bottom:300px;"></div>
  <div class="shape circle" style="width:260px;height:260px;background:${WHITE};opacity:.08;left:-110px;bottom:120px;"></div>`,
  img: shot("conciergerie-bunel.jpg"),
  name: `LA&nbsp;CONCIERGERIE<br><span class="lt">BUNEL</span>`,
  nameSize: 74,
  sector: "CONCIERGERIE ET LOCATION MEUBLÉE",
  benefit: `Un propriétaire comprend l'offre en 30 secondes et prend contact.`,
});

const p02 = realisation({
  bg: TERRA, fg: WHITE, accent: AMBER,
  shapes: `<div class="shape circle" style="width:330px;height:330px;background:${AMBER};opacity:.9;right:-160px;top:170px;"></div>
  <div class="shape circle" style="width:220px;height:220px;background:${WHITE};opacity:.08;left:-110px;bottom:60px;"></div>`,
  img: shot("arbradelis.jpg"),
  name: `L'ARBRADELIS`,
  nameSize: 104,
  sector: "RESTAURANT CRÉOLE",
  benefit: `La carte, les horaires, la réservation : tout tient en un seul écran.`,
});

const p03 = realisation({
  bg: TEAL, fg: WHITE, accent: LIME,
  shapes: `<div class="shape circle" style="width:300px;height:300px;background:${LIME};opacity:.9;right:-150px;top:170px;"></div>
  <div class="shape circle" style="width:250px;height:250px;background:${WHITE};opacity:.08;left:-130px;top:470px;"></div>`,
  img: shot("lafonke.jpg"),
  name: `ÉPICERIE<br><span class="lt">LAFONKE</span>`,
  nameSize: 90,
  sector: "ÉPICERIE ET PRODUITS NATURELS",
  benefit: `Tout ce qu'un client cherche avant de se déplacer : produits, adresse, horaires.`,
});

const p04 = realisation({
  bg: RASP, fg: WHITE, accent: AMBER,
  shapes: `<div class="shape circle" style="width:330px;height:330px;background:${AMBER};opacity:.9;right:-150px;bottom:140px;"></div>
  <div class="shape circle" style="width:300px;height:300px;background:${WHITE};opacity:.08;left:-150px;bottom:420px;"></div>`,
  img: shot("soumoili-auto.jpg"),
  name: `SOUMOILI<br><span class="lt">AUTO</span>`,
  nameSize: 100,
  sector: "VÉHICULES D'OCCASION",
  benefit: `Chaque véhicule a sa page, et chaque page amène un appel.`,
});

const p05 = realisation({
  bg: VIOLET, fg: WHITE, accent: LIME2,
  shapes: `<div class="shape circle" style="width:360px;height:360px;background:${LIME2};opacity:.9;right:-180px;top:180px;"></div>
  <div class="shape circle" style="width:240px;height:240px;background:${WHITE};opacity:.08;left:-120px;top:560px;"></div>`,
  img: shot("saint-martin-autrement.jpg"),
  name: `SAINT-MARTIN<br><span class="lt">AUTREMENT</span>`,
  nameSize: 80,
  sector: "ASSOCIATION POUR LES SENIORS",
  benefit: `Une association qu'on trouve enfin sur Google, au moment où on la cherche.`,
});

/* ================= 6 a 8 : pedagogie ================= */

const p06 = statement({
  bg: CREAM, fg: INK, accent: TERRA,
  shapes: `<div class="shape qtr-tr" style="width:340px;height:340px;background:${TERRA};"></div>
  <div class="shape circle" style="width:300px;height:300px;background:${TERRA};opacity:.12;right:-140px;bottom:170px;"></div>`,
  label: "VITESSE DU SITE",
  title: `VOTRE&nbsp;SITE<br>MET<br><span class="lt">5&nbsp;SECONDES</span><br>À&nbsp;S'OUVRIR&nbsp;?`,
  titleSize: 124,
  support: `La moitié des visiteurs sont déjà repartis. Chaque site ACTC est construit pour s'ouvrir instantanément sur mobile.`,
  btn: "Faites tester votre site", btnBg: TERRA, btnFg: CREAM,
});

const p07 = statement({
  bg: RASP, fg: WHITE, accent: AMBER,
  shapes: `<div class="shape circle" style="width:330px;height:330px;background:${AMBER};right:-170px;top:140px;"></div>
  <div class="shape circle" style="width:260px;height:260px;background:${WHITE};opacity:.09;left:-130px;bottom:-60px;"></div>`,
  label: "PUBLICITÉ EN LIGNE",
  title: `BOOSTER<br>UN&nbsp;POST,<br>CE&nbsp;N'EST&nbsp;PAS<br>DE&nbsp;LA&nbsp;<span class="uw" style="--uw:${AMBER};"><span>PUBLICITÉ</span></span>`,
  titleSize: 118,
  support: `Une vraie campagne cible les bonnes personnes, teste plusieurs messages et se corrige chaque semaine.`,
  btn: "Parlons de votre campagne", btnBg: AMBER, btnFg: INK,
});

const p08 = statement({
  bg: BLUE, fg: WHITE, accent: LIME,
  shapes: `<div class="shape circle" style="width:360px;height:360px;background:${LIME};right:-180px;top:200px;"></div>
  <div class="shape circle" style="width:240px;height:240px;background:${WHITE};opacity:.09;left:-120px;bottom:-80px;"></div>`,
  label: "HÉBERGEMENT ET PROPRIÉTÉ",
  title: `VOTRE&nbsp;SITE<br><span class="hl" style="--hl:${LIME};color:${INK};">VOUS</span><br>APPARTIENT`,
  titleSize: 128,
  support: `Hébergement gratuit, aucun abonnement, aucun site pris en otage. Vous gardez les clés.`,
  btn: "www.actcstudio.fr", btnBg: LIME, btnFg: INK,
});

/* ================= 9 et 10 : offre ================= */

const p09 = page(`
<div class="slide" style="background:${LIME}">
  <div class="shape circle" style="width:300px;height:300px;background:${INK};right:-190px;top:620px;"></div>
  <div class="shape circle" style="width:280px;height:280px;background:${INK};opacity:.08;left:-140px;bottom:-110px;"></div>
  <div class="pad">
    ${mark(INK, TERRA)}
    <div class="label" style="color:${TERRA};margin-top:54px;">MAQUETTE OFFERTE</div>
    <h1 style="color:${INK};font-size:100px;margin-top:30px;">LA&nbsp;MAQUETTE<br>DE&nbsp;VOTRE<br>PAGE&nbsp;D'ACCUEIL<br><span class="uw" style="--uw:${TERRA};"><span>OFFERTE</span></span></h1>
    <div class="support" style="color:${INK};margin-top:54px;">Une vraie maquette sur-mesure de votre page d'accueil, livrée sous 5 à 7 jours, avant tout engagement.</div>
    <div class="spacer"></div>
    <a class="btn" style="background:${INK};color:${LIME};margin-bottom:30px;">Écrivez-nous</a>
    <div class="handle" style="color:${INK};opacity:.75;">@actcstudio.fr</div>
  </div>
</div>`);

const rows = [
  ["Site internet", "dès 1 400 euros"],
  ["Site marchand", "dès 2 900 euros"],
  ["Publicité en ligne", "dès 500 euros par mois"],
  ["Application web", "sur devis"],
];

const p10 = page(`
<div class="slide" style="background:${VIOLET}">
  <div class="shape circle" style="width:400px;height:400px;background:${AMBER};right:-190px;top:-170px;"></div>
  <div class="shape circle" style="width:260px;height:260px;background:${WHITE};opacity:.08;left:-110px;bottom:120px;"></div>
  <div class="pad">
    ${mark(WHITE, AMBER)}
    <div class="label" style="color:${AMBER};margin-top:50px;">PRIX ET DÉLAI</div>
    <h1 style="color:${WHITE};font-size:146px;margin-top:24px;">LIVRÉ&nbsp;EN<br><span class="lt">21 JOURS</span></h1>
    <div class="rows" style="color:${WHITE};margin-top:66px;">
      ${rows.map((r) => `<div class="row" style="padding:30px 0;"><span class="n">${r[0]}</span><span class="p" style="color:${AMBER};">${r[1]}</span></div>`).join("")}
    </div>
    <div class="support" style="color:${WHITE};margin-top:34px;font-size:31px;opacity:.95;">Paiement en plusieurs fois possible.</div>
    <div class="spacer"></div>
    <div class="handle" style="color:${WHITE};opacity:.9;">@actcstudio.fr</div>
  </div>
</div>`);

const pages = [p01, p02, p03, p04, p05, p06, p07, p08, p09, p10];
pages.forEach((html, i) => {
  const n = String(i + 1).padStart(2, "0");
  writeFileSync(join(here, "pages", n + ".html"), html);
});
console.log("OK " + pages.length + " pages");
