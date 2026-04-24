import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./app/**/*.{vue,js,ts,jsx,tsx}",
    "./app/components/**/*.{vue,js,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/app.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F9F8F4",
        foreground: "#2D3A31",
        primary: {
          DEFAULT: "#5a7b74",
          foreground: "#F9F8F4",
        },
        secondary: {
          DEFAULT: "#DCCFC2",
          foreground: "#2D3A31",
        },
        muted: "#E6E2DA",
        interactive: "#baa00f",
      },
      boxShadow: {
        soft: "0 4px 6px -1px rgba(45, 58, 49, 0.05)",
        "soft-md": "0 10px 15px -3px rgba(45, 58, 49, 0.05)",
        "soft-lg": "0 20px 40px -10px rgba(45, 58, 49, 0.05)",
        "soft-xl": "0 25px 50px -12px rgba(45, 58, 49, 0.15)",
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

export default config
