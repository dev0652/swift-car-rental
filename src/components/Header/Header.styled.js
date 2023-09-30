import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from 'styles/theme';
import { breakpoints } from 'styles/breakpoints';
import { AiFillCar } from 'react-icons/ai';

const { mobile, tablet, desktop } = breakpoints;
const { colors } = theme;

export const StyledHeader = styled.header`
  background-color: ${colors.bgLight};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* padding: 12px 0; */
  height: 3.5rem;
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

export const LogoNavLink = styled(NavLink)`
  height: 100%;

  display: flex;
  align-items: center;
  gap: 10px;

  text-decoration: none;
`;

export const Logo = styled(AiFillCar)`
  color: ${colors.accentActive};
  height: 2.5rem;
  width: auto;
`;

export const LogoText = styled.p`
  color: ${colors.accent};
  font-weight: 700;
  font-size: 1.4rem;
`;

export const Navigation = styled.nav`
  height: 100%;
`;

export const NavList = styled.ul`
  display: flex;
  /* gap: 12px; */
  height: 100%;
`;

export const NavItem = styled.li`
  min-width: 100px;
  text-align: center;
`;

export const StyledNavLink = styled(NavLink)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: ${colors.primaryText};

  font-weight: 500;

  transition: color 200ms;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;

    width: 100%;
    height: 4px;

    background-color: ${colors.accent};
    transition: opacity 200ms;

    opacity: 0;
  }

  &:hover,
  &:focus-visible {
    position: relative;

    color: ${colors.accent};

    &::after {
      opacity: 1;
    }
  }

  &.active {
    color: ${colors.accent};
    font-weight: 600;

    &:hover,
    &:focus-visible {
      color: ${colors.accentHover};
    }
  }
`;
