import {
  Container,
  Logo,
  LogoText,
  LogoWrapper,
  StyledHeader,
  StyledNavLink,
} from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <LogoWrapper>
          <Logo />
          <LogoText>Swift Car Rental</LogoText>
        </LogoWrapper>

        <nav>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>

          <StyledNavLink to="/catalog">Catalog</StyledNavLink>

          <StyledNavLink to="/favorites">Favorites</StyledNavLink>
        </nav>
      </Container>
    </StyledHeader>
  );
};
