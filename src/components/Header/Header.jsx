import { Container, StyledHeader, StyledNavLink } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
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
