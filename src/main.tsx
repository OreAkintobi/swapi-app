import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/index.ts';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Root, Planets, Characters, Error } from './routes/';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: 'planets',
        element: <Planets />,
      },
      {
        path: 'characters',
        element: <Characters />,
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
