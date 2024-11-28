/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff385c',  // Your custom primary color
      },
      gridTemplateColumns:{
        'auto':'repeat(auto-fill , minmax(250px,1fr))'
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3))',
      },
    },
  },
  plugins: [],
}