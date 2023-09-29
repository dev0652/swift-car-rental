import { Helmet } from 'react-helmet-async';
import { Card } from 'components/Card';
import {
  CardList,
  ContentWrapper,
  LoadMoreButton,
  LoadMoreWrapper,
} from './Catalog.styled';
import { useOutletContext } from 'react-router-dom';
import { useCallback, useEffect, useRef, useState } from 'react';

import { FilterForm } from 'components/FilterForm/FilterForm';
import Loader from 'components/Loader';

import { fetchAllCars, fetchCarsByPage } from 'services/api';
import { filterAdverts } from 'services/filters';

import { after } from 'underscore';

// *************************************************

export const Catalog = () => {
  //
  const isFirstRender = useRef(true);
  const scrollTargetRef = useRef(null);

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // ******** Get cars *************************

  const [searchParams, setSearchParams] = useState(null);

  const [page, setPage] = useState(1);
  const [adverts, setAdverts] = useState([]);
  const [allAdverts, setAllAdverts] = useState(null);
  const [filteredAdverts, setFilteredAdverts] = useState(null);

  const getCars = useCallback(async () => {
    try {
      setError(null);
      setIsLoading(true);
      const { data } = await fetchCarsByPage(page);
      setAdverts((prev) => [...prev, ...data]);
    } catch ({ message }) {
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, [page]);

  const getAllCars = useCallback(async () => {
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
  }, []);

  // Get unfiltered adverts by page
  useEffect(() => {
    if (page === 1 && !isFirstRender.current) return;
    if (isFirstRender.current) isFirstRender.current = false;
    getCars();
  }, [getCars, page]);

  // Get filtered adverts on form submit
  useEffect(() => {
    if (!searchParams) return;
    getAllCars();
  }, [getAllCars, searchParams]);

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

  // ******** Load More ***********************

  const incrementPage = () => setPage((prevState) => prevState + 1);

  const onComplete = after(8, () => {
    if (page > 1)
      scrollTargetRef.current.scrollIntoView({ behavior: 'smooth' });
  });
  // http://webcache.googleusercontent.com/search?q=cache:C1HY9HyeZ8sJ:https://medium.com/programming-essentials/how-to-detect-when-all-images-are-loaded-in-a-react-component-d831d0c675b2&client=firefox-b-d&sca_esv=569475139&hl=uk&gl=ua&strip=1&vwsrc=0

  const advertsCount = adverts.length > 0 ? 32 : 0; // I would normally get this value from backend, but since it is a paid feature with MockApi, and fetching all entries just to get the length of the array would be too costly, I will imitate it for the sake of this test assignment.

  const isLoadMoreVisible = advertsCount > 8 * page;

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

      {isLoading && <Loader />}

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
                  onComplete={onComplete}
                />
              </li>
            ))}
          </CardList>
        </div>
      )}

      <LoadMoreWrapper>
        <div ref={scrollTargetRef}></div>

        {!filteredAdverts && data.length > 0 && isLoadMoreVisible && (
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
