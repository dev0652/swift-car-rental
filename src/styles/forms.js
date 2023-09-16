import { styled } from 'styled-components';
import { theme } from 'styles/theme';
import { AccentedButton } from 'styles/buttons';

export const TextField = styled.input`
  padding: 2px 25px 0;
  border-radius: ${theme.borderRadius.large};
  /* font-size: 1.1rem; */
  font-size: inherit;
  line-height: 2;
  /* background-color: white; */

  &::placeholder {
    color: Silver;
  }
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;

  font-size: 1.3rem;
`;

export const FieldsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const SubmitButton = styled(AccentedButton)`
  font-size: inherit;
  line-height: 1.4;
  border-radius: ${theme.borderRadius.large};
`;
