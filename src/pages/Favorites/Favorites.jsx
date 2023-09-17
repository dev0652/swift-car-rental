import { Helmet } from 'react-helmet-async';

export const Favorites = () => {
  return (
    <>
      <Helmet>
        <title>Favorites</title>
        <meta
          name="description"
          content="Browse through the cars you added to favorites"
        />
      </Helmet>

      <div>Favorites page</div>
    </>
  );
};
