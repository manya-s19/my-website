/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blockPink: "#A0205E",
        blockGreen: "#6B8E23",
        blockBlue: "#2F74B5",
        blockGold: "#D19C2C",
      },
    },
  },
  plugins: [],
};
