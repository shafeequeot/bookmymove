/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '350px',
      md: '620px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {
      colors: {
        masterBlue: {
  
          500: '#263C8A',
       
        },
        masterLight: {
  
          500: '#54B9EA',
       
        },
      },
      backgroundImage: {
        'master-cover-bk': "url('/img/dubaicover.jpg')",
      }
    },
  },
  plugins: [],
}
