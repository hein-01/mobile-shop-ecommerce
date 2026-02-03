/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(271 76% 53%)', // #8A2BE2
        'background-light': 'hsl(210 19% 90%)', // #E0E7EB
        'background-dark': 'hsl(220 26% 15%)', // #1A202C
        'neon-green': 'hsl(120 100% 54%)', // #39FF14
        'nav-green': 'hsl(163 40% 21%)', // #224D44
        'ais-green': 'hsl(87 55% 56%)', // #8DC63F
        'service-purple': 'hsl(278 60% 35%)', // #5a248f
        'stock-green-bg': 'hsl(123 39% 93%)', // #E8F5E9
        'stock-green-text': 'hsl(123 47% 35%)', // #2E7D32
        'stock-blue-bg': 'hsl(207 70% 93%)', // #E3F2FD
        'stock-blue-text': 'hsl(211 79% 43%)', // #1565C0
      },
      fontFamily: {
        display: ['Inter', 'sans-serif'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'gradient-x': 'gradient-x 3s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  },
  plugins: [],
};
