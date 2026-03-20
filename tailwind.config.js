/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ['Cormorant Garamond', 'serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        cream: '#faf8f5',
        ink: '#1a1814',
        muted: '#7a776f',
        accent: '#4a8fa8',
        'accent-light': '#e8f4f8',
        line: '#e8e4de',
      },
    },
  },
  plugins: [],
}
