import { yupResolver } from '@hookform/resolvers/yup';
import ArrowBackOutlinedIcon from '@mui/icons-material/ArrowBackOutlined';
import { Box, Button, IconButton, SvgIcon, Typography } from '@mui/material';
import classNames from 'classnames/bind';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { FormInput, FormSelect } from '../../../../components/hookform';
import { FormTextarea } from '../../../../components/hookform/formtextarea';
import { schemaNewProduct } from '../../../../constants/schema';
import { useAppDispatch, useAppSelector } from '../../../../redux';
import { getAllCategory } from '../../../../redux/category/categoryAction';
import useStyles from '../styles';
import ArrowDownTrayIcon from '@heroicons/react/24/solid/ArrowDownTrayIcon';

const AddProduct = () => {
  const cx = classNames.bind(useStyles());

  const [privewImage, setPrivewImage] = useState(
    'https://fucoidannano.com/img/no_img.png',
  );

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const category = useAppSelector((state) => state.category.categories);
  // console.log('Category: ', category);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      productName: '',
      description: '',
      price: '',
      quantity: '',
      category: '',
    },
    resolver: yupResolver(schemaNewProduct),
  });

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  const redirectBackProductManegement = () => {
    navigate('/admin/product-list');
  };

  const handleAddNewProduct = () => {};

  return (
    <Box className={cx('formAddNewProduct')}>
      <Box component="form" onSubmit={handleSubmit(handleAddNewProduct)}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton onClick={redirectBackProductManegement}>
            <ArrowBackOutlinedIcon />
          </IconButton>
          <Typography
            sx={{
              bgcolor: '#ff7a18',
              fontSize: '1.6rem',
              p: '.8rem 1rem',
              borderRadius: '0.4rem',
              color: '#fff',
            }}
          >
            Add Product
          </Typography>
        </Box>

        <FormInput
          control={control}
          type="text"
          name="productName"
          label="Product Name"
          placeholder="Product Name"
        />

        <FormTextarea
          control={control}
          minRows={5}
          name="description"
          label="Description"
          placeholder="Description"
        />

        <FormInput
          control={control}
          type="text"
          name="price"
          label="Price"
          placeholder="Price"
        />

        <FormInput
          control={control}
          type="number"
          name="quantity"
          label="Quantity"
          placeholder="Quantity"
        />

        <FormSelect
          control={control}
          name="category"
          placeholder="No Select"
          options={category}
          keyOption="categoryID"
          labelOption="categoryName"
          label="Category"
          sx={{
            borderRadius: '4px',
            marginBottom: '3.6rem',
          }}
        />

        <Box>
          <Box my={2}>
            {/* <input
              type="file"
              style={{ fontSize: '14px' }}
              className="btn btn-success"
              // onChange={handleOnChangeImage}
            /> */}
            {/* <SvgIcon fontSize='large' >
              <ArrowDownTrayIcon />
            </SvgIcon> */}
            <Typography component="input" type="file" />
          </Box>

          <Box>
            <img
              src={privewImage}
              alt=""
              width="100%"
              style={{ borderRadius: '10px', maxHeight: '200px' }}
            />
          </Box>
        </Box>

        <Button className={cx('btnAddProduct')} type="submit">
          Add Product
        </Button>
      </Box>
    </Box>
  );
};

export default AddProduct;
