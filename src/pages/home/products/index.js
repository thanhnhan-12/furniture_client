import React from 'react';
import useStyles from './styles';
import LayoutContainer from '../../../components/layoutcontainer/layoutcontainer';
import ProductItems from '../../../components/productitems';
import { Button } from '@mui/material';

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

  return (
    <LayoutContainer>
      <div className="products">
        <h1 className={classes.title}>Our Products</h1>
        <ProductItems productList={productList} />
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
