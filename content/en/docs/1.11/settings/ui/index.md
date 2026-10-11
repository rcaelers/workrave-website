---
lastmod: 2026-10-11
title: User Interface
---

## General

This tab contains general user interface settings.

![Preferences - UI - General](/images/screenshots/1.11/preferences-ui-general.png#center)

- Block mode

  This defines how Workrave enforces a break and can be set to one of the following values:

  - Block input

    During a break, keyboard and mouse are blocked. The break window is always on top and cannot be moved. You can still see your desktop and windows.

  - Block input and screen

    During a break, keyboard and mouse are blocked. The break window is always on top and cannot be moved. 
    Your screen will only show the break window and the desktop background image.
    All other windows are hidden.

  - No blocking

    No blocking of keyboard and mouse during a break. The break window can be moved and is not always on top.

- Language

  Sets the language of the user interface. You can select a specific language, or choose 'system default' to select the default language of your operating system and/or desktop environment.

- Start Workrave on logon (Windows only)

  If enabled, Workrave will automatically start when you log on.

- Dark mode (Windows)

  Choose a light or dark appearance, or follow the system setting.

- Show system tray icon

  Whether to show an [icon](/docs/1.11/menus/tray-icon) in the system tray. Note that some Linux desktop environment do not show tray icons.

Sound settings now have their own [Sounds](/docs/1.11/settings/sounds/) section.

## Status window

Settings for the main [timer window](/docs/1.11/windows/main).

![Preferences - UI - Main Window](/images/screenshots/1.11/preferences-ui-status-window.png#center)

- Show status window

  Whether the [timer window](/docs/1.11/windows/main) is visible.

- The status window stays always on top of other windows

  Whether the [timer window](/docs/1.11/windows/main) should be always on top of other windows.

- Placement

  This configures how timers are shown in the main timer window.
  The timer window has a maximum of three position where timers can be shown.
  You can save screen space by placing multiple timers in the same position.
  Workrave will then alternatingly show the timers on the same position.
  The following options are available:

  - Place timers next to each other
  - Place micro-break and rest break in one spot
  - Place rest break and daily limit in one spot
  - Place all timers in one spot

- Cycle time

  In case multiple timers are on the same position, Workrave will alternatingly show these timers on that position.
  This setting configures how long each timer is visible before switching to the next one.

- Timers

  Specifies for each timer whether it is visible in the timer window. For each timer the following options are available:

  - Hide

    The timer will never be shown in the timer window.

  - Show

    The timer will always be shown in the timer window.

  - Show only when this timer is first due
  
    The timer will only be shown in the timer window if this break is due before all other break in the same position.

<span id="applet"></span>

## Status applet

Settings for the [applet](/docs/1.11/applets). See the description of the status window settings above.

![Preferences - UI - Applet](/images/screenshots/1.11/preferences-ui-status-applet.png#center)

The Windows DeskBand applet was removed in 1.11. The Status applet settings apply to supported Linux panels.
