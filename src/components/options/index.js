import classNames from 'classnames/bind';
import React from 'react';
import useStyles from './styles';
import { Box, Typography } from '@mui/material';
import Logout from './logout';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../redux';

const Options = ({}) => {
  const cx = classNames.bind(useStyles());

  return (
    <Box
      sx={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        zIndex: '1',
        // bgcolor: 'rgba(0, 0, 0, 0.5)',
        cursor: 'pointer',
      }}
    >
      <Box
        sx={{
          width: '15rem',
          position: 'fixed',
          right: '21%',
          top: '9%',
          backgroundColor: '#fff',
          zIndex: '2',
          boxShadow: '0.5rem 1rem rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(0, 0, 0, 0.09)',
          borderRadius: '2px',
        }}
      >
        <Link style={{ textDecoration: 'none', color: '#000' }}>
          <Box className={cx('commonHover', 'logout')}>
            <AdminPanelSettingsIcon className={cx('logoutIcon')} />
            <Typography component="h3" className={cx('logoutIcon')}>
              Admin
            </Typography>
          </Box>
        </Link>

        <Box className={cx('commonHover')}>
          <Logout />
        </Box>
      </Box>
    </Box>
  );
};

export default Options;
