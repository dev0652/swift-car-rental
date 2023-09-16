import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from 'styles/theme';

const { colors } = theme;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  border-bottom: 1px solid black;

  background-color: ${colors.bgLight};

  > nav {
    display: flex;
  }
`;

export const StyledNavLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: ${colors.primaryText};
  font-weight: 500;

  &:hover,
  &:focus-visible {
    text-decoration: none;
    color: ${colors.accent};
  }

  &.active {
    color: ${colors.accent};
    font-weight: 600;

    &:hover,
    &:focus-visible {
      text-decoration: none;
      color: blueViolet;
    }
  }
`;
