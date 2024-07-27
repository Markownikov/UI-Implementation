/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Maingreen: "#05ce66",
        TextGrey: "#737C8B",
        textGreyLight: "#9b999961",
      },
    },
  },
  plugins: [],
};

module.exports = config;
