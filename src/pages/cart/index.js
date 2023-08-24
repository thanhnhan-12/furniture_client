import { Box } from '@mui/material';
import React from 'react';
import BackgroundBanner from '../../components/backgroundbanner';
import LayoutContainer from '../../components/layoutcontainer/layoutcontainer';
import CartProduct from './cartproduct';
import CartTotals from './carttotals';
import Services from '../../components/services';

const Cart = () => {
  return (
    <Box>
      <BackgroundBanner heading="Cart" title="Cart" />
      <LayoutContainer>
        <Box display="flex" justifyContent="space-between" p="7.2rem 0 8.5rem">
          <CartProduct />
          <CartTotals />
        </Box>
      </LayoutContainer>
      <Services />
    </Box>
  );
};

export default Cart;
