---
title: Build for Linux
---
---
1. Install the packages required by Workrave

For Ubuntu, the following packages are required to enable all features:

``` 
 cmake
 gobject-introspection
 gsettings-desktop-schemas-dev
 intltool,
 libayatana-indicator3-dev
 libboost-all-dev
 libdbusmenu-glib-dev
 libdbusmenu-gtk3-dev
 libgirepository1.0-dev
 libglib2.0-0
 libglibmm-2.4-dev
 libgnome-panel-dev
 libgstreamer1.0-dev
 libgtk-3-dev
 libgtkmm-3.0-dev
 libmate-panel-applet-dev
 libpulse-dev
 libsigc++-2.0-dev
 libspdlog-dev
 libxfce4panel-2.0-dev
 libxi-dev
 libxmu-dev
 libxss-dev
 libxtst-dev
 python3-jinja2
```

2. Clone Workrave

From a shell, run

```
cd <root-dir>
git clone https://github.com/rcaelers/workrave.git
```

3. Build Workrave

From a shell, run

```
cd <root-dir>
cmake -G Ninja -S <root-dir>/workrave -B <root-dir>/workrave-build -DCMAKE_INSTALL_PREFIX=<root-dir>/workrave-deploy -DCMAKE_BUILD_TYPE_INIT=Debug -DWITH_TRACING=TRUE -DCMAKE_EXPORT_COMPILE_COMMANDS=TRUE -DWITH_UI=Gtk+3 -DWITH_TESTS=ON -DCODE_COVERAGE=OFF
cmake --build <root-dir>/workrave-build
cmake --install <root-dir>/workrave-build
```

4. Run Workrave

If Workrave is install in a directory that is not a system directort (/usr, /usr/local), you may have to set a few environment variables:

```
export LD_LIBRARY_PATH=<root-dir>/workrave-deploy/lib/:$LD_LIBRARY_PATH
export GI_TYPELIB_PATH=<root-dir>/workrave-deploy/lib/girepository-1.0:$GI_TYPELIB_PATH
export XDG_DATA_DIRS=<root-dir>/workrave-deploy/share:"$XDG_DATA_DIRS"
```