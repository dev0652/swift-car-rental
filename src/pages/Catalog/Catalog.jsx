// import { Helmet } from 'react-helmet-async';
import { Card } from 'components/Card';
import { CardList } from './Catalog.styled';
import { useSearchParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { FilterForm } from 'components/FilterForm/FilterForm';
import { BaseButton } from 'styles/buttons';
import { fetchCars } from 'services/api';

export const Catalog = () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const year = searchParams.get('year') ?? '';
  const limit = 8;

  useEffect(() => {
    // if (!year) {
    //   setResults(cars);
    //   return;
    // }

    async function getResults() {
      try {
        setError(null);
        setIsLoading(true);
        // toast.remove();

        const response = await fetchCars(page, limit, { year });

        setResults(response.data);
      } catch ({ message }) {
        if (message !== 'canceled') {
          setError(message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    getResults();
  }, [page, year]);

  // Increment page count (Load More button)
  const incrementPage = () => {
    setPage((prevState) => prevState + 1);
  };

  const isThereMore = results.length > limit * page;

  return (
    <>
      {/* <Helmet>
        <title>Cars catalog</title>
        <meta
          name="description"
          content="Browse through the cars available for rent"
        />
      </Helmet> */}

      <FilterForm action={setSearchParams}>
        <button type="submit">Search</button>
      </FilterForm>

      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {results.length === 0 && !isLoading && (
        <div>Sorry, your query returned no matches</div>
      )}

      {results.length > 0 && (
        <div>
          <CardList>
            {results.map((car) => (
              <li key={car.id}>
                <Card car={car} />
              </li>
            ))}
          </CardList>
        </div>
      )}

      {results.length > 0 && isThereMore && !isLoading && (
        <BaseButton type="button" onClick={incrementPage} isLoading={isLoading}>
          Load more
        </BaseButton>
      )}
    </>
  );
};
