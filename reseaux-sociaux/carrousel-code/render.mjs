import puppeteer from "puppeteer";
import sharp from "sharp";
import { mkdirSync, readFileSync } from "fs";
import { join } from "path";

const DIR = "/Users/tomchazoule/Documents/Fondation Studio/Création de site/Fondation Studio/reseaux-sociaux/carrousel-code";
const OUT = join(DIR, "out");
mkdirSync(OUT, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});

const sheet = [];
for (let i = 1; i <= 12; i++) {
  const n = String(i).padStart(2, "0");
  const page = await browser.newPage();
  await page.setViewport({ width: 1080, height: 1080, deviceScaleFactor: 2 });
  await page.goto("file://" + join(DIR, "slides", n + ".html"), { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  // controle de debordement
  const over = await page.evaluate(() => {
    const bad = [];
    document.querySelectorAll("h1,.support,.label,.btn,.mark").forEach((el) => {
      const r = el.getBoundingClientRect();
      if (el.scrollWidth > Math.ceil(r.width) + 1) bad.push("GLYPH:" + el.tagName + " sw=" + el.scrollWidth + " w=" + Math.round(r.width));
      if (r.right > 1080 - 88 || r.bottom > 1080 - 88 || r.left < 88 - 1 || r.top < 88 - 1) {
        bad.push(el.className + "|" + Math.round(r.left) + "," + Math.round(r.top) + "," + Math.round(r.right) + "," + Math.round(r.bottom));
      }
    });
    return bad;
  });
  if (over.length) console.log("DEBORDE " + n + ":", over.join(" ; "));
  const buf = await page.screenshot({ type: "png" });
  await sharp(buf).png().toFile(join(OUT, n + ".png"));
  sheet.push(join(OUT, n + ".png"));
  await page.close();
  console.log("ok", n);
}
await browser.close();

// planche contact 4 x 3
const tiles = [];
for (let i = 0; i < 12; i++) {
  const b = await sharp(sheet[i]).resize(500, 500).toBuffer();
  tiles.push({ input: b, left: (i % 3) * 510 + 5, top: Math.floor(i / 3) * 510 + 5 });
}
await sharp({ create: { width: 1540, height: 2050, channels: 3, background: "#ffffff" } })
  .composite(tiles).png().toFile(join(DIR, "contact-sheet.png"));
console.log("contact sheet ok");
