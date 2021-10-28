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
    inset:{
      '561':'35rem',
      '188':'11.75rem',
      '70':'4.375rem',
      '227':'14.1875rem',
      '94':'5.875rem',
      '34':'2.125rem',
      '266':'16.625rem',
      '321':'20.0625rem',
      '196':'12.25rem',
      '365':'22.8125rem',
      '146':'9.125rem',
      '31':'1.9375rem',
      '219':'13.6875rem',
      '1095':'68.4375rem',

    },
    fontSize:{
      '28':'1.75rem',
      '36':'2.25rem',
      '18':'',

    },
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
