#!/usr/bin/env python3
"""Turn the raw Instagram screenshots into the site's image assets.

The source material is four screenshots of @mksdetailingg posts, taken in a
desktop browser. Each is Instagram's post modal: a 9:16 media pane sitting in
the middle of the window with the app's own chrome around it, and a little of
that chrome printed *on* the photograph. This script removes all of it, so the
crops are reproducible rather than hand-made once and forgotten.

The media pane is identical in all four screenshots, because they came from one
browser window: x 559..1435, y 52..1610, which is 876x1558, a clean 9:16.

Chrome that sits on the photograph itself is confined to a band along the
bottom of the pane: the audio/mute disc at bottom-right in all four, and a
people-tag disc at bottom-left in the 370z frame. Both sit below y=1470, so the
band is cropped away rather than painted out. Nothing is reconstructed and
nothing is invented.

THE BEFORE/AFTER PAIR
---------------------
`s3-before` and `s3-after` are two frames of the same Audi S3 (plate S30 ERH)
from one carousel, on one forecourt, in one session.

They are NOT camera-registered. The photographer moved between frames: the
second is taken from closer, lower, and rolled about nine degrees further over.
Phase-correlating the two frames proves it, because registering the background
and registering the car give completely different answers, which is parallax
and cannot happen under a pure zoom.

A wipe slider is only honest if the subject holds still under the handle, so
this script registers on the *car*, not the frame. Two landmarks visible and
unambiguous in both frames give a similarity transform:

    front alloy centre    before (405.0, 1041.7)   after (350.0, 1087.3)
    number plate centre   before (714.3, 1140.5)   after (660.0, 1244.5)

which resolves to scale 1.0705 and rotation +9.17 degrees. The before frame is
warped into the after frame's coordinate space, and both are then cut to the
largest axis-aligned window that the warped frame fully covers.

The consequence, stated plainly because the page depends on it: the car lines
up across the handle, and the background does not, by roughly the parallax the
photographer's step introduced. That is the correct trade. The subject is the
car. If MKS ever sends two frames shot from one spot, drop them in, set the
landmarks, and the same pipeline produces a pair that registers completely.

Run from the project root:  python3 tools/build-images.py
"""

from __future__ import annotations

import math
import subprocess
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    sys.exit("Pillow is required:  python3 -m pip install Pillow")

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "source-images"
OUT = ROOT / "public" / "work"

# Instagram's media pane, shared by all four screenshots.
PANE = (559, 52, 1435, 1610)

# Everything below this line in the pane is Instagram's own buttons.
CHROME_TOP = 1470

# Landmarks for the before/after registration, in pane coordinates.
BEFORE_ALLOY, BEFORE_PLATE = (405.0, 1041.7), (714.3, 1140.5)
AFTER_ALLOY, AFTER_PLATE = (350.0, 1087.3), (660.0, 1244.5)

# The window both registered frames fully cover, in the after frame's space.
PAIR_BOX = (70, 300, 780, CHROME_TOP)

WEBP_QUALITY = "86"


def pane(name: str) -> Image.Image:
    path = SRC / name
    if not path.is_file():
        sys.exit(f"Missing source screenshot: {path}")
    return Image.open(path).convert("RGB").crop(PANE)


def similarity(p1, p2, q1, q2):
    """PIL AFFINE coefficients warping the p-frame into the q-frame.

    PIL maps output coordinates back to input, so this is the inverse of the
    forward transform q = s*R*(p - p1) + q1.
    """
    v = (p2[0] - p1[0], p2[1] - p1[1])
    w = (q2[0] - q1[0], q2[1] - q1[1])
    s = math.hypot(*w) / math.hypot(*v)
    th = math.atan2(w[1], w[0]) - math.atan2(v[1], v[0])
    k, ct, st = 1.0 / s, math.cos(th), math.sin(th)
    return (
        k * ct,
        k * st,
        -k * (ct * q1[0] + st * q1[1]) + p1[0],
        -k * st,
        k * ct,
        -k * (-st * q1[0] + ct * q1[1]) + p1[1],
    ), s, math.degrees(th)


def encode(im: Image.Image, stem: str) -> None:
    png = OUT / f"{stem}.png"
    webp = OUT / f"{stem}.webp"
    im.save(png)
    subprocess.run(
        ["cwebp", "-q", WEBP_QUALITY, "-m", "6", "-quiet", str(png), "-o", str(webp)],
        check=True,
    )
    png.unlink()
    print(f"{stem:12s} {im.size[0]}x{im.size[1]}  {webp.stat().st_size / 1024:6.1f} KB")


def main() -> None:
    if not SRC.is_dir():
        sys.exit(f"Source screenshots not found at {SRC}")
    OUT.mkdir(parents=True, exist_ok=True)

    after = pane("Screenshot 2026-08-12 at 16.33.02.png")
    before = pane("Screenshot 2026-08-12 at 16.32.47.png")

    coeffs, scale, degrees = similarity(
        BEFORE_ALLOY, BEFORE_PLATE, AFTER_ALLOY, AFTER_PLATE
    )
    print(f"registration   scale {scale:.4f}   rotation {degrees:+.2f} deg")
    warped = before.transform(
        after.size, Image.AFFINE, coeffs, resample=Image.BICUBIC
    )

    encode(warped.crop(PAIR_BOX), "s3-before")
    encode(after.crop(PAIR_BOX), "s3-after")

    singles = (0, 0, PANE[2] - PANE[0], CHROME_TOP)
    encode(pane("Screenshot 2026-08-12 at 16.33.54.png").crop(singles), "s3-forecourt")
    encode(pane("Screenshot 2026-08-12 at 16.33.49.png").crop(singles), "370z")


if __name__ == "__main__":
    main()
