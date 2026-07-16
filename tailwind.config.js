/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '375px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        black: {
          deep: '#0B0A09',
          pure: '#000000',
        },
        brown: {
          dark: '#18120F',
          mid: '#2A1E17',
          light: '#3D2B1F',
        },
        gold: {
          warm: '#C89B5B',
          luxury: '#D8B67C',
          pale: '#E8CFA0',
          deep: '#A07840',
          shine: '#F0D898',
        },
        cream: {
          soft: '#F8F4EE',
          light: '#FDF9F4',
          mid: '#EDE4D8',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.1' }],
        '8xl': ['6rem', { lineHeight: '1.05' }],
        '9xl': ['8rem', { lineHeight: '1' }],
      },
      letterSpacing: {
        widest: '0.25em',
        'ultra-wide': '0.4em',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-breathe': 'glowBreathe 4s ease-in-out infinite',
        'shine-sweep': 'shineSweep 2s ease-in-out infinite',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'count-up': 'countUp 2s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        glowBreathe: {
          '0%, 100%': { opacity: '0.5', filter: 'blur(40px)' },
          '50%': { opacity: '0.85', filter: 'blur(55px)' },
        },
        shineSweep: {
          '0%': { transform: 'translateX(-100%) skewX(-15deg)' },
          '100%': { transform: 'translateX(300%) skewX(-15deg)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C89B5B 0%, #D8B67C 40%, #F0D898 60%, #C89B5B 100%)',
        'dark-gradient': 'linear-gradient(180deg, #0B0A09 0%, #18120F 100%)',
        'hero-radial': 'radial-gradient(ellipse 60% 60% at 70% 50%, rgba(200,155,91,0.18) 0%, transparent 70%)',
      },
      boxShadow: {
        'gold-sm': '0 0 15px rgba(200,155,91,0.2)',
        'gold-md': '0 0 30px rgba(200,155,91,0.3)',
        'gold-lg': '0 0 60px rgba(200,155,91,0.4)',
        'gold-glow': '0 0 40px rgba(216,182,124,0.5), inset 0 1px 0 rgba(240,216,152,0.3)',
        'card': '0 8px 40px rgba(0,0,0,0.4)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(200,155,91,0.15)',
      },
    },
  },
  plugins: [],
};
