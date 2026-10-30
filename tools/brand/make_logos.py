"""Generate the ROATÁN VIAL logo files as outlined SVG.

The wordmark is set in Archivo (SIL OFL 1.1) at a fixed instance (wght 800,
wdth 112) and converted to paths, so the logo never depends on an installed font.

The acute accent over the second A is replaced by a lime lane-dash: the accent
mark of the name *is* a road marking. The symbol is a rising arc of lane dashes
that ends in a dot: the road leads to a person, to someone waiting at home.

Usage (dev only; requires `pip install fonttools uharfbuzz brotli`):
    python3 tools/brand/make_logos.py
Outputs to src/assets/brand/.
"""
import io
import os
import uharfbuzz as hb
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
FONT = os.path.join(ROOT, 'src/assets/fonts/archivo-variable-latin.woff2')
OUT = os.path.join(ROOT, 'src/assets/brand')

FOREST = '#123D38'
CHARCOAL = '#202A28'
WHITE = '#FAFAF7'
LIME = '#D7E65A'
TEAL = '#197D78'


def instance(wght, wdth):
    f = TTFont(FONT)
    inst = instancer.instantiateVariableFont(f, {'wght': wght, 'wdth': wdth})
    inst.flavor = None
    buf = io.BytesIO()
    inst.save(buf)
    data = buf.getvalue()
    return TTFont(io.BytesIO(data)), data


def shape(font_bytes, text, tracking=0):
    face = hb.Face(font_bytes)
    font = hb.Font(face)
    buf = hb.Buffer()
    buf.add_str(text)
    buf.guess_segment_properties()
    hb.shape(font, buf, {'kern': True, 'liga': False})
    out, x = [], 0
    for info, pos in zip(buf.glyph_infos, buf.glyph_positions):
        out.append((info.codepoint, x + pos.x_offset, pos.y_offset))
        x += pos.x_advance + tracking
    return out, x - tracking


def text_path(ttf, font_bytes, text, size, ox, oy, tracking=0):
    """Return (path d, advance width in px, positions) with baseline at oy."""
    upm = ttf['head'].unitsPerEm
    s = size / upm
    glyphs, adv = shape(font_bytes, text, tracking * upm / size if size else 0)
    order = ttf.getGlyphOrder()
    gs = ttf.getGlyphSet()
    ds, xs = [], []
    for gid, x, y in glyphs:
        name = order[gid]
        pen = SVGPathPen(gs)
        tpen = TransformPen(pen, (s, 0, 0, -s, ox + x * s, oy - y * s))
        gs[name].draw(tpen)
        ds.append(pen.getCommands())
        xs.append((ox + x * s, gs[name].width * s))
    return ' '.join(d for d in ds if d), adv * s, xs


def accent_dash(x_center, top_y, size):
    """A slanted lane-dash replacing the acute accent. Parallelogram, rounded feel."""
    w = size * 0.30   # length along the slant
    h = size * 0.12  # thickness
    # slant like an acute accent: rising to the right
    x0 = x_center - w * 0.42
    y0 = top_y
    dx, dy = w, -w * 0.42
    nx, ny = h * 0.38, h
    pts = [(x0, y0), (x0 + dx, y0 + dy), (x0 + dx + nx * 0.0, y0 + dy - ny), (x0 - nx * 0.0, y0 - ny)]
    pts = [(x0, y0), (x0 + dx, y0 + dy), (x0 + dx, y0 + dy - ny), (x0, y0 - ny)]
    return 'M' + ' L'.join(f'{x:.2f} {y:.2f}' for x, y in pts) + ' Z'


def _bez(t, p0=(8, 84), p1=(40, 54), p2=(80, 34)):
    a = (1 - t) ** 2
    b = 2 * (1 - t) * t
    c = t ** 2
    return (a * p0[0] + b * p1[0] + c * p2[0], a * p0[1] + b * p1[1] + c * p2[1])


def symbol(x, y, size, dash_color, dot_color, simple=False):
    """Rising arc of lane dashes that ends in a dot. Unit box = size x size.

    The dashes follow a gentle curve (the island's road), the dot is the person
    at the end of the journey. `simple` draws two dashes for tiny sizes.
    """
    u = size / 100.0
    sw = (15 if simple else 11.5) * u
    spans = [(0.0, 0.26), (0.48, 0.72)] if simple else [(0.0, 0.15), (0.32, 0.47), (0.64, 0.78)]
    parts = []
    for a, b in spans:
        pts = [_bez(a), _bez(b)]  # each dash is straight, like a painted lane dash
        d = 'M' + ' L'.join(f'{x + px * u:.2f} {y + py * u:.2f}' for px, py in pts)
        parts.append(f'<path d="{d}" stroke="{dash_color}" stroke-width="{sw:.2f}" stroke-linecap="round" stroke-linejoin="round" fill="none"/>')
    ex, ey = _bez(1.0)
    r = (13.5 if simple else 11) * u
    parts.append(f'<circle cx="{x + (ex + 4) * u:.2f}" cy="{y + (ey - 2) * u:.2f}" r="{r:.2f}" fill="{dot_color}"/>')
    return '\n  '.join(parts)


def svg(w, h, body, title, bg=None):
    rect = f'<rect width="{w}" height="{h}" fill="{bg}"/>\n  ' if bg else ''
    return (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {w:.0f} {h:.0f}" width="{w:.0f}" height="{h:.0f}" role="img" aria-label="{title}">\n'
            f'  <title>{title}</title>\n  {rect}{body}\n</svg>\n')


def wordmark(ttf, fb, text_color, accent_color, size, ox, baseline):
    """ROATAN VIAL with the accent dash on the second A. Returns (svg, width)."""
    d, adv, xs = text_path(ttf, fb, 'ROATAN VIAL', size, ox, baseline, tracking=size * 0.005)
    # second A is index 4 (R O A T A N)
    ax, aw = xs[4]
    cap = ttf['OS/2'].sCapHeight * size / ttf['head'].unitsPerEm
    acc = accent_dash(ax + aw / 2 + size * 0.02, baseline - cap - size * 0.075, size)
    body = f'<path d="{d}" fill="{text_color}"/>\n  <path d="{acc}" fill="{accent_color}"/>'
    return body, adv, cap


def stacked_wordmark(ttf, fb, text_color, accent_color, size, ox, baseline, lead):
    d1, a1, xs = text_path(ttf, fb, 'ROATAN', size, ox, baseline)
    d2, a2, _ = text_path(ttf, fb, 'VIAL', size, ox, baseline + lead)
    ax, aw = xs[4]
    cap = ttf['OS/2'].sCapHeight * size / ttf['head'].unitsPerEm
    acc = accent_dash(ax + aw / 2 + size * 0.02, baseline - cap - size * 0.075, size)
    body = (f'<path d="{d1}" fill="{text_color}"/>\n  <path d="{d2}" fill="{text_color}"/>\n'
            f'  <path d="{acc}" fill="{accent_color}"/>')
    return body, max(a1, a2), cap


def main():
    os.makedirs(OUT, exist_ok=True)
    ttf, fb = instance(800, 112)
    ttf_d, fb_d = instance(600, 100)

    variants = {
        'dark': dict(bg=FOREST, text=WHITE, accent=LIME, dash=WHITE, dot=LIME),
        'light': dict(bg=None, text=FOREST, accent=TEAL, dash=FOREST, dot=TEAL),
        'reverse': dict(bg=None, text=WHITE, accent=LIME, dash=WHITE, dot=LIME),
        'mono-white': dict(bg=None, text=WHITE, accent=WHITE, dash=WHITE, dot=WHITE),
        'mono-black': dict(bg=None, text=CHARCOAL, accent=CHARCOAL, dash=CHARCOAL, dot=CHARCOAL),
    }

    for name, v in variants.items():
        # Horizontal: symbol + one-line wordmark
        size = 64
        pad = 24
        sym = 80
        body_w, adv, cap = wordmark(ttf, fb, v['text'], v['accent'], size, pad + sym + 22, pad + 58)
        w = pad + sym + 22 + adv + pad
        h = pad * 2 + sym
        body = symbol(pad, pad, sym, v['dash'], v['dot']) + '\n  ' + body_w
        bg = v['bg'] if name == 'dark' else None
        open(os.path.join(OUT, f'logo-horizontal-{name}.svg'), 'w').write(svg(w, h, body, 'Roatán Vial', bg))

        # Primary (stacked) with descriptor
        size = 96
        pad = 40
        sym = 150
        sw_body, adv, cap = stacked_wordmark(ttf, fb, v['text'], v['accent'], size, pad, pad + sym + 36 + 70, 92)
        desc_y = pad + sym + 36 + 70 + 92 + 52
        dd, dadv, _ = text_path(ttf_d, fb_d, 'SEGURIDAD VIAL PARA TODOS', 21, pad + 3, desc_y, tracking=21 * 0.16)
        w = pad * 2 + max(adv, dadv)
        h = desc_y + pad
        body = (symbol(pad - 6, pad, sym, v['dash'], v['dot']) + '\n  ' + sw_body +
                f'\n  <path d="{dd}" fill="{v["text"]}" opacity="0.86"/>')
        open(os.path.join(OUT, f'logo-primary-{name}.svg'), 'w').write(svg(w, h, body, 'Roatán Vial — Seguridad vial para todos', bg))

    # Compact symbol tiles (used for favicon, app icon, social avatar)
    for name, bg, dash, dot in [('forest', FOREST, WHITE, LIME), ('lime', LIME, FOREST, FOREST), ('white', WHITE, FOREST, TEAL)]:
        s = 512
        inner = symbol(s * 0.15, s * 0.14, s * 0.70, dash, dot)
        body = f'<rect width="{s}" height="{s}" rx="{s * 0.22:.0f}" fill="{bg}"/>\n  {inner}'
        open(os.path.join(OUT, f'symbol-{name}.svg'), 'w').write(svg(s, s, body, 'Roatán Vial'))
    s = 64
    body = f'<rect width="{s}" height="{s}" rx="14" fill="{FOREST}"/>\n  ' + symbol(s * 0.12, s * 0.14, s * 0.74, WHITE, LIME, simple=True)
    open(os.path.join(OUT, 'favicon.svg'), 'w').write(svg(s, s, body, 'Roatán Vial'))
    # Square, full-bleed version for social avatars (platforms crop to circle)
    s = 512
    inner = symbol(s * 0.17, s * 0.16, s * 0.66, WHITE, LIME)
    open(os.path.join(OUT, 'avatar.svg'), 'w').write(svg(s, s, f'<rect width="{s}" height="{s}" fill="{FOREST}"/>\n  {inner}', 'Roatán Vial'))
    # Bare symbol (transparent) for inline use
    open(os.path.join(OUT, 'symbol.svg'), 'w').write(svg(100, 100, symbol(0, 0, 100, 'currentColor', LIME), 'Roatán Vial'))
    print('logos written to', OUT)


if __name__ == '__main__':
    main()
