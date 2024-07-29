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
  Title,
} from './styles'
import { useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import avatarImage from '../assets/user.png'
import { X } from '@phosphor-icons/react'

export function DefaultLayout() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
            <DialogNavigation>
              <ul role="list">
                <li>
                  <a href="#">About me</a>
                </li>
                <li>
                  <a href="#">Experiences</a>
                </li>
                <li>
                  <a href="#">Projects</a>
                </li>
              </ul>
            </DialogNavigation>
          </Content>
        </Dialog.Portal>
      </Dialog.Root>
    </LayoutContainer>
  )
}
