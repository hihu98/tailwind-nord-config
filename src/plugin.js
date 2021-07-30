const plugin = require("tailwindcss/plugin");
const nordTheme = require("./.");

const config = {
  purge: nordTheme.purge,
  theme: {
    fontFamily: {
      ...nordTheme.fontFamily,
    },
    extend: {
      colors: {
        ...nordTheme.colors,
      },
    },
  },
};

const nordPlugin = (() => {}, config);

module.exports = plugin(nordPlugin);
