import { Outlet } from 'react-router-dom'
import { Header } from '../components/header'
import {
  AvatarImage,
  AvatarRoot,
  CloseButton,
  Content,
  DialogNavigation,
  LayoutContainer,
  Overlay,
  Separator,
  Title,
} from './styles'
import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import avatarImage from '../assets/user.png'
import { Code, GraduationCap, UserCircle, X } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

export function DefaultLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <LayoutContainer>
      <Header setIsMobileMenuOpen={setIsMobileMenuOpen} />
      <Outlet />

      <Dialog.Root open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
        <Dialog.Portal>
          <Overlay />
          <Content>
            <Title>
              <AvatarRoot>
                <AvatarImage src={avatarImage} />
              </AvatarRoot>
              Giovani de Oliveira
              <CloseButton onClick={() => setIsMobileMenuOpen(false)}>
                <X size={36} />
              </CloseButton>
            </Title>
            <Separator />
            <DialogNavigation>
              <a href="#">
                <UserCircle size={36} />
                {t('about')}
              </a>
              <a href="#">
                <GraduationCap size={36} />
                {t('experience')}
              </a>
              <a href="#">
                <Code size={36} />
                {t('projects')}
              </a>
            </DialogNavigation>
          </Content>
        </Dialog.Portal>
      </Dialog.Root>
    </LayoutContainer>
  )
}
