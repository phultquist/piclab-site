module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#e84f5a',
        secondary: '#54fff0',
        gradient: {
          'home-start': '#ff75b7',
          'home-end': '#e14551',
          'ai-start': '#32152f',
          'ai-end': '#30184c'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
