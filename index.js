const defaultConfig = require('tailwindcss/defaultConfig')()

module.exports = function() {
  function ({e, addUtilities}) {
    const caretColors = Object.keys(defaultConfig.colors)
      .map(key => {
      return {
        [`caret-${e(key)}`]: {
          'caret-color': colors[key]
        }
      }
    })

    addUtilities(caretColors)
  }
}