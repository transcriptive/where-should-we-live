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
      '10':'10px',
      '14': '14px',
      '34': '34px',
      '63': '63px',
      '70': '70px',
      '78':'78px',
      '80': '80px',
      '94': '94px',
      '121': '121px',
      '155':'155px',
      '188': '188px',
      '196': '196px',
      '266':'266px',
      '40': '40px',
      '08': '8px',
      '311': '311px',
      '133': '133px',
      '177': '177px',
      '561': '561px',
      '933': '933px',
      '1260': '1260px',
      '1397': '1397px',

    },
    fontSize:{
      '24':['24px','36px'],
      '28':['28px','34.1px'],
      '36':['36px','44px'],
      '52':['52px','64px'],

    },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
        montserrat: ['Montserrat'],
        roboto: ['Roboto'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
