const path = require("path");

/** @type {import("next-i18next").UserConfig} */
const config = {
  i18n: {
    defaultLocale: "es",
    locales: [
      "es"
    ],
  },
  reloadOnPrerender: process.env.NODE_ENV !== "production",
};

module.exports = config;
