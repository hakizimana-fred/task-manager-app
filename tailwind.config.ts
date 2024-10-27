/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        lightBg: '#f8fafc',
        darkBg: '#1e293b',
        primaryBlue: '#5349C3',
        myGray: '#F6F8FA'
      },
    },
  },
  darkMode: 'class', 
  plugins: [],
}

