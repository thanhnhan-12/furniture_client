import { createSlice } from '@reduxjs/toolkit';
import { deleteCartByID, getCartByUser, updateCart } from './cartAction';

const savedProducts = JSON.parse(localStorage.getItem('productsSelected'));

const initialState = {
  cart: [],
  cartUser: [],
  cartTotals: 0,
  productsSelected: savedProducts || [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    totalPrice: (state, action) => {
      const carts = action.payload;
      state.cartTotals = 0;
      if (carts && carts.length > 0) {
        for (let index = 0; index < carts.length; index++) {
          const element = carts[index];
          const cart = state.cartUser.filter(
            (item) => item.cartID === element,
          )[0];
          state.cartTotals += cart.price * cart.quantity;
        }
      }
    },

    setProductsSelected: (state, action) => {
      state.productsSelected = action.payload;
      state.cartTotals = action.payload;
      localStorage.setItem(
        'productsSelected',
        JSON.stringify(state.productsSelected),
      );
      localStorage.setItem('cartTotals', JSON.stringify(state.cartTotals));
    },

    refreshCheckout: (state) => {
      state.productsSelected = [];
      state.cartTotals = [];
      state.loading = false;
      state.error = null;
      localStorage.removeItem('productsSelected');
      localStorage.removeItem('cartTotals');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCartByUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCartByUser.fulfilled, (state, action) => {
        state.loading = false;
        state.cartUser = action.payload;
      })
      .addCase(getCartByUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(deleteCartByID.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCartByID.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteCartByID.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(updateCart.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCart.fulfilled, (state, action) => {
        state.cartUser = action.payload;
      })
      .addCase(updateCart.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const { actions, reducer } = cartSlice;

export const {
  addToCart,
  removeFromCart,
  clearCart,
  checkedCart,
  totalPrice,
  setProductsSelected,
  refreshCheckout,
} = actions;

export default reducer;
