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
        background: '#F9F8F4',
        foreground: '#2D3A31',
        primary: {
          DEFAULT: '#8C9A84',
          foreground: '#F9F8F4',
        },
        secondary: {
          DEFAULT: '#DCCFC2',
          foreground: '#2D3A31',
        },
        muted: '#E6E2DA',
        interactive: '#E5D137',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Source Sans 3"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
