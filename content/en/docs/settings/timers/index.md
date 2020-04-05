---
title: Timers
---

The Timer section contains all settings for the three breaks and also allows changing the activity monitoring.

## Microbreak

Settings for the microbreak.

![Preferences - Timer - Microbreak](/images/screenshots/preferences-timers-micro.png#center)

The following settings can be configured for the microbreak.

- Enable Timer

  This checkbox can be used to enable or disable the microbreak.
  If the microbreak is disabled, it will not be visible on screen and you will not be reminded to take microbreaks.

- Time between breaks

  The amount of time you must be using the keyboard or mouse before you are prompted to take a break.
  See also the documentation on [breaks](/docs/breaks).

- Break duration

  The amount of time you must be idle before the break resets.
  See also the documentation on [breaks](/docs/breaks).

- Postpone time

  When a break is postponed, Workrave will remind you again in a few minutes. This settings defines the amount of time until Workrave tries again.

- Show 'Postpone' button

  Whether the postpone button is visible on the break window.

- Show 'Skip' button

  Whether the skip button is visible on the break window.

- Prompt before breaking

  If enabled, Workrave will show a gentle [break reminder window](/docs/breaks/reminder) before starting the break.

  If disabled, breaks will start immediately when it is time to take a break.

- Maximum number of prompts

  When a break reminder window is ignored, Workrave will try again in a few minutes.
  This setting defines how often you can ignore a break reminder until a break is forced.
  If the value is 0, breaks cannot be ignored and Workrave always starts the break after showing the break reminder window.

## Restbreak

Settings for the restbreak.

![Preferences - Timer - Restbreak](/images/screenshots/preferences-timers-restbreak.png#center)

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

## Daily limit

Settings for the daily limit.

![Preferences - Timer - Daily](/images/screenshots/preferences-timers-daily.png#center)

In addition to the settings that are also available for the microbreak:

- Time before end

  The time at which the daily break is reset. By default, this is at 4:00 (am).

- Regard micro-breaks as activity

  During a micro break, you usually remain seated behind your computer.
  If this option is enabled, the daily limit timer also includes the time you are taking a micro-break.
  In other words, enable this option if you want to have a daily limit on the amount of time you spend behind your computer.
  Disable this option if you want to have a daily limit on the amount of time you are actually using the computer.
  
## Monitoring

![Preferences - Timer - Monitoring](/images/screenshots/preferences-timers-monitoring.png#center)

- Use alternate monitor

  In some rare cases Workrave may fail to detect your activity.
  In this case you can enable this option to instruct Workrave to use a different way of monitoring your activity.

- Mouse sensitivity

  Workrave tries to ignore small movements of the mouse pointer.
  The higher this value, the lower the sensitivity.
