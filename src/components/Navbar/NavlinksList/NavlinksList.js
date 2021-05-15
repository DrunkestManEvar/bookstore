import React from 'react';
import { NavLink } from 'react-router-dom';
import { navlinks } from '../data';

const NavlinksList = ({ setRandomBookClicks, addActiveClass }) => {
  const navlinksListClasses = ['navbar__navlinks-list'];

  if (addActiveClass) navlinksListClasses.push('active');

  return (
    <ul className={navlinksListClasses.join(' ')}>
      {navlinks.map((navlink, index) => (
        <li key={index} className="navbar__navlink">
          <NavLink
            exact={navlink.exact || false}
            activeClassName="active"
            to={navlink.direction}
            onClick={() =>
              navlink.title === 'Random Book' &&
              setRandomBookClicks(prevState => prevState + 1)
            }
          >
            {navlink.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

export default NavlinksList;
