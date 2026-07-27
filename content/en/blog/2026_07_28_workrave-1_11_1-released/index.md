---
author: Rob Caelers
date: Thu, 23 Jul 2026 01:36:14 +0200
slug: workrave-1-11-1-released
title: Workrave 1.11.1 Released
categories:
  - release
---
Workrave 1.11 has been released.
The 1.11 series is the result of more than four years of alpha, beta, and release candidate development.

<!--more-->

Changes since Workrave 1.11.0:

- Bug fixes:
  - Fixed missing Microsoft Visual C++ runtime dependency on Windows, which could cause
    Workrave to fail to start with a "VCRUNTIME140.dll was not found" error
  - Fixed an issue where the installer would repeatedly claim Workrave was still running
    and refuse to continue, even when it wasn't
  - Fixed the installed version number not being shown for Workrave in the Windows
    "Apps & Features" list
  - Fixed an issue where the installer did not uninstall Workrave 1.10 when upgrading,
    leaving both versions installed side by side

Changes since Workrave 1.10.54:

- Highlights:
  - You can now change the operation mode for a limited amount of time ([#98](https://github.com/rcaelers/workrave/issues/98), [#305](https://github.com/rcaelers/workrave/issues/305))
  - Workrave can automatically change the operation mode based on Windows Focus Assist ([#255](https://github.com/rcaelers/workrave/issues/255), [#226](https://github.com/rcaelers/workrave/issues/226))
  - High DPI support on both Windows ([#650](https://github.com/rcaelers/workrave/issues/650), Charlie Lin) and Xorg
  - Several new sounds contributed by Phil Dibbs
  - The Windows version is now 64 bit, with a modern Windows 11 UI theme
  - Modern desktop integration on Linux: StatusNotifierItem tray icons and a redesigned
    GNOME Shell extension supporting GNOME Shell 50, Wayland (experimental), and high-DPI/fractional scaling
  - An auto-update feature for Windows
  - ARM64 Windows support, including keyboard/mouse locking
  - The Workrave networking functionality was removed
  - The legacy Windows DeskBand/taskbar applet was removed
- New features and improvements:
  - Workrave now follows the XDG Base Directory specification ([#192](https://github.com/rcaelers/workrave/issues/192))
  - A dark UI theme on Windows now follows the OS dark/light mode setting ([#214](https://github.com/rcaelers/workrave/issues/214), [#529](https://github.com/rcaelers/workrave/issues/529))
  - The default sound theme was changed to the "Subtle" theme ([#362](https://github.com/rcaelers/workrave/issues/362))
  - It is no longer required to accept the GPL license on installation on Windows ([#648](https://github.com/rcaelers/workrave/issues/648))
  - The Windows installer now asks whether to install Workrave per-user or system-wide
  - The D-Bus utility (gdbus) is no longer installed by default by the installer
  - Added examples of usage with swaybar ([#597](https://github.com/rcaelers/workrave/issues/597), J. J. Ramsey)
  - Ported the Workrave Python scripts for waybar, Yambar, etc. to dasbus ([#557](https://github.com/rcaelers/workrave/issues/557)-[#563](https://github.com/rcaelers/workrave/issues/563), [#627](https://github.com/rcaelers/workrave/issues/627), J. J. Ramsey)
  - Allow Workrave to ignore idle inhibitors if possible ([#596](https://github.com/rcaelers/workrave/issues/596), J. J. Ramsey)
  - A portable version is now available for Windows and Linux
- Desktop integration:
  - Support for the StatusNotifierItem protocol ([#447](https://github.com/rcaelers/workrave/issues/447))
  - The redesigned GNOME Shell extension supports GNOME Shell 50 and fixes several extension
    issues beyond the support already available in Workrave 1.10 ([#396](https://github.com/rcaelers/workrave/issues/396), [#582](https://github.com/rcaelers/workrave/issues/582), [#661](https://github.com/rcaelers/workrave/issues/661))
  - Added DPI scaling support for the GNOME Shell extension on Xorg, and fixed Wayland detection
  - Use the GNOME Shell extension to display prelude windows ([#621](https://github.com/rcaelers/workrave/issues/621))
  - Added Cinnamon applet support with GTK 4 ([#487](https://github.com/rcaelers/workrave/issues/487))
  - Fixed Wayland activity monitoring on KDE, and improved layer-shell support on other Wayland compositors
  - Handle the screen lock shortcut during breaks under Xorg
  - Enable application autostart across all Linux desktop managers ([#548](https://github.com/rcaelers/workrave/issues/548), Jon Petrissans)
- Notable bug fixes (spanning the full 1.11 development cycle):
  - Fixed crash when a monitor is powered off ([#606](https://github.com/rcaelers/workrave/issues/606))
  - Fixed an empty AppIndicator menu ([#556](https://github.com/rcaelers/workrave/issues/556), [#614](https://github.com/rcaelers/workrave/issues/614), wojnilowicz)
  - Fixed the tray icon not appearing on waybar, swaybar, or wf-shell ([#555](https://github.com/rcaelers/workrave/issues/555), [#613](https://github.com/rcaelers/workrave/issues/613), wojnilowicz)
  - Fixed the status window showing when Sway reloads despite being disabled ([#612](https://github.com/rcaelers/workrave/issues/612), [#615](https://github.com/rcaelers/workrave/issues/615), wojnilowicz)
  - Fixed the Rest Break window appearing in the top left corner in "No Lock" mode ([#663](https://github.com/rcaelers/workrave/issues/663), [#664](https://github.com/rcaelers/workrave/issues/664), ValdikSS)
  - Fixed a crash on wlroots compositors when a break starts ([#550](https://github.com/rcaelers/workrave/issues/550), [#552](https://github.com/rcaelers/workrave/issues/552), [#553](https://github.com/rcaelers/workrave/issues/553), [#554](https://github.com/rcaelers/workrave/issues/554), Kirill Primak)
  - Fixed high DPI fractional scaling on Windows
  - Fixed the application icon on Linux
  - Fixed DPI scaling with multiple monitors ([#308](https://github.com/rcaelers/workrave/issues/308), [#315](https://github.com/rcaelers/workrave/issues/315))
  - Prevented state and daily-statistics data loss by saving files atomically
  - Fixed focus changing unexpectedly after a break warning
  - Fixed the main window reopening after the screen was unlocked
  - Fixed the Rest Break window opening below other Workrave windows
  - Fixed exercises not always appearing on the primary monitor
  - Fixed issues that prevented sounds or the status window from being disabled ([#443](https://github.com/rcaelers/workrave/issues/443), [#444](https://github.com/rcaelers/workrave/issues/444))
  - Fixed Windows language selection, special characters in the tray menu, and unselectable menu items
  - Improved hibernate/suspend handling ([#539](https://github.com/rcaelers/workrave/issues/539), [#540](https://github.com/rcaelers/workrave/issues/540))
- Translations:
  - Added Georgian translation ([#669](https://github.com/rcaelers/workrave/issues/669), NorwayFun)
  - Created and maintained the Tamil translation ([#498](https://github.com/rcaelers/workrave/issues/498), [#579](https://github.com/rcaelers/workrave/issues/579), [#581](https://github.com/rcaelers/workrave/issues/581), TamilNeram)
  - Simplified Chinese: complete overhaul ([#385](https://github.com/rcaelers/workrave/issues/385), [#391](https://github.com/rcaelers/workrave/issues/391), sr093906) and further updates ([#645](https://github.com/rcaelers/workrave/issues/645), Sisyphe42)
  - Updated Indonesian translation ([#560](https://github.com/rcaelers/workrave/issues/560), [#653](https://github.com/rcaelers/workrave/issues/653), Andika Triwidada)
  - Updated Italian translation ([#359](https://github.com/rcaelers/workrave/issues/359), [#403](https://github.com/rcaelers/workrave/issues/403), [#489](https://github.com/rcaelers/workrave/issues/489), [#490](https://github.com/rcaelers/workrave/issues/490), [#496](https://github.com/rcaelers/workrave/issues/496), albanobattistella)
  - Updated Polish translation ([#423](https://github.com/rcaelers/workrave/issues/423), [#465](https://github.com/rcaelers/workrave/issues/465), [#484](https://github.com/rcaelers/workrave/issues/484), ChuckMichael, Hanna Kraska)
  - Updated French translation ([#545](https://github.com/rcaelers/workrave/issues/545), WedoneOfficiel; fix [#656](https://github.com/rcaelers/workrave/issues/656))
  - Updated Brazilian Portuguese translation ([#512](https://github.com/rcaelers/workrave/issues/512), Paulo Haddad Martim)
  - Updated Dutch translation ([#437](https://github.com/rcaelers/workrave/issues/437), WKobes) and fixed several strings
  - Updated Hebrew translation ([#361](https://github.com/rcaelers/workrave/issues/361), Omer I.S.)
  - Updated Persian translation ([#358](https://github.com/rcaelers/workrave/issues/358), MSKF)
  - Updated Catalan translation ([#338](https://github.com/rcaelers/workrave/issues/338), Jordi Mallach)
  - Updated Spanish translation ([#494](https://github.com/rcaelers/workrave/issues/494), Cristian Martínez)
