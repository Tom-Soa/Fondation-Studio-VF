#!/bin/bash
# Export des 18 slides en JPG 1920 x 1080, sans rien installer.
# Utilise le Chrome déjà présent sur le Mac.
#
#   ./export.sh
#
# Les fichiers sortent dans out/slide-01.jpg, out/slide-02.jpg, etc.

set -e
cd "$(dirname "$0")"

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
[ -x "$CHROME" ] || { echo "Chrome introuvable dans /Applications."; exit 1; }

mkdir -p out
rm -f out/slide-*.png out/slide-*.jpg

for i in $(seq 1 18); do
  n=$(printf "%02d" "$i")
  cible=$((i - 1))

  # Une page temporaire qui ouvre le deck et se place sur la bonne slide.
  cat > "/tmp/deck-frame-$n.html" <<EOF
<body style="margin:0;background:#17171F">
<iframe id="f" src="file://$(pwd)/deck.html"
        style="width:1920px;height:1080px;border:0;display:block"></iframe>
<script>
  document.getElementById('f').onload = () => {
    const w = document.getElementById('f').contentWindow;
    w.document.body.classList.add('export');
    w.allerA($cible);
    // Neutralise la mise à l'échelle : l'iframe fait déjà 1920x1080.
    w.document.querySelectorAll('.slide').forEach(s => s.style.transform = 'none');
  };
</script>
</body>
EOF

  rm -rf "/tmp/deck-prof-$n"
  "$CHROME" --headless=new --disable-gpu --no-sandbox --no-first-run \
    --user-data-dir="/tmp/deck-prof-$n" --hide-scrollbars \
    --allow-file-access-from-files --window-size=1920,1080 \
    --virtual-time-budget=4000 \
    --screenshot="out/slide-$n.png" \
    "file:///tmp/deck-frame-$n.html" >/dev/null 2>&1 &

  pid=$!
  for _ in $(seq 1 30); do sleep 1; [ -s "out/slide-$n.png" ] && break; done
  sleep 1; kill $pid 2>/dev/null || true
  pkill -f "deck-prof-$n" 2>/dev/null || true

  echo "capturé : slide-$n"
done

# Conversion en JPG.
python3 - <<'PY'
from PIL import Image
import glob, os
for f in sorted(glob.glob("out/slide-*.png")):
    Image.open(f).convert("RGB").save(f.replace(".png", ".jpg"), "JPEG",
                                      quality=95, optimize=True)
    os.remove(f)
print("converti en JPG :", len(glob.glob("out/slide-*.jpg")), "fichiers")
PY

rm -f /tmp/deck-frame-*.html
rm -rf /tmp/deck-prof-*
echo "Terminé. Fichiers dans $(pwd)/out"
