module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['Orkney'],
    },
    extend: {
      colors: {
        red: {
          kaizen: '#E93544',
        },
        gray: {
          lighter: '#EFF7FD',
          light: '#CFCFCF',
          dark: '#9E9E9E',
          darker: '#969696',
        },
        blue: {
          light: '#A4DEE0',
          kaizen: '#3E7CA3',
          dark: '#1B375F',
        },
        green: {
          kaizen: '#94D989',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
