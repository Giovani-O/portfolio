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
import { projects } from '../../../data/projects'
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
          {projects.map((project) => (
            <CarouselItem key={project.titleKey}>
              <ProjectCard
                title={t(project.titleKey)}
                tags={project.tags}
                image={project.image}
                imageAlt={t(project.imageAltKey)}
                description={t(project.descriptionKey)}
                linkSite={project.linkSite}
                linkGithub={project.linkGithub}
              />
            </CarouselItem>
          ))}
        </CarouselTrack>
      </CarouselTrackContainer>
      <Next onClick={handleNext} disabled={currentIndex === totalItems - 1}>
        <CaretRight size={36} weight="bold" />
      </Next>
    </CarouselContainer>
  )
}
