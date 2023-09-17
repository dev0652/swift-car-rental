import PropTypes from 'prop-types';
import { useState } from 'react';

import Select from 'react-select';
import { makeStyles } from './SelectStyles';

import { makes } from 'src/data/makes';
import {
  FieldLabelGroup,
  Label,
  StyledForm,
  SubmitButton,
  TextFieldFrom,
  TextFieldTo,
  TextInputGroup,
} from './FilterForm.styled';

// *************************************************

export const FilterForm = (props) => {
  const { setSearchParams } = props;

  const [make, setMake] = useState('');
  const [price, setPrice] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'make':
        setMake(value);
        break;
      case 'price':
        setPrice(value);
        break;
      case 'from':
        setFrom(value);
        break;
      case 'to':
        setTo(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchParams({ make });
    setMake('');
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <FieldLabelGroup>
          <Label htmlFor="make">Car brand </Label>
          <Select
            name="make" // used to serialize form (i.e., goes to URL search params)
            id="make"
            aria-label="Search by make"
            onChange={handleChange}
            options={optionsMake}
            unstyled
            styles={stylesMake}
            placeholder="Enter the text"
            // value={make}
          />
        </FieldLabelGroup>

        <FieldLabelGroup>
          <Label htmlFor="price">Price </Label>
          <Select
            name="price"
            id="price"
            aria-label="Search by max price"
            onChange={handleChange}
            options={optionsPrice}
            unstyled
            styles={stylesPrice}
            placeholder="To $"
            isSearchable={false}
            // value={price}
          />
        </FieldLabelGroup>

        <TextInputGroup>
          <FieldLabelGroup>
            <Label htmlFor="from">Price </Label>
            <TextFieldFrom
              type="text"
              name="from"
              id="from"
              placeholder="From"
              onChange={handleChange}
              // value={from}
            />
          </FieldLabelGroup>

          <FieldLabelGroup>
            <Label htmlFor="to"></Label>
            <TextFieldTo
              type="text"
              name="to"
              id="to"
              placeholder="To"
              onChange={handleChange}
              // value={to}
            />
          </FieldLabelGroup>
        </TextInputGroup>

        <SubmitButton type="submit">Search</SubmitButton>
      </StyledForm>
    </>
  );
};

// ****** PropsTypes *******************************

FilterForm.propTypes = {
  setSearchParams: PropTypes.func,
};

// ****** Options for selects *****************************

const makeSelectOptions = (arr) => arr.map((el) => ({ value: el, label: el }));

function generateNumberArray(start, end, increment) {
  const result = [];
  for (let i = start; i <= end; i += increment) {
    result.push(i);
  }
  return result;
}

const sortedMakes = makes.sort((a, b) => a.localeCompare(b));
const optionsMake = makeSelectOptions(sortedMakes);

const prices = generateNumberArray(10, 250, 10);
const optionsPrice = makeSelectOptions(prices);

// ***** Widths for selects *******************************

const stylesMake = makeStyles({ container: { width: 224 } });
const stylesPrice = makeStyles({ container: { width: 125 } });
