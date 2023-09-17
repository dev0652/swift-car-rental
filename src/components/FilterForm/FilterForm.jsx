import { useState } from 'react';
import { makes } from 'src/data/makes';

const sortedMakes = makes.sort((a, b) => a.localeCompare(b));

// eslint-disable-next-line react/prop-types
export const FilterForm = ({ setSearchParams }) => {
  //
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
    setSearchParams({ make, price, mileage });
    setMake('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="make">Car brand </label>
        <select
          name="make" // used to serialize form (i.e., goes to URL search params)
          id="make"
          aria-label="Search by make"
          onChange={handleChange}
        >
          <option value="">Enter text</option>
          {sortedMakes.map((make, index) => (
            <option key={index} value={make}>
              {make}
            </option>
          ))}
        </select>

        <label htmlFor="price">Car brand </label>
        <select
          name="price" // used to serialize form (i.e., goes to URL search params)
          id="price"
          aria-label="Search by price"
          onChange={handleChange}
        >
          <option value="">Enter text</option>
          {sortedMakes.map((make, index) => (
            <option key={index} value={make}>
              {make}
            </option>
          ))}
        </select>

        {/* <input type="text" name="from" id="from" placeholder="From" />
        <input type="text" name="to" id="to" placeholder="To" /> */}
        <button type="submit">Search</button>
      </form>
    </>
  );
};

// ****** PropsTypes *******************************
