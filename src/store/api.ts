import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { SWApiResult } from '../types';

export const starWarsApi = createApi({
  reducerPath: 'starWarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getPlanets: builder.query<SWApiResult, void>({
      query: () => 'planets/',
    }),
  }),
});

export const { useLazyGetPlanetsQuery } = starWarsApi;
