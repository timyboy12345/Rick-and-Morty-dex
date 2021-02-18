const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        blue: defaultTheme.colors.blue,
        gray: defaultTheme.colors.gray
      }
    }
  }
}
