import {
  Container,
  Logo,
  LogoNavLink,
  LogoText,
  NavItem,
  NavList,
  Navigation,
  StyledHeader,
  StyledNavLink,
} from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <LogoNavLink to="/" end>
          <Logo />
          <LogoText>
            <span style={{ color: 'black' }}>Swift</span> Car Rental
          </LogoText>
        </LogoNavLink>

        <Navigation>
          <NavList>
            <NavItem>
              <StyledNavLink to="/" end>
                Home
              </StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/catalog">Catalog</StyledNavLink>
            </NavItem>
            <NavItem>
              <StyledNavLink to="/favorites">Favorites</StyledNavLink>
            </NavItem>
          </NavList>
        </Navigation>
      </Container>
    </StyledHeader>
  );
};
