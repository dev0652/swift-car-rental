import styled from 'styled-components';
import { BaseButton } from 'styles/buttons';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

export const HeroButton = styled(BaseButton)`
  padding: 16px 64px;
  font-size: 1.7rem;
  align-self: center;
`;
