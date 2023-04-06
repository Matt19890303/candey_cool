/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./*.html"],
  theme: {
    extend: {
      
      width: {
        'custom': '384px',
      },

      colors: {
        custom_yellow: '#fffd2d',
      },

      keyframes: {
        fullSpin: {
          '100%': {
            transform:'rotate (-360deg)'
          }
        }
      },
      
      animation: {
        fullSpin: 'fullSpin 3s linear infinite'
      },
      // https://www.youtube.com/watch?v=Tmkr2kKUEgU&t=324s
      // animation: {
      //   blob: "blob 7s infinite",
      //   blob_two: "blob 5s infinite"
      // },
      // keyframes: { 
      //   blob: {
      //     "0%": {
      //       transform: "translate(0px, 0px) scale(1)"
      //     },
      //     "33%": {
      //       transform: "translate(-30px, 50px) scale(1.2)"
      //     },
      //     "66%": {
      //       transform: "translate(-20px, 20px) scale(0.9)"
      //     },
      //     "100%": {
      //       transform: "translate(0px, 0px) scale(1)"
      //     },
      //   },
      // },

      spacing:{
        "big": "50rem"
      }
    },
    screens: {
      xs: "300px",
      sm:"480px",
      md:"760px",
      lg:"1024px",
      xl:"1280px",
    },
    fontFamily: {
      nunito:['Nunito', 'sans-serif'],
      monteserrat: ['Monteserrat', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif'],
      Mulish: ['Mulish', 'sans-serif']
    }
  },
  plugins: [],
  // plugins: [
  //   require('tailwindcss'),
  //   require('autoprefixer'),
  // require('@tailwindcss/gradient'),
  // ],
}