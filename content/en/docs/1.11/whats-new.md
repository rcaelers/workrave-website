---
title: What changed since 1.10
lastmod: 2026-10-11
---

The three break types and their timers work as before. These are the main
changes to look for when moving from Workrave 1.10 to the GTK version of 1.11.

## Temporary operation modes

The **Mode** menu now includes **Temporarily Quiet…** and
**Temporarily Suspended…**. Select a duration or **Until next day** to let
Workrave return to Normal mode automatically. See [operation modes](/docs/1.11/menus/operation-mode/).

## Preferences

Preferences now has four main sections: **Timers**, **User interface**,
**Monitoring**, and **Sounds**. Monitoring and sound settings have their own
pages instead of appearing inside other sections. The sound player no longer
offers the PC speaker option, and Subtle is the default sound theme.

![User interface preferences in Workrave 1.11 GTK](/images/screenshots/1.11/preferences-ui-general.png#center)

On Windows, preferences also include **Dark mode**,
[Focus Assist integration](/docs/1.11/settings/monitoring/#focus-assist-windows),
and [Software updates](/docs/1.11/settings/updates/).

## Linux desktop integration

Workrave supports modern tray icons through StatusNotifierItem/AppIndicator.
The GNOME Shell extension was redesigned, including support for showing break
prompts on Wayland. Wayland support remains experimental; the GTK preferences
include an option to force X11 and an experimental option for GNOME Shell
prompts. See [desktop integration](/docs/1.11/applets/) and
[user interface settings](/docs/1.11/settings/ui/).

## Features removed in 1.11

- **Networking:** synchronizing timers between computers and the Network menu
  and preferences were removed. Timers now run independently on each computer.
- **Windows DeskBand:** the Windows taskbar timer applet was removed. Use the
  timer window and tray icon instead. The Linux panel applets are separate
  integrations and are still available when included in your package.

The [1.10 guide](/docs/1.10/) retains the instructions for those older features.
