import React from 'react';
import CustomBreadCrumb from '../../components/custombreadcrumb';

const ProductDetail = () => {
  return (
    <div>
      <CustomBreadCrumb root="Home" children="Shop" name="Product Name" />
    </div>
  );
};

export default ProductDetail;
