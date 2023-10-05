import styled from 'styled-components';
import { BaseButton } from 'styles/buttons';
import { theme } from 'styles/theme';
import { breakpoints } from 'styles/breakpoints';
import { NumberField } from 'components/NumberField';

const { tablet, desktop } = breakpoints;
const { colors } = theme;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 36px;

  @media screen and (min-width: ${tablet}) {
    flex-direction: row;
    column-gap: 18px;
    row-gap: 36px;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media screen and (min-width: ${desktop}) {
    flex-direction: row;
    gap: 18px;
  }
`;

export const FieldLabelGroup = styled.div`
  position: relative;
`;

export const TextInputGroup = styled.div`
  display: flex;
`;

export const Label = styled.label`
  position: absolute;
  top: calc((14px + 8px) * -1);

  color: ${colors.secondaryText};

  font-size: 14px;
  font-weight: 500;
  line-height: 128.571%;
`;

export const MileageFrom = styled(NumberField)`
  /* border: 1px solid red;
  background-color: #fff; */
  color: red;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
`;

export const MileageTo = styled(NumberField)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export const SubmitButton = styled(BaseButton)`
  padding: 14px 44px;
  line-height: 142.857%;

  @media screen and (max-width: calc(${desktop} - 1px)) {
    align-self: center;
    padding: 14px 64px;
  }
`;
