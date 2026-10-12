---
lastmod: 2026-10-12
title: Timers
---

The **Timers** section contains a page for each of the three breaks. Activity monitoring has its own [Monitoring](/docs/1.12/settings/monitoring/) page in the same section.

## Microbreak

Settings for the microbreak.

![Preferences - Timer - Microbreak](/images/screenshots/1.12/preferences-timers-micro.png#center)

The following settings can be configured for the microbreak.

- Enable Timer

  This option can be used to enable or disable the microbreak.
  If the microbreak is disabled, it will not be visible on screen and you will not be reminded to take microbreaks.

- Time between breaks

  The amount of time you must be using the keyboard or mouse before you are prompted to take a break.
  See also the documentation on [breaks](/docs/1.12/breaks).

- Break duration

  The amount of time you must be idle before the break resets.
  See also the documentation on [breaks](/docs/1.12/breaks).

- Postpone time

  When a break is postponed, Workrave will remind you again in a few minutes. This settings defines the amount of time until Workrave tries again.

- Show 'Postpone' button

  Whether the postpone button is visible on the break window.

- Show 'Skip' button

  Whether the skip button is visible on the break window.

- Prompt before breaking

  If enabled, Workrave will show a gentle [break reminder window](/docs/1.12/breaks/reminder) before starting the break.

  If disabled, breaks will start immediately when it is time to take a break.

- Maximum number of prompts

  When a break reminder window is ignored, Workrave will try again in a few minutes.
  This setting defines how often you can ignore a break reminder until a break is forced.
  A maximum of one makes the first reminder lead to a break. Disabling the limit allows reminders to be ignored without reaching this threshold.

The lower part of this page shows the remaining options:

![Preferences - Micro-break, lower settings](/images/screenshots/1.12/preferences-timers-micro-continued.png#center)

## Restbreak

Settings for the restbreak.

![Preferences - Timer - Restbreak](/images/screenshots/1.12/preferences-timers-restbreak.png#center)

In addition to the settings that are also available for the microbreak:

- Number of exercises

  Number of exercises that will be shown during the rest break.

- Start restbreak when screen is locked

  If enabled, Workrave will start a restbreak as soon the screen is locked.
  This way you can prevent that your idle time is reset when you unlock the computer (because you unlock by using keyboard or mouse).

  If disabled, your idle time resets when you unlock your computer.
  As a result, it may happen that are almost immediately after unlocking the screen are prompted to take a break (even if you completed 99% of your break while the computer was locked).

- Enable shutting down the computer from the rest screen

  If enabled, a button that allows you to shut down the computer will be added to the restbreak window.
  This button will also allow you to put your computer into sleep mode.

The lower part of this page shows the remaining options:

![Preferences - Rest break, lower settings](/images/screenshots/1.12/preferences-timers-restbreak-continued.png#center)

## Daily limit

Settings for the daily limit.

![Preferences - Timer - Daily](/images/screenshots/1.12/preferences-timers-daily.png#center)

In addition to the settings that are also available for the microbreak:

- Time before end

  The time at which the daily break is reset. By default, this is at 4:00 (am).

- Regard micro-breaks as activity

  During a micro break, you usually remain seated behind your computer.
  If this option is enabled, the daily limit timer also includes the time you are taking a micro-break.
  In other words, enable this option if you want to have a daily limit on the amount of time you spend behind your computer.
  Disable this option if you want to have a daily limit on the amount of time you are actually using the computer.
  

The lower part of the daily-limit page includes its additional options:

![Preferences - Daily limit, lower settings](/images/screenshots/1.12/preferences-timers-daily-continued.png#center)
