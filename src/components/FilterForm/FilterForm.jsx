import PropTypes from 'prop-types';
import { useState } from 'react';

import { makes } from 'src/data/makes';
import {
  FieldLabelGroup,
  Label,
  StyledForm,
  SubmitButton,
  MileageFrom,
  MileageTo,
  TextInputGroup,
} from './FilterForm.styled';
import { ReactSelect } from 'components';

// *************************************************

export const FilterForm = ({ setSearchParams }) => {
  const [make, setMake] = useState('');
  const [price, setPrice] = useState('');
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
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

  // const resetFormState = () => {
  //   setMake('');
  //   setPrice('');
  //   setFrom('');
  //   setTo('');
  // };

  const handleSelectMake = (event) => {
    // console.log('event: ', event);
    console.log('event.value: ', event.value);

    setMake(event.value);
  };

  const handleSelectPrice = (event) => setPrice(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ make, price, from, to });
    setSearchParams({ make, price, from, to });
    // event.target.reset();

    // selectInputRef.current.select.clearValue();
    // resetFormState();
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <FieldLabelGroup>
          <Label htmlFor="make">Make</Label>
          <ReactSelect
            name="make"
            onChange={handleSelectMake}
            data={sortedMakes}
            placeholder="Select or type"
            value={make}
          />
        </FieldLabelGroup>

        <FieldLabelGroup>
          <Label htmlFor="price">Price cap</Label>
          <ReactSelect
            name="price"
            onChange={handleSelectPrice}
            data={prices}
            placeholder="$"
            isSearchable={false}
            value={price}
          />
        </FieldLabelGroup>

        <TextInputGroup>
          <FieldLabelGroup>
            <Label htmlFor="from">Kilometrage</Label>
            <MileageFrom
              name="from"
              onChange={handleChange}
              // value={from}
            />
          </FieldLabelGroup>

          <FieldLabelGroup>
            <Label htmlFor="to"></Label>
            <MileageTo
              name="to"
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

// ****** PropTypes *******************************

FilterForm.propTypes = {
  setSearchParams: PropTypes.func,
};

// ****** Data for selects *****************************

function generateNumberArray(start, end, increment) {
  const result = [];
  for (let i = start; i <= end; i += increment) {
    result.push(i);
  }
  return result;
}

const sortedMakes = makes.sort((a, b) => a.localeCompare(b));
const prices = generateNumberArray(10, 250, 10);
