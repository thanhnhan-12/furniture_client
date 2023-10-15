import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

// import { reducer } from './reducer';
import addressSlice from './address/addressSlice';
import districtSlice from './address/districtSlice';
import provinceSlice from './address/provinceSlice';
import wardSlice from './address/wardSlice';
import authSlice from './auth/authSlice';
import cartSlice from './cart/cartSlice';
import categorySlice from './category/categorySlice';
import productSlice from './product/productSlice';
import orderSlice from './order/orderSlice';
import userSlice from './user/userSlice';

const rootReducer = combineReducers({
  auth: authSlice,
  user: userSlice,
  product: productSlice,
  category: categorySlice,
  cart: cartSlice,
  province: provinceSlice,
  district: districtSlice,
  ward: wardSlice,
  address: addressSlice,
  order: orderSlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;
