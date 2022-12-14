/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/Pages/**/*.jsx',
    './src/Components/**/*.jsx',
    './src/**/*.jsx',
    './index.html',
  ],
  theme: {
    extend: {
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        128: '32rem',
        144: '36rem',
      },
    },
    screens: {
      sm: '576px',
      // => @media (min-width: 576px) { ... }

      md: '960px',
      // => @media (min-width: 960px) { ... }

      lg: '1200px',
      // => @media (min-width: 1440px) { ... }
    },
  },
  plugins: ['taillwindcss'],
};
