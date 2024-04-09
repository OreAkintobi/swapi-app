import logo from './logo.svg';
import './App.css';
import { useLazyGetPlanetsQuery } from './store/api';

function App() {
  const [fetchPlanets, { data, error, isLoading }] = useLazyGetPlanetsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {String(error)}</p>;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>
          <button aria-label="Increment value" onClick={() => fetchPlanets()}>
            Get Planets
          </button>
        </div>

        <div>
          <h1>Star Wars Planets</h1>
          {data && (
            <ul>
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
      </header>
    </div>
  );
}

export default App;
