---
author: Raymond Penners
date: Fri, 12 May 2006 10:00:00 +0200
slug: workrave-183-released
title: Workrave 1.8.3 released
categories:
  - release
---
New Swedish and Catalan translations, updates to Czech translation. Workrave no
longer consumes 100% CPU is if a break is started while the screen is locked.
Fixed a bug that could cause breaks to stop running when 'Suspend timer while
inactive' was disabled. Added support for storing configuration in a .ini file,
and for configuring the data storage directory (this can be used to run Workrave
from a memory stick). GNOME screen saver support added. The applet popup menu is
now accessible when all timers hidden.
<!--more-->

- Daniel Nylander translated Workrave into Swedish.
- Jordi Mallach translated Workrave into Catalan.
- Support for storing configuration in a .ini file. This feature can be enabled
  by creating an empty 'workrave.ini' file in '/.workrave' (on Unix) or in
  'c:\\Program files\\Workrave\\etc' (on Window, assuming Workrave is installed
  in this directory)
- Support for configuring the data storage directory. This feature can be used
  to run Workrave from an USB memory stick. Add the following two lines to your
  workrave.ini

       [general]
       datadir=C:\Workrave

- Support for Gnome screen saver added (Matt Zimmerman).
- Workrave no longer consumes 100% CPU is if a break is started while the screen
  is locked.
- The applet popup menu is now accessible when all timers hidden.
- Fix czech translation (Jiri Palecek).
- Fixed a bug that could cause breaks to stop running when 'suspend timer while
  inactive' was disabled.