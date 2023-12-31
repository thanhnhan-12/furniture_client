import classNames from 'classnames/bind';
import React from 'react';
import useStyles from './styles';
import { Box, Typography } from '@mui/material';
import Logout from './logout';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ContactPageIcon from '@mui/icons-material/ContactPage';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../redux';

const Options = ({ close, show }) => {
  const cx = classNames.bind(useStyles());

  const dispatch = useAppDispatch();

  const role = useAppSelector((state) => state.auth.roles);

  // console.log('Role: ', role);

  const userInfor = useAppSelector((state) => state.auth.userInfor);

  return show ? (
    <Box
      sx={{
        position: 'fixed',
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        zIndex: '2',
        cursor: 'pointer',
      }}
      onClick={() => {
        close();
      }}
    >
      <Box
        sx={{
          width: '15rem',
          position: 'fixed',
          right: '21%',
          top: '9%',
          backgroundColor: '#fff',
          boxShadow: '0.5rem 1rem rgba(0, 0, 0, 0.5)',
          border: '1px solid rgba(0, 0, 0, 0.09)',
          borderRadius: '2px',
        }}
      >
        {role.includes('ROLE_ADMIN') ? (
          <Box>
            <Link
              to="admin/dashboard"
              style={{ textDecoration: 'none', color: '#000' }}
            >
              <Box className={cx('commonHover', 'logout')}>
                <AdminPanelSettingsIcon className={cx('logoutIcon')} />
                <Typography component="h3" className={cx('logoutIcon')}>
                  Admin
                </Typography>
              </Box>
            </Link>
          </Box>
        ) : (
          <Box></Box>
        )}

        <Link to="/address" style={{ textDecoration: 'none', color: '#000' }}>
          <Box className={cx('commonHover', 'logout')}>
            <ContactPageIcon className={cx('logoutIcon')} />
            <Typography component="h3" className={cx('logoutIcon')}>
              Address
            </Typography>
          </Box>
        </Link>

        <Box className={cx('commonHover')}>
          <Logout />
        </Box>

        <Box className={cx('commonHover', 'logout')}>
          <Typography component="h3" className={cx('logoutIcon')}>
            {userInfor.email}
          </Typography>
        </Box>
      </Box>
    </Box>
  ) : null;
};

export default Options;
