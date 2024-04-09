import logo from './logo.svg';
import './App.css';
import { RootState, useAppDispatch, useAppSelector } from './store';
import { getPlanetsThunk } from './store/thunks';

function App() {
  const dispatch = useAppDispatch();
  const { value } = useAppSelector((state: RootState) => state.planets);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <div>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(getPlanetsThunk({ user: 'me' }))}
          >
            Get Planets
          </button>
        </div>

        <div>
          {value?.map((planet) => (
            <div key={planet.name}>{planet.name}</div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
