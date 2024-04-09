import { SWApiResult } from '../types';

interface Props<T> {
  data: SWApiResult<T>;
}

export const DataItem = <T extends Record<string, string | number>>({
  data,
}: Props<T>) => {
  return (
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
  );
};

export default DataItem;
