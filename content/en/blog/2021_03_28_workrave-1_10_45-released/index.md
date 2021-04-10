---
author: Rob Caelers
date: Sat, 27 Mar 2021 02:19:02 +0100
slug: workrave-1-10-45-released
title: Workrave 1.10.45 Released
categories:
  - release
---
Workrave 1.10.45 has been released. This release adds a new sound theme and several small improvements.

<!--more-->

Changes since Workrave 1.10.44:

- Micro breaks without a postpone button could be postponed by starting a
  rest break while the break prompt window was visible and then clicking
  postpone in the rest break window. The postpone button is now disabled
  when the micro break is overdue, and the maximum number of break prompts
  was reached.
- A new sound theme calls 'Bells' has been added (#225, Pieter De Decker)
- Added support for High-DPI displays in the Windows Applet.
- The Windows applet now correctly enforces a minimum size (#252)
- Initial support for icon themes.
- Fixes:
  - Fixed build issue with libayatana-indicator3
  - Fixed issue where Workrave would show 2 status icons on Linux (#258)
  - Fixed a deprecation warning in the Gnome Shell applet (#251)
  - The cinnamon applet is no longer bouncing up and down (#253)
  - Fixed issue where the current language was always "Unrecognized language"
  - Fixed issue where activity monitoring would stop after restarting Gnome Shell
  - Fixed issue that caused the main window to disappear (#244, 259)
- Translation updates:
  - Updated Chinese translation (#232, wintertee)
  - Updated French translation (Darialalala)
  - Updated Dutch translation (Matthias Huijgen)
  - Fixed typo in the Italian translation (#234, albanobattistella)

 
