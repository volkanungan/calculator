/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      gunmetal: '#2E3538',
      eggshell: '#F5F2E0',
      'mint-cream': '#F4FFF8',
      linen: '#F9EADC',
      charcoal: '#274053',
    },
    fontFamily: {
      numbers: ['Play', 'sans-serif'],
      body: ['Ubuntu', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
