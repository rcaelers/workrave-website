# Workrave's website

[![Netlify Status](https://api.netlify.com/api/v1/badges/dba397bd-55a2-45be-a108-312778094973/deploy-status)](https://app.netlify.com/sites/workrave-test/deploys)

## Install Prequisites

- Install [Hugo 0.167.0](https://gohugo.io)

    See the [official install instructions](https://gohugo.io/getting-started/installing/) for more information.

- Install [Node.js 24](https://nodejs.org/) (24.15.0 or newer)

- Install tools to process CSS by running:

    ```sh
    npm install
    ```

    This command must be executed in the git repository directory.

## Preview

The following command can be run to preview the website:

```sh
hugo server -F -w
```

Open `localhost:1313` in your browser.

## Contributing

See [our website](https://workrave.org/contribute-docs/).

## License

The Workrave Hugo theme (everything below the `themes\workrave` directory) is
MIT licensed. All other content is GPLv3.

### Website content

Copyright (C) 2001 - 2026 Raymond Penners and Rob Caelers

License: GPL3

### Hugo workrave theme

Copyright (C) 2018 - 2026 Rob Caelers

License: MIT

## Versioned user documentation

`/docs/` opens the default guide, currently 1.11. The original 1.10 guide
remains available at `/docs/1.10/`; its chapter URLs and screenshots are preserved.
The 1.11 guide lives in `content/en/docs/1.11/`, with separate images in
`static/images/screenshots/1.11/`. Shared build instructions remain unversioned.

`data/documentation.yaml` defines the default version, archive landing page,
version dropdown and topic mappings for
pages that moved or were removed. Matching topics are kept when switching
versions; other topics fall back to the selected guide's index.

Application screenshots use GTK Workrave on Windows 11 at the current desktop DPI,
with transparent backgrounds. Preferences and statistics use 1.11.4; matching
windows and menus use the 1.12 screenshot interface. See
`tools/capture-gtk-screenshots.md` for capture provenance and reproduction.

The preliminary Qt 1.12 guide lives in `content/en/docs/1.12/`, with Windows 11
Qt screenshots in `static/images/screenshots/1.12/`. Its version entry has
`preliminary: true`, which shows an unreleased/preliminary banner on every page.
The 1.11 guide remains the default. See `tools/capture-qt-screenshots.md` for
capture provenance.
