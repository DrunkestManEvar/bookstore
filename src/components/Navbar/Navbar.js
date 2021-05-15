import React, { useContext } from 'react';
import AppContext from '../../context/appContext';
import BurgerMenu from 'hamburger-react';
import { NavLink } from 'react-router-dom';
import NavlinksList from './NavlinksList/NavlinksList';
import logo from '../../images/logo.png';

const Navbar = () => {
  const { setRandomBookClicks, isBurgerOpen, setIsBurgerOpen } =
    useContext(AppContext);

  return (
    <nav className="navbar">
      <div className="navbar__center">
        <NavLink to="/">
          <img src={logo} alt="Logo" className="navbar__logo" />
        </NavLink>
        <NavlinksList
          addActiveClass={isBurgerOpen}
          setRandomBookClicks={setRandomBookClicks}
        />
        <BurgerMenu
          toggled={isBurgerOpen}
          toggle={() => setIsBurgerOpen(prevState => !prevState)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
