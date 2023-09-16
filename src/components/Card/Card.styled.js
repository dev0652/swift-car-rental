import styled from 'styled-components';
import { BaseButton } from 'styles/buttons';
import { theme } from 'styles/theme';

const { colors, borderRadius } = theme;
const { accent, accentHover } = colors;

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;

  width: 274px;
`;

export const CardContent = styled.div``;

export const Thumbnail = styled.div`
  position: relative;

  /* width: 274px; */
  width: 100%;
  height: 268px;
  overflow: hidden;
  border-radius: ${borderRadius.regular};
  margin-bottom: 14px;
`;

export const FavoriteButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  background-color: transparent;

  stroke: ${({ isFavorite }) => (isFavorite ? accent : '#ffffffcc')};

  fill: ${({ isFavorite }) => (isFavorite ? accent : 'transparent')};

  transition: fill 200ms linear, stroke 200ms linear, transform 200ms linear;

  &:hover,
  &:focus-visible {
    stroke: ${accent};

    fill: ${({ isFavorite }) => (isFavorite ? 'transparent' : accent)};

    transform: scale(1.1);
  }

  &:active {
    stroke: ${accentHover};
    fill: ${accentHover};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Caption = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 500;

  margin-bottom: 8px;
`;

export const Accented = styled.span`
  color: ${colors.accent};
`;

export const Meta = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  column-gap: 6px;
  row-gap: 4px;

  max-width: 100%;
  height: 2.5rem;
  text-align: justify;

  overflow: hidden;
`;

export const Tag = styled.li`
  color: ${colors.primaryText50};

  font-size: 0.75rem; // 12px;
  line-height: 150%;

  display: inline-flex; // to center the delimiter
  align-items: center;

  &:not(:last-of-type):after {
    content: '';
    height: 1rem;
    width: 1px;
    background-color: ${colors.primaryText10};
    margin-left: 6px;
  }
`;

export const Button = styled(BaseButton)``;
