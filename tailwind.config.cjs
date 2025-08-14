/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './index.html',
      './src/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
      extend: {
        colors: {
          primary: '#0f172a', // dark slate
          accent: '#0ea5a4', // teal
          soft: '#f8fafc' // background
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui']
        }
      }
    },
    plugins: []
  }