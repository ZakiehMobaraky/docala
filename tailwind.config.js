/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors:{
      'purple':{
        100:'#b163af',
        300:'#994eb4',
        400:'#724dad',
        700:'#43127f',
        800:'#3d0979'
      },
      'blue':{
        200:'#51d9ff'
      },
      'pink':{
        50:'#fd8db5'
      },
      'white':{
        DEFAULT:'#ffffff'
      },
      'cream':{
        200:'#f8c4ae'
      },
      'red':{
        100:'#fde8e8',
        200:'#fbd5d5',
        300:'#f8b4b4'
      },
      'yellow':{
        200:'#fce96a'
      },
      'black':{
        500:'#000000'
      }
    },
    extend: {},
  },
  plugins: [],
};
