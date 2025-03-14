/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000',
        white: '#fff',
        gray: {
          100: '#f7fafc',
          300: '#e2e8f0',
          700: '#4a5568',
          900: '#1a202c',
        },
      },
    },
  },
  plugins: [],
};