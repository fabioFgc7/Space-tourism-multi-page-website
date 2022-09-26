/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./index.html",
    "./public/space/destination.html",
    "./public/space/crew.html",
    "./public/space/tecnology.html",
    "./public/space/app.js",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 220s linear infinite',
        'spin-icon': 'spin 60s linear infinite',
      },
      colors: {
        'regal-blue': '#0b0d18',
      },
    },
  },
  plugins: [],
};
