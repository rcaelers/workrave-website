---
author: Raymond Penners
date: Mon, 24 Mar 2003 11:00:00 +0100
slug: workrave-122-released
title: Workrave 1.2.2 released
categories:
  - release
---
The Window version now has a native look and feel, so Workrave no longer looks
like a second grade application when running on Windows. Furthermore, support
for Gnome session management was improved: Workrave is now properly restarted by
the Gnome session manager. Finally, the overall user interface has improved,
addressing most HIG issues.
<!--more-->

- If you stopped working during a prelude just before it was about to
  disappear, the prelude would still go away because Workrave assumed you
  wanted to continue working. This behaviour has been changed now: if there is
  no activity when the count-down has reached zero, Workrave waits a couple of
  seconds to see if you are really idle. If that is the case, a break window
  appears. If not, you can continue working.
- Redesigned the preferences panel. It used to have nested tabs, these have
  been replaced with an icon shortcut bar.
- The break windows have been given a title.
- The Window version now included GTK-Wimp. This makes the visual appearance
  of Workrave blend much better into the Windows desktop environment
  (<http://gtk-wimp.sourceforge.net)>.
- Better support for Gnome session management. Workrave is now properly
  restarted by the gnome session manager.
- The applet can now be configured to show only the Workrave sheep. Clicking
  on the sheep will toggle the visibility of the main window.
