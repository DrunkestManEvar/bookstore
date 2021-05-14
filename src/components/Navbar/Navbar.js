import React, { useContext } from 'react';
import AppContext from '../../context/appContext';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

import { navlinks } from './data';

const Navbar = () => {
  const { setRandomBookClicks } = useContext(AppContext);

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
      </div>
    </nav>
  );
};

export default Navbar;
