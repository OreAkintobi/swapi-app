import { NavLink as RouterNavLink } from 'react-router-dom';
import { capitalise } from '../utils';

interface NavLinkProps {
  routeName: string;
}

export const NavLink = ({ routeName }: NavLinkProps) => {
  return (
    <li>
      <RouterNavLink
        to={`/${routeName}`}
        className={({ isActive, isPending }) =>
          isActive ? 'active' : isPending ? 'pending' : ''
        }
      >
        {capitalise(routeName)}
      </RouterNavLink>
    </li>
  );
};
