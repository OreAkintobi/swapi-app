import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  People,
  Film,
  Planet,
  Routes,
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
      query: () => Routes.Planets,
    }),
    getFilms: builder.query<SWApiResult<Film>, void>({
      query: () => Routes.Films,
    }),
    getCharacters: builder.query<SWApiResult<People>, void>({
      query: () => Routes.Characters,
    }),
    getSpecies: builder.query<SWApiResult<Specie>, void>({
      query: () => Routes.Species,
    }),
    getStarships: builder.query<SWApiResult<Starship>, void>({
      query: () => Routes.Starships,
    }),
    getVehicles: builder.query<SWApiResult<Vehicle>, void>({
      query: () => Routes.Vehicles,
    }),
  }),
});
