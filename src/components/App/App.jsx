import { Header } from 'components/Header';
import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import storage from 'services/storage';

// *************************************************

export const App = () => {
  //
  const init = () => storage.load('savedFavorites') ?? [];
  const [favorites, setFavorites] = useState(init);

  useEffect(() => storage.save('savedFavorites', favorites), [favorites]);

  return (
    <>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet context={[favorites, setFavorites]} />
        </main>
      </Suspense>
    </>
  );
};
