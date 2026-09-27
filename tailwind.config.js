/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        slack: {
          purple: "#4A154B",
          "purple-dark": "#350d36",
          aubergine: "#611f69",
          green: "#007a5a",
          blue: "#1264a3",
          yellow: "#ecb22e",
          red: "#e01e5a",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "Lato",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
      backgroundOpacity: {
        6: "0.06",
        8: "0.08",
        12: "0.12",
      },
    },
  },
  plugins: [],
};
