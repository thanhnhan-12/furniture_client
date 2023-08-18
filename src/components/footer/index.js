import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Footer = () => {
  return (
    <div className="containerFooter">
      <div className="funiro">
        <div className="column1">
          <b>Funiro.</b>
          <p className="addressFooter">
            400 University Drive Suite 200 Coral Gables,
            <span style={{ display: 'block' }}> FL 33134 USA</span>
          </p>
        </div>

        <div className="column2">
          <p className="space">Links</p>
          <ul className="navFooter">
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

        <div className="column3">
          <p className="space">Help</p>
          <ul className="navFooter">
            <li>
              <Link to="">Payment Options</Link>
            </li>
            <li>
              <Link to="">Returns</Link>
            </li>
            <li>
              <Link to="">Privacy Policies</Link>
            </li>
          </ul>
        </div>

        <div className="column4">
          <p className="space">Newsletter</p>
          <div>
            <input type="email" placeholder="Enter Your Email Address" />
            <Link to="" className="subscribe">
              SUBSCRIBE
            </Link>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p className='' >2023 furino. All rights reverved</p>
      </div>
    </div>
  );
};

export default Footer;
