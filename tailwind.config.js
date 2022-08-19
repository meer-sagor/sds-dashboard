/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        gray: "#363740",
        "h-gray": "#9FA2B4",
        "primary-color": "#A4A6B3",
        "primary-h-color": "#D9D9D9",
        body: "#F7F8FC",
        "page-title": "#252733",
        card:'#fff'
      },
    },
  },
  plugins: [],
  content: [
    `components/**/*.{vue,js}`,
    `layouts/**/*.vue`,
    `pages/**/*.vue`,
    `composables/**/*.{js,ts}`,
    `plugins/**/*.{js,ts}`,
    `App.{js,ts,vue}`,
    `app.{js,ts,vue}`,
  ],
};
