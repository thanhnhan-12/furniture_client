import Grid from '@mui/material/Grid';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ProductIconHeart from '../../assets/svg/productIconHeart.svg';
import { formatPrice, notifyAddCart } from '../../constants/common';
import useStyles from './styles';
import { useAppDispatch, useAppSelector } from '../../redux';
import { addToCart } from '../../redux/cart/cartSlice';
import { createCart } from '../../redux/cart/cartAction';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getCartByUser } from '../../redux/cart/cartAction';

const ProductItems = ({ productList }) => {
  const classes = useStyles();

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { roles, token } = useAppSelector((state) => state.auth);

  const cartUser = useAppSelector((state) => state.cart.cartUser);

  const handleAddToCart = (productID) => {
    // console.log('Token:', token);
    if (!token) {
      navigate('/login');
    } else {
      notifyAddCart();
      // console.log('Product', productID);
      dispatch(createCart({ productID, quantity: 1 })).then(() => {
        dispatch(getCartByUser());
      });
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
      <ToastContainer draggable={false} transition={Zoom} autoClose={800} />
      {productList.map((list, index) => (
        <Grid key={index} item xs={3} className={classes.productItemList}>
          <div>
            <img
              src={list.nameImage}
              alt=""
              className={classes.nameImage}
              onClick={() => handleNavigate(list.productID)}
            />
            <div className={classes.productItemContent}>
              <h3 className={classes.productName}>{list.productName}</h3>
              <p className={classes.description}>{list.description}</p>
              <strong className={classes.price}>
                {formatPrice(Number(list.price))}
              </strong>
              <div
                style={{
                  marginTop: '10px',
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <button
                  className={classes.btnAddCart}
                  onClick={() => handleAddToCart(list.productID)}
                  style={{
                    marginRight: '12px',
                  }}
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
