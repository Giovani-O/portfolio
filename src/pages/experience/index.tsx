import { useTranslation } from 'react-i18next'
import {
  TitleContainer,
  Title,
  Subtitle,
  ContentLeft,
  Paragraph,
  ContentRight,
  ContentContainer,
  ContentImage,
} from './style'
import fcamara from '../../assets/fcamara.png'
import rocketseat from '../../assets/rocketseat.svg'
import unasp from '../../assets/unasp.png'
import { Separator } from '../../components/separator'

export default function Experience() {
  const { t } = useTranslation()

  return (
    <div id="experience">
      <TitleContainer>
        <Title>{t('experience')}</Title>
        <Subtitle>{t('experience-subtitle')}</Subtitle>
      </TitleContainer>

      <ContentContainer>
        <ContentLeft>
          <ContentImage src={fcamara} alt={t('fcamara-alt')} loading="lazy" />
          <div>
            <Paragraph>{t('fcamara-p1')}</Paragraph>
            <Paragraph>{t('fcamara-p2')}</Paragraph>
          </div>
        </ContentLeft>

        <Separator />

        <ContentRight>
          <ContentImage
            src={rocketseat}
            alt={t('rocketseat-alt')}
            loading="lazy"
          />
          <div>
            <Paragraph>{t('rocketseat-p1')}</Paragraph>
            <Paragraph>{t('rocketseat-p2')}</Paragraph>
          </div>
        </ContentRight>

        <Separator />

        <ContentLeft>
          <ContentImage src={unasp} alt={t('unasp-alt')} loading="lazy" />
          <div>
            <Paragraph>{t('unasp-p1')}</Paragraph>
            <Paragraph>{t('unasp-p2')}</Paragraph>
          </div>
        </ContentLeft>
      </ContentContainer>
    </div>
  )
}
