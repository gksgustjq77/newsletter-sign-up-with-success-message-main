/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  screens: {
    xs: "480px",
    lg: "768px",
    lg: "1200px",
  },
  plugins: ["prettier-plugin-tailwindcss"],
};
