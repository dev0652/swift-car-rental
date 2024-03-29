import { useCallback, useEffect, useRef, useState } from 'react';
import { useOutletContext } from 'react-router-dom';

import { Helmet } from 'react-helmet-async';
import { after } from 'underscore';

import { Card, FilterForm, Loader } from 'components';
import { fetchAllCars, fetchCarsByPage } from 'services/api';

import {
  CardList,
  ContentWrapper,
  LoadMoreButton,
  LoadMoreWrapper,
} from './Catalog.styled';
import { EmptyResults } from 'components/EmptyResults';

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

  const getAllAdverts = useCallback(async () => {
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
    if (!allAdverts) getAllAdverts();

    if (allAdverts && !filteredAdverts) {
      const { make, price, from, to } = searchParams;
      const parseInt = (price) => price.slice(1, price.length);

      const filter = allAdverts
        .filter((ad) => (make ? ad.make === make : ad))
        .filter((ad) => (price ? parseInt(ad.rentalPrice) <= price : ad))
        .filter((ad) => (from ? ad.mileage >= from : ad))
        .filter((ad) => (to ? ad.mileage <= to : ad));

      setFilteredAdverts(filter);
    }
  }, [allAdverts, filteredAdverts, getAllAdverts, searchParams]);

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

  // const adsPerPage = 8;
  const adsPerPage = window.innerWidth > 1440 ? 10 : 8;

  const onLoadComplete = after(adsPerPage, () => {
    if (page > 1)
      scrollTargetRef.current.scrollIntoView({ behavior: 'smooth' });
  });
  // http://webcache.googleusercontent.com/search?q=cache:C1HY9HyeZ8sJ:https://medium.com/programming-essentials/how-to-detect-when-all-images-are-loaded-in-a-react-component-d831d0c675b2&client=firefox-b-d&sca_esv=569475139&hl=uk&gl=ua&strip=1&vwsrc=0

  const advertsCount = adverts.length > 0 ? 30 : 0; // I would normally get this value from backend, but since it is a paid feature with MockApi, and fetching all entries just to get the length of the array would be too costly, I will imitate it for the sake of this test assignment.

  const isLoadMoreVisible = advertsCount > adsPerPage * page;

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

      <div>
        {error && <p>{error}</p>}

        {searchParams && data.length === 0 && <EmptyResults />}

        {advertsCount > 0 && (
          <CardList>
            {data.map((car) => (
              <li key={car.id}>
                <Card
                  car={car}
                  onFavCLick={handleToggleFavorite}
                  isFavorite={isFavorite(car.id)}
                  onLoadComplete={onLoadComplete}
                />
              </li>
            ))}
          </CardList>
        )}
      </div>

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

        {!filteredAdverts && data.length > 0 && !isLoadMoreVisible && (
          <div>End of results</div>
        )}
      </LoadMoreWrapper>
    </ContentWrapper>
  );
};
