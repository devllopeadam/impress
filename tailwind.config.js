/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "accent-primary": "#eae239",
        "accent-hover": "#d8d02a",
        "dark-primary": "#412d3d",
        "dark-secondary": "rgba(65, 45, 61, 0.8)",
        "dark-divider": "rgba(51, 41, 36, .08)",
        "background": "#f5f3f2",
        "stroke": "#edebe8"
      },
      borderRadius: {
        "radius": "12px"
      },
    },
  },
  plugins: [],
};