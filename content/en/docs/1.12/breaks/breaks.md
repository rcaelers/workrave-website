---
lastmod: 2026-10-12
title: Break windows
---

Each of the three breaks has a different break window.
Although the break windows look slightly different, the behavior of these windows is almost the same.

The examples below show **Classic** and **Sanctuary** appearances. Select **Use Sanctuary UI** in [Preferences → User interface → General](/docs/1.12/settings/ui/#general) to switch between them. Select an image to view it at full size.

The Classic appearance uses a green time bar to show break progress. Sanctuary uses a circular countdown or progress bar.
When the break is complete, the break window closes.

If you ignore the break (by using the mouse or keyboard), Classic shows a flashing orange border. Sanctuary uses orange warning accents and a message.
As long as you are ignoring the break, the break timer is frozen.

All break windows have a `Postpone` and `Skip` button.
The `Postpone` button can be used to postpone the break. When a break is postponed, Workrave will immediately close the break window. After a few minutes, Workrave will again remind you to take the break.
The `Skip` button can be used to skip the break all together. When pressed, Workrave closes the break window, and will also reset the break's timer as if you had taken the break.
Workrave can be configured to omit the `Postpone` and `Skip` buttons.

Some breaks have a `Lock` button. The `Lock` button can be used to lock your screen, or to suspend, or shutdown your computer.

## Microbreaks

Workrave shows the following window when you are taking a microbreak.

{{< ui-comparison alt="Microbreak" classic="/images/screenshots/1.12/microbreak.png" sanctuary="/images/screenshots/1.12/microbreak-sanctuary.png" >}}

The coffee-cup button in Classic, or the **Rest break** button in Sanctuary, starts a restbreak.

When you ignore the break and start using the mouse or keyboard, an orange warning appears.

{{< ui-comparison alt="Microbreak with warning" classic="/images/screenshots/1.12/microbreak-warn.png" sanctuary="/images/screenshots/1.12/microbreak-warn-sanctuary.png" >}}

## Restbreaks

The following window is shown when you are taking a restbreak.
Workrave can be configured to show a number of exercises at the start of a break.

{{< ui-comparison alt="Restbreak with exercises" classic="/images/screenshots/1.12/restbreak-exercise.png" sanctuary="/images/screenshots/1.12/restbreak-exercise-sanctuary.png" >}}

The `Exercises player` buttons can be used to go to the previous exercise, to pause the exercises, to go to the next exercise and to stop showing exercises.

After the number of configured exercises have finished, the exercises will disappear:

{{< ui-comparison alt="Restbreak" classic="/images/screenshots/1.12/restbreak.png" sanctuary="/images/screenshots/1.12/restbreak-sanctuary.png" >}}

When it is time to take a micro break, Workrave may start a rest break
instead. This happens when the rest break would start within 30 seconds of
the micro break. If the postpone or skip buttons are disabled on the micro
break, they will be temporarily disabled on the rest break window. A small
progress bar indicates how long the buttons are disabled:

{{< ui-comparison alt="Restbreak with locked Skip" classic="/images/screenshots/1.12/restbreak-locked-skip.png" sanctuary="/images/screenshots/1.12/restbreak-locked-skip-sanctuary.png" >}}

## Daily limit

The following window is shown when it is time to stop using your computer for the day.

{{< ui-comparison alt="Daily Limit" classic="/images/screenshots/1.12/daily.png" sanctuary="/images/screenshots/1.12/daily-sanctuary.png" >}}

The `Postpone` button can be used to postpone the daily limit. You will be reminded again in a few minutes,
The `Skip` button can be used to skip the daily limit for this day. You will not be reminded again until the next day.
