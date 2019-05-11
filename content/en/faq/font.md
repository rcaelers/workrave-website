---
title: Font size on Windows
section:
  - general
---
Q:Can I increase the font size on Windows?

A:Workrave should automatically use the native Windows font size. Changing the
font size cannot be done using the user interface. You can change the fonts size
by creating a file called `.gtkrc-2.0` in your home directory containing:

{{< highlight config >}}
gtk-font-name = "Arial 14"

style "font"
{
  font_name = "Arial 14"
}
class "*" style "font"
{{< / highlight >}}
