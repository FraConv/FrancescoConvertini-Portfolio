/** @type {import('tailwindcss').Config} */
export default {
  
  
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
  
       'loader': 'spin 2s  infinite',

         'Loaderr2':  'Loaderr2 3s linear infinite ',

         'Loaderr':  'Loaderr 3s linear infinite ',

         'Bottone':  'Bottone 3s linear infinite ',

         'Roll': 'Roll 1s linear ',

         'Jump': 'Jump 0.5s linear infinite',

         'Jump2': 'Jump2 0.5s linear infinite',



        },

        keyframes:{

          Loaderr: {

               '0%': {transform: "rotate(45deg)"},

               '25%': {transform: "rotate(315deg)"},

               '50%': {transform: "rotate(315deg)"},

               '75%': {transform: "rotate(315deg)"},

               '100%': {transform: "rotate(315deg)"},

           },

           Loaderr2: {

            '0%': {transform: "rotate(45deg)"},

            '25%': {transform: "rotate(45deg)"},

            '50%': {transform: "rotate(45deg)"},

            '75%': {transform: "rotate(315deg)"},

            '100%': {transform: "rotate(315deg)"},

        },

        Bottone: {

          '0%': {transform: "rotate(0deg)"},

          '25%': {transform: "rotate(20deg)"},

          '50%': {transform: "rotate(0deg)"},

          '75%': {transform: "rotate(-20deg)"},

          '100%': {transform: "rotate(0deg)"},

      },

      Roll: {

        '0%': {transform: "rotateY(0deg) rotateX(0deg)"},

        '100%': {transform: "rotateY(720deg) rotateX(720deg)"},

    },
    
    Jump: {

      '0%': {marginTop: '490px'},

      '50%': {marginTop: '470px'},

      '100%': {marginTop: '490px'},
    

        },

        Jump2: {

          '0%': {marginTop: '510px'},
    
          '50%': {marginTop: '360px'},
    
          '100%': {marginTop: '360px', opacity: '0'},
        
    
            },

      }

      

     },


  },
  plugins: [],
}

