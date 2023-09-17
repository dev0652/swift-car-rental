import styled from 'styled-components';
import { BaseButton } from 'styles/buttons';
import { theme } from 'styles/theme';

const { colors, borderRadius } = theme;

export const StyledForm = styled.form`
  display: flex;
  gap: 18px;
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

export const TextField = styled.input`
  font-family: inherit;
  font-size: 18px;
  font-weight: 500;
  line-height: 111.111%;

  width: 160px;
  border-radius: ${borderRadius.regular};
  padding: 14px 18px;
  border: none;

  color: ${colors.primaryText};
  background-color: ${colors.bgLight};

  &::placeholder {
    color: ${colors.primaryText};
  }

  &:focus {
    outline: none;
  }
`;

export const TextFieldFrom = styled(TextField)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
`;

export const TextFieldTo = styled(TextField)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

export const SubmitButton = styled(BaseButton)`
  padding: 14px 44px;

  line-height: 20px; /* 142.857% */
`;
