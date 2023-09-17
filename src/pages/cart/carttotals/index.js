import { Box, Typography } from '@mui/material';
import React from 'react';
import useStyles from './styles';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { formatPrice } from '../../../constants/common';

const CartTotals = ({ cartTotals }) => {
  const cx = classNames.bind(useStyles());

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

      <Link to="/checkout" className={cx('btnCheckout')}>
        Check Out
      </Link>
    </Box>
  );
};

export default CartTotals;
