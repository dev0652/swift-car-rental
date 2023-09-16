import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { App } from 'components/App';
import { Catalog, ErrorPage, Favorites, Home } from 'pages';
// import {
//   loader as carsLoader,
//   // action as carsAction,
// } from 'pages/Catalog/Catalog';
// import { HelmetProvider } from 'react-helmet-async';
// import { ThemeProvider } from 'styled-components';
// import { theme } from 'styles/theme';

import './index.css';

// ###########################################################

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
        // loader: carsLoader,
      },
      {
        path: '/favorites',
        element: <Favorites />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <HelmetProvider>
      <ThemeProvider theme={theme}> */}
    <RouterProvider router={router} />
    {/* </ThemeProvider>
    </HelmetProvider> */}
  </React.StrictMode>
);
