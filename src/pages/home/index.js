import React from 'react';
import Banner from './banner';
import Category from './category';
import Products from './products';
import Rooms from './rooms';

const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <Products />
      <Rooms />
    </div>
  );
};

export default Home;
