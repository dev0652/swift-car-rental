import { styled } from 'styled-components';

export const Wrapper = styled.div`
  /* margin-bottom: 10px; */
  display: flex;
  /* align-items: center; */

  flex-direction: column;
  gap: 30px;
`;

export const Title = styled.h2`
  font-size: 2rem;
  /* color: ${({ theme }) => theme.colors.accentHover}; */
  text-align: ${({ align = 'center' }) => align};
`;
