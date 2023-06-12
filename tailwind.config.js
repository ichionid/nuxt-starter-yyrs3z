/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontSize: {
      p: '0.9375rem',
    },
    extend: {
      flexBasis: {
        '1/8': '12.5%',
        '7/8': '87.5%',
      },
    },
    colors: {
      primary: '#14143c',
      white: '#FFF',
    },
  },
  plugins: [],
};
