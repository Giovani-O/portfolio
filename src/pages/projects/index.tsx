import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Subtitle, Title, TitleContainer } from './style'
import { ProjectsGrid } from './projects-grid'

export function Projects() {
const { t } = useTranslation()
const [isExpanded, setIsExpanded] = useState(false)

return (
<div id="projects">
<TitleContainer>
<Title>{t('projects')}</Title>
<Subtitle>{t('projects-subtitle')}</Subtitle>
</TitleContainer>

<ProjectsGrid
isExpanded={isExpanded}
onToggle={() => setIsExpanded(!isExpanded)}
/>
</div>
)
}
