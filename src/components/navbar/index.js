import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarLogo from '../../assets/icons/navbarLogo.jpg';
import NavbarIconCart from '../../assets/svg/navbarIconCart.svg';
import NavbarIconHeart from '../../assets/svg/navbarIconHeart.svg';
import NavbarIconSearch from '../../assets/svg/navbarIconSearch.svg';
import NavbarIconUser from '../../assets/svg/navbarIconUser.svg';
import './styles.scss';
import ShoppingCart from '../shoppingcart';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const [isShow, setIsShow] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(storedIsLoggedIn);
  }, []);

  return (
    <div className="containerNavbar">
      <div className="navbarLogo">
        <Link to="/">
          <img src={NavbarLogo} alt="" />
        </Link>
      </div>

      <div className="navbar">
        <ul className="nav">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="navbarIcons">
        <ul className="nav">
          {isAuthenticated || isLoggedIn ? (
            <li>
              <Link to="/">
                <img src={NavbarIconUser} alt="" />
              </Link>
            </li>
          ) : (
            <li>
              <Link
                to="/login"
                className="btnLogin"
                style={{
                  color: '#000',
                  fontSize: '1.6rem',
                  border: '1px solid #000',
                  borderRadius: '1.5rem',
                  padding: '0.5rem 1.5rem',
                }}
              >
                Login
              </Link>
            </li>
          )}

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
          <li onClick={() => setIsShow(true)} style={{ cursor: 'pointer' }}>
            <img src={NavbarIconCart} alt="" />
          </li>
        </ul>
      </div>
      {isShow && <ShoppingCart onClose={() => setIsShow(false)} />}
    </div>
  );
};

export default Navbar;
