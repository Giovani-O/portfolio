import 'i18next'
import en from '../locales/en.json'
import pt from '../locales/pt.json'

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'translation'
    resources: {
      en: { translation: typeof en }
      pt: { translation: typeof pt }
    }
  }
}
