import { Suspense, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import storage from 'services/storage';
import { Header, Loader } from 'components';

import { Container, Main } from './App.styled';

// *************************************************

export const App = () => {
  //
  const init = () => storage.load('savedFavorites') ?? [];
  const [favorites, setFavorites] = useState(init);

  useEffect(() => storage.save('savedFavorites', favorites), [favorites]);

  return (
    <div>
      <Header />

      <Container>
        <Suspense fallback={<Loader />}>
          <Main>
            <Outlet context={[favorites, setFavorites]} />
          </Main>
        </Suspense>
      </Container>
    </div>
  );
};
