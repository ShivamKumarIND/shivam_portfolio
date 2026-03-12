/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C8521A',
          50: '#F9D5C2',
          100: '#F7C7AF',
          200: '#F3AC89',
          300: '#EF9163',
          400: '#EB763D',
          500: '#C8521A',
          600: '#A34315',
          700: '#7E3410',
          800: '#59250B',
          900: '#341606',
        },
        cream: {
          DEFAULT: '#F9F6F1',
          50: '#FFFFFF',
          100: '#FDFCFB',
          200: '#F9F6F1',
          300: '#EFE7DA',
          400: '#E5D8C3',
          500: '#DBC9AC',
        },
        dark: {
          DEFAULT: '#1A1714',
          50: '#8A7E74',
          100: '#7D726A',
          200: '#645A53',
          300: '#4B433C',
          400: '#322D28',
          500: '#1A1714',
          600: '#000000',
        },
        muted: {
          DEFAULT: '#6B6460',
          light: '#8A8480',
        }
      },
      fontFamily: {
        heading: ['"DM Serif Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'gradient': 'gradient 8s ease infinite',
        'typing': 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundSize: {
        '400%': '400% 400%',
      },
    },
  },
  plugins: [],
}
