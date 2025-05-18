/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    extend: {
      colors: {
        'main-yellow': '#f3cf1d',
        'main-green': '#84c64ad3',
        'main-card': '#fafafa',
        'main-bg': '#e9ebd7',
        blue: '#0817f0',
        black: '#100f0f',
        gray: '#24867f',
      },
      fontFamily: {
        georgia: ['Georgia', 'sans-serif'],
      },
      fontWeight: {
        bold: '600',
        regular: '400',
        light: '300',
      },
      boxShadow: {
        menu: '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        slideDown: 'slideDown 0.3s ease',
        slideUp: 'slideUp 0.3s ease',
      },
      keyframes: {
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      spacing: {
        130: '130px',
        50: '50px',
        330: '330px',
        300: '300px',
      },
      width: {
        330: '330px',
        300: '300px',
        section: '60%',
        'full-minus-20': 'calc(100% - 20px)',
      },
      maxWidth: {
        section: '60%',
        'full-minus-20': 'calc(100% - 20px)',
      },
      minWidth: {
        section: '60%',
        'full-minus-20': 'calc(100% - 20px)',
      },
      height: {
        header: '60px',
        'header-sm': '50px',
        120: '120px',
        150: '150px',
        230: '230px',
        22: '22px',
      },
      borderRadius: {
        card: '20px',
      },
      zIndex: {
        '-1': '-1',
        '-2': '-2',
        3: '3',
        999: '999',
        1000: '1000',
      },
      lineHeight: {
        tight: '1',
      },
      screens: {
        custom: '750px',
      },
      transitionProperty: {
        transform: 'transform',
        opacity: 'opacity',
      },
      textShadow: {
        sm: '0 2px 4px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-shadow-sm': {
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
      })
    },
  ],
}
