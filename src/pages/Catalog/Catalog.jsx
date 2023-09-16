// import { Helmet } from 'react-helmet-async';
import cars from '../../data/adverts.json';
import { Card } from 'components/Card';
import { CardList } from './Catalog.styled';
import { Form } from 'react-router-dom';

export const Catalog = () => {
  return (
    <>
      {/* <Helmet>
        <title>Cars catalog</title>
        <meta
          name="description"
          content="Browse through the cars available for rent"
        />
      </Helmet> */}
      <h1>Catalog page</h1>
      <Form>search form</Form>
      <div>
        <CardList>
          {cars.map((car) => (
            <li key={car.id}>
              <Card car={car} />
            </li>
          ))}
        </CardList>
      </div>
    </>
  );
};
