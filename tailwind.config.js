/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: '#363740',
        'h-gray': '#9FA2B4',
        'primary-color': '#A4A6B3',
        'primary-h-color': '#D9D9D9',
        body: '#F7F8FC',
        'page-title': '#252733',
      },
    },
  },
  plugins: [],
};
