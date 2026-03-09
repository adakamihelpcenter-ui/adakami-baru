/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'adakami-green': '#209247',
        'adakami-light': '#D7EDC7',
        'adakami-dark': '#0f241e',
        'adakami-darker': '#0a1814',
        'adakami-card': 'rgba(26, 60, 52, 0.6)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    }
  },
  plugins: [],
}
