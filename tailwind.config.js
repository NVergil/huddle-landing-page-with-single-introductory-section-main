/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        button: "3px 10px 17px -7px rgba(0,0,0,0.75)",
      },
    },
    fontFamily: {
      poppins: "Poppins, sans-serif",
      "open-sans": "Open Sans, sans-serif",
    },
  },
  plugins: [],
};
