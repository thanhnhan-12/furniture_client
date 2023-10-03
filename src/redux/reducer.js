import addressSlice from './address/addressSlice';
import districtSlice from './address/districtSlice';
import provinceSlice from './address/provinceSlice';
import wardSlice from './address/wardSlice';
import authSlice from './auth/authSlice';
import cartSlice from './cart/cartSlice';
import categorySlice from './category/categorySlice';
import productSlice from './product/productSlice';

export const reducer = {
  authSlice,
  productSlice,
  categorySlice,
  cartSlice,
  provinceSlice,
  districtSlice,
  wardSlice,
  addressSlice,
};
