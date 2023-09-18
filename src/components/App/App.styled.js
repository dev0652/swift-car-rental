import styled from 'styled-components';
import { breakpoints } from 'styles/breakpoints';
const { mobile, tablet, desktop } = breakpoints;

export const Container = styled.div`
  @media screen and (min-width: ${mobile}) {
    width: ${mobile};

    margin-left: auto;
    margin-right: auto;
  }

  @media screen and (min-width: ${tablet}) {
    width: ${tablet};
  }

  @media screen and (min-width: ${desktop}) {
    width: ${desktop};
  }
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 40px;
  padding-bottom: 40px;

  @media screen and (min-width: ${tablet}) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
`;
