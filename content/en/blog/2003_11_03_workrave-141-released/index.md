---
author: Raymond Penners
date: Mon, 03 Nov 2003 11:00:00 +0100
slug: workrave-141-released
title: Workrave 1.4.1 released
categories:
  - release
---
The most notable changes in this release are: added a new option "Block mode"
ranging from no blocking (break windows can be freely dragged around) to full
input and screen blocking, added multihead support for Windows, improved suspend
(to ram) support, added "Shut down" and "Lock" buttons to the break windows.
Furthermore, the stability on Windows improved considerably now that several
longstanding issues have been resolved.
<!--more-->

- Replaced the "Block input" setting (which was available per break) by a global
  "Block mode" setting, located in the GUI preferences. The available block
  modes are "None" (NEW: no input is blocked and break windows have a title bar
  and can be dragged), "Block input" (blocks input, break windows are fixed),
  "Block all" (NEW: blocks input and display).
- The Windows installer now offers the option to install Workrave using the
  standalone Dropline GTK+ runtime. For more information, see
  <http://www.dropline.net/gtk/>.
- Removed the "Force break after maximum preludes" option. It is now on by
  default.
- Some strings in the German translation were too long, fixed.
- Added multihead support for Windows.
- Improved suspend (to ram) support. Workrave now assumes that you are idle
  while suspended instead of assuming that no time passes.
- Improved multihead support. The status window is now automatically relocated
  when the monitor on which it is displayed is removed. It moved back to its
  original location when the monitor returns.
- Exercises navigation can now be used without causing Workrave to remove the
  break window and show the warning windows again.
- If supported by your system, the daily limit window includes a "Shut down"
  button.
- There now is a "Lock" button on the rest break, so that you can safely lock
  your display while you are taking breaks. If the daily limit window does not
  include the "Shut down" button, it includes the "Lock" button instead.
