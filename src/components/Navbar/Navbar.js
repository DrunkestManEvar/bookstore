import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

import { navlinks } from './data';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__center">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="navbar__logo" />
        </NavLink>
        <ul className="navbar__navlinks-list">
          {navlinks.map((navlink, index) => (
            <li key={index} className="navbar__navlink">
              <NavLink
                exact={navlink.exact || false}
                activeClassName="active"
                to={navlink.direction}
              >
                {navlink.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
