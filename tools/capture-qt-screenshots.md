# Preliminary Qt 1.12 manual screenshots

The 1.12 manual describes the unreleased Qt interface. The 1.11 guide remains
the default, and earlier manuals and screenshots are unchanged. The warning
banner is controlled by `preliminary: true` in `data/documentation.yaml`.

Application images were captured on Windows 11 (`win11-vm`) from Workrave
commit `69943a423` using the development-only `workrave-window-preview` driver.
They use the desktop's 200% DPI setting, transparent RGBA backgrounds and no
cast shadows. The Hugo image hook displays them at half their native size.
Linux panel illustrations and the Windows hidden-icons area are retained from
the earlier guide and labelled on their pages.

## Build and capture

In the Workrave source tree, configure a Qt development build with `WITH_UI=Qt`,
`WITH_GRPC=ON` and `WITH_WINDOW_PREVIEW=ON`. Build the
`workrave-window-preview` target. Run it alongside the installed Qt runtime
libraries and assets. This separate driver is not installed in release packages.
The normal Workrave executable does not expose the screenshot interface.

Run the driver and Python helper in the signed-in user's interactive Windows
session, with RDP connected. An Incus command in SYSTEM/session 0 cannot capture
that desktop. A temporary interactive scheduled task can launch the helper.
Install the helper dependencies with `python -m pip install grpcio grpcio-tools pillow numpy`.

```powershell
$env:WORKRAVE_RPC_ADDRESS = "127.0.0.1:50055"
$env:WORKRAVE_PREVIEW_DIRECTORY = "$env:TEMP\workrave-qt-manual-profile"
$app = Start-Process "C:\path\to\workrave-window-preview.exe" -PassThru
python tools/window-preview.py --scenes C:\website\static\images\screenshots\1.12\scenes.json capture all --pid $app.Id --output screenshots
python tools/window-preview.py quit
Wait-Process -Id $app.Id
```

Choose a free loopback port if Windows reserves the example port, and pass the
same endpoint to the helper's `--endpoint` option. Always close the driver with
`quit` and wait for a clean exit. Remove any temporary scheduled task and staged
executable after capturing.

The stored scene definitions select light appearance and fixed timer values.
Break-reminder, break-window and standalone exercise images have matching
Classic and Sanctuary captures. `main` uses the default Rings layout; `main-bars`,
`main-focus` and `main-classic` demonstrate the other layouts. The `-sanctuary` scenes
enable `gui/sanctuary_ui_enabled`. Settings are
confined to the driver's isolated profile.

The helper captures green and magenta mattes, recovers alpha and removes
shadows. Most captures took under one second. Qt reminder windows needed an
additional render-settling pass; `--settle 0.4` provides extra compositor time.
Check those windows for complete opaque cards before accepting the images.
The standalone Qt exercise player randomizes its list: select **Move the eyes**
with its Previous/Next controls and check the frame visually. The rest-break
illustration uses **Finger stretch**, matching the archived guide.

Each PNG has a JSON capture record with native geometry, DPI, scene parameters
and elapsed time. Build Hugo and check the screenshots at their displayed size,
the preliminary banner on every 1.12 page, and matching-topic links in the
version selector before publishing.

## Complete preferences pages

The preferences illustrations use a taller window (1786 × 2134 native pixels
on the capture desktop) so more settings are visible without changing font
size. The native Windows `SetWindowPos` call resizes only the driver's own
preferences window to fit the available desktop work area. Short pages keep
their original window size.

General, Status window, Micro-break, Rest break, Daily limit and Sounds still
need a second image. Their `-continued` captures show the same window scrolled
to the bottom, with overlap between the two views. Let Qt's scroll animation
and overshoot settle before capturing both mattes; capturing during scrolling
produces incomplete cards and incorrect alpha. The capture records include
`native_window_size` and `scroll_position`. The scene alone does not set these
native window dimensions or scroll position.

Check the last control on each page and the overlap between images when
refreshing these captures. General must include System and Lock & power;
Status window must include Placement and Per-timer visibility; the timer
pages must include their lower options; Sounds must include its final events.
Icon theme is conditional on installed alternative themes and is absent from
the captured Windows build.

## Matching appearances

The paired images use the same scene values apart from
`gui/sanctuary_ui_enabled`. Keep the timer values, warning stage, button locks
and exercise frame identical when refreshing a pair. The standalone exercise
player randomizes its list; select Move the eyes using its controls, then switch
appearance live to preserve that selection.

Sanctuary break cards use transparent screen-sized native windows. Limit the
readback to the centered Workrave card area, with sufficient room for the large
exercise card, so OS notification overlays outside the card cannot enter the
image. Record that readback region in the capture's `bounds`. Retain transparent
margins and remove shadows as for the other illustrations.

The `ui-comparison` shortcode labels both appearances, displays them side by
side on wide screens and stacks them on narrow screens. Each image links to
its native-resolution PNG. Shared preferences, menus and statistics do not
need duplicate captures; timer-window layouts are chosen independently.
