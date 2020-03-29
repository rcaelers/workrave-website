---
slug: contribute
title: Contribute
---

We gladly accept contributions from everyone. There are a number of ways you can help, for example by

- reporting bugs
- suggesting new features
- translating Workrave
- writing documentation
- writing code

## Reporting bugs

The best way to report a bug is to file an issue on [GitHub](https://github.com/rcaelers/workrave/issues).
In the bug report please include the following information:

- The version of Workrave you are using.
- The operation system you are using (e.g. Linux, Window 10).
- In case the operating system is Linux:
  - The distribution you are using, including its version (e.g. Ubuntu 19.10).
  - The desktop environment you are using, including its version (e.g. Gnome 3.36).
- A detailed list of steps to reproduce the issue.
- What you are expecting to happen compared with what is actually happening.
- Screenshots, if applicable, to help explain the problem.

### Suggesting new features

The best way to suggest a new features is to file an issue on [GitHub](https://github.com/rcaelers/workrave/issues).
Please add the `feature` tag and the following information to the issue:

- Explain in detail how the new feature would would work.
- Keep the scope of the new feature as small as possible. This makes it easier to implement the feature.
- Remember that Workrave is a (one person) volunteer-driven project, and that contributions are welcome!

## Translating Workrave

If you are proficient in a non-English language, you can help translating the text in Workrave's user interface.

Workrave uses 'GNU gettext' for dealing with translations.
Translating Workrave boils down to providing a translated text for each and every English text used in Workrave.
All of the texts to be translated are listed in one file (.po). For each text you need to provide the translation by inserting it in that very same .po file.
Translating can be a very tedious job. Luckily there is tooling available to help you.

For example, for GNU/Linux, there is 'kbabel', 'gtranslator' and many others. For Windows, there is 'poEdit'.
And for GNU/Emacs, there is the excellent M-x po-mode.

So first, you will have to pick any of the above tools, depending on the platform you are working on.
Install that tool first, and get acquainted with it. From that point on, you can start translating using the .po files.
The .po files can be found in our [git repository](http://github.com/rcaelers/workrave/blob/master/po/)

## Writing Documentation

Workrave's [documentation](/docs) is written in [Markdown](https://en.wikipedia.org/wiki/Markdown), a lightweight markup language with an easy to understand plain text formatting syntax.
Please check our [instructions](/contribute-docs) if you are interested in improving our documentation.

## Writing Code

Our source code archive is hosted at [GitHub](http://github.com/rcaelers/workrave).
Current stable releases are built from the [1.10](https://github.com/rcaelers/workrave/commits/branch_v1_10) branch.
Future releases of Workrave will be created from the [next](https://github.com/rcaelers/workrave/commits/next) branch.
The ‘next’ branch has seen a lot of internal cleanup and code modernization, but very few new features.
The most interesting change in the ‘next’ branch is a initial port to macOS using Qt5. This port is not yet ready.
Note that the ‘next’ branch did not get as much testing as the official 1.10 branch and may be less stable.

Unless you want to improve the macOS or Qt5 you are advised to implement your changes ion the '1.10' branch. 
Changes to the '1.10' branch will be merged into 'next' branch if needed.
