import Grid from '@mui/material/Grid';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProductIconHeart from '../../assets/svg/productIconHeart.svg';
import { formatPrice } from '../../constants/common';
import useStyles from './styles';
import { useAppDispatch, useAppSelector } from '../../redux';
import { addToCart } from '../../redux/cart/cartSlice';
import { createCart } from '../../redux/cart/cartAction';

const ProductItems = ({ productList }) => {
  const classes = useStyles();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { roles, token } = useAppSelector((state) => state.auth);

  const handleAddToCart = (productID) => {
    // console.log('Token:', token);
    if (!token) {
      navigate('/login');
    } else {
      console.log("Product", productID);
      dispatch(createCart({productID, quantity: 1}));
    }
  };

  const handleNavigate = (productID) => {
    // console.log("ID: ", productID);
    navigate(`/product/${productID}`);
  };

  return (
    <Grid
      container
      columnSpacing={4}
      rowSpacing={4}
      sx={{
        marginTop: '32px',
      }}
    >
      {productList.map((list, index) => (
        <Grid key={index} item xs={3} className={classes.productItemList}>
          <div onClick={() => handleNavigate(list.productID)}>
            <img src={list.nameImage} alt="" className={classes.nameImage} />
            <div className={classes.productItemContent}>
              <h3 className={classes.productName}>{list.productName}</h3>
              <p className={classes.description}>{list.description}</p>
              <strong className={classes.price}>
                {formatPrice(Number(list.price))}
              </strong>
            </div>
          </div>

          <div
            className={classes.productHover}
            // onClick={() => handleNavigate(list.productID)}
            // style={{ position: 'absolute' }}
          >
            <div className={classes.displayFlex}>
              <div>
                <button
                  className={classes.btnAddCart}
                  onClick={() => handleAddToCart(list.productID)}
                >
                  Add to cart
                </button>
                <button className={classes.btnLike}>
                  <img src={ProductIconHeart} alt="" />
                  <span style={{ marginLeft: '8px' }}>Like</span>
                </button>
              </div>
            </div>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductItems;
