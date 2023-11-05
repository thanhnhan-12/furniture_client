import { Pagination } from '@mui/material';
import React, { useEffect } from 'react';
import BackgroundBanner from '../../components/backgroundbanner';
import LayoutContainer from '../../components/layoutcontainer/layoutcontainer';
import ProductItems from '../../components/productitems';
import Services from '../../components/services';
import { useAppDispatch, useAppSelector } from '../../redux';
import { getAllProduct } from '../../redux/product/productAction';
import Loader from '../../utils/loader';
import Filter from './filter';

const Shop = () => {
  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <div>
      <BackgroundBanner heading="Shop" title="Shop" />
      <Filter />
      <LayoutContainer>
        {products && products.length ? (
          <>
            <ProductItems productList={products} />
          </>
        ) : (
          <>
            <Loader />
          </>
        )}
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
