import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  Character,
  Film,
  Planet,
  SWApiResult,
  Specie,
  Starship,
  Vehicle,
} from '../types';

export const starWarsApi = createApi({
  reducerPath: 'starWarsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://swapi.dev/api/' }),
  endpoints: (builder) => ({
    getPlanets: builder.query<SWApiResult<Planet>, void>({
      query: () => 'planets/',
    }),
    getFilms: builder.query<SWApiResult<Film>, void>({
      query: () => 'films/',
    }),
    getCharacters: builder.query<SWApiResult<Character>, void>({
      query: () => 'people/',
    }),
    getSpecies: builder.query<SWApiResult<Specie>, void>({
      query: () => 'species/',
    }),
    getStarships: builder.query<SWApiResult<Starship>, void>({
      query: () => 'starships/',
    }),
    getVehicles: builder.query<SWApiResult<Vehicle>, void>({
      query: () => 'vehicles/',
    }),
  }),
});

export const {
  useGetPlanetsQuery,
  useGetCharactersQuery,
  useGetFilmsQuery,
  useGetSpeciesQuery,
  useGetStarshipsQuery,
  useGetVehiclesQuery,
} = starWarsApi;
