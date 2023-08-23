import React from 'react';
import CustomBreadCrumb from '../../components/custombreadcrumb';
import LayoutContainer from '../../components/layoutcontainer/layoutcontainer';
import { Box, Button } from '@mui/material';
import ProductDetails from './productdetails';
import ProductImage from './productimage';
import ProductDescription from './productdescription';
import ProductItems from '../../components/productitems';
import { productList } from '../home/products';
import theme from '../../theme';

const ProductDetail = () => {
  return (
    <div>
      <CustomBreadCrumb root="Home" children="Shop" name="Product Name" />

      <Box sx={{ marginTop: '3.5rem' }}>
        <LayoutContainer>
          <Box sx={{ display: 'flex', alignItems: 'baseline' }}>
            <ProductImage />
            <ProductDetails />
          </Box>
        </LayoutContainer>

        <div
          style={{
            borderTop: '1px solid #D9D9D9',
            borderBottom: '1px solid #D9D9D9',
            padding: '4.8rem 0',
          }}
        >
          <LayoutContainer>
            <ProductDescription />
          </LayoutContainer>
        </div>

        <LayoutContainer>
          <h2
            style={{
              color: '#000',
              fontSize: '3.6rem',
              fontWeight: '500',
              textAlign: 'center',
              marginTop: '5.5rem',
            }}
          >
            Related Products
          </h2>

          <ProductItems productList={productList} />

          <div style={{ textAlign: 'center', marginBottom: '9.2rem' }}>
            <Button
              variant="outlined"
              sx={{
                color: `${theme.palette.secondary.contrastText}!important`,
                border: `1px solid ${theme.palette.secondary.contrastText}!important`,
                padding: '12px 82px !important',
                fontWeight: '600 !important',
                fontSize: '1.6rem !important',
                '&:hover': {
                  backgroundColor: `${theme.palette.secondary.contrastText}!important`,
                  color: '#fff !important',
                },
              }}
            >
              Show More
            </Button>
          </div>
        </LayoutContainer>
      </Box>
    </div>
  );
};

export default ProductDetail;
