import { createSlice } from '@reduxjs/toolkit';
import { getDistrict } from './addressAction';

const initialState = {
  district: [],
  loading: false,
  error: null,
};

const districtSlice = createSlice({
  name: 'district',
  initialState,
  reducers: {
    resetDataDistrict: (state, action) => {
      state.district = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getDistrict.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getDistrict.fulfilled, (state, action) => {
        state.loading = false;
        state.district = action.payload;
      })
      .addCase(getDistrict.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const { reducer, actions } = districtSlice;

export const { resetDataDistrict } = actions;

export default reducer;
