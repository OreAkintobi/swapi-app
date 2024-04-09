import './App.css';
import { useLazyGetPlanetsQuery } from './store/api';

function App() {
  const [fetchPlanets, { data, error, isLoading }] = useLazyGetPlanetsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {String(error)}</p>;

  return (
    <div className="App">
      <h1>Star Wars Planets</h1>
      <button onClick={() => fetchPlanets()} disabled={isLoading}>
        Fetch Planets
      </button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {data && (
        <ul className="planet-list">
          {data?.results?.map((planet) => (
            <li key={planet.name}>
              <h2>{planet.name}</h2>
              <p>Rotation Period: {planet.rotation_period}</p>
              <p>Orbital Period: {planet.orbital_period}</p>
              <p>Diameter: {planet.diameter}</p>
              <p>Climate: {planet.climate}</p>
              <p>Gravity: {planet.gravity}</p>
              <p>Terrain: {planet.terrain}</p>
              <p>Surface Water: {planet.surface_water}</p>
              <p>Population: {planet.population}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
