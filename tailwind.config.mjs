/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';

const config = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f45925",
        "background-light": "#f8f6f5",
        "background-dark": "#120a08",
        "surface-dark": "#1e1310",
        "accent-dark": "#2d1d19",
        // legacy colors for compatibility
        "border-dark": "#3d2a24",
        // legacy values
        "background-dark-legacy": "#1a0f0c",
        "surface-dark-legacy": "#2a1a16",
      },
      fontFamily: {
        display: ["Lexend", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px",
      },
    },
  },
  plugins: [forms],
};

export default config;
