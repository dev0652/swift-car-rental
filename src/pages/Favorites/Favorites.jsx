import { Helmet } from 'react-helmet-async';
import { useOutletContext } from 'react-router-dom';

import { CardList } from 'pages/Catalog/Catalog.styled';

import { Card, EmptyFavorites } from 'components';

// *************************************************

export const Favorites = () => {
  const [favorites, setFavorites] = useOutletContext();

  const removeFromFavorites = (id) => {
    setFavorites((prevState) => prevState.filter((ad) => ad.id !== id));
  };

  return (
    <>
      <Helmet>
        <title>Favorites</title>
        <meta
          name="description"
          content="Browse through the cars you added to favorites"
        />
      </Helmet>

      <div>
        {!favorites.length && <EmptyFavorites />}

        {favorites.length !== 0 && (
          <CardList>
            {favorites.map((car) => (
              <li key={car.id}>
                <Card
                  car={car}
                  onFavCLick={removeFromFavorites}
                  isFavorite={true}
                />
              </li>
            ))}
          </CardList>
        )}
      </div>
    </>
  );
};
