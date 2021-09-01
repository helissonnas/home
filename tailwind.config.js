const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      gray: colors.warmGray,
      black: '#0E0E0E',
      green: colors.emerald
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
