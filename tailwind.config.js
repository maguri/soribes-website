/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        industrial: {
          50: "#eef6ff",
          100: "#d8eaff",
          200: "#b8d8ff",
          300: "#89bcff",
          400: "#5d98f5",
          500: "#3f78e0",
          600: "#2f5db6",
          700: "#294d93",
          800: "#284376",
          900: "#273b62"
        },
        steel: {
          100: "#f4f5f7",
          200: "#e7e9ee",
          300: "#c9ced9",
          400: "#9ca5b5",
          500: "#6d7687",
          600: "#4f5868",
          700: "#3a4250",
          800: "#262c37",
          900: "#161b23"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "Arial", "sans-serif"]
      },
      boxShadow: {
        industrial: "0 8px 24px rgba(22, 27, 35, 0.12)"
      }
    }
  },
  plugins: []
};
