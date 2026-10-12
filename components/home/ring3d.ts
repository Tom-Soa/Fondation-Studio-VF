// Scène 3D de l'accueil : les captures des sites réalisés, posées en fenêtres de
// navigateur sur un anneau qui tourne. La souris oriente la caméra, le scroll
// du hero fait reculer la caméra et monter l'anneau.
// Fluidité : une seule boucle rAF, en pause hors écran ou onglet masqué,
// DPR plafonné, rien d'autre que des transformations par image.
import {
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  Color,
  Fog,
  Group,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  PlaneGeometry,
  Points,
  PointsMaterial,
  SRGBColorSpace,
  Scene,
  WebGLRenderer,
} from "three";

export interface RingOptions {
  images: string[];
  reducedMotion: boolean;
  /** Progression du scroll dans le hero, 0 en haut, 1 quand il est sorti. */
  getProgress: () => number;
}

const BG = 0xf9f9f7; // alabaster, même teinte que la page
const TERRA = 0xc2410c;
const CARD_W = 768;
const CARD_H = 480;
const BAR = 44; // barre de navigateur dessinée au-dessus de la capture

// Fenêtre de navigateur : barre + 3 pastilles + capture, coins arrondis.
function windowTexture(img: HTMLImageElement) {
  const c = document.createElement("canvas");
  c.width = CARD_W;
  c.height = CARD_H + BAR;
  const g = c.getContext("2d")!;
  const r = 22;
  g.beginPath();
  g.roundRect(0, 0, c.width, c.height, r);
  g.clip();
  g.fillStyle = "#ffffff";
  g.fillRect(0, 0, c.width, c.height);
  g.drawImage(img, 0, BAR, CARD_W, CARD_H);
  ["#ff5f57", "#febc2e", "#28c840"].forEach((col, i) => {
    g.fillStyle = col;
    g.beginPath();
    g.arc(26 + i * 22, BAR / 2, 6.5, 0, Math.PI * 2);
    g.fill();
  });
  g.fillStyle = "#eef0f3";
  g.beginPath();
  g.roundRect(110, 12, CARD_W - 220, BAR - 24, 10);
  g.fill();
  const t = new CanvasTexture(c);
  t.colorSpace = SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

export async function createRing(container: HTMLElement, opts: RingOptions) {
  const mobile = window.matchMedia("(max-width: 767px)").matches;
  const images = mobile ? opts.images.slice(0, 10) : opts.images;

  // Canvas opaque (fond alabaster) : un canvas transparent recomposé à chaque image
  // clignote sur Safari iOS pendant le scroll. Pas d'antialias sur mobile (coût GPU).
  const renderer = new WebGLRenderer({ antialias: !mobile, alpha: false, powerPreference: "high-performance" });
  // 1.5 suffit pour des captures en mouvement ; 2 doublait presque le coût GPU plein écran.
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.setClearColor(BG, 1);
  const canvas = renderer.domElement;
  canvas.style.cssText = "position:absolute;inset:0;width:100%;height:100%;display:block";
  container.appendChild(canvas);

  const scene = new Scene();
  scene.fog = new Fog(new Color(BG), 9, mobile ? 20 : 24);
  const camera = new PerspectiveCamera(40, 1, 0.1, 60);

  // Anneau de cartes
  const ring = new Group();
  scene.add(ring);
  // Mobile : anneau plus serré, cartes jointives (circonférence ≈ nombre de cartes × largeur).
  const radius = mobile ? 3.5 : 6.4;
  const cardW = mobile ? 2.05 : 2.9;
  const geo = new PlaneGeometry(cardW, cardW * ((CARD_H + BAR) / CARD_W));
  const loaded = await Promise.all(images.map((src) => loadImage(src).catch(() => null)));
  const textures: CanvasTexture[] = [];
  const materials: MeshBasicMaterial[] = [];
  const valid = loaded.filter((i): i is HTMLImageElement => !!i);
  valid.forEach((img, i) => {
    const tex = windowTexture(img);
    textures.push(tex);
    const mat = new MeshBasicMaterial({ map: tex, transparent: true, fog: true });
    materials.push(mat);
    const m = new Mesh(geo, mat);
    const a = (i / valid.length) * Math.PI * 2;
    m.position.set(Math.sin(a) * radius, Math.sin(i * 1.7) * 0.35, Math.cos(a) * radius);
    m.rotation.y = a; // la carte regarde vers l'extérieur
    ring.add(m);
  });
  ring.rotation.x = 0.08;

  // Poussière terracotta, très légère
  const count = mobile ? 120 : 260;
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 26;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 18;
  }
  const dustGeo = new BufferGeometry();
  dustGeo.setAttribute("position", new BufferAttribute(pos, 3));
  const dustMat = new PointsMaterial({ color: TERRA, size: mobile ? 0.05 : 0.045, transparent: true, opacity: 0.55, depthWrite: false });
  const dust = new Points(dustGeo, dustMat);
  scene.add(dust);

  // Taille
  let ready = false;
  // Sur mobile, la barre d'adresse qui se replie change la hauteur pendant le scroll :
  // chaque setSize efface le canvas (flash). On ignore les petites variations de
  // hauteur et on redessine immédiatement après un vrai redimensionnement.
  let lastW = 0;
  let lastH = 0;
  const resize = () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (!w || !h) return;
    if (w === lastW && Math.abs(h - lastH) < 160) return;
    lastW = w;
    lastH = h;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    if (ready) frame(performance.now());
  };
  const ro = new ResizeObserver(resize);
  ro.observe(container);
  resize();

  // Souris (lissée dans la boucle, pas dans le handler)
  const target = { x: 0, y: 0 };
  const cur = { x: 0, y: 0 };
  const onPointer = (e: PointerEvent) => {
    target.x = (e.clientX / window.innerWidth) * 2 - 1;
    target.y = (e.clientY / window.innerHeight) * 2 - 1;
  };
  window.addEventListener("pointermove", onPointer, { passive: true });

  let visible = true;
  let raf = 0;
  let last = performance.now();
  let spin = 0;
  let prog = 0;

  const frame = (now: number) => {
    const dt = Math.min((now - last) / 1000, 0.05);
    last = now;
    prog += (opts.getProgress() - prog) * 0.12;
    cur.x += (target.x - cur.x) * 0.06;
    cur.y += (target.y - cur.y) * 0.06;

    spin += dt * (0.09 + prog * 0.35);
    ring.rotation.y = spin;
    // L'anneau ne monte qu'après la sortie du texte (qui s'efface sur le premier tiers).
    const rise = Math.max(0, (prog - 0.2) / 0.8);
    ring.position.y = (mobile ? -3.1 : -2.4) + rise * 2.6;
    dust.rotation.y = spin * 0.25;

    const baseZ = mobile ? 10.5 : 11 + (camera.aspect < 1 ? 3 : 0);
    camera.position.set(cur.x * 1.4, 0.6 - cur.y * 0.7 + prog * 1.6, baseZ + prog * 6);
    // Desktop : on vise sous le centre de l'anneau pour le faire remonter dans le premier écran.
    camera.lookAt(0, ring.position.y + (mobile ? 0.6 : -0.9), 0);
    renderer.render(scene, camera);
  };

  ready = true;

  const loop = (now: number) => {
    frame(now);
    raf = visible && !document.hidden ? requestAnimationFrame(loop) : 0;
  };
  const start = () => {
    if (opts.reducedMotion || raf) return;
    last = performance.now();
    raf = requestAnimationFrame(loop);
  };

  // Hors écran ou onglet masqué : plus aucune image calculée.
  const io = new IntersectionObserver(([entry]) => {
    visible = entry.isIntersecting;
    if (visible) start();
  });
  io.observe(container);
  const onVis = () => !document.hidden && visible && start();
  document.addEventListener("visibilitychange", onVis);

  if (opts.reducedMotion) frame(performance.now());
  else start();

  return () => {
    cancelAnimationFrame(raf);
    io.disconnect();
    ro.disconnect();
    window.removeEventListener("pointermove", onPointer);
    document.removeEventListener("visibilitychange", onVis);
    geo.dispose();
    dustGeo.dispose();
    dustMat.dispose();
    materials.forEach((m) => m.dispose());
    textures.forEach((t) => t.dispose());
    renderer.dispose();
    renderer.forceContextLoss();
    canvas.remove();
  };
}
