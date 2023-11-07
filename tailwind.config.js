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
        "secondary": "#f6d860",
        "accent": "#37cdbe",
        "neutral": "#3d4451",
        "base-100": "#ffffff",
      },
    },
    
"corporate",
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


// {
//   mytheme: {
//     "primary": "#bf9444",
//     "secondary": "#f6d860",
//     "accent": "#37cdbe",
//     "neutral": "#3d4451",
//     "base-100": "#ffffff",
//   },
// },
// "dark",
// "cupcake",

