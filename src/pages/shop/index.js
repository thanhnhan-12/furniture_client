import React, { useEffect } from 'react';
import BackgroundBanner from '../../components/backgroundbanner';
import Filter from './filter';
import ProductItems from '../../components/productitems';
import { productList } from '../home/products';
import LayoutContainer from '../../components/layoutcontainer/layoutcontainer';
import { Pagination } from '@mui/material';
import Services from '../../components/services';
import { useAppDispatch, useAppSelector } from '../../redux';
import { getAllProduct } from '../../redux/product/productAction';

const Shop = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.product.products);

  const loading = useAppSelector((state) => state.product.loading);

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <BackgroundBanner heading="Shop" title="Shop" />
      <Filter />
      <LayoutContainer>
        <ProductItems productList={products} />
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          size="large"
          sx={{
            m: '7rem 0 8.5rem',
            display: 'flex',
            justifyContent: 'center',
            '& button': {
              fontSize: '2rem',
              bgcolor: '#F9F1E7',
              border: 'none',
            },
            '& .css-kvsszq-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected':
              {
                bgcolor: '#B88E2F',
                color: '#fff',
              },
          }}
        />
      </LayoutContainer>
      <Services />
    </div>
  );
};

export default Shop;
