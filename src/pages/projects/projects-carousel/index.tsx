import { CaretLeft, CaretRight } from '@phosphor-icons/react'
import {
  CarouselContainer,
  CarouselItem,
  CarouselTrack,
  CarouselTrackContainer,
  Next,
  Previous,
} from './style'
import { useEffect, useRef, useState } from 'react'
import { ProjectCard } from '../../../components/project-card'
import coffeeDelivery from '../../../assets/projects/coffee.png'
import taskManager from '../../../assets/projects/task-manager.png'
import orangeTasks from '../../../assets/projects/orange-tasks.png'
import { useTranslation } from 'react-i18next'

export function ProjectsCarousel() {
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const trackRef = useRef<HTMLUListElement>(null)

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const handleNext = () => {
    const totalItems = trackRef.current ? trackRef.current.children.length : 0
    if (currentIndex < totalItems - 1) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  useEffect(() => {
    if (trackRef.current) {
      const itemWidth = (
        trackRef.current.children[0] as HTMLElement
      ).getBoundingClientRect().width
      trackRef.current.style.transform = `translateX(-${
        currentIndex * itemWidth
      }px)`
    }
  }, [currentIndex])

  const totalItems = trackRef.current ? trackRef.current.children.length : 0

  return (
    <CarouselContainer>
      <Previous onClick={handlePrevious} disabled={currentIndex === 0}>
        <CaretLeft size={36} weight="bold" />
      </Previous>
      <CarouselTrackContainer>
        <CarouselTrack ref={trackRef}>
          <CarouselItem>
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
          </CarouselItem>

          <CarouselItem>
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
          </CarouselItem>

          <CarouselItem>
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
          </CarouselItem>
        </CarouselTrack>
      </CarouselTrackContainer>
      <Next onClick={handleNext} disabled={currentIndex === totalItems - 1}>
        <CaretRight size={36} weight="bold" />
      </Next>
    </CarouselContainer>
  )
}
