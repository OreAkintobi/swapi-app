import { Outlet, Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export const Root = () => {
  return (
    <>
      <div id="sidebar">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`/characters`}>Characters</Link>
            </li>
            <li>
              <Link to={`/planets`}>Planets</Link>
            </li>
            <li>
              <Link to={`/planetsoo`}>Planets2</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};
