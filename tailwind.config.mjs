/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#06B6D4",
        secondary: "#1768AC",
        "bg-black": "#202324",
      },
    },
  },
  plugins: [],
};
