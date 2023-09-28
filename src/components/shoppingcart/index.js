import CloseIcon from '@mui/icons-material/Close';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { Avatar, Box, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../constants/common';
import { useAppDispatch, useAppSelector } from '../../redux';
import { deleteCartByID, getCartByUser } from '../../redux/cart/cartAction';
import useStyles from './styles';
import CartEmpty from '../../assets/svg/CartEmpty.svg';

const ShoppingCart = ({ onClose }) => {
  const cx = classNames.bind(useStyles());

  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.cart.cartUser);

  // console.log('Cart: ', cartItems);

  const { token } = useAppSelector((state) => state.auth);

  // console.log('UserID: ', token);

  const totalAmount = cartItems.reduce((accumulator, currentItem) => {
    const productTotal = currentItem.quantity * currentItem.price; // Tính tổng tiền cho một sản phẩm
    return accumulator + productTotal; // Cộng tổng tiền của sản phẩm này vào tổng tổng giá tiền
  }, 0); // Giá trị ban đầu của accumulator là 0

  const handleRemoveCart = (cartID) => {
    // console.log('CartID: ', cartID);
    // notifyRemoveCart();
    dispatch(deleteCartByID(cartID)).then(() => {
      dispatch(getCartByUser());
    });
  };

  useEffect(() => {
    dispatch(getCartByUser());
  }, [dispatch]);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        zIndex: '1',
        bgcolor: 'rgba(0, 0, 0, 0.5)',
      }}
    >
      <Box
        sx={{
          width: '41.7rem',
          position: 'fixed',
          right: '0',
          top: '0',
          backgroundColor: '#fff',
          p: '2.8rem 3rem 0',
          zIndex: '2',
        }}
      >
        <div>
          <Box className={cx('common')} mb="3rem">
            <h3 className={cx('headingShopping')}>Shopping Cart</h3>
            <CloseIcon
              sx={{ fontSize: '2rem', cursor: 'pointer' }}
              onClick={onClose}
            />
          </Box>

          <div className={cx('border')}>
            {cartItems.length === 0 ? (
              <Box className={cx('common')}>
                {/* <Typography variant="h6">Your cart is empty</Typography> */}
                <Avatar
                  src={CartEmpty}
                  sx={{
                    width: '27.5rem',
                    height: '26.5rem',
                    m: 'auto',
                    p: '2rem 0',
                  }}
                />
              </Box>
            ) : (
              <Box>
                {cartItems.map((item, index) => (
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    key={index}
                  >
                    <Box
                      sx={{ p: '1rem 0 2.3rem' }}
                      gap="2rem"
                      className={cx('common')}
                    >
                      <div
                        style={{
                          backgroundColor: '#F9F1E7',
                          borderRadius: '1rem',
                        }}
                      >
                        <img
                          src={item.nameImage}
                          alt=""
                          className={cx('nameImage')}
                        />
                      </div>

                      <div className={cx('productCart')}>
                        <h4 className={cx('productName')}>
                          {item.productName}
                        </h4>
                        <Box className={cx('common')} sx={{ gap: '1rem' }}>
                          <Typography fontSize="1.6rem" color="#000">
                            {item.quantity}
                          </Typography>
                          <b>X</b>
                          <Typography fontSize="1.2rem" color="#B88E2F">
                            {formatPrice(Number(item.price))}
                          </Typography>
                        </Box>
                      </div>
                    </Box>

                    <HighlightOffRoundedIcon
                      fontSize="large"
                      onClick={() => handleRemoveCart(item.cartID)}
                    />
                  </Box>
                ))}
              </Box>
            )}

            {cartItems.length > 0 && (
              <Box display="flex" alignItems="center" gap="10.1rem" mb="2.3rem">
                <Typography fontSize="1.6rem" fontWeight="400" color="#000">
                  Subtotal
                </Typography>
                <Typography fontSize="1.6rem" fontWeight="400" color="#B88E2F">
                  {formatPrice(Number(totalAmount))}
                </Typography>
              </Box>
            )}
          </div>

          <Box p="2.6rem 0" className={cx('common')}>
            <Link to="/cart" className={cx('btnCart')}>
              Cart
            </Link>
            <Link to="/checkout" className={cx('btnCart')}>
              Checkout
            </Link>
          </Box>
        </div>
      </Box>
    </Box>
  );
};

export default ShoppingCart;
