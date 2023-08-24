// import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");
const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sc: {
          blacky: "#080808",
          yellowy: "FFFD98",
          yellowyStronger: "ffdb12",
          redy: "#E53D00",
          navbarBackground: "rgba(233, 233, 233, 0.747)",
          background: "#fbfbfd",
          darkBackground: "#0d1117",
          productoUno: "#6D4D35",
          productoDos: "#620A04",
          productoTres: "#6D4D35",
          productoCuatro: "#BA8194",
          productoCinco: "#96835E",
          productoSeis: "#905F44",
          productoSiete: "#C18C5A",
          productoOcho: "#957BFB",
          productoNueve: "#481113",
          productoDiez: "#9D6427",
          productoOnce: "#4E2E27",
          productoDoce: "#694008",
          productoTrece: "#623726",
          productoCatorce: "#521A1E",
          productoQuince: "#77340B",
          productoDieciseis: "#C45221",
          productoDiecisiete: "#BA8194",
          productoDieciocho: "#CD8241",
          productoDiecinueve: "#9C9F29",
          productoVeinte: "#9D6427",
        },
      },
      fontFamily: {
        sans: ["var(--primary-font)", ...fontFamily.sans],
        serif: ["var(--title-font)", ...fontFamily.serif]
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
