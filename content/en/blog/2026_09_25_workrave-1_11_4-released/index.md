---
author: Rob Caelers
date: Fri, 25 Sep 2026 11:45:00 +0200
slug: workrave-1-11-4-released
title: Workrave 1.11.4 Released
categories:
  - release
---
\Workrave 1.11.4 has been released. You can now choose which speakers or headphones
play your break reminders. This release also fixes several problems that could
cause Workrave to crash or lose saved timer progress and statistics.

<!--more-->

Changes since Workrave 1.11.1:

- New features and improvements:
  - You can now choose which speakers or headphones Workrave uses in the sound
    preferences on Windows, Linux, and macOS. For example, you can play break
    reminders through your speakers while other sounds use your headphones ([#700](https://github.com/rcaelers/workrave/issues/700), koloved)
  - Improved error reports to help us investigate problems
- Bug fixes:
  - Fixed incorrect break timer settings when using Workrave for the first time
  - Workrave now uses the default timer settings if saved settings are missing or damaged
  - Fixed a problem that could prevent Workrave from starting on Windows if saved
    settings were damaged
  - Fixed problems starting Workrave when exercise files were missing or damaged
  - Fixed crashes when Workrave could not save timer progress or statistics, or delete
    statistics history, for example because another program was using the files
  - Workrave now keeps the previously saved timer progress and statistics if saving
    new data fails
  - Fixed a crash that could occur when a break reminder appeared on Windows
  - Restored missing icons in the tray and timer-window menus on Windows ([#736](https://github.com/rcaelers/workrave/issues/736))
  - Fixed a crash when selecting an audio device on Linux.


