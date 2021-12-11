const { yellow } = require('tailwindcss/colors')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.warmGray,
      black: '#0E0E0E',
      blacktrans: '#000000b8',
      green: colors.emerald,
      yellow: colors.yellow,
      blue: colors.sky
    },
    fontFamily: {
      sans: ['Roboto', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      code: ['Fira Code', 'sans-serife']
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    }
  }
}
