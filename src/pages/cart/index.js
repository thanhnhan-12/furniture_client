import { Box } from '@mui/material';
import React, { useEffect } from 'react';
import BackgroundBanner from '../../components/backgroundbanner';
import LayoutContainer from '../../components/layoutcontainer/layoutcontainer';
import CartProduct from './cartproduct';
import CartTotals from './carttotals';
import Services from '../../components/services';
import { useAppDispatch, useAppSelector } from '../../redux';
import { deleteCartByID, getCartByUser } from '../../redux/cart/cartAction';
import { notifyRemoveCart } from '../../constants/common';
import { ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartData from './cartdata';

const Cart = ({ total }) => {
  const dispatch = useAppDispatch();

  const cartItems = useAppSelector((state) => state.cart.cartUser);

  const { token } = useAppSelector((state) => state.auth);

  const totalAmount =
    cartItems.length > 0 &&
    cartItems?.reduce((accumulator, currentItem) => {
      const productTotal = currentItem.quantity * currentItem.price; // Tính tổng tiền cho một sản phẩm
      return accumulator + productTotal; // Cộng tổng tiền của sản phẩm này vào tổng tổng giá tiền
    }, 0); // Giá trị ban đầu của accumulator là 0

  const handleRemoveCart = (cartID) => {
    // console.log('CartID: ', cartID);
    notifyRemoveCart();
    dispatch(deleteCartByID(cartID)).then(() => {
      dispatch(getCartByUser());
    });
  };

  useEffect(() => {
    dispatch(getCartByUser());
  }, [dispatch]);

  return (
    <Box>
      <BackgroundBanner heading="Cart" title="Cart" />
      <LayoutContainer>
        <Box
          display="flex"
          justifyContent="space-between"
          p="7.2rem 0 8.5rem"
          gap="3rem"
        >
          <ToastContainer draggable={false} transition={Zoom} autoClose={800} />

          {/* <CartProduct
            cartProds={cartItems}
            handleRemoveCart={handleRemoveCart}
          /> */}

          <CartData rows={cartItems} handleRemoveCart={handleRemoveCart} />

          <CartTotals cartID={cartItems.cartID} />
        </Box>
      </LayoutContainer>
      <Services />
    </Box>
  );
};

export default Cart;
