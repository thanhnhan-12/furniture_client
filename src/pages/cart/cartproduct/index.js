import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import useStyles from './styles';
import classNames from 'classnames/bind';
import { Box, Typography } from '@mui/material';
import NameImage2 from '../../../assets/images/ProductImages/nameImage2.png';

const cartProd = [
  {
    cartID: 1,
    productID: 1,
    userID: 1,
    nameImage: NameImage2,
    productName: 'Sofa',
    price: '250 VND',
    quantity: 12,
    subtotal: '250 VND',
  },
];

const CartProduct = () => {
  const cx = classNames.bind(useStyles());

  return (
    <Box>
      <Box
        bgcolor="#F9F1E7"
        p="1.5rem 14.6rem"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gap="9.8rem"
      >
        <Typography className={cx('txtTitle')}>Product</Typography>
        <Typography className={cx('txtTitle')}>Price</Typography>
        <Typography className={cx('txtTitle')}>Quantity</Typography>
        <Typography className={cx('txtTitle')}>Subtotal</Typography>
      </Box>

      <Box mt="5.5rem">
        {cartProd.map((item, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <div style={{ backgroundColor: '#F9F1E7', borderRadius: '1rem' }}>
              <img src={item.nameImage} alt="" className={cx('nameImage')} />
            </div>

            <Box className={cx('d')}>
              <Typography className={cx('txtTitle')}>
                {item.productName}
              </Typography>
              <Typography className={cx('txtTitle')}>{item.price}</Typography>
              <Typography className={cx('txtTitle')}>
                {item.quantity}
              </Typography>
              <Typography className={cx('txtTitle')}>
                {item.subtotal}
              </Typography>
              <DeleteIcon fontSize="large" sx={{ color: '#B88E2F' }} />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CartProduct;
