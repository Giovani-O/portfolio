import { useTranslation } from 'react-i18next'
import { Bio, BioInfo, Social, ToolCardGrid, Tools, UserImage } from './style'
import userImage from '../../assets/user.png'
import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { ToolCard } from '../../components/tool-card'
import { tools } from './tool-list.ts'

export function About() {
  const { t } = useTranslation()

  return (
    <div id="about">
      <Bio>
        <UserImage src={userImage} alt="Foto de Giovani de Oliveira" />
        <BioInfo>
          <h1>{t('greetings')}</h1>
          <p>{t('greetings-description')}</p>
          <Social>
            <a href="https://github.com/Giovani-O" target="_blank">
              <GithubLogo size={32} weight="fill" />
            </a>
            <a href="https://www.instagram.com/_gio_iv_/" target="_blank">
              <InstagramLogo size={32} weight="fill" />
            </a>
            <a href="https://www.linkedin.com/in/giovani-o/" target="_blank">
              <LinkedinLogo size={32} weight="fill" />
            </a>
          </Social>
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
