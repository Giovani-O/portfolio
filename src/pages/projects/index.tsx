import { useTranslation } from 'react-i18next'

export function Projects() {
  const { t } = useTranslation()

  return <h1>{t('projects')}</h1>
}
