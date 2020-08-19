
module.exports = function () {
  return function ({ e, addUtilities, theme }) {
    colors = theme('colors');

    const caretColors = Object.keys(colors)
      .reduce((acc, key) => {
        if (typeof colors[key] === 'string') {
          return {
            ...acc,
            [`.caret-${e(key)}`]: {
              'caret-color': colors[key]
            },
          };
        }

        const variants = Object.keys(colors[key]);

        return {
          ...acc,
          ...variants.reduce((a, variant) => ({
            ...a,
            [`.caret-${e(key)}-${variant}`]: {
              'caret-color': colors[key][variant]
            },
          }), {}),
        };

      }, {});

    addUtilities(caretColors);
  }
}
