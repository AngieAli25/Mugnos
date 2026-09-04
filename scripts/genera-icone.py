"""Genera il set di icone del sito dal marchio L&M (public/loghi/logochiaro.png).

Il marchio monogramma e' l'unico elemento del brand leggibile a 16px: il lockup
orizzontale ("LO GIUDICE and MUGNOS / STUDIO ASSOCIATO...") ha un rapporto 7:1 e
in una scheda diventa una riga grigia.

L'inchiostro chiaro (#F2F2F1) viene posato su una tessera #0A0A0A, lo stesso
fondo del sito e del <meta name="theme-color">: l'icona resta leggibile sulle
barre schede chiare, e su quelle scure la tessera si fonde col croma del browser
lasciando visibile il solo monogramma.

Il marchio e' 997x501 (rapporto 2:1), quindi in un quadrato occupa metà
dell'altezza: alle misure piccole si ricampiona in un solo passaggio e si
applica una maschera di contrasto, o le grazie del carattere impastano.

Uso (dalla radice del progetto, serve Pillow):

    python3 scripts/genera-icone.py

Riscrive le icone in public/. Da rilanciare se cambia il logo.
"""
import os, struct, sys
from PIL import Image, ImageDraw, ImageFilter

SRC = 'public/loghi/logochiaro.png'
BG = (10, 10, 10, 255)              # --bg-primary
OUT = sys.argv[1] if len(sys.argv) > 1 else 'public'

src = Image.open(SRC).convert('RGBA')
mark = src.crop(src.split()[3].getbbox())   # via il vuoto attorno al marchio


def tile(size, ratio, radius_ratio=0.0, sharpen=0):
    """Tessera quadrata di `size` px, marchio centrato a `ratio` della larghezza."""
    if radius_ratio:
        ss = 8                       # gli angoli raccordati si supercampionano
        S = size * ss
        plate = Image.new('RGBA', (S, S), (0, 0, 0, 0))
        ImageDraw.Draw(plate).rounded_rectangle(
            [0, 0, S - 1, S - 1], radius=int(S * radius_ratio), fill=BG)
        canvas = plate.resize((size, size), Image.LANCZOS)
    else:
        canvas = Image.new('RGBA', (size, size), BG)

    w = max(1, round(size * ratio))
    h = max(1, round(w * mark.height / mark.width))
    m = mark.resize((w, h), Image.LANCZOS)      # un solo ricampionamento
    if sharpen:
        m = m.filter(ImageFilter.UnsharpMask(radius=1, percent=sharpen, threshold=0))
    canvas.alpha_composite(m, ((size - w) // 2, (size - h) // 2))
    return canvas


def write_ico(path, images):
    """ICO multi-risoluzione con payload PNG (supportato da tutti i browser).

    Pillow scala una sola immagine su tutte le misure: qui ogni misura ha la sua
    resa, quindi l'ICO va assemblato a mano.
    """
    import io
    blobs = []
    for im in images:
        b = io.BytesIO()
        im.save(b, format='PNG', optimize=True)
        blobs.append(b.getvalue())
    n = len(blobs)
    header = struct.pack('<HHH', 0, 1, n)
    offset = 6 + 16 * n
    entries, payload = b'', b''
    for im, blob in zip(images, blobs):
        entries += struct.pack('<BBBBHHII',
                               im.width if im.width < 256 else 0,
                               im.height if im.height < 256 else 0,
                               0, 0, 1, 32, len(blob), offset)
        offset += len(blob)
        payload += blob
    open(path, 'wb').write(header + entries + payload)


os.makedirs(OUT, exist_ok=True)

# Favicon: mostrate senza maschera -> angoli appena raccordati, marchio ampio.
# Piu' l'icona e' piccola, piu' il marchio va largo e contrastato.
FAVICONS = {16: (0.94, 80), 32: (0.90, 60), 48: (0.88, 40), 96: (0.86, 0)}
rendered = {}
for s, (ratio, sharp) in FAVICONS.items():
    rendered[s] = tile(s, ratio, 0.14, sharp)
    rendered[s].save(f'{OUT}/favicon-{s}.png', optimize=True)

write_ico(f'{OUT}/favicon.ico', [rendered[16], rendered[32], rendered[48]])

# iOS e Android applicano la loro maschera (squircle): tessera piena, senza
# raccordi nostri e con piu' aria, o gli angoli del marchio finiscono tagliati.
tile(180, 0.76).save(f'{OUT}/apple-touch-icon.png', optimize=True)
tile(192, 0.72).save(f'{OUT}/icon-192.png', optimize=True)
tile(512, 0.72).save(f'{OUT}/icon-512.png', optimize=True)

for f in ('favicon.ico', 'favicon-16.png', 'favicon-32.png', 'favicon-48.png',
          'favicon-96.png', 'apple-touch-icon.png', 'icon-192.png', 'icon-512.png'):
    print(f'{OUT}/{f:24} {os.path.getsize(f"{OUT}/{f}"):>7} B')
