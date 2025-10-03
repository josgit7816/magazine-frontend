/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a', // Dark for text, inspired by Vogue
        secondary: '#f5f5f5', // Light background
        accent: '#d4a373', // Subtle gold for highlights
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'], // Clean, minimalist fonts
        serif: ['Georgia', 'serif'], // For article body
      },
    },
  },
  plugins: [],
};