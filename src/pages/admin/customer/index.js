import React from 'react';
import { Box, Typography } from '@mui/material';
import CustomerTable from './customertable';

const Customers = () => {
  return (
    <Box sx={{ mr: '1.5rem' }}>
      <CustomerTable />
    </Box>
  );
};

export default Customers;
