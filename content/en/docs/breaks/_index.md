---
title: Breaks
---
Workrave frequently reminds you take at break from your computer. Workrave supports three kind of breaks:

- Microbreaks

  Microbreaks are short breaks that occur frequently. Typically, every 3 minutes you get a microbreak that lasts about 30 seconds.
  The extact duration and frequency of a microbreak is configurable.
  During a microbreak you can let go of keyboard and mouse, look away from the screen, and relax a bit.

- Restbreaks

  A restbreak is a longer break that occurs less frequently.
  Typically, these breaks last about 10 minutes and occur every 45 minutes.
  During a rest break you can walk around, stretch, and relax.

- Daily limit

  Workrave keeps track of the amount of time you use your computer.
  When you have reached the configured daily computer usage limit, you are prompted to stop using the computer for the day.

![Timer Window - Full rested](/images/screenshots/main-rested.png#floatright)

Each break counts the amount of time you are using the computer (your *Active Time*), but also the amount of time you are ***not*** using the computer (your *Idle Time*).
The *Active Time* is shown in the user interface as a blue bar; the *Idle Time* as a green bar.
Note that both bars can overlap, resulting in a green/blue color.

Your *Active Time* starts increasing when you start using the keyboard or mouse and keeps increasing as long as you are using keyboard or mouse.
As soon as you stop using the keyboard or mouse, the *Active Time* stops increasing.
When the *Active Time* reaches the configured *Time between breaks*, you are prompted to take a break.

![Microbreak prelude window](/images/screenshots/prelude-microbreak.png#floatleft)
When it is time to take a break, Workrave presents a gentle non-obtrusive reminder.
This reminder automatically moves out of the way. This allows you to finish your activity before the break starts.
If you ignore the reminder for more than 30 seconds, the reminder window will disappear.
Depending on configuration and the amount of times you ignored a break, Workrave will either force you to take the break, or try again a few minutes later.

Your *Idle Time* increases when you are ***not*** using the keyboard or mouse.
As soon as you start using the keyboard or mouse, the *Idle Time* resets to zero.
When the *Idle Time* reaches the configured *Break duration*, you are have taken the break and the *Active Time* resets to zero.

[More Information](/docs/breaks/preludes) on the break reminder window.

[More Information](/docs/breaks/breaks) on the different windows that Workave use to show a break.
