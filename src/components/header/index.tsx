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

interface HeaderProps {
  setIsMobileMenuOpen: (isOpen: boolean) => void
}

export function Header({ setIsMobileMenuOpen }: HeaderProps) {
  const { t } = useTranslation()

  return (
    <HeaderContainer>
      <HeaderDesktop>
        <Navbar>
          <Avatar src={avatarImage} />
          <Title>Giovani de Oliveira</Title>
          <NavbarLink href="#">{t('about')}</NavbarLink>
          <NavbarLink href="#">{t('experience')}</NavbarLink>
          <NavbarLink href="#">{t('projects')}</NavbarLink>
        </Navbar>

        <LanguageMenu>
          <span>
            <p>{t('language')}</p>
          </span>
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
