import React, { useEffect, useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import useStyles from './styles';
import classNames from 'classnames/bind';
import { Box, Checkbox, Typography } from '@mui/material';
import { formatPrice } from '../../../constants/common';
import { CheckBox } from '@mui/icons-material';
import { useAppDispatch } from '../../../redux';
import { checkedCart } from '../../../redux/cart/cartSlice';

const CartProduct = ({ cartProds, handleRemoveCart, handleCheckedCart }) => {
  const cx = classNames.bind(useStyles());

  const dispatch = useAppDispatch();

  const [isCheckedAll, setIsCheckedAll] = useState(false);

  const handleOnChecked = (cartID, checked) => {
    console.log(checked);
    dispatch(
      checkedCart({
        cartID,
        checked: checked || false ,
      }),
    );
  };

  const handleCheckAll = () => {
    setIsCheckedAll(!isCheckedAll);
    cartProds.forEach((item) => {
      handleOnChecked(item.cartID, !isCheckedAll);
    });
  };

  // console.log('Cart Producs: ', cartProds);

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
        <Checkbox size="" sx={{ fontSize: '2rem' }} checked={isCheckedAll} onChange={handleCheckAll} />

        <Typography className={cx('txtTitle')}>Product</Typography>
        <Typography className={cx('txtTitle')}>Price</Typography>
        <Typography className={cx('txtTitle')}>Quantity</Typography>
        <Typography className={cx('txtTitle')}>Subtotal</Typography>
      </Box>

      <Box>
        {cartProds.map((item, index) => (
          <Box
            key={index}
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            m="5.5rem 0 3.5rem"
          >
            <Checkbox
              checked={item?.checked || false }
              sx={{ fontSize: '2rem' }}
              onChange={() => handleOnChecked(item.cartID, item.checked)}
            />

            <div style={{ backgroundColor: '#F9F1E7', borderRadius: '1rem' }}>
              <img src={item.nameImage} alt="" className={cx('nameImage')} />
            </div>

            <Box className={cx('d')}>
              <Typography className={cx('txtTitle')}>
                {item.productName}
              </Typography>
              <Typography className={cx('txtTitle')}>
                {formatPrice(Number(item.price))}
              </Typography>
              <Typography className={cx('txtTitle')}>
                {item.quantity}
              </Typography>
              <Typography className={cx('txtTitle')}>
                {formatPrice(Number(item.price * item.quantity))}
              </Typography>
              <DeleteIcon
                fontSize="large"
                onClick={() => handleRemoveCart(item.cartID)}
                sx={{ color: '#B88E2F', cursor: 'pointer' }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CartProduct;
