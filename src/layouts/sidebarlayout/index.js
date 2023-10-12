import { Box, useTheme } from '@mui/material';
import Scrollbars from 'react-custom-scrollbars-2';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Sidebar from './sidenavitem';

const SidebarLayout = () => {
  const theme = useTheme();

  return (
    <Box>
      <Box
        sx={{
          flex: 1,
          height: '100%',
          width: 'calc(100% - 300px)',

          '.MuiPageTitle-wrapper': {
            background: theme.palette.primary.main,
            marginBottom: `${theme.spacing(4)}`,
            boxShadow: `0px 2px 4px -3px ${theme.palette.common.black}`,
          },
        }}
      >
        <Header />
        <Sidebar />
        <Box
          sx={{
            position: 'relative',
            zIndex: 5,
            display: 'block',
            flex: 1,
            right: '-300px',
            pt: `${theme.spacing(2)}`,
            [theme.breakpoints.up('lg')]: {
              ml: `${theme.spacing(2)}`,
            },
          }}
        >
          <Box display="block">
            <Box
              pt="70px"
              height="100vh"
              sx={{
                overflowX: 'hidden',
              }}
            >
              <Scrollbars>
                <Outlet />
              </Scrollbars>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SidebarLayout;
