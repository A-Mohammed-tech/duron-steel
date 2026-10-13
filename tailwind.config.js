/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: { 950: '#0b0c0e', 900: '#111316', 800: '#181b1f', 700: '#22262b', 600: '#2d3238' },
        steel: { 100: '#f2f4f6', 200: '#d9dde2', 300: '#b9bfc7', 400: '#9aa1ab', 500: '#7b838e' },
        duron: { 400: '#e0343f', 500: '#c8102e', 600: '#a30d25', 700: '#7d0a1c' },
      },
      fontFamily: {
        display: ['"Barlow Condensed"', 'Impact', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
