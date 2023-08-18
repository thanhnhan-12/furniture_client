import React from 'react';
import useStyles from './styles';
import LayoutContainer from '../../../components/layoutcontainer/layoutcontainer';
import ProductItems from '../../../components/productitems';

const productList = [
  {
    img: require('../../../assets/images/productItem.jpg'),
    name: 'Lolito',
    des: 'Stylish cafe chair',
    price: '1200 VND',
  },

  {
    img: require('../../../assets/images/productItem.jpg'),
    name: 'Lolito',
    des: 'Stylish cafe chair',
    price: '1200 VND',
  },

  {
    img: require('../../../assets/images/productItem.jpg'),
    name: 'Lolito',
    des: 'Stylish cafe chair',
    price: '1200 VND',
  },

  {
    img: require('../../../assets/images/productItem.jpg'),
    name: 'Lolito',
    des: 'Stylish cafe chair',
    price: '1200 VND',
  },

  {
    img: require('../../../assets/images/productItem.jpg'),
    name: 'Lolito',
    des: 'Stylish cafe chair',
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
      </div>
    </LayoutContainer>
  );
};

export default Products;
