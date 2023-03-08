/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primaryOrange: "hsl(26, 100%, 55%)",
        primaryPaleOrange: "hsl(25, 100%, 94%)",
        neutralVeryDarkBlue: "hsl(220, 13%, 13%)",
        neutralDarkGrayishBlue: "hsl(219, 9%, 45%)",
        neutralGrayishBlue: "hsl(220, 14%, 75%)",
        neutralLightGrayishBlue: "hsl(223, 64%, 98%)",
        neutralWhite: "hsl(0, 0%, 100%)",
        neutralBlack: "hsl(0, 0%, 0%)",
      },
      fontFamily: {
        kumbhSans: ["Kumbh Sans", "sans-serif"],
      },
      fontWeight: {
        regular: "400",
        bold: "700",
      },
    },
  },
  plugins: [],
};
