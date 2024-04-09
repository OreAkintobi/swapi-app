import DataItem from '../components/data-item';
import { useGetPlanetsQuery } from '../store/api';

export const Planets = () => {
  const { data, error, isLoading } = useGetPlanetsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {String(error)}</p>;

  return (
    <div className="App">
      <h1>Star Wars Planets</h1>
      {data && <DataItem data={data} />}
    </div>
  );
};

export default Planets;
