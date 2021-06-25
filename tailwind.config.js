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
          badge: '#E93544',
          kaizen: '#F2868F',
        },
        gray: {
          lightest: '#F3F3F3',
          lighter: '#EFF7FD',
          light: '#CFCFCF',
          dark: '#9E9E9E',
          darker: '#969696',
        },
        blue: {
          light: '#A4DEE0',
          kaizen: '#3E7CA3',
          dark: '#007CCA',
          darker: '#1B375F',
        },
        green: {
          kaizen: '#94D989',
        },
      },
      height: {
        120: '30rem',
        180: '45rem',
        240: '60rem',
        360: '90rem',
        480: '120rem',
      },
      minHeight: {
        4: '1rem',
      },
      width: {
        120: '30rem',
        180: '45rem',
        240: '60rem',
        360: '90rem',
        480: '120rem',
      },
      minWidth: {
        4: '1rem',
        6: '1.5rem',
        40: '10rem',
        48: '12rem',
        '1/5': '20%',
        '1/4': '25%',
        '2/5': '40%',
        '3/5': '60%',
        '3/4': '75%',
        '4/5': '80%',
      },
      maxWidth: {
        40: '10rem',
        48: '12rem',
        '1/5': '20%',
        '1/4': '25%',
        '2/5': '40%',
        '3/5': '60%',
        '3/4': '75%',
        '4/5': '80%',
      },
      inset: {
        13: '3.25rem',
        '-60': '-15rem',
        '-90': '-22.5rem',
        '-120': '-30rem',
        '-180': '-45rem',
        '-240': '-60rem',
      },
      borderWidth: {
        3: '3px',
        120: '120px',
        180: '180px',
        240: '240px',
      },
      scale: {
        80: '0.8',
      },
      zIndex: {
        '-1': '-1',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disabled'],
      cursor: ['disabled'],
    },
  },
  plugins: [],
}
