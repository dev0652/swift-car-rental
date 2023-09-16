import { useState } from 'react';
import { Form } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
export const FilterForm = ({ action }) => {
  const [input, setInput] = useState('');

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.trim() === '') {
      // alert('Your search request is empty');
      action({});
      return;
    }

    action({ year: input });
    // setInput('');
    // or
    // e.currentTarget.reset();
  };

  return <form action=""></form>;
};
