import { createSlice } from '@reduxjs/toolkit';
import { getProvince } from './addressAction';

const initialState = {
  province: [],
  loading: false,
  error: null,
};

const provinceSlice = createSlice({
  name: 'province',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProvince.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProvince.fulfilled, (state, action) => {
        state.loading = false;
        state.province = action.payload;
      })
      .addCase(getProvince.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const { reducer } = provinceSlice;

export default reducer;
