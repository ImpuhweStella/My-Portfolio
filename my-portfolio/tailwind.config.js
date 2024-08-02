// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#FFD700', // Gold color
      },
      transitionProperty: {
        'height': 'height',
      },
      spacing: {
        '128': '32rem',
      },
      minHeight: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
