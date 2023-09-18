import { Helmet } from 'react-helmet-async';
import { Card } from 'components/Card';
import {
  CardList,
  ContentWrapper,
  LoadMoreButton,
  LoadMoreWrapper,
} from './Catalog.styled';
import { useOutletContext } from 'react-router-dom';

import { useEffect, useRef, useState } from 'react';
import { FilterForm } from 'components/FilterForm/FilterForm';
import { fetchAllCars, fetchCarsByPage } from 'services/api';
import { filterAdverts } from 'services/filters';

// *************************************************

export const Catalog = () => {
  //
  const scrollTargetRef = useRef(null);

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // ******** Get cars *************************

  const [searchParams, setSearchParams] = useState(null);

  const [page, setPage] = useState(1);
  const [adverts, setAdverts] = useState([]);
  const [allAdverts, setAllAdverts] = useState(null);
  const [filteredAdverts, setFilteredAdverts] = useState(null);

  // Get unfiltered adverts by page
  useEffect(() => {
    (async () => {
      try {
        setError(null);
        setIsLoading(true);

        const { data } = await fetchCarsByPage(page);
        setAdverts((prev) => [...prev, ...data]);
        //
      } catch ({ message }) {
        setError(message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [page]);

  // Get filtered adverts on form submit
  useEffect(() => {
    if (!searchParams) return;

    (async () => {
      try {
        setError(null);
        setIsLoading(true);

        const { data } = await fetchAllCars();
        setAllAdverts(data);
      } catch ({ message }) {
        setError(message);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [searchParams]);

  if (allAdverts && !filteredAdverts) {
    const filtered = filterAdverts(searchParams, allAdverts);
    setFilteredAdverts(filtered);
  }

  const data = filteredAdverts ? filteredAdverts : adverts;

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

  const advertsCount = adverts.length > 0 ? 32 : 0; // I would normally get this value from backend, but since it is a paid feature with MockApi, and fetching all entries just to get the length of the array would be too costly, I will imitate it for the sake of this test assignment.

  const isThereMore = advertsCount > 8 * page;

  // ******* Render *******************************

  return (
    <ContentWrapper>
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
            {data.map((car) => (
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

        {!filteredAdverts && data.length > 0 && isThereMore && (
          <LoadMoreButton
            type="button"
            onClick={incrementPage}
            disabled={isLoading}
          >
            Load more
          </LoadMoreButton>
        )}
      </LoadMoreWrapper>
    </ContentWrapper>
  );
};
