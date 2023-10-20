import { Box, Button, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import useStyles from './styles';
import { formatPrice } from '../../../constants/common';
import { useAppDispatch, useAppSelector } from '../../../redux';
import {
  refreshCheckout,
  setProductsSelected,
} from '../../../redux/cart/cartSlice';
import { checkCartForm } from '../../../redux/order/orderSlice';
import { schemaCheckout } from '../../../constants/schema';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import TransitionAlerts from './transitionalerts';
import { createOrder } from '../../../redux/order/orderAction';

const BillingDetails = () => {
  const cx = classNames.bind(useStyles());

  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.cart.cartUser);

  // console.log('cartItems', cartItems);

  const cartTotals = useAppSelector((state) => state.cart.cartTotals);

  const totalAmount =
    cartItems && cartItems.length > 0
      ? cartItems.reduce((accumulator, currentItem) => {
          const productTotal = currentItem.quantity * currentItem.price; // Tính tổng tiền cho một sản phẩm
          return accumulator + productTotal; // Cộng tổng tiền của sản phẩm này vào tổng tổng giá tiền
        }, 0)
      : 0; // Giá trị ban đầu của accumulator là 0

  const product = useAppSelector((state) => state.product.product);

  const orderProduct = useAppSelector((state) => state.order.order);

  const saveAddress = useAppSelector((state) => state.address.saveAddress);

  const [openAlert, setOpenAlert] = useState(false);

  const handleOpenAlert = () => {
    setOpenAlert(true);
  };

  const productsSelected = useAppSelector(
    (state) => state.cart.productsSelected,
  );

  // console.log('Product Selected: ', productsSelected);

  const handlePlaceOrder = () => {
    // console.log('AddressID: ', addressID);
    if (saveAddress.length === 0) {
      handleOpenAlert();
    } else if (productsSelected.length === 0) {
      handleOpenAlert();
    } else {
      dispatch(
        createOrder({
          cartIDs: [...productsSelected.map((item) => item.cartID)],
          addressID: saveAddress.addressID,
          orderItems: productsSelected.map((item) => {
            return {
              productID: item.productID,
              quantity: item.quantity,
            };
          }),
        }),
      );

      dispatch(refreshCheckout());
    }
  };

  return (
    <Box width="35%" display="flex" flexDirection="column" gap="2.2rem">
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

        {/* {productsSelected?.map((product, index) => ( */}
        <Typography
          className={cx('fs')}
          sx={{ fontWeight: '300 !imoportant' }}
          // key={index}
        >
          {formatPrice(Number(cartTotals))}
        </Typography>
        {/* ))} */}
      </Box>

      <Box className={cx('flex')}>
        <Typography className={cx('fs')} sx={{ fontWeight: '400 !imoportant' }}>
          Total
        </Typography>
        {/* {productsSelected?.map((product, index) => ( */}
        <Typography className={cx('total')}>
          {formatPrice(Number(cartTotals))}
        </Typography>
        {/* ))} */}
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
        <Button
          className={cx('btnOrder')}
          type="submit"
          form="formCheckout"
          onClick={handlePlaceOrder}
        >
          Place order
        </Button>

        {openAlert && (
          <TransitionAlerts openAlert={openAlert} setOpenAlert={setOpenAlert} />
        )}
      </Box>
    </Box>
  );
};

export default BillingDetails;
