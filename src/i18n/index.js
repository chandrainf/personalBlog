import i18n from 'i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { reactI18nextModule } from 'react-i18next';
import localeEn from '../locales/en.json';
import localeVi from '../locales/vi.json';

// the translations
const resources = {
  en: {
    translation: localeEn,
  },
  vi: {
    translation: localeVi,
  },
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(reactI18nextModule)
  .init({
    resources,
    fallbackLng: 'en',
    lng: 'en',
    keySeparator: '.', // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
