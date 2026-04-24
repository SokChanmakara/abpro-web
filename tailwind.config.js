/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{vue,js,ts,jsx,tsx}",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F9F8F4",
        foreground: "#99ca51",
        primary: {
          DEFAULT: "#2f9a46",
          foreground: "#F9F8F4",
        },
        secondary: {
          DEFAULT: "#DCCFC2",
          foreground: "#2D3A31",
        },
        muted: "#E6E2DA",
        interactive: "#cdb62d",
      },
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ['"Source Sans 3"', "sans-serif"],
      },
      animation: {
        "fade-up": "fade-up 0.8s ease-out forwards",
        "fade-in": "fade-in 1s ease-out forwards",
        "subtle-float": "subtle-float 6s ease-in-out infinite",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "subtle-float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-15px)" },
        },
      },
    },
  },
  plugins: [],
};
