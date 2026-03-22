import en from '../locales/en.json'
import pt from '../locales/pt.json'

export const resources = {
  en: {
    translation: en,
  },
  pt: {
    translation: pt,
  },
} as const

export type TranslationKeys = keyof (typeof en & typeof pt)
