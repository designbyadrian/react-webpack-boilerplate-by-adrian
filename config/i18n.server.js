const i18next = require("i18next");
const isDev = require("isdev");
const backend = require("i18next-node-fs-backend");

const middleware = require("i18next-express-middleware");

i18next
  .use(backend)
  .use(middleware.LanguageDetector)
  .init({
    fallbackLng: "en",
    lng: "en",
    saveMissing: true,

    // have a common namespace used around the full app
    ns: ["common"],
    defaultNS: "common",

    debug: isDev,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    backend: {
      loadPath: `${process.cwd()}/locales/{{lng}}/{{ns}}.json`,
      addPath: `${process.cwd()}/locales/{{lng}}/{{ns}}.missing.json`,
    },
    nsSeparator: "#||#",
    keySeparator: "#|#",
  });

module.exports = i18next;
