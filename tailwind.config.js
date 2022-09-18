/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'backgroundLG': "url('/backgroundLG.PNG')",
        'backgroundSM': "url('/backgroundSM.PNG')",
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
      colors: {
       'NewBluishBlack': '#072227',
       'NewDarkBlue': '#35858B',
       'NewLightlue': "#4FBDBA",
       'NewBluishWhite': '#AEFEFF' 
      },
     fontFamily: {
       Maven: ["Maven Pro", "sans-serif"],
      },
    },
  },
  plugins: [
     
     require('tailwind-scrollbar-hide')
  ],
}