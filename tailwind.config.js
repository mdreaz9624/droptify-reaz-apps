/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [("daisyui")],

  daisyui: {
    themes: ["light", "dark", "cupcake"], // ✅ Add more themes if you want
  },
};
