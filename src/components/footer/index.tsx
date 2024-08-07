import { useTranslation } from 'react-i18next'
import { Social } from '../social'
import { FooterContainer } from './style'

export function Footer() {
  const { t } = useTranslation()

  return (
    <FooterContainer>
      <Social />
      <p>{t('copyright')}</p>
    </FooterContainer>
  )
}
