import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SWApiResult } from '../types';

interface Props<T> {
  data: SWApiResult<T>;
  error: FetchBaseQueryError | SerializedError | undefined;
  isLoading: boolean;
  title: string;
}

export const StarWarsInformation = <T extends Record<string, string | number>>({
  data,
  error,
  isLoading,
  title,
}: Props<T>) => {
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {String(error)}</p>;

  return (
    <div>
      <h1>{title}</h1>
      <ul className="data-list">
        {data?.results?.map((item: any) => (
          <li key={item?.name || item?.title}>
            <h2>{item?.name || item?.title}</h2>

            {Object.keys(item).map(
              (key) =>
                // Exclude 'name' and 'url' properties
                key !== 'name' &&
                key !== 'url' &&
                key !== 'title' &&
                !Array.isArray(item[key]) && (
                  <p key={key}>
                    {key}: {item[key]}
                  </p>
                )
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StarWarsInformation;
