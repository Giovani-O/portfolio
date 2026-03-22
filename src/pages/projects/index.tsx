import { useTranslation } from 'react-i18next'
import { Subtitle, Title, TitleContainer } from './style'

import { ProjectsCarousel } from './projects-carousel'

export function Projects() {
  const { t } = useTranslation()

  return (
    <div id="projects">
      <TitleContainer>
        <Title>{t('projects')}</Title>
        <Subtitle>{t('projects-subtitle')}</Subtitle>
      </TitleContainer>

      <ProjectsCarousel />
    </div>
  )
}
