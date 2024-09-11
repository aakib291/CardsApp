/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Ensure Tailwind scans your React files
  ],
  darkMode: 'class', // or 'media' if you want to use the system preference
  theme: {
    extend: {},
  },
  plugins: [],

  darkMode: "class", // or 'media' if you want to use OS-level dark mode detection
  // other settings
};
