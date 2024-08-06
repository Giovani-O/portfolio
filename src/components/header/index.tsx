import {
  Avatar,
  CloseButton,
  Content,
  DialogNavigation,
  HamburgerButton,
  HeaderContainer,
  HeaderDesktop,
  HeaderMobile,
  LanguageMenu,
  Navbar,
  NavbarLink,
  Overlay,
  Separator,
  Title,
  TitleMobile,
} from './style'
import avatarImage from './../../assets/user.png'
import {
  Code,
  GraduationCap,
  List,
  Translate,
  UserCircle,
  X,
} from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'
import { LanguageSelect } from '../language-select'
import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'

export function Header() {
  const { t } = useTranslation()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  function smoothScrollToId(id: string) {
    const element = document.getElementById(id)

    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
      setIsMobileMenuOpen(false)
    }
  }

  // Altura dinâmica para o header
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <HeaderContainer height={scrollY > 54 ? '56px' : '86px'}>
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

      <Dialog.Root open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <Dialog.Portal>
          <Overlay />
          <Content>
            <TitleMobile>
              <Avatar src={avatarImage} />
              Giovani de Oliveira
              <CloseButton onClick={() => setIsMobileMenuOpen(false)}>
                <X size={36} />
              </CloseButton>
            </TitleMobile>
            <Separator />
            <DialogNavigation>
              <a onClick={() => smoothScrollToId('home')}>
                <UserCircle size={36} />
                {t('about')}
              </a>
              <a onClick={() => smoothScrollToId('experience')}>
                <GraduationCap size={36} />
                {t('experience')}
              </a>
              <a onClick={() => smoothScrollToId('projects')}>
                <Code size={36} />
                {t('projects')}
              </a>
              <span>
                <Translate size={36} />
                {t('language')}
                <LanguageSelect />
              </span>
            </DialogNavigation>
          </Content>
        </Dialog.Portal>
      </Dialog.Root>
    </HeaderContainer>
  )
}
