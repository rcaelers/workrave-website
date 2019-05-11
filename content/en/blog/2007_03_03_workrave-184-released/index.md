---
author: Raymond Penners
date: Sat, 03 Mar 2007 11:00:00 +0100
slug: workrave-184-released
title: Workrave 1.8.4 released
categories:
  - release
---
This version contains many new translations: Italian (Eraldo Girardi), Chinese
(Tao Wei), Slovak (Peter Tuharsky), Greek (Prokopis Prokopidis), Turkish (Enver
Altin), Japanese (Masanobu Yokota), Bulgarian (Ivan Dimov), Hungarian (Ory
Mate). Furthermore, more polish on the applets was done (e.g. vertical applet
support), and the usual bug fixing.
<!--more-->

- Eraldo Girardi translated Workrave into Italian.
- Better support for vertical applets on Unix.
- Tao WEI translated Workrave into simplified Chinese.
- Peter Tuharsky translated Workrave into Slovak.
- Prokopis Prokopidis translated Workrave into Greek.
- The status window used to appear empty, only to be resized and filled with the
  timers shortly thereafter. Now it appears right away in the proper size.
- The operation mode (normal/quiet/suspended) now persists acrossWorkrave
  sessions.
- Enver Altin translated Workrave into Turkish.
- Masanobu Yokota translated Workrave into Japanese.
- Ivan Dimov translated Workrave into Bulgarian.
- ORY Mate translated Workrave into Hungarian.
- Fixed KDE sound events (Phuah Yee Keat)
- Fixed Gnome sound events
- Fixed negative mouse usage when date is changed.
- Fixed text color on Gnome themes with dark backgrounds (i.e. high contrast
  inverse)
- Gnome applets now support transparency.
- The 'datadir' configuration option in workrave.ini can now be a relative path.
  This will store all Workrave data in the 'Data' directory below the Workrave
  root directory. (Note the double backslash):

  [general]
  datadir=.\\Data

- Daily limit now properly resets when hibernated.