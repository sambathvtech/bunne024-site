const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'btn-1':
          'url("https://static.wixstatic.com/media/a3c153_b61b624117074ddc925cfccaabf87368~mv2.png/v1/fill/w_1920,h_1080,al_c/a3c153_b61b624117074ddc925cfccaabf87368~mv2.png?formatterValues=a3c153_b61b624117074ddc925cfccaabf87368~mv2.png,1920,1080")',
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
