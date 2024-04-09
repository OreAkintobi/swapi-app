export const DataItem = ({ data }: any) => {
  return (
    <ul className="data-list">
      {data?.results?.map((planet: any) => (
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
  );
};

export default DataItem;
