---
author: Rob Caelers
date: Tue, 04 Jun 2019 00:00:00 +0100
slug: workrave-1-10-34-released
title: Workrave 1.10.34 Released
categories:
  - release
---
Workrave 1.10.34 has been released. This release fixes a bug that causes high CPU load in some situations.
<!--more-->

Changes since Workrave 1.10.31:

- Fixed a bug that caused high CPU load when the main window was open for a long time.
- [internal change] Python 2 is no longer required for building Workrave. The Python2-only Cheetah dependency has been replaced by Jinja 2 (python3-jinja2). Additionally, Boost >= 1.52 is now required (libboost-dev).
