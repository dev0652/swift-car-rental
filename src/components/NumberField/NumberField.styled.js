import styled from 'styled-components';
import { theme } from 'styles/theme';
import { breakpoints } from 'styles/breakpoints';

const { borderRadius, colors } = theme;
const { desktop } = breakpoints;

export const StyledInput = styled.input`
  font-family: inherit;
  font-size: 18px;
  font-weight: 500;
  line-height: 111.111%;

  border-radius: ${borderRadius.regular};
  padding: 14px 18px;
  border: none;

  color: ${colors.primaryText};
  background-color: ${colors.bgLight};

  width: 120px;

  @media screen and (min-width: ${desktop}) {
    width: 160px;
  }

  &::placeholder {
    color: ${colors.primaryText};
  }

  &:focus {
    outline: none;
  }
`;
