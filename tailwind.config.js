module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, //
  fontFamily: {
    sans: ["Roboto", "sans-serif"],
    serif: ["Merriweather", "serif"],
  }, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        "close-up-code": "url('/src/img/close-up-code.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
