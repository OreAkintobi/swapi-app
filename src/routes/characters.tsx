import DataItem from '../components/data-item';
import { useGetCharactersQuery } from '../store/api';

export const Characters = () => {
  const { data, error, isLoading } = useGetCharactersQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {String(error)}</p>;

  return (
    <div className="App">
      <h1>Star Wars Characters</h1>
      {data && <DataItem<any> data={data} />}
    </div>
  );
};

export default Characters;
