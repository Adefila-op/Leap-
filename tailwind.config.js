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
      colors: {
        "black": "#000000",
        "purpleDeep": "#6E51D9",
        "white": "#F1FFCC",
        "yellowDeep": "#B0E212",
        "lightGrey": "#999999",
        "footerMain": "#CDC4C4",
        "footerPrimary": "#645D5D"
      },
      fontSize: {
        "sixty": "60px",
        "twentyFour" : "24px",
        "sixteen" : "16px",
        "fiftySix" : "56px",
        "fifty" : "50px",
        "thirtyTwo" : "32px"
      },
      fontWeight: {
        "sixHundrend": "600",
        "fourHundrend": "400",
        "fiveHundrend": "500"
      }
    },
  },
  plugins: [],
};
