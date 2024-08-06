import { GithubLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import { SocialIcons } from './style'

export function Social() {
  return (
    <SocialIcons>
      <a href="https://github.com/Giovani-O" target="_blank">
        <GithubLogo size={32} weight="fill" />
      </a>
      <a href="https://www.instagram.com/_gio_iv_/" target="_blank">
        <InstagramLogo size={32} weight="fill" />
      </a>
      <a href="https://www.linkedin.com/in/giovani-o/" target="_blank">
        <LinkedinLogo size={32} weight="fill" />
      </a>
    </SocialIcons>
  )
}
