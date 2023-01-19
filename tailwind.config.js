/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js',
  ],
  plugins: [require('flowbite/plugin'), require('tailwind-scrollbar-hide')],
  theme: {
    extend: {},
  },
  darkMode: 'media',
};
