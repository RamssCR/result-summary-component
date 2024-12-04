/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["'Hanken Grotesk'", "sans-serif"],
      },
      height: {
        '128': '32em'
      },
      width: {
        '129': '35.5em'
      }
    },
  },
  plugins: [],
}

