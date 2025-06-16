// tailwind.config.js
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode:'class',
    
    theme: {
      extend: {
        colors: {
          amber: {
          100: '#f8e2b3',
          200: '#f7d16d',
          300: '#f6be27',
          400: '#f5a900',
          500: '#f49a00',
          600: '#e88a00',
          700: '#d87b00',
          800: '#c66c00',
          900: '#b15d00',
          },
          orange : {
          100: '#ffcc99',
          200: '#ffb366',
          300: '#ff9933',
          400: '#ff7f00',
          500: '#ff6600',
          600: '#e65c00',
          700: '#cc5200',
          800: '#b34700',
          900: '#993d00',
          },
        }
      },
    },
    plugins: [],
  };
  