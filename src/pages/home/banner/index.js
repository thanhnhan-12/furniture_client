import React from 'react';
import './styles.scss';

const Banner = () => {
  return (
    <div className="bannerBg">
      <div className="bannerContent">
        <h3>New Arrival</h3>

        <h1>Discover Our New Collection</h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>

        <button className='btnBuyNow'>BUY NOW</button>
      </div>
    </div>
  );
};

export default Banner;
