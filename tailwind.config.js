/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '380px': '380px', // min-width
        '502px': '502px', // min-width

      }
    },
  },
  plugins: [],
}

