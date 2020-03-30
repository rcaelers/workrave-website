---
slug: contribute-docs
title: Contribute Documentation
---

This website, including all [documentation](/docs), is generated with [Hugo](https://gohugo.io).
The content of the website is written in [Markdown](https://en.wikipedia.org/wiki/Markdown).

Please follow the following steps if you want to contribute to Workrave's documentation or website.

## Fork the website repository

Fork the Workrave website [on Github](https://github.com/rcaelers/workrave-website)
and check out your fork locally.

```shell
% git clone git@github.com:username/workrave-website.git
% cd workrave-website
% git remote add upstream git://github.com/rcaelers/workrave-website.git
```

More information on forking a git repository can be found on [Github](https://help.github.com/articles/fork-a-repo)

Optionally, create a feature branch for your changes:

```shell
% git checkout -b my-feature-branch
```

## Install all prequisites

The Workrave website is generated using [Hugo](https://gohugo.io/).
Please verify your edits locally before commiting any changes.
Hugo, NodeJS and a number of NodeJS packages are required to verify your changes:

- Install [Hugo](http://gohugo.io)

  See the [official install instructions](https://gohugo.io/getting-started/installing/) for more information.

- Install [NodeJS](https://nodejs.org/)

- Install tools used to process CSS by running:

  ```shell
  cd workrave-website
  npm install
  ```

## Make your changes

Use your favorite editor to improve this website, or Workrave's documentation.
The documentation is located in folder `content/en/docs`.
All pages are are written in [Markdown](https://en.wikipedia.org/wiki/Markdown).

Some sites to get you started with Markdown:

- [Markdown Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)
- [Markdown Guide](https://www.markdownguide.org/)
- [CommonMark quick reference](https://commonmark.org/help/)

## Test your changes

Always run a local Hugo server to test your changes locally:

```shell
cd workrave-website
hugo server -F -w
```

Then open `localhost:1313` in your browser and verify your changes.

## Commit and create a pull request

Commit your changes and create a [pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request-from-a-fork).
