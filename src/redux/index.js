import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

// import { reducer } from './reducer';
import authSlice from './auth/authSlice';
import productSlice from './product/productSlice';
import categorySlice from './category/categorySlice';

const rootReducer = combineReducers({
  auth: authSlice,
  product: productSlice,
  category: categorySlice,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;

export default store;
