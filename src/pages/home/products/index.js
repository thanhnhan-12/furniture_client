import React, { useEffect } from 'react';
import useStyles from './styles';
import LayoutContainer from '../../../components/layoutcontainer/layoutcontainer';
import ProductItems from '../../../components/productitems';
import { Button } from '@mui/material';
import { getAllProduct } from '../../../redux/product/productAction';
import { useAppDispatch, useAppSelector } from '../../../redux';

export const productList = [
  {
    productID: 1,
    nameImage: require('../../../assets/images/productItem.jpg'),
    productName: 'Lolito',
    description: 'Stylish cafe chair',
    price: '1200 VND',
  },

  {
    productID: 2,
    nameImage: require('../../../assets/images/productItem.jpg'),
    productName: 'Lolito',
    description: 'Stylish cafe chair',
    price: '1200 VND',
  },

  {
    productID: 3,
    nameImage: require('../../../assets/images/productItem.jpg'),
    productName: 'Lolito',
    description: 'Stylish cafe chair',
    price: '1200 VND',
  },

  {
    productID: 4,
    nameImage: require('../../../assets/images/productItem.jpg'),
    productName: 'Lolito',
    description: 'Stylish cafe chair',
    price: '1200 VND',
  },

  {
    productID: 5,
    nameImage: require('../../../assets/images/productItem.jpg'),
    productName: 'Lolito',
    description: 'Stylish cafe chair',
    price: '1200 VND',
  },
];

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
        <ProductItems productList={products} />
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
