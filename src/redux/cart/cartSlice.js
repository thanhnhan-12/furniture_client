import { createSlice } from '@reduxjs/toolkit';
import { createCart } from './cartAction';

const initialState = {
  cart: [],
  loading: false,
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});


const { actions, reducer } = cartSlice;

export const { addToCart, removeFromCart, clearCart } = actions;

export default reducer;
