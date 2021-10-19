const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: theme=>({
      ...theme('colors'),
      'primary': '#174268',
      'yolk': '#EBC353',
      'breakingRed':'#BD403A',
      'sliderBlue':'#DAE4EC',
      'asphalt':'#728A9F',
    }),
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        montserrat: ['Montserrat'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
