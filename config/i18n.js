import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';

i18n
  .use(Backend)
  .init({
    fallbackLng: 'en',

    // have a common namespace used around the full app
    ns: ['common'],
    defaultNS: 'common',

    debug: false,

    interpolation: {
      escapeValue: false, // not needed for react!!
    },

    react: {
      wait: true,
    },
  });


export default i18n;
