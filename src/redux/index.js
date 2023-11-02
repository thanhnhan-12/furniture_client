import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

// import { reducer } from './reducer';
import addressSlice from './address/addressSlice';
import districtSlice from './address/districtSlice';
import provinceSlice from './address/provinceSlice';
import wardSlice from './address/wardSlice';
import adminSlice from './admin/adminSlice';
import authSlice from './auth/authSlice';
import cartSlice from './cart/cartSlice';
import categorySlice from './category/categorySlice';
import imageSlice from './images/imageSlice';
import orderSlice from './order/orderSlice';
import productSlice from './product/productSlice';
import userSlice from './user/userSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  images: imageSlice,
  user: userSlice,
  product: productSlice,
  category: categorySlice,
  cart: cartSlice,
  province: provinceSlice,
  district: districtSlice,
  ward: wardSlice,
  address: addressSlice,
  order: orderSlice,
  admin: adminSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;
