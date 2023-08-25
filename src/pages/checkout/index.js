import { Box, Typography } from '@mui/material';
import React from 'react';
import BackgroundBanner from '../../components/backgroundbanner';
import LayoutContainer from '../../components/layoutcontainer/layoutcontainer';
import FormCheckout from './formcheckout';
import BillingDetails from './billingdetails';
import Services from '../../components/services';

const Checkout = () => {
  return (
    <Box>
      <BackgroundBanner heading="Checkout" title="Checkout" />
      <LayoutContainer>
        <Typography
          sx={{
            fontSize: '3.6rem !important',
            fontWeight: '600 !important',
            color: '#000',
            margin: '9.8rem 0 3.6rem',
          }}
        >
          Billing details
        </Typography>

        <Box
          display="flex"
          alignItems="baseline"
          justifyContent="space-between"
          mb="12.3rem"
        >
          <FormCheckout />
          <BillingDetails />
        </Box>
      </LayoutContainer>

      <Services />
    </Box>
  );
};

export default Checkout;
