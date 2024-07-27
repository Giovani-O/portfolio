import styled from 'styled-components'

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
