import { useEffect } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { Routes } from '../types';
import { NavLink } from '../components/nav-link.component';

export const Root = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Set characters route as default when the component mounts
    navigate(`${Routes.Characters}`);
  }, [navigate]);

  return (
    <>
      <div id="sidebar">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <nav>
          <ul>
            {Object.values(Routes).map((route) => (
              <NavLink key={route} routeName={route} />
            ))}
            <li>
              <Link to={`/error_route`}>Error</Link>
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
