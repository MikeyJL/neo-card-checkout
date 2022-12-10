/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          100: "#EFEEEE",
        },
        blue: {
          400: "#0066FF",
        },
      },
    },
  },
  plugins: [],
};
