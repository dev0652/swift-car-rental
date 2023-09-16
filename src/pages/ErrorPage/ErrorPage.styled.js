import styled from 'styled-components';
// import { theme } from 'styles/theme';
// const { colors, borderRadius } = theme;
// const { accent, primaryText } = colors;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  height: 100vh;
  width: 100vw;
  margin-top: 30vh;
  gap: 60px;
`;

export const Title = styled.h1`
  font-weight: 700;
`;

export const Text = styled.div`
  text-align: center;
`;

export const ErrorMessage = styled.p`
  color: orangeRed;
  margin-top: 1rem;
`;
