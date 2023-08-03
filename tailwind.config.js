/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        burtons: 'burtons',
      },
      colors:{
        'bgDefault': '#080011',
        'bgDefault2': '#2e004d',
        'textDefault': "#dddddd",
        'primary': '#1193ab',
        'secondary': 'white',

        'bgLightmode': 'white',
        'textLightmode': "#1F2937",
        'primaryLightmode': '#0D7E94',
        'secondaryLightmode': 'black',
      }
    },
  },
  plugins: [],
}