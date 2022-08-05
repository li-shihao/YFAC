const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/*.{js,jsx,ts,tsx}", "./src/routes/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "1024px",
      lg: "1025px",
    },
    extend: {
      fontFamily: {
        Inter: ["Inter var", "sans"],
      },
      colors: {
        maincolor: "#01e08f",
        black: "#0e1111",
      },
      height: {
        "10v": "10vh",
        "15v": "15vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "85v": "85vh",
        "90v": "90vh",
        "100v": "100vh",
      },
      width: {
        800: "800px",
        600: "600px",
        test: "20em",
        test2: "28rem",
      },
      spacing: {
        "580px": "580px",
        "600px": "600px",
        test: "35em",
        "750px": "750px",
        "900px": "900px",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};
