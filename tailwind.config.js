/** @type {import('@tailwindcss/postcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#27438E',
        secondary: '#7794E2',
        accent: '#5D80DB',
        dark: '#000000',
        light: '#FFFFFF',
        gray: '#EAEAEA',
        // Additional theme colors from Figma
        'dark-gray': '#232323',
        'light-gray': '#D9D9D9',
        green: '#55C9BB',
      },
    },
  },
  plugins: [],
}