---
title: Linux/Unix
iconhtml: "<div><i class='fab fa-linux fa-5x mb-2'></i></div>"
headless: true
weight: 0
---
The recommended way of installing Workrave on Linux or a Unix-Linux distribution
is by using the official package of the distribution, if available.

## [Debian](https://www.debian.org/)

{{< highlight bash >}}
sudo apt-get install workrave
{{< / highlight >}}

## [Fedora](https://getfedora.org/)

Fedora 22 and later:

{{< highlight bash >}}
sudo dnf install workrave
{{< / highlight >}}

Up to Fedora 21:

{{< highlight bash >}}
sudo yum install workrave
{{< / highlight >}}

## [FreeBSD](https://www.freebsd.org/)

{{< highlight bash >}}
pkg install workrave
{{< / highlight >}}

## [Gentoo](https://www.gentoo.org/)

{{< highlight bash >}}
sudo emerge --ask --verbose workrave
{{< / highlight >}}

## [Open SUSE](https://www.opensuse.org/)

{{< highlight bash >}}
zypper install workrave
{{< / highlight >}}

## [Ubuntu](https://www.ubuntu.com/)

{{< highlight bash >}}
sudo apt-get install workrave
{{< / highlight >}}

For Ubuntu, we also have a [PPA](ubuntu).