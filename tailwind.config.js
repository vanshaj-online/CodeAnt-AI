/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        sidebar: "#f8f9fa",
        primary: "#0066ff",
      },
    },
    screens: {
      xs: "480px", // Extra small devices
      sm: "640px", // Small devices (default)
      md: "768px", // Medium devices (default)
      lg: "1024px", // Large devices (default)
      xl: "1280px", // Extra large devices (default)
      "2xl": "1536px",
      xxs: { max: "440px" },
    },
  },
  plugins: [],
};
