import styled from 'styled-components';
import { theme } from 'styles/theme';

import { RiHeartAddLine } from 'react-icons/ri';
// MdOutlineBookmarkAdd
// RiHeartAddLine

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  /* text-align: center; */
  margin-top: 5vh;
  width: 90vw;
  /* background-color: beige; */
`;

export const Heading = styled.h2`
  font-size: 2rem;
  color: ${theme.colors.accent};
  margin-bottom: 30px;
`;

export const Message = styled.p`
  font-size: 1.2rem;
`;

export const Icon = styled(RiHeartAddLine)`
  height: 150px;
  width: auto;
  color: ${theme.colors.accent};
  margin-bottom: 30px;
`;
