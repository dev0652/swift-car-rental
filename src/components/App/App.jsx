import { Header } from 'components/Header';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <>
      <Header />

      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
};
