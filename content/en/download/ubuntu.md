---
title: Ubuntu
---
{{< repology ubuntu_20_04 >}}
{{< repology ubuntu_19_10 >}}
{{< repology ubuntu_19_04 >}}
{{< repology ubuntu_18_10 >}}
{{< repology ubuntu_18_04 >}}
{{< repology ubuntu_16_04 >}}
{{< repology ubuntu_14_04 >}}
<br>

[Ubuntu](https://www.ubuntu.com/) comes with a Workrave package. You can install
it from the command line with the following command:

{{< highlight bash >}}
sudo apt-get install workrave
{{< / highlight >}}

If you need a newer version than what is included in your distribution, use the official Workrave PPA.

## Official Workrave PPA

1. Open the Ubuntu Software Manager.
2. Select 'Edit' -> 'Software Sources...'.
3. Open the 'Other Software' tab.
4. Click 'Add...', and enter the PPA address: `ppa:rcaelers/workrave` and then click the 'Add Source' button.
5. When prompted insert the administrator user password.
6. Return to the Software Manager and view the Progress tab to see when the cache has finished updating.
7. Return to the Software Manager main screen, search for 'workrave, and install it.

If you prefer to use the shell, you can enter these commands into a terminal:

{{< highlight bash >}}
sudo add-apt-repository --yes ppa:rob-caelers/workrave
sudo apt update
sudo apt install workrave
{{< / highlight >}}

The Workrave PPA has separate package for each supported desktop environment.
You only need to install the one for your desktop environment.

{{< highlight bash >}}
sudo apt install workrave-cinnamon
sudo apt install workrave-gnome
sudo apt install workrave-mate
sudo apt install workrave-unity
sudo apt install workrave-xfce
{{< / highlight >}}
