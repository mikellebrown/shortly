/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    screens: {
      xxs: "320px",
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {},
    colors: {
      //  primary
      cyan: "hsl(180, 66%, 49%)",
      darkViolet: "hsl(257, 27%, 26%)",

      // secondary
      red: "hsl(0, 87%, 67%)",
      cyanActive: "#9be3e2",

      // neutral
      white: "#ffffff",
      gray: "hsl(0, 0%, 75%)",
      backgroundGray: "rgba(239,241,247,255)",
      grayishViolet: "hsl(257, 7%, 63%)",
      darkBlue: "hsl(255, 11%, 22%)",
      vDarkViolet: "hsl(260, 8%, 14%)",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
