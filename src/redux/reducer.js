import authSlice from './auth/authSlice';
import productSlice from './product/productSlice';
import categorySlice from './category/categorySlice';
import cartSlice from './cart/cartSlice';
import provinceSlice from './address/provinceSlice';
import districtSlice from './address/districtSlice';
import wardSlice from './address/wardSlice';

export const reducer = {
  authSlice,
  productSlice,
  categorySlice,
  cartSlice,
  provinceSlice,
  districtSlice,
  wardSlice,
};
