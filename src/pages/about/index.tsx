import { useTranslation } from 'react-i18next'
import { Bio, BioInfo, ToolCardGrid, Tools, UserImage } from './style'
import userImage from '../../assets/user.png'
import { ToolCard } from '../../components/tool-card'
import { tools } from './tool-list.ts'
import { Social } from '../../components/social/index.tsx'

export default function About() {
  const { t } = useTranslation()

  return (
    <div id="about">
      <Bio>
        <UserImage
          src={userImage}
          alt="Foto de Giovani de Oliveira"
          loading="lazy"
        />
        <BioInfo>
          <h1>{t('greetings')}</h1>
          <p>{t('greetings-description')}</p>
          <Social />
        </BioInfo>
      </Bio>

      <Tools>
        <h2>{t('tools')}</h2>

        <ToolCardGrid>
          {tools.map((tool, index) => (
            <ToolCard key={index} image={tool.image} title={t(tool.title)} />
          ))}
        </ToolCardGrid>
      </Tools>
    </div>
  )
}
