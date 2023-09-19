import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import BackgroundBanner from '../../components/backgroundbanner';
import LayoutContainer from '../../components/layoutcontainer/layoutcontainer';
import FormCheckout from './formcheckout';
import BillingDetails from './billingdetails';
import Services from '../../components/services';
import {
  getDistrict,
  getProvince,
  getWard,
} from '../../redux/address/addressAction';
import { useAppDispatch, useAppSelector } from '../../redux';

const Checkout = () => {
  const dispatch = useAppDispatch();
  const district = useAppSelector((state) => state.district.district);

  useEffect(() => {
    dispatch(getProvince());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getDistrict());
  }, [dispatch]);

  useEffect(() => {
    if (district.length > 0) return dispatch(getWard());
  }, [dispatch]);

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
