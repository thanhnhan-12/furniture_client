import { createSlice } from '@reduxjs/toolkit';
import {
  getAllProduct,
  getProductByID,
  getProductList,
  addProduct,
} from './productAction';
import { initFilters } from '../../constants/defaults';

const initialState = {
  products: [],
  product: [],

  listData: {
    data: [],
    page: 0,
    totalCurrentData: 0,
    totalData: 0,
    totalPage: 0,
  },

  payloadFilters: {
    ...initFilters,
    filters: 'ALL',
    typeId: 'ALL',
  },

  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    changeHomeFilter: (state, action) => {
      state.payloadFilters = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getAllProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // .addCase(getProductList.fulfilled, (state, action) => {
      //   state.loading = false;
      //   state.listData = action.payload;
      //   console.log('List Data: ', state.listData);
      // })

      .addCase(getProductByID.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductByID.fulfilled, (state, action) => {
        state.loading = false;
        // console.log('payload', action.payload);
        state.product = action.payload;
      })
      .addCase(getProductByID.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      .addCase(addProduct.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.loading = false;
        state.product.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const { actions, reducer } = productSlice;

export const { changeHomeFilter } = actions;

export default reducer;
