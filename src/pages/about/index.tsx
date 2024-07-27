import { useTranslation } from 'react-i18next'

export function About() {
  const { t } = useTranslation()

  return <h1>{t('about')}</h1>
}
