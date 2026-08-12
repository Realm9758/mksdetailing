#!/usr/bin/env python3
"""Draw the security-document line work this site is printed on.

Guilloche is the engine-turned line ornament on banknotes, share certificates
and vehicle documents: not a texture, a machine drawing. Two pieces are needed
and both are generated here rather than faked with gradients, because the whole
point of the pattern is that the lines are continuous curves.

  field.svg    A tileable band of interfering sine lines, the "wave" ground
               that fills the page behind the certificate.
  rosette.svg  A hypotrochoid rosette, the medallion a certificate carries
               behind its header.

Run from the project root:  python3 tools/build-guilloche.py
"""

from __future__ import annotations

import math
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "public"

TILE = 240          # field tile size, px
FIELD_LINES = 14    # sine lines per tile
ROSETTE = 520       # rosette viewbox, px


def field_svg() -> str:
    """Interfering sine lines that tile seamlessly on both axes.

    Every frequency is a whole number of cycles across the tile, so the left
    edge meets the right edge exactly. Vertical repetition is exact because the
    lines are evenly spaced across the full tile height.
    """
    paths = []
    for i in range(FIELD_LINES):
        y0 = (i + 0.5) * TILE / FIELD_LINES
        # Two whole-cycle harmonics, phase-shifted per line so the field breathes
        # across the tile instead of reading as corduroy.
        a1, f1 = 5.0, 2
        a2, f2 = 2.2, 5
        ph = i * math.tau / FIELD_LINES
        pts = []
        for s in range(0, 97):
            x = s * TILE / 96
            t = x / TILE * math.tau
            y = y0 + a1 * math.sin(f1 * t + ph) + a2 * math.sin(f2 * t - ph * 1.7)
            pts.append(f"{x:.2f},{y:.2f}")
        paths.append(f'<polyline points="{" ".join(pts)}"/>')
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{TILE}" height="{TILE}" '
        f'viewBox="0 0 {TILE} {TILE}">'
        f'<g fill="none" stroke="#ffffff" stroke-width="0.7" stroke-opacity="0.5" '
        f'stroke-linecap="round">{"".join(paths)}</g></svg>'
    )


def rosette_svg() -> str:
    """A hypotrochoid rosette, drawn as a family of nested passes.

    x = (R-r)cos t + d cos(((R-r)/r) t)
    y = (R-r)sin t - d sin(((R-r)/r) t)

    R=180 and r=40 share a factor of 20, so the curve closes after two turns
    with R/gcd = 9 lobes: dense enough to read as engine-turning, open enough to
    survive being printed at 200px. Five passes at rising d give the woven depth
    a single curve cannot, which is how the real engine produced them.
    """
    cx = cy = ROSETTE / 2
    R, r = 180.0, 40.0
    k = (R - r) / r
    period = math.tau * r / math.gcd(int(R), int(r))
    steps = 1200
    paths = []
    for pass_i in range(5):
        d = 84.0 + pass_i * 13.0
        pts = []
        for s in range(steps + 1):
            t = period * s / steps
            x = cx + (R - r) * math.cos(t) + d * math.cos(k * t)
            y = cy + (R - r) * math.sin(t) - d * math.sin(k * t)
            pts.append(f"{x:.1f},{y:.1f}")
        paths.append(
            f'<polyline points="{" ".join(pts)}" stroke-opacity="{0.85 - pass_i * 0.11:.2f}"/>'
        )
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{ROSETTE}" height="{ROSETTE}" '
        f'viewBox="0 0 {ROSETTE} {ROSETTE}">'
        f'<g fill="none" stroke="#000000" stroke-width="0.5">{"".join(paths)}</g></svg>'
    )


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for name, svg in (("guilloche-field.svg", field_svg()), ("guilloche-rosette.svg", rosette_svg())):
        (OUT / name).write_text(svg, encoding="utf-8")
        print(f"{name:24s} {len(svg) / 1024:6.1f} KB")


if __name__ == "__main__":
    main()
