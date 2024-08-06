import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  width: 100%;
  height: 56px;
`

export const HeaderDesktop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  height: 100%;
  margin-inline: 20px;

  @media (max-width: 900px) {
    display: none;
  }
`

export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;
`

export const Avatar = styled.img`
  max-width: 36px;
  max-height: 100%;
  border: 1px solid ${(props) => props.theme.colours.stroke};
  border-radius: 100%;
`

export const Title = styled.h3`
  font-weight: ${(props) => props.theme.fontWeights.medium};
  font-size: ${(props) => props.theme.fontSizes.md};
  border-bottom: 2px solid transparent;

  @media (max-width: 900px) {
    font-size: ${(props) => props.theme.fontSizes.lg};
  }
`

export const NavbarLink = styled.a`
  cursor: pointer;
  border-bottom: 2px solid transparent;
  text-decoration: none;
  font-weight: ${(props) => props.theme.fontWeights.regular};
  transition: border-bottom-color 0.4s ease-in-out;

  &:hover {
    border-bottom-color: ${(props) => props.theme.colours.white};
  }
`

export const LanguageMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  border-bottom: 2px solid transparent;
`

export const HeaderMobile = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;

  @media (min-width: 900px) {
    display: none;
  }
`

export const HamburgerButton = styled.button`
  background-color: transparent;
  border: none;
  padding: 0.25rem;
  margin-left: 0.5rem;
  border-radius: 16px;
  cursor: pointer;

  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`

// Mobile stuff

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

export const TitleMobile = styled(Dialog.Title)`
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
