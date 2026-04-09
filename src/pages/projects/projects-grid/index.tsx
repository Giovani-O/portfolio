import { useTranslation } from 'react-i18next'
import { ExpandButton, ExpandButtonContainer, Grid } from './style'
import { ProjectCard } from '../../../components/project-card'
import { projects } from '../../../data/projects'
import { PROJECTS_VISIBLE_COUNT } from '../../../constants'

interface ProjectsGridProps {
  isExpanded: boolean
  onToggle: () => void
}

export function ProjectsGrid({ isExpanded, onToggle }: ProjectsGridProps) {
  const { t } = useTranslation()

  const visibleProjects = isExpanded
    ? projects
    : projects.slice(0, PROJECTS_VISIBLE_COUNT)

  return (
    <>
      <Grid>
        {visibleProjects.map((project) => (
          <ProjectCard key={project.titleKey} project={project} />
        ))}
      </Grid>
      {projects.length > PROJECTS_VISIBLE_COUNT && (
        <ExpandButtonContainer>
          <ExpandButton onClick={onToggle}>
            {isExpanded ? t('show-less-projects') : t('show-all-projects')}
          </ExpandButton>
        </ExpandButtonContainer>
      )}
    </>
  )
}
