import { useState } from 'react';
import { makes } from 'src/data/makes';

const sortedMakes = makes.sort((a, b) => a.localeCompare(b));

// eslint-disable-next-line react/prop-types
export const FilterForm = ({ setSearchParams }) => {
  const [make, setMake] = useState('');

  const handleChange = (event) => {
    setMake(event.target.value);
  };

  //   const handleChange = (e) => {
  //     setInput(e.target.value);
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchParams({ make: make });
    setMake('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="make">
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
        </label>
        {/* <input type="text" name="from" id="from" placeholder="From" />
        <input type="text" name="to" id="to" placeholder="To" /> */}
        <button type="submit">Search</button>
      </form>
    </>
  );
};

// ****** PropsTypes *******************************
