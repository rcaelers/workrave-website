---
author: Raymond Penners
date: Sat, 23 Aug 2003 10:00:00 +0200
slug: workrave-140-released
title: Workrave 1.4.0 released
categories:
  - release
---
Finally, Workrave 1.4.0 is out. The most interesting changes in this version
include: exercises, new translations (Polish, Danish and Spanish), multi-head
support, support for disabling breaks, the content of the status window has been
made configurable, improved (flickerfree) blocking mechanism on Windows.
<!--more-->

- Added exercises.
- Workrave has been translated to Polish, Danish and Spanish. Many thanks to
  Mikolaj Machowski, Christian Vejlbo, and Pablo Rodriguez!
- Multihead support for X11. Workrave now shows break windows on all monitors.
- Workrave can now cope with changes in system time and OS features like
  suspend-to-ram.
- Previously, the end time that showed up in the stats dialog equaled the time
  at which the clock reset (typically equal to the start of the next working
  day). This lead to weird from/to times, as in: "From 8:46 to 9:10". Fixed.
- Added an icon to the skip/postpone buttons on break windows.
- Many laptop pointer devices "drift" over time. This used to cause Workrave
  to detect activity when there was in fact none. Fixed, thanks to Chung-chieh
  Shan.
- On Windows, Workrave now notices when Explorer crashes and will try to
  reinsert the tray icon in the new Explorer taskbar that is created when
  Explorer restarts.
- Rewrote the user input blocking mechanism on Windows. You should no longer
  experience visual quirks (like flashing windows or unexpectedly focusing
  random windows) during breaks.
- On Linux, Workrave now notices when the gnome-panel crashes and will
  reinsert the applet in the new panel.
- The content of the status window can now be configured.
- Breaks can now be disabled.
