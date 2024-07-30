import { useTranslation } from 'react-i18next'
import { BasePanel } from '../../components/base-panel'

export function Projects() {
  const { t } = useTranslation()

  return (
    <BasePanel>
      <h1>{t('projects')}</h1>
    </BasePanel>
  )
}
