import { Box } from '@mui/material';
import React from 'react';

const Path = [
  {
    subheader: 'Customers',
    children: [
      {
        icon: '',
        label: 'Customers',
        to: '/admin/customer',
      },
    ],
  },

  {
    subheader: 'Product',
    children: [
      {
        icon: '',
        label: 'Product',
        to: '/admin/product',
      },
    ],
  },

  {
    subheader: 'Orders',
    children: [
      {
        icon: '',
        label: 'Orders',
        to: '/admin/order',
      },
    ],
  },
];

export default Path;
