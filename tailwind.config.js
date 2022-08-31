/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        green: {
          primary: {
            50: "#E5FFF7",
            100: "#CCFFF0",
            200: "#99FFE0",
            300: "#66FFD1",
            400: "#33FFC2",
            500: "#00C388",
            600: "#00CC8F",
            700: "#00996B",
            800: "#006647",
            900: "#003324",
            950: "#001A12",
          },
          secondary: {
            50: "#1A2320/50",
            100: "#1A2320/100",
            200: "#1A2320/200",
            300: "#1A2320/300",
            400: "#1A2320/400",
            500: "#1A2320/500",
            600: "#1A2320/600",
            700: "#1A2320/700",
            800: "#1A2320/800",
            900: "#1A2320/900",
            950: "#1A2320/950",
          },
        },
        eggshell: {
          50: "Eggshell/50",
          100: "Eggshell/100",
          200: "Eggshell/200",
          300: "Eggshell/300",
          400: "Eggshell/400",
          500: "Eggshell/500",
          600: "Eggshell/600",
          700: "Eggshell/700",
          800: "Eggshell/800",
          900: "Eggshell/900",
          950: "Eggshell/950",
        },
        background: {
          50: "#F2F2F2",
          100: "#E6E6E6",
          200: "#CCCCCC",
          300: "#B3B3B3",
          400: "#999999",
          500: "#151515 ",
          600: "#666666",
          700: "#4D4D4D",
          800: "#333333",
          900: "#1A1A1A",
          950: "#0D0D0D",
        },
        custom: {
          50: "#FFFAEA",
          100: "#F5F4EE",
          200: "#E5E3dA",
          300: "#C0BEB3",
          400: "#1A1A1A",
          500: "#00C389",
          600: "#D89B00",
          700: "#E74C3C",
          800: "#B3B3B3",
          900: "#FFFFFF",
        },
      },
    },
  },
  plugins: [],
};
