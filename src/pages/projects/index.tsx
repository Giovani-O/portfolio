import { useTranslation } from 'react-i18next'
import { BasePanel } from '../../components/base-panel'
import { Alert } from './style'
import { Warning } from '@phosphor-icons/react'

export function Projects() {
  const { t } = useTranslation()

  return (
    <BasePanel>
      <h1>{t('projects')}</h1>
      <Alert>
        <Warning size={32} />
        Em desenvolvimento / In development
      </Alert>
    </BasePanel>
  )
}
