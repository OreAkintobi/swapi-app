import { StarWarsInformation } from '../components/';
import {
  useGetCharactersQuery,
  useGetPlanetsQuery,
  useGetFilmsQuery,
  useGetSpeciesQuery,
  useGetStarshipsQuery,
  useGetVehiclesQuery,
} from '../store';
import {
  People,
  Planet,
  SWApiResult,
  Film,
  Specie,
  Starship,
  Vehicle,
  Routes,
} from '../types';
import { capitalise } from '../utils';

export const Characters = () => {
  const { data, error, isLoading } = useGetCharactersQuery();

  return (
    <StarWarsInformation<any>
      title={capitalise(Routes.Characters)}
      data={data as SWApiResult<People>}
      error={error}
      isLoading={isLoading}
    />
  );
};

export const Planets = () => {
  const { data, error, isLoading } = useGetPlanetsQuery();

  return (
    <StarWarsInformation<any>
      title={capitalise(Routes.Planets)}
      data={data as SWApiResult<Planet>}
      error={error}
      isLoading={isLoading}
    />
  );
};

export const Films = () => {
  const { data, error, isLoading } = useGetFilmsQuery();

  return (
    <StarWarsInformation<any>
      title={capitalise(Routes.Films)}
      data={data as SWApiResult<Film>}
      error={error}
      isLoading={isLoading}
    />
  );
};

export const Species = () => {
  const { data, error, isLoading } = useGetSpeciesQuery();

  return (
    <StarWarsInformation<any>
      title={capitalise(Routes.Species)}
      data={data as SWApiResult<Specie>}
      error={error}
      isLoading={isLoading}
    />
  );
};

export const Starships = () => {
  const { data, error, isLoading } = useGetStarshipsQuery();

  return (
    <StarWarsInformation<any>
      title={capitalise(Routes.Starships)}
      data={data as SWApiResult<Starship>}
      error={error}
      isLoading={isLoading}
    />
  );
};

export const Vehicles = () => {
  const { data, error, isLoading } = useGetVehiclesQuery();

  return (
    <StarWarsInformation<any>
      title={capitalise(Routes.Vehicles)}
      data={data as SWApiResult<Vehicle>}
      error={error}
      isLoading={isLoading}
    />
  );
};

export * from './root';
export * from './error';
