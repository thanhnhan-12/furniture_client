import React, { useEffect } from 'react';
import useStyles from './styles';
import LayoutContainer from '../../../components/layoutcontainer/layoutcontainer';
import ProductItems from '../../../components/productitems';
import { Button } from '@mui/material';
import { getAllProduct } from '../../../redux/product/productAction';
import { useAppDispatch, useAppSelector } from '../../../redux';
import Loader from '../../../utils/loader';

const Products = () => {
  const classes = useStyles();

  const dispatch = useAppDispatch();

  const products = useAppSelector((state) => state.product.products);

  useEffect(() => {
    // console.log('LOG', dispatch);
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <LayoutContainer>
      <div className="products">
        <h1 className={classes.title}>Our Products</h1>
        {products && products.length ? (
          <>
            <ProductItems productList={products} />
          </>
        ) : (
          <>
            <Loader />
          </>
        )}
        <div style={{ textAlign: 'center' }}>
          <Button variant="outlined" className={classes.btnShowMore}>
            Show More
          </Button>
        </div>
      </div>
    </LayoutContainer>
  );
};

export default Products;
