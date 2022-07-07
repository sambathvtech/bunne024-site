const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'btn-1': 'url("/assets/main/png/btn-1.png")',
      },
      colors: { ...colors, body: 'rgb(13,33,48)' },
      height: {
        inherit: 'inherit',
      },
      width: {
        inherit: 'inherit',
      },
    },
  },
  plugins: [],
};
