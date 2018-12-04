# Caret Color - TailwindCSS Plugin

[![npm](https://img.shields.io/npm/v/tailwind-caret-color.svg?style=flat-square)](https://www.npmjs.com/package/tailwind-caret-color)
[![npm](https://img.shields.io/npm/dt/tailwind-caret-color.svg?style=flat-square)](https://www.npmjs.com/package/tailwind-caret-color)

This plugin generates classes for coloring carets using `caret-color: #;`.

## Installation

Pull it in through npm or yarn:

```bash
npm install tailwind-caret-color
```

```bash
yarn add tailwind-caret-color
```

## Usage

Add it to the plugins array of your Tailwind config.

```js
plugins: [
  // Other plugins
  require('tailwind-caret-color')(),
],
```

For each color in `colors` config of tailwind a `caret-{color}` class is created, analog to `bg-` and `text-` classes.

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
