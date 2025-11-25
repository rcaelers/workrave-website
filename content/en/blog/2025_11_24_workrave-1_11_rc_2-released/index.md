---
author: Rob Caelers
date: Sat, 24 Nov 2025 11:00:00 +0100
slug: workrave-1-11-0-rc-2-released
title: Workrave 1.11.0-rc.2 Released
categories:
  - release
---

Workrave 1.11.0-rc.2 has been released.

<!--more-->

Changes since Workrave 1.11.0-rc.1:

- Improvements:
  - Allow Workrave to ignore idle inhibitors if possible ([#596](https://github.com/rcaelers/workrave/issues/596), J. J. Ramsey)
  - Add examples of usage with swaybar ([#597](https://github.com/rcaelers/workrave/issues/597), J. J. Ramsey)
  - Support GNOME Shell 48
  - Update DBus example ([#611](https://github.com/rcaelers/workrave/issues/611), Emmanuel Ferdman)
  - Support for user defined colors ([#619](https://github.com/rcaelers/workrave/issues/619))
  - Port workrave Python scripts for waybar, etc., to dasbus ([#627](https://github.com/rcaelers/workrave/issues/627), J. J. Ramsey)
  - Phil Dibbs contributed new sounds (bells_ensemble, shangri_la, synth_harp, tinkle_bell, tuned_udu, woodwind_ensemble)
  - Support GNOME Shell 49 ([#636](https://github.com/rcaelers/workrave/issues/636), Alessandro Astone)
  - Keyboard/mouse locking now works on ARM64 Windows
  - Handle screen lock shortcut during breaks under Xorg
  - Add high DPI support on Windows ([#650](https://github.com/rcaelers/workrave/issues/650), Charlie Lin)
  - Use Gnome Shell extension to display prelude windows ([#621](https://github.com/rcaelers/workrave/issues/621))
  - It is no longer required to accept the GPL license on installation on Windows ([#648](https://github.com/rcaelers/workrave/issues/648))
- Bug fixes:
  - Fix crash when monitor is powered off ([#606](https://github.com/rcaelers/workrave/issues/606))
  - Fix an empty AppIndicator menu ([#556](https://github.com/rcaelers/workrave/issues/556), [#614](https://github.com/rcaelers/workrave/issues/614), wojnilowicz)
  - Fix issue where the tray icon did not appear on waybar, swaybar, or wf-shell trays ([#555](https://github.com/rcaelers/workrave/issues/555), [#613](https://github.com/rcaelers/workrave/issues/613), wojnilowicz)
  - Fix issue where the status window shows when Sway reloads despite being disabled ([#612](https://github.com/rcaelers/workrave/issues/612), [#615](https://github.com/rcaelers/workrave/issues/615), wojnilowicz)
  - Update AppIndicator menu when menu content changes ([#556](https://github.com/rcaelers/workrave/issues/556), [#652](https://github.com/rcaelers/workrave/issues/652),ValdikSS)
- Updated Translations:
  - Update Chinese translation ([#645](https://github.com/rcaelers/workrave/issues/645), Sisyphe42)
  - Updated Indonesian translation ([#653](https://github.com/rcaelers/workrave/issues/653), Andika Triwidada)
  - Fix French translation ([#656](https://github.com/rcaelers/workrave/issues/656))
