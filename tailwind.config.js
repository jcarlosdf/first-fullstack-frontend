/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    colors: {
      'primary-blue': '#1B4DB1',
      'primary-yellow': '##F3F243',
      'primary-pink': '#FF64BC',
      'primary-black': '#000000',
      'primary-blackLight': '#1A1E2e',
      'primary-grayDark': '#6E6A6C',
      'primary-gray': '#A7A6A7',
      'primary-grayLight': '##D9D9D9',
      'primary-grayLighter': '##F8F7FA',
      'secondary-red': '#EF3F47',
    },
    fontFamily: {
      sans: ['Roboto'],
      serif: ['Merriweather', 'serif'],
    },   
    extend: {
      lineHeight: {
        1: '1.4375rem',
        2: '1.1875rem',
        14: '3.5rem',
        15: '1.125rem'
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      extend: {},
    },
    plugins: [],
  },
};
