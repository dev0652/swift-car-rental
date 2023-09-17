import { Helmet } from 'react-helmet-async';
import { useOutletContext } from 'react-router-dom';

import { Card } from 'components/Card';
import { CardList } from 'pages/Catalog/Catalog.styled';

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
      </div>
    </>
  );
};
