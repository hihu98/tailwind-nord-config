// example

const nordTailwind = require("./index");

const yourConfig = {
  purge: [],
  fontFamily: {},
  extendedColors: {},
};

module.exports = {
  purge: [...nordTailwind.purge, ...yourConfig.purge],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      ...nordTailwind.fontFamily,
      ...yourConfig.fontFamily,
    },
    extend: {
      colors: {
        ...nordTailwind.colors,
        ...yourConfig.colors,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
