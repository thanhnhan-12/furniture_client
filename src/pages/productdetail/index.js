import React from 'react';
import CustomBreadCrumb from '../../components/custombreadcrumb';
import LayoutContainer from '../../components/layoutcontainer/layoutcontainer';
import { Box } from '@mui/material';
import ProductDetails from './productdetails';

const ProductDetail = () => {
  return (
    <div>
      <CustomBreadCrumb root="Home" children="Shop" name="Product Name" />
      <LayoutContainer>
        <Box>
          <ProductDetails />
        </Box>
      </LayoutContainer>
    </div>
  );
};

export default ProductDetail;
