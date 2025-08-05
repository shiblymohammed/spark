/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cinzel': ['Cinzel', 'serif'],
        'cormorant': ['Cormorant Garamond', 'serif'],
        'playfair': ['Playfair Display', 'serif'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary-bg': '#f8f6f3',
        'primary-text': '#514f13',
        'heritage-bg-primary': '#f8f6f3',
        'heritage-bg-secondary': '#514f13',
        'text-primary-title': '#514f13',
        'button-accent-bg': '#514f13',
        'button-accent-hover-bg': '#3a3810',
      },
    },
  },
  plugins: [],
} 