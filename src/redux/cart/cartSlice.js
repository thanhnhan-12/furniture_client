import { createSlice } from '@reduxjs/toolkit';
import { deleteCartByID, getCartByUser } from './cartAction';

const initialState = {
  cart: [],
  cartUser: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },

    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    },

    checkedCart: (state, action) => {
      const { cartID, checked } = action.payload;
      console.log(cartID, checked);
      const index = state.cartUser.findIndex((item) => item.cartID === cartID);
      console.log({ index });
      if (index >= 0) {
        state.cartUser[index].checked = checked;
      }
    },

    clearCart: (state) => {
      state.cart = [];
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
      });
  },
});

const { actions, reducer } = cartSlice;

export const { addToCart, removeFromCart, clearCart, checkedCart } = actions;

export default reducer;
