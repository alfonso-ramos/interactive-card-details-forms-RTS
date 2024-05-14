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
      red: "hsl(0, 100%, 66%)",
      blue: "hsl(249, 99%, 64%)",
      violet: "hsl(278, 94%, 30%)"
    },
    extend: {
      backgroundImage: {
        "mobile": "url('/bg-main-mobile.png')",
        "desktop": "url('/bg-main-desktop.png')",
        "card-back": "url('/images/bg-card-back.png')",
        "card-front": "url('/images/bg-card-front.png')"
      }
    },
  },
  plugins: [],
}

