/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "custom-heading": ["Pacifico", "sans-serif"],
        "custom-paragraph": ["Raleway", "sans-serif"],
      },
      colors: {
        "main-beige": "#FFF7E4",
        "main-pink": "#FE6D89",
        "dark-pink": "#E93460",
        "main-dark": "#363636",
      },
      borderWidth: {
        8: "8px",
      },
      backgroundImage: {
        "gradient-countries":
          "linear-gradient(to bottom right, #FECD50 34%, #F78D2E 100%)",
        "gradient-fruits":
          "linear-gradient(to bottom right, #7BFDF8 34%, #1872EC 100%)",
        "gradient-animals":
          "linear-gradient(to bottom right, #99CF46 34%, #0A673A 100%)",
        "gradient-sports":
          "linear-gradient(to bottom right, #FFA9B0 34%, #C6275F 100%)",
      },
    },
  },
  plugins: [],
};
