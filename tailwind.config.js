/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        'ibm-plex-serif': ['IBM Plex Serif', 'serif'], 
      },
      colors: {
        'glpl-red': '#C6082C',
      },
    },
  },
  plugins: [],
}
