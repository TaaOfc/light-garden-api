/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.{html,ejs}"],
  theme: {
    extend: {
      colors: {
        primary: "rgb(15 103 139 )",
        success: "rgb(158 103 135)",
        inactive: "rgb(255 0 0)"
      }
    },
  },
  plugins: [],
}
