import { createSlice } from '@reduxjs/toolkit';
import { userStatistics } from './adminAction';

const initialState = {
  userListStatistics: [],

  loading: false,
  error: null,
};

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userStatistics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(userStatistics.fulfilled, (state, action) => {
        state.loading = false;
        state.cartUser = action.payload;
      })
      .addCase(userStatistics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const { reducer } = adminSlice;

export default reducer;
