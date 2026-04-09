import { useTranslation } from 'react-i18next'
import {
  ButtonContainer,
  CardContainer,
  ContentContainer,
  Description,
  ImageContainer,
  PrimaryButton,
  SecondaryButton,
  Tag,
  Tags,
  Title,
} from './style'
import { ExpandableDescription } from '../expandable-description'
import type { Project } from '../../types/project'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation()

  return (
    <CardContainer>
      <ImageContainer>
        <img src={project.image} alt={t(project.imageAltKey)} loading="lazy" />
      </ImageContainer>
      <ContentContainer>
        <Title>{t(project.titleKey)}</Title>
        <Tags>
          {project.tags.map((tag, index) => (
            <Tag key={index}>{tag}</Tag>
          ))}
        </Tags>
        <Description>
          <ExpandableDescription text={t(project.descriptionKey)} />
        </Description>
        <ButtonContainer>
          {project.linkSite && (
            <PrimaryButton
              href={project.linkSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('view-site')}
            </PrimaryButton>
          )}
          <SecondaryButton
            href={project.linkGithub}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('view-code')}
          </SecondaryButton>
        </ButtonContainer>
      </ContentContainer>
    </CardContainer>
  )
}
