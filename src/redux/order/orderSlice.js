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
  extraReducers: (builder) => {},
});

const { actions, reducer } = orderSlice;

export const { checkCartForm } = actions;

export default reducer;
