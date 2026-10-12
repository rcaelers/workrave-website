---
lastmod: 2026-10-12
title: The main window
---
The timer window (sometimes also called main window, or status window) shows the status of all breaks.
The window can use Rings, Bars, Focus or Classic layouts. Each timer represents a microbreak, restbreak or daily limit.
Note that breaks that are disabled are not shown.

## Layouts

Select a layout in [Preferences → User interface → Status window](/docs/1.12/settings/ui/#status-window).

- **Rings** shows each timer as a circular indicator. This is the default.

  ![Rings timer layout](/images/screenshots/1.12/main.png#center)

- **Bars** uses compact bars and time labels.

  ![Bars timer layout](/images/screenshots/1.12/main-bars.png#center)

- **Focus** gives the first-due timer a large ring, with the other timers alongside it.

  ![Focus timer layout](/images/screenshots/1.12/main-focus.png#center)

- **Classic** uses the original rectangular progress bars. The examples below use this layout; the active, idle and overdue timer concepts also apply to the other layouts.

## Reading the timers

<div class="clearfix">

![Timer Window](/images/screenshots/1.12/main-classic.png#floatright)
The time in each bar indicates the number of hours, minutes and seconds until the next break.
The blue bar indicates your *Active Time*, the amount of time you actively used your computer (by using the mouse or keyboard).
When the blue bar is completely full, it is time to take a break. Note that the *Active Time* only increases as long as you are using keyboard or mouse.
The amount of time it takes to get the blue bar completely full is called the *Time between breaks* and is configurable.

</div>

<div class="clearfix">

![Timer Window - Idle/Active](/images/screenshots/1.12/main-mixed.png#floatright)
The green bar indicates your *Idle Time* and counts the time you are resting.
It only increases when you are not using keyword and mouse.
Note that the blue and green bar may overlap, as shown in the screenshot.
As soon as you start using keyboard or mouse, your *Idle Time* resets and the green bar disappears.

</div>

<div class="clearfix">

![Timer Window - Full rested](/images/screenshots/1.12/main-rested.png#floatright)
When the green bar is completely full, you have rested enough and have taken the break.
The timer resets and the blue bar disappears, 4 minutes, 30 seconds until the next break.
The amount of time it takes to get the green bar completely full is called the *Break Duration* and is configurable.

</div>

<div class="clearfix">

![Timer Window - Overdue](/images/screenshots/1.12/main-overdue.png#floatright)
An orange bar indicates you have been ignoring a break. Workrave calls this an *Overdue* break.
The time in the bar becomes negative. In this case, the user has been ignoring the break for 38 seconds.

</div>
