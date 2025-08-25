/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 🎨 Construction Theme Palette
        cream: "#F6F1E9",   // Light background (clean, neutral)
        yellow: "#FFD93D",  // Bright yellow (attention / highlights)
        orange: "#FF9A00",  // Bold orange (buttons / call-to-action)
        brown: "#4F200D",   // Dark brown (text / footer / headings)
      },
    },
  },
  plugins: [],
}
