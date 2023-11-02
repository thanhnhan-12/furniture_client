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
import { addProduct } from '../../../../redux/product/productAction';
import { notifyAddProduct } from '../../../../constants/common';
import { uploadImages } from '../../../../redux/images/imageAction';
import { toastMessage } from '../../../../utils/toast';
import { messageRequired } from '../../../../utils/common';

const AddProduct = () => {
  const cx = classNames.bind(useStyles());

  const [imageFiles, setImageFiles] = useState([]);

  const [previewImage, setPreviewImage] = useState([
    'https://fucoidannano.com/img/no_img.png',
  ]);

  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const category = useAppSelector((state) => state.category.categories);
  // console.log('Category: ', category);

  const { control, handleSubmit, reset, setFocus } = useForm({
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

  const handleAddNewProduct = ({
    productName,
    description,
    price,
    quantity,
    category,
  }) => {
    // console.log('productName: ', productName);
    // console.log('description: ', description);
    // console.log('price: ', price);
    // console.log('quantity: ', quantity);
    // console.log('categoryID: ', category);
    console.log('Image Files: ', imageFiles);

    if (!imageFiles || imageFiles.length === 0) {
      return toastMessage.error(messageRequired('Image File'));
    }

    const formData = new FormData();

    const formImage = new FormData();

    formData.append('productName: ', productName);
    formData.append('description: ', description);
    formData.append('price: ', price);
    formData.append('quantity: ', quantity);
    formData.append('categoryID: ', category);

    dispatch(addProduct(formData))
      .unwrap()
      .then((data) => {
        // console.log('Data', data);
        notifyAddProduct();
        reset({ productName: '' });
        setFocus('productName');
        reset({ description: '' });
        setFocus('description');
        reset({ price: '' });
        setFocus('price');
        reset({ quantity: '' });
        setFocus('quantity');
        reset({ category: '' });
        setFocus('category');

        formImage.append('imageFiles', imageFiles);
        formImage.append('productID', data.productID);
        dispatch(uploadImages(formImage));
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const handleImagesSelected = (e) => {
    setImageFiles(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));

    // const selectedFiles = Array.from(e.target.files); // Chuyển FileList thành mảng
    // setImageFiles(selectedFiles);

    // // Nếu bạn muốn hiển thị tất cả các hình ảnh đã chọn, bạn có thể sử dụng một mảng hình ảnh
    // const previewImages = selectedFiles.map((file) =>
    //   URL.createObjectURL(file),
    // );
    // setPreviewImage(previewImages);
  };

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
            <Typography
              component="input"
              type="file"
              multiple
              onChange={handleImagesSelected}
            />
          </Box>

          <Box>
            {/* {previewImage.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index}`}
                style={{
                  borderRadius: '10px',
                  maxHeight: '40rem',
                  marginRight: '10px',
                }}
              />
            ))} */}

            <img
              src={previewImage}
              alt=""
              width="100%"
              style={{ borderRadius: '10px', maxHeight: '60rem' }}
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
