/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightBg: '#f8fafc',
        darkBg: '#1e293b',
      },
    },
  },
  darkMode: 'class', 
  plugins: [],
}

