import { Box, Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useStyles from './styles';
import classNames from 'classnames/bind';
import { useAppDispatch, useAppSelector } from '../../../redux';
import { AddOutlined } from '@mui/icons-material';
import Loader from '../../../utils/loader';
import { getAllProduct } from '../../../redux/product/productAction';
import CardProduct from './cardproduct';
import { searchProductName } from '../../../redux/admin/adminAction';

const ProductAdmin = () => {
  const cx = classNames.bind(useStyles());

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const cardProducts = useAppSelector((state) => state.product.products);

  const redirectToAddProduct = () => {
    navigate('/admin/add-product');
  };

  const handleSearch = async () => {
    try {
      const response = await dispatch(searchProductName(searchTerm));
      setSearchResults(response.payload);
    } catch (error) {
      console.error('Lỗi khi tìm kiếm sản phẩm:', error);
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value === '') {
      setSearchResults(cardProducts);
    }
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

        <Box>
          <input
            type="text"
            placeholder="Enter product name..."
            value={searchTerm}
            onChange={handleInputChange}
          />
          <Button variant="contained" color="primary" onClick={handleSearch}>
            Search
          </Button>
        </Box>

        {Array.isArray(searchResults) && searchResults.length ? (
          <CardProduct cardProducts={searchResults} />
        ) : cardProducts.length ? (
          <CardProduct cardProducts={cardProducts} />
        ) : searchTerm && searchResults.length && cardProducts.length ? (
          <p>Product name not found</p>
        ) : (
          <Loader />
        )}
      </Box>
    </Box>
  );
};

export default ProductAdmin;
