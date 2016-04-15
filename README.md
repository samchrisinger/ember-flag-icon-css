# ember-flag-icon-css

This is a very lightweight shim for the nice [flag-icon-css](https://github.com/lipis/flag-icon-css) library.
All it does is merge the needed flag-icon-css files into the public tree of your ember app. You'll then need
to add:

```hmtl
<link rel="stylesheet" href="assets/css/flag-icon.min.css">
```

to your app's index.html (or elsewhere if desired).

There may well be a better way to do this (like hooking into the primary app's ember-cli-build process), but
I can't figure out how. If you have advice on this, please open an issue-- I'd love for this repository to be
unnecessary.

## Installation

* `git clone` this repository
* `npm install`
* `bower install`
