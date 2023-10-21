import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useStyles from '../styles';
import classNames from 'classnames/bind';
import FormAddress from './formaddress';
import { useAppDispatch, useAppSelector } from '../../../redux';
import {
  deleteAddressByID,
  getAddressByUser,
  getDistrict,
  getProvince,
  getWard,
} from '../../../redux/address/addressAction';
import DeleteIcon from '@mui/icons-material/Delete';
import { DataGrid } from '@mui/x-data-grid';
import { notifyRemoveAddress } from '../../../constants/common';
import { clearSaveAddress, saveAddressSelected } from '../../../redux/address/addressSlice';

const Address = () => {
  const cx = classNames.bind(useStyles());

  const dispatch = useAppDispatch();

  const [showFormAddress, setShowFormAddress] = useState(false);

  const [selectedAddress, setSelectedAddress] = useState([]);

  const [saveAddress, setSaveAddress] = useState([]);

  const address = useAppSelector((state) => state.address.address);
  // console.log('Address: ', address);

  const province = useAppSelector((state) => state.province.province);

  const district = useAppSelector((state) => state.district.district);

  const handleRemoveAddress = (addressID) => {
    // console.log('AddressID: ', addressID);
    notifyRemoveAddress();
    dispatch(deleteAddressByID(addressID)).then(() => {
      const updatedSaveAddress = saveAddress.filter(
        (address) => address.addressID !== addressID,
      );
      dispatch(saveAddressSelected(updatedSaveAddress));

      localStorage.setItem('saveAddress', JSON.stringify(updatedSaveAddress));

      dispatch(getAddressByUser());
    });
  };

  const handleSelectionAddress = (newSelectionAddress) => {
    const selectedAddressInfo = address.find(
      (item) => item.addressID === newSelectionAddress[0],
    );
    // console.log("Address: ", selectedAddressInfo);
    if (selectedAddressInfo) {
      dispatch(saveAddressSelected(selectedAddressInfo));
      // dispatch(getAddressByUser());
    }
  };

  useEffect(() => {
    // console.log('Address is selected: ', selectedAddress);
  }, [selectedAddress]);

  useEffect(() => {
    dispatch(getProvince());
  }, []);

  useEffect(() => {
    dispatch(getDistrict());
  }, [dispatch]);

  useEffect(() => {
    // if (district.length > 0) return dispatch(getWard());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAddressByUser());
  }, [dispatch]);

  const columns = [
    {
      field: 'addressName',
      headerName: 'Address Name',
      width: 150,
    },

    {
      field: 'provinceName',
      headerName: 'Province Name',
      width: 150,
    },

    {
      field: 'districtName',
      headerName: 'District Name',
      type: 'number',
      width: 150,
      editable: true,
    },

    {
      field: 'wardName',
      headerName: 'Ward Name',
      type: 'number',
      width: 150,
      editable: true,
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
            onClick={() => handleRemoveAddress(params.row.addressID)}
            sx={{ color: '#B88E2F', cursor: 'pointer' }}
          />
        );
      },
    },
  ];

  return (
    <Box className={cx('formAddress')}>
      <Box className={cx('addAddress')}>
        <Button
          className={cx('btnNewAddress')}
          onClick={() => setShowFormAddress(!showFormAddress)}
        >
          New Address
        </Button>
        <FormAddress
          showForm={showFormAddress}
          closeForm={() => {
            setShowFormAddress(false);
          }}
        />
      </Box>

      <Box
        sx={{
          height: 600,
          width: '60%',
          '& .MuiDataGrid-columnHeaders': { bgcolor: '#F9F1E7' },
          '& .MuiDataGrid-columnHeaderTitle, .MuiDataGrid-cellContent, .MuiTypography-root':
            { fontSize: '1.6rem' },
        }}
      >
        <DataGrid
          rows={address}
          columns={columns}
          getRowId={(row) => row.addressID}
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
          onRowSelectionModelChange={handleSelectionAddress}
        />
      </Box>
    </Box>
  );
};

export default Address;
