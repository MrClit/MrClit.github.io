import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import es from './locales/es.json';
import ca from './locales/ca.json';

const resources = {
  en: { translation: en },
  es: { translation: es },
  ca: { translation: ca },
};

// Detect language: use saved language or browser language
const savedLang = localStorage.getItem('language');
const browserLang = navigator.language.split('-')[0];
const defaultLang = savedLang || (['en', 'es', 'ca'].includes(browserLang) ? browserLang : 'en');

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: defaultLang, // language by default
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

// Listen for language changes and save to localStorage
 i18n.on('languageChanged', (lng) => {
   localStorage.setItem('language', lng);
 });

export default i18n;
