/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        LightGray: 'hsl(0°, 0%, 87%)',
      },

      fontFamily: {
        DMsans: ['DM Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}