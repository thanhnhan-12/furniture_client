import { createSlice } from '@reduxjs/toolkit';
import {
  addAddress,
  deleteAddressByID,
  getAddressByUser,
} from './addressAction';

const initialState = {
  address: [],
  loading: false,
  error: null,
};

const addressSlice = createSlice({
  name: 'province',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAddressByUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAddressByUser.fulfilled, (state, action) => {
        state.loading = false;
        state.address = action.payload;
      })
      .addCase(getAddressByUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(addAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.address.push(action.payload);
      })
      .addCase(addAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(deleteAddressByID.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteAddressByID.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(deleteAddressByID.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const { reducer } = addressSlice;

export default reducer;
