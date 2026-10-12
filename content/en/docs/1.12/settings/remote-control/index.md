---
title: Remote control
lastmod: 2026-10-12
---

Qt builds with gRPC support offer **Preferences → Remote control → gRPC**.
This allows local applications to inspect and control Workrave.

![Remote-control preferences](/images/screenshots/1.12/preferences-remote-control.png#center)

- **Enable gRPC** turns the local control service on or off.
- **Connection type** selects a Unix-domain socket or a TCP/IP connection,
  where supported by your platform.
- **Server address** shows the local socket address.
- **TCP port** selects the port on the local loopback interface, `127.0.0.1`.

These settings control local application integration. They do not restore the
computer-to-computer timer synchronization from Workrave 1.10.
