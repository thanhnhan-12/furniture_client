import React, { useEffect, useRef, useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import NavbarLogo from '../../assets/icons/navbarLogo.jpg';
import NavbarIconCart from '../../assets/svg/navbarIconCart.svg';
import NavbarIconHeart from '../../assets/svg/navbarIconHeart.svg';
import NavbarIconSearch from '../../assets/svg/navbarIconSearch.svg';
import NavbarIconUser from '../../assets/svg/navbarIconUser.svg';
import './styles.scss';
import ShoppingCart from '../shoppingcart';
import { useSelector } from 'react-redux';
import Options from '../options';

const Navbar = () => {
  const navigate = useNavigate();

  const [isShow, setIsShow] = useState(false);

  const [isShows, setIsShows] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const shoppingCartRef = useRef(null);

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(storedIsLoggedIn);
  }, []);

  const handleCartClick = () => {
    if (!isAuthenticated) {
      navigate('/login')
    } else {
      setIsShow(true);
    }
  };

  const handleClose = (e) => {
    // if (
    //   isShow &&
    //   shoppingCartRef.current &&
    //   !shoppingCartRef.current.contains(e.target)
    // ) {
    //   console.log('OUTSIDE');
    //   setIsShow(true);
    // } else if (
    //   !isShow &&
    //   shoppingCartRef.current &&
    //   shoppingCartRef.current.contains(e.target)
    // ) {
    //   console.log('INSIDE');
    //   setIsShow(false);
    // }
  };

  // useEffect(() => {
  //   document.addEventListener('click', handleClose, true);
  // }, []);

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
            <li onClick={() => setIsShows(true)}>
              <img src={NavbarIconUser} alt="" style={{ cursor: 'pointer' }} />
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
      {isShow && (
        <div ref={shoppingCartRef}>
          <ShoppingCart onClose={() => setIsShow(false)} />
        </div>
      )}

      {isShows && <Options />}
    </div>
  );
};

export default Navbar;
