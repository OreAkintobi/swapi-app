import { Outlet, Link } from 'react-router-dom';
import logo from '../assets/logo.svg';

export default function Root() {
  return (
    <>
      <div id="sidebar">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to={`/planets`}>Planets</Link>
            </li>
            <li>
              <Link to={`/planets`}>Characters</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
