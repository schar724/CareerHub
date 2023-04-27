/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{ejs,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#0CB3C0",
        secondary: "#76C083",
        tertiary: "#1E293B",
      },
    },
  },
  plugins: [],
};
