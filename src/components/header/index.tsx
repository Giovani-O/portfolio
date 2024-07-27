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

export function Header() {
  return (
    <HeaderContainer>
      <HeaderDesktop>
        <Navbar>
          <Avatar src={avatarImage} />
          <Title>Giovani de Oliveira</Title>
          <NavbarLink href="#">About me</NavbarLink>
          <NavbarLink href="#">Experiences</NavbarLink>
          <NavbarLink href="#">Projects</NavbarLink>
        </Navbar>

        <LanguageMenu>
          <span>
            <p>Language:</p>
          </span>
        </LanguageMenu>
      </HeaderDesktop>
      <HeaderMobile>
        <HamburgerButton type="button">
          <List className="icon" size={36} />
        </HamburgerButton>
      </HeaderMobile>
    </HeaderContainer>
  )
}
