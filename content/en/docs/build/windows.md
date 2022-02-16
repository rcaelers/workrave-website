---
title: Build for Windows
---
1. Install [MSYS2](https://www.msys2.org/)

2. Open an MSYS2 shell and install the packages required by Workrave

``` 
pacman -S git mingw-w64-i686-clang mingw-w64-i686-cmake mingw-w64-i686-boost mingw-w64-i686-lld \
         mingw-w64-i686-ninja mingw-w64-x86_64-adwaita-icon-theme mingw-w64-x86_64-boost \
         mingw-w64-x86_64-clang mingw-w64-x86_64-cmake mingw-w64-x86_64-gtkmm3 mingw-w64-x86_64-lld \
         mingw-w64-x86_64-ninja mingw-w64-x86_64-python mingw-w64-x86_64-python-pip \
         mingw-w64-x86_64-spdlog mingw-w64-x86_64-jq tar xz zip
```

3. Clone Workrave

```
cd <root-dir>
git clone https://github.com/rcaelers/workrave.git
```

4. Build Workrave

Open a MINGW 64 bit shell, and run

```
cd <root-dir>
cmake -G Ninja -S <root-dir>/workrave -B <root-dir>/workrave-build -DCMAKE_TOOLCHAIN_FILE=build/cmake/toolchains/msys2.cmake -DCMAKE_INSTALL_PREFIX=<root-dir>/workrave-deploy -DCMAKE_BUILD_TYPE_INIT=Debug -DWITH_TRACING=TRUE -DCMAKE_EXPORT_COMPILE_COMMANDS=TRUE -DWITH_UI=Gtk+3 -DWITH_TESTS=ON -DCODE_COVERAGE=OFF -DWITH_CRASHPAD=OFF
cmake --build <root-dir>/workrave-build
cmake --install <root-dir>/workrave-build
```
