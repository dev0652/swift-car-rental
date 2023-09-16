import styled from 'styled-components';
import { BaseButton } from 'styles/buttons';
import { theme } from 'styles/theme';

const { colors, borderRadius } = theme;
const { accent, primaryText } = colors;

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(18, 20, 23, 0.5);
  z-index: 1000;
  /* cursor: pointer; */
`;

export const ModalContent = styled.div`
  position: relative;

  max-width: 90%;
  padding: 40px;
  background-color: #fff;
  border-radius: ${theme.borderRadius.regular};
  /* cursor: auto; */
`;

// export const CardWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 28px;

//   width: 274px;
// `;

export const CardContent = styled.div`
  width: 461px;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;

  background-color: transparent;
  color: ${primaryText};

  transition: color 300ms ease-out, transform 300ms ease-out;

  &:hover,
  &:focus-visible {
    color: ${accent};
    transform: scale(0.9);
  }
`;

export const Thumbnail = styled.div`
  /* width: 274px; */
  width: 100%;
  height: 248px;
  overflow: hidden;
  border-radius: ${borderRadius.regular};
  margin-bottom: 14px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

export const Caption = styled.div`
  font-size: 1.125rem; // 18px
  font-weight: 500;
  line-height: 133.333%;

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
  max-height: 2.5rem;
  text-align: justify;

  overflow: hidden;
  margin-bottom: 14px;
`;

export const FeaturesGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FeaturesList = styled.ul`
  display: flex;
  gap: 6px;
  align-items: center;
  flex-wrap: wrap;
`;

export const ConditionsList = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

export const ConditionTag = styled.li`
  padding: 7px 14px;

  border-radius: ${borderRadius.tag};
  background-color: ${colors.bgLight};
  color: ${colors.tagText};

  font-size: 0.75rem; // 12px;
  line-height: 150%;

  /* display: inline-flex; 
  align-items: center; */
`;

export const Value = styled.span`
  color: ${colors.accent};
  font-size: 12px;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.24px;
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

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Heading = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 142.857%;
`;

export const Button = styled(BaseButton)`
  align-self: flex-start;
`;
