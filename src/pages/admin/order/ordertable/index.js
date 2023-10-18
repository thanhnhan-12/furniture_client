import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useAppDispatch, useAppSelector } from '../../../../redux';
import { Box, Typography } from '@mui/material';
import { orderColumns } from './ordercolumns';

const OrderTable = ({ orderRows }) => {
  return (
    <Box
      sx={{
        height: 400,
        width: '100%',
        '& .MuiDataGrid-columnHeaders': { bgcolor: 'rgb(244, 246, 248)' },
        '& .MuiDataGrid-columnHeaderTitle, .MuiDataGrid-cellContent, .MuiTypography-root':
          { fontSize: '1.6rem' },
      }}
    >
      <DataGrid
        rows={orderRows}
        columns={orderColumns}
        getRowId={(row) => row.orderID}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        rowHeight={120}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
};

export default OrderTable;
