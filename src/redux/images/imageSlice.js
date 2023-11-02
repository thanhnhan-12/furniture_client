import { createSlice } from '@reduxjs/toolkit';
import { getImages, uploadImages } from '../images/imageAction';

const initialState = {
  images: [],
  loading: false,
  error: null,
};

const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getImages.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getImages.fulfilled, (state, action) => {
        state.loading = false;
        state.images = action.payload;
        // console.log('Images: ', state.images);
      })
      .addCase(getImages.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

const { reducer } = imageSlice;

export default reducer;
