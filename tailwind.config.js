/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",   // Next.js 13+ (app router)
    "./pages/**/*.{js,ts,jsx,tsx}", // fallback
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        
        "3xl": "1700px",
      },
    },
  },
  plugins: [],
}