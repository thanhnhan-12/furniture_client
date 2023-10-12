import { useRef, useState } from 'react';

import { NavLink, useNavigate } from 'react-router-dom';

import {
  Avatar,
  Box,
  Button,
  Divider,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Popover,
  Typography,
} from '@mui/material';
import { SettingsSuggestOutlined } from '@mui/icons-material';
import { styled } from '@mui/material/styles';
import ExpandMoreTwoToneIcon from '@mui/icons-material/ExpandMoreTwoTone';
import LockOpenTwoToneIcon from '@mui/icons-material/LockOpenTwoTone';
import { useAppDispatch, useAppSelector } from '../../../../redux';
import { logout } from '../../../../redux/user/userSlice';
import { baseURL } from '../../../../config';

const UserBoxButton = styled(Button)(
  ({ theme }) => `
    padding-left: ${theme.spacing(1)};
    padding-right: ${theme.spacing(1)};
`,
);

const MenuUserBox = styled(Box)(
  ({ theme }) => `
    background: ${theme.palette.common.white};
    padding: ${theme.spacing(2)};
`,
);

const UserBoxText = styled(Box)(
  ({ theme }) => `
        text-align: left;
        padding-left: ${theme.spacing(1)};
`,
);

const UserBoxLabel = styled(Typography)(
  ({ theme }) => `
        display: block;
`,
);

const HeaderUserBox = () => {
  const { userInfor } = useAppSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const ref = useRef(null);
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    dispatch(logout(''));
    // dispatch(resetState());
    navigate('/auth/admin/login');
  };

  return (
    <Box>
      <UserBoxButton color="secondary" ref={ref} onClick={handleOpen}>
        <Avatar
          variant="rounded"
          alt={userInfor.fullName}
          src={`${baseURL}/${userInfor?.avatar}`}
        />
        <Hidden mdDown>
          <UserBoxText>
            <UserBoxLabel variant="body1">{userInfor.fullName}</UserBoxLabel>
          </UserBoxText>
        </Hidden>
        <Hidden smDown>
          <ExpandMoreTwoToneIcon sx={{ ml: 1 }} />
        </Hidden>
      </UserBoxButton>

      <Popover
        anchorEl={ref.current}
        onClose={handleClose}
        open={isOpen}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuUserBox sx={{ minWidth: 210 }} display="flex">
          <Avatar
            variant="rounded"
            alt={userInfor.email}
            src={userInfor.avatar}
          />
          <UserBoxText>
            <UserBoxLabel variant="body1">{userInfor.email}</UserBoxLabel>
          </UserBoxText>
        </MenuUserBox>
        <Divider sx={{ mb: 0 }} />
        <List sx={{ p: 1 }} component="nav">
          <ListItem
            button
            to="/management/profile/settings"
            component={NavLink}
          >
            <SettingsSuggestOutlined fontSize="small" />
            <ListItemText primary="Settings" />
          </ListItem>
        </List>
        <Divider />
        <Box sx={{ m: 1 }}>
          <Button color="primary" fullWidth onClick={handleLogout}>
            <LockOpenTwoToneIcon sx={{ mr: 1 }} />
            Logout
          </Button>
        </Box>
      </Popover>
    </Box>
  );
};

export default HeaderUserBox;
