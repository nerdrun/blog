/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      textColor: {
        'light-grey': '#d1d1d1',
      },
      backgroundColor: {
        'light-dark': '#191919'
      },
      borderColor: {
        'diminished-grey': '#16191A',
      },
    },
  },
  plugins: [],
}