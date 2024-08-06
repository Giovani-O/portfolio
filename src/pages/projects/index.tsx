import { useTranslation } from 'react-i18next'
import { ProjectsContainer, Subtitle, Title, TitleContainer } from './style'
import { ProjectCard } from '../../components/project-card'

import coffeeDelivery from '../../assets/projects/coffee.png'
import taskManager from '../../assets/projects/task-manager.png'
import orangeTasks from '../../assets/projects/orange-tasks.png'
import { Separator } from '../../components/separator'

export function Projects() {
  const { t } = useTranslation()

  return (
    <div id="projects">
      <TitleContainer>
        <Title>{t('projects')}</Title>
        <Subtitle>{t('projects-subtitle')}</Subtitle>
      </TitleContainer>

      <ProjectsContainer>
        <ProjectCard
          title={t('coffee-delivery')}
          tags={[
            'React',
            'TypeScript',
            'Styled Components',
            'Hooks',
            'Context API',
          ]}
          image={coffeeDelivery}
          imageAlt={t('coffee-delivery-alt')}
          description={t('coffee-delivery-description')}
          linkSite="https://ignite-coffee-delivery-hu2qn3fv7-giovani-o.vercel.app/"
          linkGithub="https://github.com/Giovani-O/ignite-coffee-delivery/tree/main"
        />

        <Separator />

        <ProjectCard
          title={t('orange-branch-task-manager')}
          tags={[
            '.NET 8',
            'C#',
            'Entity Framework',
            'RabbitMQ',
            'xUnit',
            'MySQL',
          ]}
          image={taskManager}
          imageAlt={t('orange-branch-task-manager-alt')}
          description={t('orange-branch-task-manager-description')}
          linkGithub="https://github.com/Giovani-O/OrangeBranchTaskManager"
        />

        <Separator />

        <ProjectCard
          title={t('orange-tasks')}
          tags={[
            'React',
            'TypeScript',
            'Tailwind',
            'Hooks',
            'Zustand',
            'Axios',
          ]}
          image={orangeTasks}
          imageAlt={t('orange-tasks-alt')}
          description={t('orange-tasks-description')}
          linkGithub="https://github.com/Giovani-O/orange-branch-task-manager-react"
        />
      </ProjectsContainer>
    </div>
  )
}
