import PropTypes from 'prop-types';
import { StyledInput } from './NumberField.styled';

export const NumberField = ({ className, name, onChange, value = '' }) => {
  const capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <StyledInput
      className={className}
      type="number"
      name={name}
      id={name}
      placeholder={capitalizedName}
      onChange={onChange}
      value={value}
    />
  );
};

// ****** PropTypes *******************************

NumberField.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
};
