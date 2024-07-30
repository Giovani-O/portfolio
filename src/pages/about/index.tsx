import { useTranslation } from 'react-i18next'
import { BasePanel } from '../../components/base-panel'
import { Bio, BioInfo, Social, UserImage } from './style'
import userImage from '../../assets/user.png'
import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

export function About() {
  const { t } = useTranslation()

  return (
    <BasePanel>
      <Bio>
        <UserImage src={userImage} alt="Foto de Giovani de Oliveira" />
        <BioInfo>
          <h1>Hi, I'm Giovani</h1>
          <p>
            A fullstack developer driven by a passion for making things happen
          </p>
          <Social>
            <a href="https://github.com/Giovani-O">
              <GithubLogo size={32} weight="fill" />
            </a>
            <a href="https://www.instagram.com/_gio_iv_/">
              <InstagramLogo size={32} weight="fill" />
            </a>
            <a href="https://www.linkedin.com/in/giovani-o/">
              <LinkedinLogo size={32} weight="fill" />
            </a>
          </Social>
        </BioInfo>
      </Bio>
    </BasePanel>
  )
}
