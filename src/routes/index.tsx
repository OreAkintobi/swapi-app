import StarWarsInformation from '../components/data-item';
import { useGetCharactersQuery, useGetPlanetsQuery } from '../store/api';
import { Character, Planet, SWApiResult } from '../types';

export const Characters = () => {
  const { data, error, isLoading } = useGetCharactersQuery();

  return (
    <StarWarsInformation<any>
      title="Star Wars Characters"
      data={data as SWApiResult<Character>}
      error={error}
      isLoading={isLoading}
    />
  );
};

export const Planets = () => {
  const { data, error, isLoading } = useGetPlanetsQuery();

  return (
    <StarWarsInformation<any>
      title="Star Wars Planets"
      data={data as SWApiResult<Planet>}
      error={error}
      isLoading={isLoading}
    />
  );
};

export * from './root';
export * from './error';
