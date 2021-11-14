const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  // purge: {
  //   enabled: true,
  //   content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  // },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: theme => ({
      'green': theme('colors.green.500'),
    }),
    extend: {
      colors: {
        primary: "#e84f5a",
        secondary: "#54fff0",
        gradient: {
          "ai-start": "#32152f",
          "ai-end": "#30184c",
        },
      },
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
        idlewild: ["'Idlewild A', 'Idlewild B'"],
      },
      backdropBlur: {
        xs: '2px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
