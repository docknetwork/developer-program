module.exports = {
  purge: ['./_layouts/*.html', './_includes/*.html', './index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
  extend: {},
  },
  plugins: [require('daisyui')],
};
