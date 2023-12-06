/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      
      },
    },
    extend: {
      colors: {
        // shared colors
        'primary-color': '#3EFF7F',
        'danger-color': '#FF5A5A',
        'gray-color': '#808080',
        'white-color': '#F8F8F8',
        'black-color': '#1C1C1C',

        // dark mode colors
        'bg-color-dark': '#000000',
        'secondary-color-dark': '#09090A',
        'accent-color-dark': '#101012',

        // light mode colors
        'bg-color': '#FDFDFD',
        'secondary-color': '#F5F5F5',
        'accent-color': '#E4E4E4',

        // old colors
        'primary-500': '#3EFF7F',
        'red': '#FF5A5A',
        'dark-1': '#000000',
        'dark-2': '#09090A',
        'dark-3': '#101012',
        'dark-4': '#1F1F22',
        'light-1': '#F8F8F8',
        'light-3': '#808080',
        // 'primary-500': '#3EFF7F',
        // 'red': '#FF5A5A',
        // 'dark-1': '#FDFDFD',
        // 'dark-2': '#F5F5F5',
        // 'dark-3': '#F5F5F5',
        // 'dark-4': '#E4E4E4',
        // 'light-1': '#1C1C1C',
        // 'light-3': '#808080',
      },
      screens: {
        'xs': '480px',
      
      },
      width: {
        '420': '420px',
        '465': '465px',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],

      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};