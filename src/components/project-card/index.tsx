import { useTranslation } from 'react-i18next'
import { Container, Description, LinkLabel, Tag, Tags, Title } from './style'

interface ProjectCardProps {
  title: string
  tags: string[]
  image: string
  imageAlt: string
  description: string
  linkSite?: string
  linkGithub: string
}

export function ProjectCard({
  title,
  tags,
  image,
  imageAlt,
  description,
  linkSite = '',
  linkGithub,
}: ProjectCardProps) {
  const { t } = useTranslation()

  return (
    <Container>
      <Title>{title}</Title>

      <Tags>
        {tags.map((tag, index) => (
          <Tag key={index}>{tag}</Tag>
        ))}
      </Tags>

      <a
        href="https://ignite-coffee-delivery-hu2qn3fv7-giovani-o.vercel.app/"
        target="_blank"
      >
        <div>
          <img src={image} alt={imageAlt} />
        </div>
      </a>
      <Description>{description}</Description>
      {linkSite ? (
        <LinkLabel>
          {t('link-site')}{' '}
          <a href={linkSite} target="_blank">
            {title}
          </a>
        </LinkLabel>
      ) : (
        <></>
      )}
      <LinkLabel>
        {t('link-github')}{' '}
        <a href={linkGithub} target="_blank">
          GitHub
        </a>
      </LinkLabel>
    </Container>
  )
}
