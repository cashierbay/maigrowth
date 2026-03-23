/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-syne)', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#FF6B35',
        'primary-dark': '#E55A2B',
        dark: '#12153D',
        'dark-text': '#0F0F0F',
        'gray-text': '#767676',
        'light-bg': '#F7F6F4',
        border: '#E2E0DC',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
