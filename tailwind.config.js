/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        PurpleLight: "#A08AE5",
        GreenDeep: "#B0E212",
        gray: "#999999",
        GreenLight: "#D2FF58",
        LightBlue: "#2D9EE0",
        SlimRed: "#F171A1",
        
      },
    },
  },
  plugins: [],
};
