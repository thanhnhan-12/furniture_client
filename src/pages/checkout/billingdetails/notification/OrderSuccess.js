import { Alert, AlertTitle, Box, Collapse } from '@mui/material';
import classNames from 'classnames/bind';
import React, { useState } from 'react';
import useStyles from './styles';

const OrderSuccess = () => {
  const cx = classNames.bind(useStyles());

  const [open, setOpen] = useState(true);

  return (
    <Box>
      <Collapse in={open} className={cx('collapseAlert')}>
        <Alert className={cx('alert')}>
          <AlertTitle className={cx('alertTitle', 'titleNotify')}>
            Order Success
          </AlertTitle>
          <AlertTitle className={cx('alertTitle', 'titleOrder')}>
            Order Success. Please wait while the order is approved
          </AlertTitle>
        </Alert>
      </Collapse>
    </Box>
  );
};

export default OrderSuccess;
