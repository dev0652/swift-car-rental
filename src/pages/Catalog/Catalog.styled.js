import styled from 'styled-components';
import { theme } from 'styles/theme';

const {
  colors: { accent, accentHover, accentActive },
} = theme;

export const CardList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  /* flex-basis: 250px; */
  column-gap: 29px;
  row-gap: 50px;
`;

export const LoadMoreButton = styled.button`
  font-size: 1rem;
  font-weight: 500;
  line-height: 150%;
  text-decoration: underline;

  border: none;
  color: ${accent};
  background-color: transparent;

  transition: color 300ms linear;

  &:hover,
  &:focus-visible {
    color: ${accentHover};
  }

  &:active {
    color: ${accentActive};
  }

  &:disabled {
    color: gray;
  }
`;

export const LoadMoreWrapper = styled.div`
  margin-top: 100px;
`;
