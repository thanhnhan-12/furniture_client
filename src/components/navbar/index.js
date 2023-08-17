import React from 'react';
import { Link } from 'react-router-dom';
import NavbarLogo from '../../assets/icons/navbarLogo.jpg';
import NavbarIconCart from '../../assets/svg/navbarIconCart.svg';
import NavbarIconHeart from '../../assets/svg/navbarIconHeart.svg';
import NavbarIconSearch from '../../assets/svg/navbarIconSearch.svg';
import NavbarIconUser from '../../assets/svg/navbarIconUser.svg';
import './styles.scss';

const Navbar = () => {
  return (
    <div className="containerNavbar">
      <div className="navbarLogo">
        <img src={NavbarLogo} alt="" />
      </div>

      <div className="navbar">
        <ul>
          <li>
            <Link to="">Home</Link>
          </li>
          <li>
            <Link to="">Shop</Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
          <li>
            <Link to="">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="navbarIcons">
        <ul>
          <li>
            <Link to="">
              <img src={NavbarIconUser} alt="" />
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={NavbarIconSearch} alt="" />
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={NavbarIconHeart} alt="" />
            </Link>
          </li>
          <li>
            <Link to="">
              <img src={NavbarIconCart} alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
