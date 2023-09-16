import { StyledHeader, StyledNavLink } from './Header.styled';

export const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <StyledNavLink to="/" end>
          Home
        </StyledNavLink>

        <StyledNavLink to="/catalog">Catalog</StyledNavLink>

        <StyledNavLink to="/favorites">Favorites</StyledNavLink>
      </nav>
    </StyledHeader>
  );
};
