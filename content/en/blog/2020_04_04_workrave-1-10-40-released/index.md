---
author: Rob Caelers
date: Sat, 04 Apr 2020 00:00:00 +0100
slug: workrave-1-10-40-released
title: Workrave 1.10.40 Released
categories:
  - release
---
Workrave 1.10.40 has been released with same small improvements and translation updates.
<!--more-->

Changes since Workrave 1.10.37:

- When it is time to take a micro break, Workrave may start a rest break
   instead. This happens when the rest break would start within 30 seconds of
   the micro break. If the postpone or skip buttons are disabled on the micro
   break, they will be temporarily disabled on the rest break window. A small
   progress bar indicates how long the buttons are disabled. Previously,
   Workrave would restart the micro break when pressing the skip or postpone
   button.
- Support applets on Gnome 3.35.1+ using libgnome-panel (Alberts Muktupāvels, [#170](https://github.com/rcaelers/workrave/pull/170)).
- Show operation mode in Gnome applet.
- Added Indonesian translation (Andika Triwidada, [#171](https://github.com/rcaelers/workrave/pull/171)).
- Fixed issue where Workrave was not properly terminated on reinstall ([#176](https://github.com/rcaelers/workrave/issues/176)).
- Fixed focus issue on rest break window that caused muted (grey) text.
