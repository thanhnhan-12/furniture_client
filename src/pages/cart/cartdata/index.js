import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
import { formatPrice } from '../../../constants/common';
import useStyles from '../cartproduct/styles';
import { useAppDispatch, useAppSelector } from '../../../redux';
import { setProductsSelected, totalPrice } from '../../../redux/cart/cartSlice';
import { localPathImages } from '../../../config';

const CartData = ({ rows, handleRemoveCart }) => {
  const dispatch = useAppDispatch();

  const totals = useAppSelector((state) => state.cart.cartUser);

  const [selectedRows, setSelectedRows] = useState([]);

  const [isProductsSelected, setIsProductsSelected] = useState(false);

  const updateIsProductsSelected = (value) => {
    setIsProductsSelected(value);
  };

  const columns = [
    {
      field: 'nameImage',
      headerName: 'Name Image',
      width: 130,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography
            component="img"
            src={`${localPathImages}/${params.value}`}
            alt="Product Image"
            width={108}
            height={105}
          />
        </Box>
      ),
    },

    {
      field: 'productName',
      headerName: 'Product',
      width: 150,
    },

    {
      field: 'price',
      headerName: 'Price',
      width: 100,
      renderCell: (params) => (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography>{formatPrice(Number(params.value))}</Typography>
        </Box>
      ),
    },

    {
      field: 'quantity',
      headerName: 'Quantity',
      type: 'number',
      width: 110,
      editable: true,
    },

    {
      field: 'subtotal',
      headerName: 'Subtotal',
      type: 'number',
      width: 150,
      renderCell: (params) => {
        const subtotal =
          Number(params.row.price || 0) * Number(params.row.quantity || 0);

        return (
          <Box>
            <Typography sx={{ fontSize: '' }}>
              {formatPrice(Number(subtotal))}
            </Typography>
          </Box>
        );
      },
    },

    {
      field: 'deleteIcon',
      headerName: '',
      width: 20,
      renderCell: (params) => {
        // console.log("Log", params);
        return (
          <DeleteIcon
            fontSize="large"
            onClick={() => handleRemoveCart(params.row.cartID)}
            sx={{ color: '#B88E2F', cursor: 'pointer' }}
          />
        );
      },
    },
  ];

  const handleSelectionChange = (newSelection) => {
    setSelectedRows(newSelection);
    const selectedProducts = rows.filter((row) => {
      return newSelection.includes(row.cartID);
    });

    dispatch(setProductsSelected(selectedProducts));
    // console.log('Select: ', newSelection);
    dispatch(totalPrice(newSelection));
    // console.log('Selected Product:', selectedProducts);

    // const updatedIsProductsSelected = selectedProducts.length > 0;
    // // Gọi hàm cập nhật isProductsSelected
    // updateIsProductsSelected(updatedIsProductsSelected);
  };

  return (
    <Box
      sx={{
        height: 400,
        width: '60%',
        '& .MuiDataGrid-columnHeaders': { bgcolor: '#F9F1E7' },
        '& .MuiDataGrid-columnHeaderTitle, .MuiDataGrid-cellContent, .MuiTypography-root':
          { fontSize: '1.6rem' },
      }}
    >
      <DataGrid
        rows={rows}
        columns={columns}
        getRowId={(row) => row.cartID}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        rowHeight={120}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        onRowSelectionModelChange={handleSelectionChange}
      />
    </Box>
  );
};

export default CartData;
