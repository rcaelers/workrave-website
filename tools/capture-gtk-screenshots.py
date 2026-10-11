#!/usr/bin/env python3
"""Capture a real GTK Workrave window or its open menus on Linux."""
import argparse
from pathlib import Path
import re
import subprocess

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("output", type=Path, help="Destination PNG")
group = parser.add_mutually_exclusive_group(required=True)
group.add_argument("--window", help="Exact visible window title, e.g. Preferences")
group.add_argument("--menus", action="store_true", help="Capture open menus and the timer window")
group.add_argument("--prelude", action="store_true", help="Capture the visible GTK break reminder")
args = parser.parse_args()
args.output.parent.mkdir(parents=True, exist_ok=True)

if args.window:
    ids = subprocess.check_output(["xdotool", "search", "--onlyvisible", "--name", "^" + re.escape(args.window) + "$"], text=True).split()
    if len(ids) != 1:
        raise SystemExit(f"Expected one visible window, found {len(ids)}")
    subprocess.run(["import", "-window", ids[0], "-frame", str(args.output)], check=True)
else:
    import pyatspi

    def walk(node):
        yield node
        for child in node:
            yield from walk(child)

    desktop = pyatspi.Registry.getDesktop(0)
    apps = [n for n in desktop if n.name == "org.workrave.Workrave"]
    if len(apps) != 1:
        raise SystemExit("Run this script in the same accessibility/D-Bus session as Workrave")
    nodes = list(walk(apps[0]))
    if args.prelude:
        candidates = [n for n in apps[0] if not n.name and n.getState().contains(pyatspi.STATE_SHOWING)]
    else:
        roles = {"menu", "menu item", "check menu item", "radio menu item"}
        candidates = [n for n in nodes if n.getState().contains(pyatspi.STATE_SHOWING) and
                      (n.getRoleName() in roles or (n.getRoleName() == "frame" and n.name == "Workrave"))]
        if not any(n.getRoleName() in roles for n in candidates):
            raise SystemExit("Open the Workrave menu before capturing it")
    boxes = [n.queryComponent().getExtents(pyatspi.DESKTOP_COORDS) for n in candidates]
    boxes = [e for e in boxes if e.x >= 0 and e.y >= 0 and e.width > 0 and e.height > 0]
    if not boxes:
        raise SystemExit("No visible region to capture")
    x, y = min(e.x for e in boxes), min(e.y for e in boxes)
    width = max(e.x + e.width for e in boxes) - x
    height = max(e.y + e.height for e in boxes) - y
    subprocess.run(["import", "-window", "root", "-crop", f"{width}x{height}+{x}+{y}", str(args.output)], check=True)
print(args.output)
