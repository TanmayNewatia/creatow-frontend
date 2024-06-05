/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "card-tag":
          "radial-gradient(circle at 50% 50%, #7873D2 8%, #EFB7D3 35%, #A998D9 63%, #BEB6E5 100%);",
        "search-bar-icon": "url('src/assets/navbar/search.svg')",
      },
    },
  },
  plugins: [],
};
