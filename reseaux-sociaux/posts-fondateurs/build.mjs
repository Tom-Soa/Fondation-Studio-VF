// Genere les 2 posts portrait (1080x1350) presentant les fondateurs d'ACTC Studio.
// HTML/CSS pur, une seule famille typographique (ArchivoBlack + ArchivoVF).
import { writeFileSync, mkdirSync, readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const here = dirname(fileURLToPath(import.meta.url));
mkdirSync(join(here, "pages"), { recursive: true });

const b64 = (p) => `data:image/jpeg;base64,${readFileSync(join(here, p)).toString("base64")}`;
const TOM_IMG = b64("assets/tom.jpg");
const ANDY_IMG = b64("assets/andy.jpg");

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

.mark{font-family:'ArchivoBlack',sans-serif;font-size:40px;letter-spacing:-0.01em;line-height:1;}
.label{font-family:'ArchivoVF',sans-serif;font-weight:700;font-size:27px;letter-spacing:0.09em;text-transform:uppercase;}
h1{
  font-family:'ArchivoBlack',sans-serif;font-weight:400;
  text-transform:uppercase;letter-spacing:-0.02em;line-height:0.98;
}
/* nom de famille en graisse fine, meme ligne de base typographique */
.lt{
  font-family:'ArchivoVF',sans-serif;font-weight:250;
  letter-spacing:0.005em;font-size:1.035em;
}
.photo{position:relative;border-radius:40px;overflow:hidden;z-index:4;}
.photo img{width:100%;height:100%;object-fit:cover;display:block;}

.skill{
  display:flex;align-items:center;gap:24px;
  font-family:'ArchivoVF',sans-serif;font-weight:700;font-size:35px;color:#ffffff;
}
.skill .sq{width:22px;height:22px;flex:none;}
.closing{
  font-family:'ArchivoVF',sans-serif;font-weight:400;font-size:29px;
  line-height:1.4;color:#ffffff;
}
.handle{font-family:'ArchivoVF',sans-serif;font-weight:700;font-size:31px;color:#ffffff;}
.spacer{flex:1;}

/* soulignement trace main */
.uw{position:relative;display:inline-block;}
.uw > span{position:relative;z-index:2;}
.uw::after{
  content:"";position:absolute;z-index:1;
  left:var(--uwl,-0.06em);right:var(--uwr,-0.085em);bottom:var(--uwb,-0.035em);
  height:var(--uwh,0.145em);border-radius:999px;
  background:var(--uw);
  transform:rotate(-1.4deg);
  transform-origin:left center;
}
.uw::before{
  content:"";position:absolute;z-index:1;
  left:26%;right:var(--uwr,-0.085em);bottom:calc(var(--uwb,-0.035em) + var(--uwh,0.145em) * 0.42);
  height:0.06em;border-radius:999px;
  background:var(--uw);opacity:.6;
  transform:rotate(-2.3deg);transform-origin:left center;
}
`;

const WHITE = "#ffffff";
const AMBER = "#fbbf24";
const BLUE = "#2563eb";
const TERRA = "#c2410c";
const INK = "#0b0d10";

function mark() {
  return `<div class="mark" style="color:${WHITE}">AC<span style="color:${AMBER}">TC</span></div>`;
}

function page(body) {
  return `<!doctype html><html lang="fr"><head><meta charset="utf-8">
<style>${CSS}</style></head><body>${body}</body></html>`;
}

function founder({ bg, shapes, first, last, nameSize, img, objPos, skills, closing }) {
  return page(`
<div class="slide" style="background:${bg}">
  ${shapes}
  <div class="pad">
    ${mark()}
    <div class="label" style="color:${AMBER};margin-top:40px;">CO-FONDATEUR D'ACTC</div>
    <h1 style="color:${WHITE};font-size:${nameSize}px;margin-top:20px;">${first}<br><span class="lt">${last}</span></h1>
    <div class="photo" style="height:400px;margin-top:34px;">
      <img src="${img}" alt="" style="object-position:${objPos};">
    </div>
    <div style="margin-top:34px;display:flex;flex-direction:column;gap:22px;">
      ${skills.map((s) => `<div class="skill"><span class="sq" style="background:${AMBER}"></span>${s}</div>`).join("")}
    </div>
    <div class="closing" style="margin-top:28px;max-width:860px;">${closing}</div>
    <div class="spacer"></div>
    <div class="handle">@actcstudio.fr</div>
  </div>
</div>`);
}

const tom = founder({
  bg: BLUE,
  shapes: `
  <div class="shape qtr-tr" style="width:360px;height:360px;background:${AMBER};"></div>
  <div class="shape circle" style="width:230px;height:230px;background:${WHITE};opacity:.10;left:-80px;bottom:300px;"></div>`,
  first: "TOM-SOA",
  last: "CYPRIEN",
  nameSize: 122,
  img: TOM_IMG,
  objPos: "47% 22%",
  skills: ["Direction artistique", "Parcours client", "Publicité Meta et Google"],
  closing: `Des sites qui <span class="uw" style="--uw:${AMBER}"><span>convertissent</span></span><br>et des campagnes qui ramènent des clients.`,
});

const andy = founder({
  bg: TERRA,
  shapes: `
  <div class="shape circle" style="width:480px;height:480px;background:${AMBER};right:-240px;bottom:-240px;"></div>
  <div class="shape circle" style="width:260px;height:260px;background:${WHITE};opacity:.10;left:-90px;top:250px;"></div>`,
  first: "ANDYLANE",
  last: "CHATENAY",
  nameSize: 122,
  img: ANDY_IMG,
  objPos: "55% 12%",
  skills: ["Référencement naturel", "Textes qui vendent", "Stratégie commerciale"],
  closing: `Aider les entrepreneurs à <span class="uw" style="--uw:${AMBER}"><span>vendre</span></span> mieux et à réduire leurs coûts.`,
});

writeFileSync(join(here, "pages", "tom.html"), tom);
writeFileSync(join(here, "pages", "andy.html"), andy);
console.log("OK 2 pages");
