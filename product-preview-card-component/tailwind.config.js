/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      backgroundColor: {
        "primary-cream": "hsl(30, 38%, 92%)",
        "primary-dark-cyan": "hsl(158, 36%, 37%)"
      },
      colors: {
        "primary-cream": "hsl(30, 38%, 92%)",
        "primary-dark-cyan": "hsl(158, 36%, 37%)",
        "neutral-dark-blue": "hsl(212, 21%, 14%)"
      }
    }
  },
  plugins: []
};
