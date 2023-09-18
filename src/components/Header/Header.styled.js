import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from 'styles/theme';
import { breakpoints } from 'styles/breakpoints';

const { mobile, tablet, desktop } = breakpoints;
const { colors } = theme;

export const StyledHeader = styled.header`
  background-color: ${colors.bgLight};

  & nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }
`;

export const Container = styled.div`
  padding: 12px 0;
  margin-bottom: 16px;

  @media screen and (min-width: ${mobile}) {
    width: ${mobile};

    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: ${tablet}) {
    width: ${tablet};
  }

  @media screen and (min-width: ${desktop}) {
    width: ${desktop};
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  min-width: 100px;
  text-align: center;

  border-radius: 4px;
  text-decoration: none;
  color: ${colors.primaryText};
  background-color: lightGray;

  font-weight: 500;

  &:hover,
  &:focus-visible {
    text-decoration: none;
    color: white;
    background-color: ${colors.accent};
  }

  &.active {
    color: ${colors.accent};
    font-weight: 600;

    &:hover,
    &:focus-visible {
      text-decoration: none;
      color: white;
      background-color: ${colors.accentHover};
    }
  }
`;
