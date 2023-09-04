/** @type {import('tailwindcss').Config} */

const plugin=require("tailwindcss/plugin");
const Myclass=plugin(function ({addUtilities}){
  addUtilities({
    ".my-rotate-y-180":{
      transform:"rotateY(180deg)"
    },
    ".preserve-3d":{
      transformStyle:"preserve-3d"
    },
    ".perspective":{
      perspective:"1000px"
    },
    "backface-hidden":{
      backfaceVisibility:"hidden"
    }
  })
})

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'xs':'480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
        },
    extend: {
      fontFamily:{
        burtons:"burtons",
        eathoma:"eathoma"
      }
    },
  },
  plugins: [Myclass],
}