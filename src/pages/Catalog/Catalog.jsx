// import { Helmet } from 'react-helmet-async';
import { Card } from 'components/Card';
import { CardList, LoadMoreButton, LoadMoreWrapper } from './Catalog.styled';
import { useLoaderData } from 'react-router-dom';

import { useEffect, useRef, useState } from 'react';
import { FilterForm } from 'components/FilterForm/FilterForm';
import { fetchCarsByPage, fetchFilteredCars } from 'services/api';

import storage from 'services/storage';

// *************************************************

// export async function loader() {
//   const response = await fetchCarsByPage();
//   return { cars: response.data };
// }

// export async function loader({ request }) {
//   const url = new URL(request.url);
//   const q = url.searchParams.get('q');
//   const { cars } = await fetchFilteredCars(q);
//   return { cars, q };
// }

// *************************************************

export const Catalog = () => {
  // const advertsCount = cars.length;
  const advertsCount = 32;

  const scrollTargetRef = useRef(null);

  // const [results, setResults] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // ******** Get cars *************************

  const [page, setPage] = useState(1);
  const [adverts, setAdverts] = useState([]);

  const firstUpdate = useRef(true);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    async function fetchCars() {
      try {
        setError(null);
        setIsLoading(true);
        // toast.remove();
        const { data } = await fetchCarsByPage(page);
        setAdverts((prev) => [...prev, ...data]);
        //
      } catch ({ message }) {
        if (message !== 'canceled') {
          setError(message);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchCars();
  }, [page]);

  // ******** Other logic ***********************

  // Increment page count (Load More button)
  const incrementPage = () => {
    setPage((prevState) => prevState + 1);

    if (scrollTargetRef.current && !isLoading) {
      //
      setTimeout(() => {
        scrollTargetRef.current.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  const isThereMore = advertsCount > 8 * page;

  // ******** Favorites *************************

  const LS_KEY = 'savedFavorites';
  const [favorites, setFavorites] = useState(() => storage.load(LS_KEY) ?? []);

  const addToFavorites = (id) => {
    setFavorites((prevState) => [...prevState, id]);
  };

  const removeFromFavorites = (id) => {
    setFavorites((prevState) => prevState.filter((el) => el !== id));
  };

  const isFavorite = (id) => favorites.includes(id);

  const handleToggleFavorite = (id) => {
    isFavorite(id) ? removeFromFavorites(id) : addToFavorites(id);
  };

  useEffect(() => storage.save(LS_KEY, favorites), [favorites]);

  return (
    <>
      <FilterForm />

      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}

      {advertsCount > 0 && (
        <div>
          <CardList>
            {adverts.map((car) => (
              <li key={car.id}>
                <Card
                  car={car}
                  onFavCLick={handleToggleFavorite}
                  isFavorite={isFavorite(car.id)}
                />
              </li>
            ))}
          </CardList>
        </div>
      )}

      <LoadMoreWrapper>
        <div ref={scrollTargetRef}></div>

        {adverts.length > 0 && isThereMore && (
          <LoadMoreButton
            type="button"
            onClick={incrementPage}
            disabled={isLoading}
          >
            Load more
          </LoadMoreButton>
        )}
      </LoadMoreWrapper>
    </>
  );
};
