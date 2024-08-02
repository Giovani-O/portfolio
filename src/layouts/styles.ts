import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as Avatar from '@radix-ui/react-avatar'

export const LayoutContainer = styled.main`
  height: 100vh;
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
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(16px);
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
  border: 1px solid ${(props) => props.theme.colours.stroke};
  padding: 0;
  margin: 0;
`

export const Title = styled(Dialog.Title)`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  padding-inline: 12px;
  padding-block: 24px;
`

export const CloseButton = styled.button`
  position: absolute;
  right: 0;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-right: 12px;
`

export const Separator = styled.hr`
  border: none;
  height: 1px;
  margin-inline: 12px;
  margin-bottom: 12px;
  background-image: radial-gradient(
    circle at center,
    ${(props) => props.theme.colours.stroke},
    ${(props) => props.theme.colours.stroke},
    transparent
  );
`

export const DialogNavigation = styled(Dialog.Description)`
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: start;
  gap: 12px;

  a {
    display: flex;
    align-items: center;
    gap: 24px;
    font-size: ${(props) => props.theme.fontSizes.md};
    text-decoration: none;
    padding: 12px;
    transition: background-color 0.2s ease-in-out;
    cursor: pointer;

    &:focus {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  span {
    display: flex;
    align-items: center;
    gap: 24px;
    padding: 12px;
    font-size: ${(props) => props.theme.fontSizes.md};
    margin-top: auto;
  }
`
