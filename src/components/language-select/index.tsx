import { useEffect } from 'react'
import { Option, Select } from './style'
import { useTranslation } from 'react-i18next'
import { getLanguage, SUPPORTED_LANGUAGES } from '../../i18n'

export function LanguageSelect() {
  const { i18n } = useTranslation()
  const localStorageLanguage = localStorage.getItem('portfolio-language')
  const browserLanguage = navigator.language.substring(0, 2)

  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language')
    const defaultLanguage = savedLanguage || navigator.language.substring(0, 2)
    const language = getLanguage(defaultLanguage)
    i18n.changeLanguage(language)
  }, [i18n])

  function handleLanguageChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newLanguage = event.target.value
    i18n.changeLanguage(newLanguage)
    localStorage.setItem('portfolio-language', newLanguage)
  }

  return (
    <Select
      value={localStorageLanguage || browserLanguage}
      onChange={handleLanguageChange}
    >
      {SUPPORTED_LANGUAGES.map((lang) => (
        <Option key={lang} value={lang}>
          {lang === 'en' ? '🇬🇧 English' : '🇧🇷 Português'}
        </Option>
      ))}
    </Select>
  )
}
