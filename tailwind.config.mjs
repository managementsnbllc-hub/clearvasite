/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        lavender: {
          50: '#f5f3fa',
          100: '#ece8f5',
          200: '#e3dbf7',
          300: '#cfc2ed',
          400: '#b49ddf',
          500: '#9a7bd1',
          600: '#7c5bb8',
          700: '#6647a0',
          800: '#4e3578',
          900: '#3a2759',
        },
        page: '#faf9fe',
        warm: {
          50: '#fdf5f3',
          100: '#f8e8e3',
          200: '#f0d1c8',
          300: '#e8b4a7',
          400: '#d4897a',
        },
      },
      fontFamily: {
        display: ['"Instrument Serif"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 4px 24px -4px rgba(102, 71, 160, 0.07)',
        'glass-hover': '0 12px 36px -6px rgba(102, 71, 160, 0.13)',
        'glow': '0 0 48px -8px rgba(154, 123, 209, 0.35)',
        'glow-sm': '0 0 24px -4px rgba(154, 123, 209, 0.25)',
        'card': '0 1px 3px rgba(102, 71, 160, 0.04), 0 8px 20px -6px rgba(102, 71, 160, 0.06)',
        'card-hover': '0 2px 6px rgba(102, 71, 160, 0.06), 0 16px 40px -8px rgba(102, 71, 160, 0.1)',
      },
      animation: {
        'float': 'float 20s ease-in-out infinite',
        'float-delayed': 'float 25s ease-in-out 5s infinite',
        'float-slow': 'float 30s ease-in-out 10s infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(30px, -20px) scale(1.05)' },
          '66%': { transform: 'translate(-20px, 15px) scale(0.95)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
};
