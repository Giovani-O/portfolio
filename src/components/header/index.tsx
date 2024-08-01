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
import { useNavigate } from 'react-router-dom'
import { LanguageSelect } from '../language-select'

interface HeaderProps {
  setIsMobileMenuOpen: (isOpen: boolean) => void
}

export function Header({ setIsMobileMenuOpen }: HeaderProps) {
  const { t } = useTranslation()

  const navigate = useNavigate()

  return (
    <HeaderContainer>
      <HeaderDesktop>
        <Navbar>
          <Avatar src={avatarImage} />
          <Title>Giovani de Oliveira</Title>
          <NavbarLink onClick={() => navigate('/about')}>
            {t('about')}
          </NavbarLink>
          <NavbarLink onClick={() => navigate('/experience')}>
            {t('experience')}
          </NavbarLink>
          <NavbarLink onClick={() => navigate('/projects')}>
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
