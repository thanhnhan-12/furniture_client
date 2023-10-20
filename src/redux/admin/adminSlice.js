import { createSlice } from '@reduxjs/toolkit';
import {
  bestSellingProducts,
  userStatistics,
  monthlyRevenueStatistics,
} from './adminAction';

const initialState = {
  statistics: {
    userListStatistics: [],
    productListSelling: [],
    monthlyRevenue: [],
  },
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
        state.statistics.userListStatistics = action.payload;
        // console.log(
        //   'User List Statistics: ',
        //   state.statistics.userListStatistics,
        // );
      })
      .addCase(userStatistics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(bestSellingProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(bestSellingProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.statistics.productListSelling = action.payload;
        // console.log(
        //   'User List Statistics: ',
        //   state.statistics.productListSelling,
        // );
      })
      .addCase(bestSellingProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(monthlyRevenueStatistics.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(monthlyRevenueStatistics.fulfilled, (state, action) => {
        state.loading = false;
        state.statistics.monthlyRevenue = action.payload;
        console.log('User List Statistics: ', state.statistics.monthlyRevenue);
      })
      .addCase(monthlyRevenueStatistics.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const { reducer } = adminSlice;

export default reducer;
