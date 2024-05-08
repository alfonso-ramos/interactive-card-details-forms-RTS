/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "#fff",
      lightViolet: "hsl(270, 3%, 87%)",
      darkViolet: "hsl(279, 6%, 55%)",
      veryDarkViolet: "hsl(278, 68%, 11%)",
      red: "hsl(0, 100%, 66%)"
    },
    extend: {
      backgroundImage: {
        "mobile": "url('/bg-main-mobile.png')",
        "desktop": "url('/bg-main-desktop.png')",
      }
    },
  },
  plugins: [],
}

