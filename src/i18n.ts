import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { resources } from './@types/i18next'

export const SUPPORTED_LANGUAGES = ['en', 'pt'] as const
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number]

export function getLanguage(lang: string): SupportedLanguage {
  const localStorageLanguage = localStorage.getItem('portfolio-language')
  const prioritaryLanguage = localStorageLanguage || lang

  return (SUPPORTED_LANGUAGES.includes(prioritaryLanguage as SupportedLanguage)
    ? prioritaryLanguage
    : SUPPORTED_LANGUAGES[0]) as SupportedLanguage
}

const browserLanguage = navigator.language.substring(0, 2)

i18n.use(initReactI18next).init({
  resources,
  lng: getLanguage(browserLanguage),
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
})

export default i18n
