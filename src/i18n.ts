import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locales/en.json'
import pt from './locales/pt.json'

export const getLanguage = (lang: string) => {
  const supportedLanguages = ['en', 'pt']
  const localStorageLanguage = localStorage.getItem('portfolio-language')

  const prioritaryLanguage = localStorageLanguage || lang

  return supportedLanguages.includes(prioritaryLanguage)
    ? prioritaryLanguage
    : supportedLanguages[0]
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
    escapeValue: false,
  },
})

export default i18n
