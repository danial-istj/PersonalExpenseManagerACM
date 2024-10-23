/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bluet:'#3377f5',
        bluebg:'#161c29',
        darkdivbg:'#171717',
        darkdivbghover:'#161c29',
        darkdivbginner:'  #3c3c3c',
        darkborder:'#121212',
        thatred:'#280c0c',
      }
    },
  },
  plugins: [],
  darkMode:'class',
}