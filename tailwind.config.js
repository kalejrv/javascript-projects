/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './index.html',
      './src/**/*.{html,js}',
      './projects/**/*.html',
   ],
   theme: {
      fontFamily: {
         sans: ['Roboto'],
      },
      extend: {},
   },
   plugins: [],
};
