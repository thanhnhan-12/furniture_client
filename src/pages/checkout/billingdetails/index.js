import { Box, Button, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import React, { useEffect } from 'react';
import useStyles from './styles';
import { formatPrice } from '../../../constants/common';
import { useAppDispatch, useAppSelector } from '../../../redux';
import { setProductsSelected } from '../../../redux/cart/cartSlice';
import { checkCartForm } from '../../../redux/order/orderSlice';
import { schemaCheckout } from '../../../constants/schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

const BillingDetails = () => {
  const cx = classNames.bind(useStyles());

  const dispatch = useAppDispatch();

  // const watch = watch();

  const orderProduct = useAppSelector((state) => state.order.order);

  const productsSelected = useAppSelector(
    (state) => state.cart.productsSelected,
  );

  // console.log('Product Selected: ', productsSelected);

  const handlePlaceOrder = (data) => {
    console.log('Data: ', data);
  };

  return (
    <Box
      width="35%"
      display="flex"
      flexDirection="column"
      gap="2.2rem"
      // component="form"
      // onSubmit={handleSubmit(handleOnSubmit)}
    >
      <Box className={cx('flex')}>
        <Typography component="h2" className={cx('productHeading', 'mb')}>
          Product
        </Typography>

        <Typography component="h2" className={cx('productHeading')}>
          Subtotal
        </Typography>
      </Box>

      {productsSelected?.map((product, index) => (
        <Box className={cx('flex')} key={index}>
          <Typography className={cx('fs')} sx={{ color: '#9F9F9F' }}>
            {product.productName}
            <span style={{ color: '#000', fontSize: '1.2rem' }}>
              X {product.quantity}
            </span>
          </Typography>

          <Typography
            className={cx('fs')}
            sx={{ fontWeight: '300 !imoportant' }}
          >
            {formatPrice(Number(product.price * product.quantity))}
          </Typography>
        </Box>
      ))}

      <Box className={cx('flex')}>
        <Typography className={cx('fs')} sx={{ fontWeight: '400 !imoportant' }}>
          Subtotal
        </Typography>

        <Typography className={cx('fs')} sx={{ fontWeight: '300 !imoportant' }}>
          250 VND
        </Typography>
      </Box>

      <Box className={cx('flex')}>
        <Typography className={cx('fs')} sx={{ fontWeight: '400 !imoportant' }}>
          Total
        </Typography>
        <Typography className={cx('total')}>250 VND</Typography>
      </Box>

      <Box borderTop="1px solid #D9D9D9" paddingTop="2.25rem">
        <Typography className={cx('fs')}>Direct Bank Transfer</Typography>
        <Typography
          className={cx('fs', 'transfer')}
          sx={{ textAlign: 'justify' }}
        >
          Make your payment directly into our bank account. Please use your
          Order ID as the payment reference. Your order will not be shipped
          until the funds have cleared in our account.
        </Typography>
        <Typography
          className={cx('fs')}
          sx={{ margin: '2.2rem 0 3.9rem', textAlign: 'justify' }}
        >
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <b>privacy policy</b> .
        </Typography>
        <Button className={cx('btnOrder')} type="submit" form='checkout' >
          Place order
        </Button>
      </Box>
    </Box>
  );
};

export default BillingDetails;
