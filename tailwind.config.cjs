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
          accent: '#2a708a', // темно-сине-зеленый цвет
          soft: '#f8fafc' // background
        },
        fontFamily: {
          sans: ['Inter', 'ui-sans-serif', 'system-ui']
        }
      }
    },
    plugins: []
  }