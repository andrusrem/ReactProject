module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    plugins: [require('daisyui')],
    theme: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        'blue': '#1fb6ff',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'gray-dark': '#273444',
        'gray': '#8492a6',
        'gray-light': '#d3dce6',
        'red': '#FF7058',
      },
      extend: {
        spacing: {
          '13': '3.25rem',
          '15': '3.75rem',
          '128': '32rem',
          '144': '36rem',
          '350': '350px',
          '10%': '10%',
          '100%': '100%',
          '15%':'15%',
        },
        width: {
          '10%': '10%',
          '20%': '20%',
          '30%': '30%',
          '40%': '40%',
          '50%': '50%',
          '60%': '60%',
          '70%': '70%',
          '80%': '80%',
        },
        fontFamily: {
          montserrat: ['"Montserrat"', 'serif'],
        },
      },
    },
  };
  