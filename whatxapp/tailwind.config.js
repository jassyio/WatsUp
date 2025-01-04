/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        whatsapp: {
          DEFAULT: "#25D366", // WhatsApp green
          dark: "#128C7E",   // WhatsApp dark green
          light: "#DCF8C6",  // Light green for chat bubbles
        },
      },
    },
  },
  plugins: [],
};
