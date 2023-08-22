import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import useStyles from './styles';
import classNames from 'classnames/bind';

const CustomBreadCrumb = ({ root, children, name }) => {
  const cx = classNames.bind(useStyles());

  function handleClick(event) {
    console.info('You clicked a breadcrumb.');
  }

  const breadcrumbs = [
    <Link
      underline="hover"
      key="1"
      color="inherit"
      href="/"
      onClick={handleClick}
    >
      <p className={cx('text')}>{root}</p>
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/shop"
      onClick={handleClick}
    >
      <p className={cx('text')}>{children}</p>
    </Link>,
    <Typography key="3" color="text.primary">
      <b className={cx('text', 'productName')}>{name}</b>
    </Typography>,
  ];

  return (
    <Stack spacing={2} className={cx('breadCrumb')}>
      <Breadcrumbs
        separator={
          <NavigateNextIcon
            fontSize="large"
            sx={{
              color: '#000',
              fontSize: '3rem',
            }}
          />
        }
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
};

export default CustomBreadCrumb;
