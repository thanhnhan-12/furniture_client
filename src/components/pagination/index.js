import { Pagination } from '@mui/material';
import React from 'react';

const PaginationProduct = (props) => {
  const { count, handleOnChange, disabled, page, sx } = props;

  return (
    <Pagination
      disabled={disabled}
      sx={sx}
      count={count}
      page={page}
      color="primary"
      onChange={(event, newPage) => handleOnChange(newPage)}
    />
  );
};

export default PaginationProduct;
