import { createSlice } from '@reduxjs/toolkit';
import { getAllProduct, getProductByID, addProduct } from './productAction';

const initialState = {
  products: [],
  product: [],

  prodList: {
    data: [],
    total: 0,
  },

  prodFilters: {
    keyword: '',
    city: '',
    companyfield: '',
    page: 1,
    created: 'DESC',
  },

  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    changeHomeFilter: (state, action) => {
      state.jobFilters = action.payload;
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
