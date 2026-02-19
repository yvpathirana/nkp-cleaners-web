
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#1E88E5',
          'primary-light': '#64B5F6',
          dark: '#0A0E1A',
          'dark-lighter': '#111827',
          accent: '#64B5F6',
          red: '#E53935',
          yellow: '#FDD835',
          green: '#43A047',
          whatsapp: '#25D366',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
