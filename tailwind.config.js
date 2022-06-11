module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}", "./public/**/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-1": "-1",
      },
      colors: {
        transparent: "transparent",
        sky: "#f0f9ff",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
