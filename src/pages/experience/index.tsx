import { useTranslation } from 'react-i18next'
import { BasePanel } from '../../components/base-panel'

export function Experience() {
  const { t } = useTranslation()

  return (
    <BasePanel>
      <h1>{t('experience')}</h1>
    </BasePanel>
  )
}
