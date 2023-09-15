import { createSlice } from '@reduxjs/toolkit';
import { getCartByUser } from './cartAction';

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
      });
  },
});

const { actions, reducer } = cartSlice;

export const { addToCart, removeFromCart, clearCart } = actions;

export default reducer;
