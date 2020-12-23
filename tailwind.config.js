module.exports = {
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    spacing: {
      "1": "10px",
      "2": "20px",
    },
    extend: {
        spacing: {
          'form' : '770px'
        }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
