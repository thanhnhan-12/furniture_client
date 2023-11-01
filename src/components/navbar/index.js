import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import NavbarLogo from '../../assets/icons/navbarLogo.jpg';
import NavbarIconCart from '../../assets/svg/navbarIconCart.svg';
import NavbarIconHeart from '../../assets/svg/navbarIconHeart.svg';
import NavbarIconSearch from '../../assets/svg/navbarIconSearch.svg';
import NavbarIconUser from '../../assets/svg/navbarIconUser.svg';
import { useAppDispatch, useAppSelector } from '../../redux';
import { PrivateUser } from '../../routes/private/user';
import Options from '../options';
import ShoppingCart from '../shoppingcart';
import './styles.scss';
import { getCartByUser } from '../../redux/cart/cartAction';

const Navbar = () => {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const [isShow, setIsShow] = useState(false);

  const [isShows, setIsShows] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const { token } = useAppSelector((state) => state.auth);

  const userInfor = useAppSelector((state) => state.auth.userInfor);

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(storedIsLoggedIn);
  }, []);

  const cartItemsLength = useAppSelector((state) => state.cart.cartUser);

  useEffect(() => {
    if (token) {
      dispatch(getCartByUser());
    }
  }, [dispatch]);

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
          <li
            onClick={() => {
              setIsShow(!isShow);
              dispatch(getCartByUser());
            }}
            style={{ cursor: 'pointer' }}
          >
            <img src={NavbarIconCart} alt="" />
          </li>
          {isAuthenticated || isLoggedIn ? (
            <div className="cartItemsLength">{cartItemsLength.length}</div>
          ) : (
            <div></div>
          )}
        </ul>
      </div>

      {/* <PrivateUser> */}
        <ShoppingCart shown={isShow} onClose={() => setIsShow(false)} />
      {/* </PrivateUser> */}

      <Options show={isShows} close={() => setIsShows(false)} />
    </div>
  );
};

export default Navbar;
