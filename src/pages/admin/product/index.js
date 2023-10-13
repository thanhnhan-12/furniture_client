import { Box, Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles';
import classNames from 'classnames/bind';
import { useAppDispatch, useAppSelector } from '../../../redux';
import { AddOutlined } from '@mui/icons-material';
import Loader from '../../../utils/loader';
import { getAllProduct } from '../../../redux/product/productAction';
import CardProduct from './cardproduct';

const ProductAdmin = () => {
  const cx = classNames.bind(useStyles());

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const cardProducts = useAppSelector((state) => state.product.products);

  const redirectToAddProduct = () => {
    navigate('/admin/add-product');
  };

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  return (
    <Box>
      <Box>
        <Box mb={2}>
          <Button
            variant="outlined"
            startIcon={<AddOutlined />}
            className={cx('newProduct')}
            onClick={redirectToAddProduct}
          >
            New Product
          </Button>
        </Box>

        {cardProducts.length ? (
          <Box>
            <CardProduct cardProducts={cardProducts} />
          </Box>
        ) : (
          <Loader />
        )}
      </Box>
    </Box>
  );
};

export default ProductAdmin;
