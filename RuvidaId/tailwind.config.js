/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1a3c34",
          light: "#2d5a4e",
          teal: "#2ec4b6",
        },
        accent: {
          orange: "#f97316",
          teal: "#2ec4b6",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
