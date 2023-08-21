import React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const CustomBreadCrumb = ({ root, children, name }) => {
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
      <p>{root}</p>
    </Link>,
    <Link
      underline="hover"
      key="2"
      color="inherit"
      href="/shop"
      onClick={handleClick}
    >
      <p>{children}</p>
    </Link>,
    <Typography key="3" color="text.primary">
      <b>{name}</b>
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="large" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
};

export default CustomBreadCrumb;
