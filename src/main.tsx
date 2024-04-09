import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import {
  Root,
  Planets,
  Characters,
  Error,
  Films,
  Species,
  Starships,
  Vehicles,
} from './routes/';
import { Routes } from './types/index.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: Routes.Characters,
        element: <Characters />,
      },
      {
        path: Routes.Planets,
        element: <Planets />,
      },
      {
        path: Routes.Films,
        element: <Films />,
      },
      {
        path: Routes.Species,
        element: <Species />,
      },
      {
        path: Routes.Starships,
        element: <Starships />,
      },
      {
        path: Routes.Vehicles,
        element: <Vehicles />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
