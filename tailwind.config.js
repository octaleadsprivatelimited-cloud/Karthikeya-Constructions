/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#0a2033",
          light: "#1a3148",
          accent: "#c19b4a",
          muted: "#f5f5f5",
        },
      },
      fontFamily: {
        display: ["Outfit", "Poppins", "sans-serif"],
        body: ["Outfit", "Rubik", "sans-serif"],
      },
      boxShadow: {
        card: "0 20px 45px rgba(10, 32, 51, 0.12)",
      },
    },
  },
  plugins: [],
};

