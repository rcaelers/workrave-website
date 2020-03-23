---
author: Rob Caelers
date: Tue, 17 Mar 2020 00:00:00 +0100
slug: workrave-1-10-37-released
title: Workrave 1.10.37 Released
categories:
  - release
---
Workrave 1.10.37 has been released with same small improvement and translation updates.
<!--more-->

Changes since Workrave 1.10.34:

- Update Irish translation (Seanán Ó Coistín)
- new Portuguese translation (pmraps)
- Non-blocking break windows are now centered on Wayland/mutter ([#163](https://github.com/rcaelers/workrave/issues/163))
- Support display scaling
- Show operation mode in cinnamon applet.
- Fixed focus issue on rest break window that caused muted (grey) text.
- When it is time to take a micro break, Workrave may start a rest break
  instead. This happens when the rest break would start within 30 seconds of
  the micro break. If the postpone or skip buttons are disabled on the micro
  break, they will be temporarily disabled on the rest break window. A small
  progress bar indicates how long the buttons are disabled. Previously,
  Workrave would restart the micro break when pressing the skip or postpone
  button.
