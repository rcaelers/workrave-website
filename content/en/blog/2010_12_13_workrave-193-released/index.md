---
author: Rob Caelers
date: Mon, 13 Dec 2010 14:00:00 +0100
slug: workrave-193-released
title: Workrave 1.9.3 released
categories:
  - release
---
Workrave 1.9.3 has been released, featuring a number of improvements,
new translations and the usual bug fixes.
<!--more-->

## New translations

- Seanán Ó Coistín translated Workrave into Irish.
- 김재용 translated Workrave into Korean.

## Improvements

- Workrave now stops all timers when the screen is locked. When the screen in
  unlocked, a natural restbreak is started.
- Audio muting improvements:
  - Audio is now muted after the start break sound is played.
  - Audio is now unmuted when the user becomes active after the
    break has ended instead of immediately after the break ended.
- By default, the RECORD extention is now mandatory on X windows
  systems.

## Bug fixes

- Fixed crash on Windows systems without audio installed.
- Fixed translucency of Deskband applet on Windows 7/Vista.
- Fixed Reading mode menu entry in Windows and Gnome applet.
- Networking now supports IPV6 addresses.
- Activity monitor should now filter out mouse jitter.
- Fixed monitoring of (Wacom) tablets.
