import Scrollbars from 'react-custom-scrollbars-2';
import {
  Box,
  Drawer,
  styled,
  Divider,
  useTheme,
  Typography,
} from '@mui/material';
import logo from '../../../assets/icons/navbarLogo.jpg';
import SidebarMenu from './sidebarmenu/index';
import { useNavigate } from 'react-router';
import theme from '../../../theme';
import { Link } from 'react-router-dom';

const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        position: relative;
        z-index: 7;
        height: 100%;
        padding-bottom: 68px;
`,
);

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <SidebarWrapper
        sx={{
          display: {
            xs: 'none',
            lg: 'inline-block',
          },
          position: 'fixed',
          left: 0,
          top: 0,
          width: '300px',
          backgroundColor: 'rgb(28, 37, 54)',
        }}
      >
        <Scrollbars>
          <Box mt={3} textAlign="center">
            <Link to="/admin/dashboard">
              <Typography component="img" src={logo} alt="" />
            </Link>
          </Box>

          <Divider
            sx={{
              mt: theme.spacing(3),
              mx: theme.spacing(2),
              background: theme.palette.common.white,
            }}
          />

          <SidebarMenu />

          <Divider
            sx={{
              mt: theme.spacing(3),
              mx: theme.spacing(2),
              background: theme.palette.common.white,
            }}
          />
        </Scrollbars>
        <Divider />
      </SidebarWrapper>

      <Drawer
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        variant="temporary"
        elevation={9}
      >
        <SidebarWrapper>
          <Scrollbars>
            <Box mt={3}>
              <Box
                mx={2}
                sx={{
                  width: 52,
                }}
              >
                <img src={logo} alt="logo" width="200" height="60" />
              </Box>
            </Box>
            <Divider
              sx={{
                mt: theme.spacing(3),
                mx: theme.spacing(2),
              }}
            />
            <SidebarMenu />
          </Scrollbars>
        </SidebarWrapper>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
