"""Genera public/fondo-ondas.svg (uso: python3 scripts/generar-fondo-ondas.py): haz de líneas onduladas, repetible en vertical sin costuras.

Todo lo que varía con y es periódico de periodo H, así la última fila del
mosaico encaja con la primera cuando el navegador lo repite (repeat-y).
"""
import math
import sys

W, H = 1280, 1600          # viewBox: ancho = max-w-7xl del layout
N = 46                     # número de líneas
STEP = 50                  # muestreo vertical (px) para la curva
SPREAD = 380               # semiancho del haz
AMP = 260                  # amplitud del serpenteo del centro
TWIST = 0.9                # desfase entre líneas (da volumen de "cinta")

def x_at(i, y):
    t = 2 * math.pi * y / H
    u = (i / (N - 1)) * 2 - 1                      # -1..1 dentro del haz
    width = SPREAD * (1 + 0.35 * math.sin(2 * t + 1.2))   # el haz se abre y se cierra
    center = W * 0.55 + AMP * math.sin(t) + 60 * math.sin(2 * t + 0.4)
    return center + u * width + 40 * math.sin(t + u * TWIST)

def path(i):
    ys = list(range(-STEP, H + 2 * STEP, STEP))   # un punto extra a cada lado para Catmull-Rom
    pts = [(x_at(i, y), y) for y in ys]
    d = [f"M{pts[1][0]:.1f} {pts[1][1]:.0f}"]
    for k in range(1, len(pts) - 2):
        p0, p1, p2, p3 = pts[k - 1], pts[k], pts[k + 1], pts[k + 2]
        c1 = (p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6)
        c2 = (p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6)
        d.append(f"C{c1[0]:.1f} {c1[1]:.0f} {c2[0]:.1f} {c2[1]:.0f} {p2[0]:.1f} {p2[1]:.0f}")
    return "".join(d)

def opacity(i):
    u = (i / (N - 1)) * 2 - 1
    return 0.10 + 0.30 * math.exp(-((u - 0.25) ** 2) / 0.35)   # "luz" algo desplazada

# Máscara vertical periódica: zonas más iluminadas y zonas que caen a negro.
stops = []
for k in range(0, 17):
    f = k / 16
    v = 0.35 + 0.65 * (0.5 + 0.5 * math.cos(2 * math.pi * f))   # mismo valor en 0 y 1
    stops.append(f'<stop offset="{f:.4f}" stop-color="#fff" stop-opacity="{v:.3f}"/>')

lines = "\n".join(
    f'<path d="{path(i)}" stroke-opacity="{opacity(i):.3f}"/>' for i in range(N)
)

svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" width="{W}" height="{H}" preserveAspectRatio="xMidYMin slice">
<defs>
<linearGradient id="v" x1="0" y1="0" x2="0" y2="{H}" gradientUnits="userSpaceOnUse">{"".join(stops)}</linearGradient>
<linearGradient id="h" x1="0" y1="0" x2="{W}" y2="0" gradientUnits="userSpaceOnUse">
<stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".18" stop-color="#fff" stop-opacity="1"/>
<stop offset=".85" stop-color="#fff" stop-opacity="1"/><stop offset="1" stop-color="#fff" stop-opacity="0"/>
</linearGradient>
<mask id="mv" maskUnits="userSpaceOnUse" x="0" y="0" width="{W}" height="{H}"><rect width="{W}" height="{H}" fill="url(#v)"/></mask>
<mask id="mh" maskUnits="userSpaceOnUse" x="0" y="0" width="{W}" height="{H}"><rect width="{W}" height="{H}" fill="url(#h)"/></mask>
</defs>
<rect width="{W}" height="{H}" fill="#000"/>
<g mask="url(#mh)"><g mask="url(#mv)" fill="none" stroke="#d4d4d4" stroke-width="1" vector-effect="non-scaling-stroke">
{lines}
</g></g>
</svg>
'''
out = sys.argv[1] if len(sys.argv) > 1 else "public/fondo-ondas.svg"
open(out, "w").write(svg)
print(out, len(svg.encode()), "bytes")
