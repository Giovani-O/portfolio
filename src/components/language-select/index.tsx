import { useEffect, useState } from 'react'
import { Option, Select } from './style'
import { useTranslation } from 'react-i18next'
import { getLanguage } from '../../i18n'

export function LanguageSelect() {
  const { i18n } = useTranslation()
  const [selectedLanguage, setSelectedLanguage] = useState('')
  const localStorageLanguage = localStorage.getItem('portfolio-language')
  const browserLanguage = navigator.language.substring(0, 2)

  useEffect(() => {
    const savedLanguage = localStorage.getItem('portfolio-language')
    const defaultLanguage = savedLanguage || navigator.language.substring(0, 2)
    const language = getLanguage(defaultLanguage)
    setSelectedLanguage(language)
    i18n.changeLanguage(language)
  }, [i18n])

  function handleLanguageChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newLanguage = event.target.value
    setSelectedLanguage(newLanguage)
    i18n.changeLanguage(newLanguage)
    localStorage.setItem('portfolio-language', newLanguage)
    console.log('selected: ', selectedLanguage)
  }

  return (
    <Select
      value={localStorageLanguage || browserLanguage}
      onChange={handleLanguageChange}
    >
      <Option value="en">🇬🇧 English</Option>
      <Option value="pt">🇧🇷 Português</Option>
    </Select>
  )
}
