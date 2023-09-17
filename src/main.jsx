import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';

import { App } from 'components/App';
import { Catalog, ErrorPage, Favorites, Home } from 'pages';

import './index.css';

// *************************************************

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/catalog',
        element: <Catalog />,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
    ],
  },
]);

// *************************************************

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
