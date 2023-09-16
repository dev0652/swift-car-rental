import { styled } from 'styled-components';
import { theme } from 'styles/theme';

const { colors, borderRadius } = theme;

export const BaseButton = styled.button`
  padding: 12px 50px;
  border: none;
  border-radius: ${borderRadius.button};

  font-size: 0.875rem; // 14px
  font-weight: 600;

  color: white;
  background-color: ${colors.accent};

  &:hover,
  &:focus-visible {
    background-color: ${colors.accentHover};
  }

  &:active {
    background-color: ${colors.accentActive};
  }
`;
