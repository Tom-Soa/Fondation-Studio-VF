import fs from "node:fs";
const C={alabaster:"#f9f9f7",midnight:"#0f172a",terra:"#c2410c",steel:"#64748b"};
const FONTS="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@500;600;700;800;900&family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@1&family=IBM+Plex+Mono:wght@400;500&display=swap";
const b64=(p)=>fs.readFileSync(p).toString("base64");

const css=`
*{margin:0;padding:0;box-sizing:border-box}
html,body{width:1080px;height:1080px;overflow:hidden}
body{font-family:Inter,sans-serif;-webkit-font-smoothing:antialiased}
.slide{position:relative;width:1080px;height:1080px;padding:96px;display:flex;flex-direction:column;overflow:hidden}
.bg{position:absolute;inset:0;width:1080px;height:1080px;object-fit:cover}
.veil{position:absolute;inset:0}
.in{position:relative;z-index:2;display:flex;flex-direction:column;height:100%}
.disp{font-family:"Inter Tight",sans-serif;font-weight:800;letter-spacing:-0.045em;line-height:0.92}
.ser{font-family:"Instrument Serif",serif;font-style:italic;font-weight:400;letter-spacing:-0.01em}
.mono{font-family:"IBM Plex Mono",monospace;text-transform:uppercase;letter-spacing:0.14em;font-size:24px;font-weight:500}
.wm{font-family:"Inter Tight",sans-serif;font-weight:800;letter-spacing:-0.04em;font-size:30px}
.top{display:flex;justify-content:space-between;align-items:center}
.spacer{flex:1}
.lead{font-size:30px;line-height:1.5;max-width:760px;margin-top:26px}
.rule{width:64px;height:3px;background:${C.terra};margin:34px 0 0}
.foot{display:flex;justify-content:space-between;align-items:flex-end;margin-top:auto}
`;

function slide({img, dark, kicker, title, lead, veil}){
  const fg = dark ? C.alabaster : C.midnight;
  const sub = dark ? "rgba(249,249,247,.72)" : "rgba(15,23,42,.72)";
  return `<!doctype html><html><head><meta charset="utf-8">
<link href="${FONTS}" rel="stylesheet"><style>${css}</style></head><body>
<div class="slide" style="color:${fg}">
  <img class="bg" src="data:image/png;base64,${b64(img)}">
  <div class="veil" style="background:${veil}"></div>
  <div class="in">
    <div class="top">
      <div class="wm">AC<span style="color:${C.terra}">TC</span></div>
      <div class="mono" style="color:${sub}">01/04 &middot; ce que c'est</div>
    </div>
    <div class="spacer"></div>
    <div class="mono terra" style="color:${C.terra}">${kicker}</div>
    <div class="rule"></div>
    <div class="disp" style="font-size:104px;margin-top:30px">${title}</div>
    <div class="lead" style="color:${sub}">${lead}</div>
    <div class="foot">
      <div class="mono" style="color:${sub}">tarif <span style="color:${C.terra};font-weight:500">à partir de 1 400 euros</span></div>
      <div class="mono" style="color:${sub}">actcstudio.fr</div>
    </div>
  </div>
</div></body></html>`;
}

const common={kicker:"service 01",title:`Création de site <span class="ser terra">internet</span>`,
  lead:"Design sur-mesure, référencement Google intégré, hébergement gratuit. Livré en 21 jours, et le site vous appartient."};

fs.writeFileSync("temoin-a.html", slide({...common, img:"hf/a1.png", dark:true,
  veil:`linear-gradient(180deg, rgba(15,23,42,.10) 0%, rgba(15,23,42,.72) 46%, rgba(15,23,42,.94) 100%)`}));
fs.writeFileSync("temoin-b.html", slide({...common, img:"hf/b1.png", dark:false,
  veil:`linear-gradient(180deg, rgba(249,249,247,.08) 0%, rgba(249,249,247,.80) 44%, rgba(249,249,247,.96) 100%)`}));
console.log("html ok");
