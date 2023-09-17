import { Helmet } from 'react-helmet-async';
import { Card } from 'components/Card';
import { CardList, LoadMoreButton, LoadMoreWrapper } from './Catalog.styled';
import { useOutletContext, useSearchParams } from 'react-router-dom';

import { useEffect, useRef, useState } from 'react';
import { FilterForm } from 'components/FilterForm/FilterForm';
import { fetchCars, fetchCarsByPage } from 'services/api';

// *************************************************

export const Catalog = () => {
  //
  const scrollTargetRef = useRef(null);
  const firstUpdate = useRef(true);

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // ******** Get cars *************************

  const [searchParams, setSearchParams] = useState(null);

  const [page, setPage] = useState(1);
  const [adverts, setAdverts] = useState([]);

  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    if (searchParams) setAdverts([]);
    if (page > 1 && searchParams) setPage(1);

    async function getCars() {
      try {
        setError(null);
        setIsLoading(true);
        // toast.remove();

        const query = { page, ...searchParams };

        const { data } = await fetchCars(query);
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

    getCars();
  }, [page, searchParams]);

  // ******** Favorites *************************

  const [favorites, setFavorites] = useOutletContext();

  const isFavorite = (id) => favorites.some((ad) => ad.id === id);

  const addToFavorites = (id) => {
    const newFavorite = adverts.find((ad) => ad.id === id);
    setFavorites((prevState) => [...prevState, newFavorite]);
  };

  const removeFromFavorites = (id) => {
    setFavorites((prevState) => prevState.filter((ad) => ad.id !== id));
  };

  const handleToggleFavorite = (id) => {
    isFavorite(id) ? removeFromFavorites(id) : addToFavorites(id);
  };

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

  const advertsCount = 32; // I would normally get this value from backend, but since it is a paid feature with MockApi, and fetching all entries just to get the length of the array would be too costly, I will imitate it for the sake of this test assignment.

  const isThereMore = advertsCount > 8 * page;

  // ******* Render *******************************

  return (
    <>
      <Helmet>
        <title>Cars for Rent in Ukraine</title>
        <meta
          name="description"
          content="Browse through our selection of premium cars available for rent in Ukraine"
        />
      </Helmet>

      <FilterForm setSearchParams={setSearchParams} />

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

        {!(searchParams && adverts.length <= 8) &&
          adverts.length > 0 &&
          isThereMore && (
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
