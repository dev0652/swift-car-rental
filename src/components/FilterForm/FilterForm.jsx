import { useState } from 'react';
import { makes } from 'src/data/makes';

const sortedMakes = makes.sort((a, b) => a.localeCompare(b));

// eslint-disable-next-line react/prop-types
export const FilterForm = () => {
  const [make, setMake] = useState('');

  const handleChange = (event) => {
    setMake(event.target.value);
    console.log('event.target.value: ', event.target.value);
  };

  //   const handleChange = (e) => {
  //     setInput(e.target.value);
  //   };

  //   const handleSubmit = (e) => {
  //     e.preventDefault();

  return (
    <>
      <form>
        <label htmlFor="byMake">
          <select name="" id="byMake" onChange={handleChange}>
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
      </form>
    </>
  );
};

// ****** PropsTypes *******************************
