import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // 'purge' is replaced with 'content'
  darkMode: 'media', // Adjust to 'media' or 'class' if needed, or 'false' if dark mode is disabled
  theme: {
    extend: {
      colors: {
        gray: colors.stone,
        black: '#1F1F1F',
        blacktrans: '#000000b8',
        green: colors.emerald,
        yellow: colors.yellow,
        blue: colors.sky,
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        code: ['Fira Code', 'sans-serif'], // Fixed a typo in 'sans-serif'
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
    },
  },
  plugins: [], // Add any Tailwind plugins here if needed
};
