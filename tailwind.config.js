/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  content: [],
  theme: {
    safelist: ['animate-[animate-bounce]'],
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 0.1s ease-in-out',
      }
    },
  },
  plugins: [],
}

