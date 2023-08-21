import React from 'react';
import Banner from './banner';
import Category from './category';
import Products from './products';
import Rooms from './rooms';
import Share from './share';

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Products />
      <Rooms />
      <Share />
    </div>
  );
};

export default Home;
