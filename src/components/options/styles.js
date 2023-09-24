import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  commonHover: {
    padding: '0.5rem 1rem',
    '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
  },

  logout: {
    display: 'flex ',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logoutIcon: {
    fontSize: '1.8rem !important',
    fontWeight: '500 !important',
  },
}));
