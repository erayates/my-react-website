/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      dropShadow:{
        'white': '0 7px 29px 0 rgba(100, 100, 111, 0.2)',
      },
 
    },
  },
  plugins: [],
}
