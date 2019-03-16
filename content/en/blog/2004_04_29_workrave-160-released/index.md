---
author: Raymond Penners
date: Thu, 29 Apr 2004 10:00:00 +0200
slug: workrave-160-released
title: Workrave 1.6.0 released
categories:
  - release
---
The Windows version of Workrave now includes a taskbar applet version of the
status window. Timers can be configured to ignore activity. Improved full-screen
"Block all" mode. Chinese, Russian and French translations have been added.
<!--more-->

- Workrave has been translated into Chinese thanks to Rex Tsai, into Russian
  thanks to Sergey Kirkinsky, and into French thanks to Thomas Basset and
  Benjamin Siband.
- The explanation of an exercise is now scrollable, if it does not fit onscreen.
- The Windows version now includes a taskbar applet version of the status
  window. After installation of Workrave, right click your taskbar and select
  "Workrave" from the list of toolbars.
- Timers can be configured to ignore activity.
- Bloat removal: removed the "Resets at" option from the daily limit panel.
- Exercises are no longer read at program startup, and are released from memory
  when not needed anymore.
- Terminology: we now use the term "micro-break" instead of "micro-pause".
- When block mode "Block all" is used, we display the break window on top of
  your current desktop background (wallpaper), instead of on a semi-transparent
  screen snapshot.
- Fixed screen locking on X11: previously only xlock was detected and used
  without passing a display parameter. Now, the proper screen lock command is
  invoked on the right display. For example, if KDE is detected its
  kdesktop_lock is executed.
- High-profile bug fixes (Windows): activity monitoring when working in Exceed
  has been restored, and ZoneLab interaction problems (hangups) have been
  corrected.
