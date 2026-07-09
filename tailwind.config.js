/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Isse dark mode activate hoga
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Premium font look ke liye
      },
    },
  },
  plugins: [],
}