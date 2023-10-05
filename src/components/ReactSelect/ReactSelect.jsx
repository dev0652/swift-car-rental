import PropTypes from 'prop-types';
import Select from 'react-select';
import { makeStyles } from './SelectStyles';

export const ReactSelect = (props) => {
  const { name, onChange, data, value } = props;
  const styles = makeSelectStyles(name);
  // const currentValue = name === 'price' ? 123 : value;

  return (
    <Select
      name={name}
      id={name}
      aria-label={`Search by ${name}`}
      onChange={(e) => onChange(e.value)}
      options={makeSelectOptions(data)}
      unstyled
      styles={styles}
      currentValue={value}
      {...props}
    />
  );
};

// ****** Options for selects *****************************

const makeSelectOptions = (arr) => arr.map((el) => ({ value: el, label: el }));

// ****** Styles for selects *****************************

const makeSelectStyles = (name) => {
  switch (name) {
    case 'make':
      return makeStyles({ container: { width: 224 } });

    case 'price':
      return makeStyles({ container: { width: 125 } });

    default:
      return makeStyles();
  }
};

// ****** PropTypes *******************************

ReactSelect.propTypes = {
  setSearchParams: PropTypes.func,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  data: PropTypes.array.isRequired,
  // placeholder: PropTypes.string,
  value: PropTypes.string,
};
