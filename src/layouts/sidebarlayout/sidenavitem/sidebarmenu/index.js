import { DashboardOutlined } from '@mui/icons-material';
import { Box, Button, List, ListItem, ListSubheader } from '@mui/material';
import { NavLink as RouterLink, useLocation } from 'react-router-dom';
import { MenuWrapper, SubMenuWrapper } from './styles';
import { navConfig } from '../../config';

const SidebarMenu = () => {
  const location = useLocation();

  return (
    <Box>
      <MenuWrapper>
        <List component="div">
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  sx={{
                    '.MuiListItem-root > a': {
                      backgroundColor:
                        location.pathname === '/admin/dashboard'
                          ? 'rgba(255, 255, 255, 0.06)'
                          : 'none',
                    },
                  }}
                  disableRipple
                  component={RouterLink}
                  to="/admin/dashboard"
                  startIcon={<DashboardOutlined />}
                >
                  Dashboard
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List>

        {navConfig.map((path, index) => (
          <List key={index}>
            <SubMenuWrapper>
              <List
                component="div"
                subheader={
                  <ListSubheader component="div" disableSticky>
                    {path.title}
                  </ListSubheader>
                }
              >
                {path.children.map((item) => (
                  <ListItem component="div" key={item.title}>
                    <Button
                      disableRipple
                      component={RouterLink}
                      to={item.path}
                      startIcon={item.icon}
                      sx={{
                        '.MuiListItem-root > a': {
                          backgroundColor:
                            location.pathname === item.to
                              ? 'rgba(255, 255, 255, 0.06)'
                              : 'none',
                        },
                      }}
                    >
                      {item.title}
                    </Button>
                  </ListItem>
                ))}
              </List>
            </SubMenuWrapper>
          </List>
        ))}
      </MenuWrapper>
    </Box>
  );
};

export default SidebarMenu;
