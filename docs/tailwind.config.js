module.exports = {
  purge: ['./_layouts/*.html', './_includes/*.html', './index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
  extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        'dock': {
          'primary' : '#1e75c5',
          'primary-focus' : '#2887de',
          'primary-content' : '#ffffff',

          'secondary' : '#3f3f46',
          'secondary-focus' : '#52525b',
          'secondary-content' : '#ffffff',

          'info' : '#E2EFFB',
          'info-focus' : '#f1f7fd',
          'info-content' : '#1A63A7',
          // other colors
        },
      },
    ],
  },
};
