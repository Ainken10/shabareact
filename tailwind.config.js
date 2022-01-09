module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fadeOut 2s ease-out',
      },
      keyframes: theme => ({
        fadeOut: {
          '0%': { opacity: 100 },
          '100%': {opacity: 0},
        },
      }),
    },
  },
  plugins: [],
}
