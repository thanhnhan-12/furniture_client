import { Box, Typography } from '@mui/material';
import React from 'react';
import useStyles from './styles';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../../constants/common';
import { useAppDispatch, useAppSelector } from '../../../redux';
import { setProductsSelected } from '../../../redux/cart/cartSlice';

const CartTotals = ({ cartID }) => {
  const cx = classNames.bind(useStyles());

  const dispatch = useAppDispatch();

  const cartTotals = useAppSelector((state) => state.cart.cartTotals);

  const productsSelected = useAppSelector(
    (state) => state.cart.productsSelected,
  );

  const isProductsSelected = productsSelected?.length > 0;

  // const productsSelect = productsSelected.some((product) => product.isSelected);


  return (
    <Box bgcolor="#F9F1E7" width="39.3rem" height="39rem" textAlign="center">
      <Typography className={cx('cartHeading')}>Cart Totals</Typography>

      <Box p="0 7.5rem" mb="5.6rem">
        <Box mt="6.1rem" display="flex" justifyContent="space-between">
          <Typography className={cx('txtTitle')}>Subtotal</Typography>
          <Typography className={cx('subTotal')}>
            {formatPrice(Number(cartTotals))}
          </Typography>
        </Box>

        <Box mt="3.1rem" display="flex" justifyContent="space-between">
          <Typography className={cx('txtTitle')}>Total</Typography>
          <Typography className={cx('total')}>
            {formatPrice(Number(cartTotals))}
          </Typography>
        </Box>
      </Box>

      {!isProductsSelected && (
        <Typography className={cx('warning')}>
          Please select at least one product before proceeding to checkout.
        </Typography>
      )}

      {isProductsSelected && (
        <Link to="/checkout" className={cx('btnCheckout')}>
          Check Out
        </Link>
      )}
    </Box>
  );
};

export default CartTotals;
