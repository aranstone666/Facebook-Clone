module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkmode: false,
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
