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
      'primary-grayLight': '#4D4D4D',
      'primary-grayLighter': '##F8F7FA',
      'secondary-red': '#EF3F47',
    },
    fontFamily: {
      sans: ['Roboto'],
      serif: ['Merriweather', 'serif'],
    },   
    extend: {
      backgroundImage: {
        'login-img': "url('../public/img/Rectangle 133.png')",        
        'sign-up-img': "url('../public/img/Rectangle.png')",        
        'footer-img': "url('../public/img/Rectangle21.png')",        
        'header-img': "url('../public/img/Rectangle22.png')",        
        'header-frame-img': "url('../public/img/Frame2.png')",        
        'login-frame-img': "url('../public/img/Frame.png')",        
        'login-group-img': "url('../public/img/Group.png')",        
        'login-group1-img': "url('../public/img/Group 1.png')",        
      },
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
      width:{
        6.5: '1.625rem',
        12.5: '3.0625rem',
        160: '40rem',
        320: '80rem'
      },
      height:{
        5.5:'1.375rem',
        12.5: '3.0625rem',
        28: '52rem',
        29: '30.5rem'
      },
      borderRadius: {
        '4xl': '2rem',
      },
      extend: {},
    },
    plugins: [],
  },
};
