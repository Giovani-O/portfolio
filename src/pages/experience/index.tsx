import { useTranslation } from 'react-i18next'

export function Experience() {
  const { t } = useTranslation()

  return <h1>{t('experience')}</h1>
}
