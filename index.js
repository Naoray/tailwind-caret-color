const colors = require('tailwindcss/defaultConfig')().colors

module.exports = function() {
  return function ({e, addUtilities}) {
    const caretColors = Object.keys(colors)
      .map(key => {
      return {
        [`.caret-${e(key)}`]: {
          'caret-color': colors[key]
        }
      }
    })

    addUtilities(caretColors)
  }
}