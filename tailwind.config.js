/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // ← très important pour React
  ],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '600px',
        md: '728px',
        custom: '976px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px',
      },
    },
    extend: {},
  },
  plugins: [],
}
