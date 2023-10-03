import { createSlice } from '@reduxjs/toolkit';
import { addAddress, getAddressByUser } from './addressAction';

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
        state.address = action.error.message;
      });
  },
});

const { reducer } = addressSlice;

export default reducer;
