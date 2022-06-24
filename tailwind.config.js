module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    screens: {
      'sm': '320px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      backgroundImage:{
        'hero-image':'url("./components/foto/testata.jpg")',
        'bovini':'url("./components/foto/mucca.jpg")',
        'ovini':'url("./components/foto/ovini.jpg")',
        'suini':'url("./components/foto/suini.jpg")',
        'chisiamo':'url("./components/foto/chisiamo.jpg")'
      },
    },
  },
  plugins: [],
}