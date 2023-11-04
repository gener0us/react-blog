/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        xs: '0.5rem',
        lg: '1.5rem',
      },
    },
    screens: {
      'xs': '320px',
      'sm': '480px',
      'md': '568px',
      'lg': '768px',
      'xl': '992px',
      '2xl': '1280px',
    },
    extend: {},
  },
  plugins: [],
}