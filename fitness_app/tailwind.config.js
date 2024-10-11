/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/Components/BMICalculator.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  
  corePlugins: {
    preflight: false,
  }
}

