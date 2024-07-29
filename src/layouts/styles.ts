import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as Avatar from '@radix-ui/react-avatar'
import background from '../assets/background.png'

export const LayoutContainer = styled.main`
  height: 100vh;
  background: url(${background}) no-repeat;
  background-position: center;
  background-size: cover;
`

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
`

export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(16px);
  padding: 12px;
  transform: translateX(-100%);
  animation: menuSlide 0.3s forwards;

  @keyframes menuSlide {
    to {
      transform: translateX(0);
    }
  }
`

export const AvatarRoot = styled(Avatar.Root)`
  width: 36px;
  height: 36px;
`

export const AvatarImage = styled(Avatar.Image)`
  width: 100%;
  border-radius: 100%;
  padding: 0;
  margin: 0;
`

export const Title = styled(Dialog.Title)`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: ${(props) => props.theme.fontSizes.md};
  font-weight: ${(props) => props.theme.fontWeights.medium};
`

export const CloseButton = styled.button`
  position: absolute;
  right: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 12px;
`

export const DialogNavigation = styled(Dialog.Description)``
