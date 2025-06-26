/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  theme: {
    extend: {      fontFamily: {
        'sans': ['Ryver Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        'ryver': ['Ryver Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
