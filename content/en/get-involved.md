---
slug: get-involved
title: Get Involved
---
## Code

Workrave runs on GNU/Linux and Microsoft Windows. The GNU/Linux version depends
on Gnome, whereas the Windows version is ported using the GTK toolkit.

The design of the program has a clear separation between the GUI front-end and
the core back-end, making ports to other environments (e.g. KDE) childs play:
the programmer only needs to hook up a few windows. He does not have to worry
about timers and input monitoring, all that is taken care of by the core.

Our source code archive is hosted at [GitHub](http://github.com/rcaelers/workrave).

## Translations

Workrave uses `GNU gettext` for dealing with translations. Translating Workrave
boils down to providing a translated text for each and every English text used
in Workrave. All of the texts to be translated are listed in one file (.po). For
each text you need to provide the translation by inserting it in that very same
.po file. Translating can be a very tedious job. Luckily there is tooling
available to help you. For example, for GNU/Linux, there is `kbabel`,
`gtranslator` and many others. For Windows, there is `poEdit`. And for
GNU/Emacs, there is the excellent M-x po-mode. So first, you will have to pick any of
the above tools, depending on the platform you are working on. Install that tool
first, and get acquainted with it. From that point on, you can start translating
using the .po files. The .po files can be found in our
[git repository](http://github.com/rcaelers/workrave/blob/master/po/)

## Documentation
