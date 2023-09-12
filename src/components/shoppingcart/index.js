import CloseIcon from '@mui/icons-material/Close';
import HighlightOffRoundedIcon from '@mui/icons-material/HighlightOffRounded';
import { Box, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import React from 'react';
import { Link } from 'react-router-dom';
import NameImage2 from '../../assets/images/ProductImages/nameImage2.png';
import useStyles from './styles';
import { useAppSelector } from '../../redux';

const shopCart = [
  {
    cartID: 1,
    nameImage: NameImage2,
    productName: 'Sofa',
    quantity: 1,
    price: '250 VND',
  },

  {
    cartID: 2,
    nameImage: NameImage2,
    productName: 'Sofa',
    quantity: 1,
    price: '250 VND',
  },
];

const ShoppingCart = ({ onClose }) => {
  const cx = classNames.bind(useStyles());

  const cartItems = useAppSelector((state) => state.cart.items);

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
            {shopCart.map((item, index) => (
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
                    style={{ backgroundColor: '#F9F1E7', borderRadius: '1rem' }}
                  >
                    <img
                      src={item.nameImage}
                      alt=""
                      className={cx('nameImage')}
                    />
                  </div>

                  <div className={cx('productCart')}>
                    <h4 className={cx('productName')}>{item.productName}</h4>
                    <Box className={cx('common')} sx={{ gap: '1rem' }}>
                      <Typography fontSize="1.6rem" color="#000">
                        {item.quantity}
                      </Typography>
                      <b>X</b>
                      <Typography fontSize="1.2rem" color="#B88E2F">
                        {item.price}
                      </Typography>
                    </Box>
                  </div>
                </Box>

                <HighlightOffRoundedIcon fontSize="large" />
              </Box>
            ))}

            <Box display="flex" alignItems="center" gap="10.1rem" mb="2.3rem">
              <Typography fontSize="1.6rem" fontWeight="400" color="#000">
                Subtotal
              </Typography>
              <Typography fontSize="1.6rem" fontWeight="400" color="#B88E2F">
                520 VND
              </Typography>
            </Box>
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
