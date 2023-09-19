import { createSlice } from '@reduxjs/toolkit';
import { getWard } from './addressAction';

const initialState = {
  ward: [],
  loading: false,
  error: null,
};

const wardSlice = createSlice({
  name: 'ward',
  initialState,
  reducers: {
    resetData: (state, action) => {
      state.ward = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWard.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWard.fulfilled, (state, action) => {
        state.loading = false;
        state.ward = action.payload;
      })
      .addCase(getWard.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const { reducer, actions } = wardSlice;
export const { resetData } = actions;
export default reducer;
