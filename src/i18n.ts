import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import pt from './locales/pt.json'

const getLanguage = (lang: string) => {
  const supportedLanguages = ['en', 'pt']
  return supportedLanguages.includes(lang) ? lang : supportedLanguages[0]
}

const browserLanguage = navigator.language.substring(0, 2)

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: en,
    },
    pt: {
      translation: pt,
    },
  },
  lng: getLanguage(browserLanguage),
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
  },
})

export default i18n
