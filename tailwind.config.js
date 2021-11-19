module.exports = {
  mode: "jit",
  purge: [
    "./partials/**/*.hbs",
    "./pages/**/*.hbs",
    "./templates/**/*.hbs",
    "./src/**/*.js",
    "./src/**/*.ts",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
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
      colors: {
        "ll-blue": "#00173C",
        "ll-hover-blue": "#001c48",
        "ll-red": "#E52222",
        "ll-light-blue": "#5c6d88",
        "clutter": "#037f78",
        "sauce-yellow": "#fde63c",
        "sauce-bg-gray": "#414042",
        "sauce-blue": "#2C5E7B"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
