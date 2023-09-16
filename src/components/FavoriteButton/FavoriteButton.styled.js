import styled from 'styled-components';
import { theme } from 'styles/theme';

const { colors } = theme;
const { accent, accentHover } = colors;

export const FavButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  background-color: transparent;

  stroke: ${({ $isFavorite }) => ($isFavorite ? accent : '#ffffffcc')};

  fill: ${({ $isFavorite }) => ($isFavorite ? accent : 'transparent')};

  transition: fill 200ms linear, stroke 200ms linear, transform 200ms linear;

  &:hover,
  &:focus-visible {
    stroke: ${accent};

    fill: ${({ $isFavorite }) => ($isFavorite ? 'transparent' : accent)};

    transform: scale(1.1);
  }

  &:active {
    stroke: ${accentHover};
    fill: ${accentHover};
  }
`;
