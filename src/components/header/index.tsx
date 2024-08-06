import {
  Avatar,
  HamburgerButton,
  HeaderContainer,
  HeaderDesktop,
  HeaderMobile,
  LanguageMenu,
  Navbar,
  NavbarLink,
  Title,
} from './style'
import avatarImage from './../../assets/user.png'
import { List } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'
import { LanguageSelect } from '../language-select'

interface HeaderProps {
  setIsMobileMenuOpen: (isOpen: boolean) => void
}

export function Header({ setIsMobileMenuOpen }: HeaderProps) {
  const { t } = useTranslation()

  function smoothScrollToId(id: string) {
    const element = document.getElementById(id)

    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <HeaderContainer>
      <HeaderDesktop>
        <Navbar>
          <Avatar src={avatarImage} />
          <Title>Giovani de Oliveira</Title>
          <NavbarLink onClick={() => smoothScrollToId('home')}>
            {t('about')}
          </NavbarLink>
          <NavbarLink onClick={() => smoothScrollToId('experience')}>
            {t('experience')}
          </NavbarLink>
          <NavbarLink onClick={() => smoothScrollToId('projects')}>
            {t('projects')}
          </NavbarLink>
        </Navbar>

        <LanguageMenu>
          <p>{t('language')}</p>
          <LanguageSelect />
        </LanguageMenu>
      </HeaderDesktop>
      <HeaderMobile>
        <HamburgerButton
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <List className="icon" size={36} />
        </HamburgerButton>
      </HeaderMobile>
    </HeaderContainer>
  )
}
