/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    
    themes: [  {
      
      mytheme: {
      
      "primary": "#bf9444",
       },
    },
  ], 
  fontFamily: {
        poppins: "'Poppins', sans-serif"
      }
  
    
  },
}


// extend: {
//   fontFamily: {
//     poppins: "'Poppins', sans-serif"
//   }
// },

