import { createSlice } from '@reduxjs/toolkit';
import { createOrder } from './orderAction';

const initialState = {
  order: [],
  cartForm: [],
  loading: false,
  error: null,
};

const orderSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    checkCartForm: (state, action) => {
      state.cartForm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createOrder.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.loading = false;
        state.order = action.payload;
      })
      .addCase(createOrder.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const { actions, reducer } = orderSlice;

export const { checkCartForm } = actions;

export default reducer;
