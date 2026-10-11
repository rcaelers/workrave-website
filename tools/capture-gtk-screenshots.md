# GTK documentation screenshots

The 1.11 guide keeps the 1.10 explanations except where a feature was added or
removed. Its Windows application illustrations use the GTK interface on
Windows 11. The archived 1.10 pages and assets are kept separately. Linux panel
illustrations remain the original assets and are labelled as such.

## Repeatable captures with Workrave 1.12

Build Workrave with `WITH_UI=Gtk+3` and `WITH_GRPC=ON`. The opt-in screenshot
interface also supports Qt. See `libs/rpc/README.md` in the Workrave repository
for the API and `tools/window-preview-scenes.json` for editable presets.

Keep the RDP desktop connected. Start Workrave and the capture helper in the
signed-in user's interactive session; an Incus command in SYSTEM/session 0
cannot capture that desktop. A temporary scheduled task with an Interactive
principal can run the helper in the user's session.

```powershell
$env:WORKRAVE_WINDOW_PREVIEW = "1"
$env:WORKRAVE_RPC_ADDRESS = "127.0.0.1:50055"
$env:WORKRAVE_PREVIEW_DIRECTORY = "$env:TEMP\workrave-docs-preview"
$app = Start-Process "C:\path\to\workrave.exe" -PassThru
python -m pip install grpcio grpcio-tools pillow numpy
python tools/window-preview.py capture all --pid $app.Id --output screenshots
```

Screenshot mode uses an isolated INI profile and simulated timer/activity data.
The helper selects windows, preferences pages, warning stages, exercise frames,
button locks and menu states directly; no short timers or repeated manual clicks
are required. Requests are applied on the UI thread and acknowledged before
capturing. Use `show SCENE` for a single preview, or `call METHOD JSON` for a
custom state. The Windows tray popup is the actual native menu; OS-owned hidden
tray panels still need to be opened through Windows.

The helper uses Windows screenshot APIs and the current Windows font/DPI
settings. It takes matching captures over green and magenta backdrops, then
recovers foreground color and alpha. This retains green timer bars and antialiased
edges. Cast shadows are removed by default; use `--keep-shadows` to retain them.
PNGs are saved at native size with JSON provenance; controls and text are never
redrawn. Capture completes native paint messages and synchronizes with the
compositor instead of using fixed delays. GTK and Qt preview animations are disabled.
Preset commands share one acknowledgement, which reports errors from the whole
batch. Per-image elapsed times are printed and recorded in JSON. `--settle SECONDS`
adds an optional delay for a slow theme.

Only use 1.12 preview captures where the appearance matches 1.11. Features
specific to 1.11, such as its Activity statistics tab, require that installed
version. Preserve its existing settings and state when capturing it. Capture
only Workrave windows; remove the temporary scheduled tasks afterwards.

The exercise presets match the archived guide: `restbreak-exercise` uses Finger
stretch (index 1, first frame), and `exercises` uses Move the eyes (index 4, second
frame). Keep these selections when refreshing the guide.

## Check the guide

Copy the selected RGBA PNGs to `static/images/screenshots/1.11/`. Keep the
application's current font size and give each image transparent outer margins.
The image render hook displays the 200% DPI captures at half their native pixel
dimensions, matching the 1.10 guide's standard density without discarding image
detail. Keep the native PNGs and provenance files.
Build Hugo, check every referenced image at its displayed size and in a narrow
viewport, and verify the version dropdown's matching-topic links. Review text
changes against the original 1.10 guide, with a reason tied to a feature change.
Do not change archived image paths or rewrite the original prose for style.
