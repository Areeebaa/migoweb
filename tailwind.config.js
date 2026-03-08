/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'migo-dark': '#000A12',
        'migo-lavender': '#999CFD',
        'migo-white': '#F0F0FF',
        'migo-lavender-light': '#C5C7FE',
        'migo-lavender-dark': '#7275DB',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'glow': 'glow 3s ease-in-out infinite',
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(153, 156, 253, 0.3)' },
          '50%': { boxShadow: '0 0 60px rgba(153, 156, 253, 0.8)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 50% 0%, rgba(153, 156, 253, 0.15) 0%, rgba(0, 10, 18, 0) 70%)',
        'lavender-glow': 'radial-gradient(ellipse at center, rgba(153, 156, 253, 0.2) 0%, transparent 70%)',
        'card-gradient': 'linear-gradient(135deg, rgba(153, 156, 253, 0.08) 0%, rgba(240, 240, 255, 0.02) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'lavender': '0 0 30px rgba(153, 156, 253, 0.25)',
        'lavender-lg': '0 0 60px rgba(153, 156, 253, 0.4)',
        'card': '0 4px 24px rgba(0, 10, 18, 0.08), 0 1px 4px rgba(153, 156, 253, 0.1)',
        'card-hover': '0 8px 40px rgba(0, 10, 18, 0.12), 0 2px 8px rgba(153, 156, 253, 0.2)',
      },
    },
  },
  plugins: [],
}
