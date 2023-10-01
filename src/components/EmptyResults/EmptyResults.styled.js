import styled from 'styled-components';
// import { theme } from 'styles/theme';

import { LuSearchX } from 'react-icons/lu';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  margin-top: 5vh;
  width: 90vw;
  /* background-color: beige; */
`;

export const Message = styled.p`
  font-size: 1.2rem;
`;

export const Icon = styled(LuSearchX)`
  height: 120px;
  width: auto;
  color: silver;
  margin-bottom: 30px;
`;
