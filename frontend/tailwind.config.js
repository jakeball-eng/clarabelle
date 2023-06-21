/** @type {import('tailwindcss').Config} */
export default {
  mode: 'jit',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Arial', 'sans-serif'],
      },
      colors: {
        primary: '#E52760',
        secondary: '#DC2626',
        background: '#FFD6E8',
      },
    },
  },
  plugins: [],
}