/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "98EECC",
        gray: "#9DB2BF",
        yellow: "#F5F0BB",
        "dark-yellow": "#4942E4",
        orange: "#B70404",
      },
    },
  },
  plugins: [],
};
