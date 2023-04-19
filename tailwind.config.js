/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'background-dark': '#0F1923',
      'text-color-dark': '#D9D9D9',
      'highlight': '#F05454',
      'white': '#D9D9D9',
      'red': '#FF0000',
      'black': '#181818',
    },
    extend: {
      fontSize: {
        base: "1em",
        lg: "1.15em",
      },
      fontFamily: {
        "roboto-slab": "var(--font-roboto-slab)",
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography")
  ],
}
