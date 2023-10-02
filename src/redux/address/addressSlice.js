import { createSlice } from '@reduxjs/toolkit';
import { addAddress } from './addressAction';

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
      .addCase(addAddress.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        state.loading = false;
        state.province = action.payload;
      })
      .addCase(addAddress.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const { reducer } = addressSlice;

export default reducer;