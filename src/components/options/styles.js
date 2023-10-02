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

  formAddress: {
    padding: '16rem 0',
  },

  addAddress: {
    marginLeft: '1.6rem',
  },

  btnNewAddress: {
    borderRadius: '1.5rem !important',
    border: '1px solid #000 !important',
    padding: '1.2rem 3.2rem !important',
    fontSize: '1.6rem !important',
    color: '#000 !important',

    '&:hover': {
      border: 'none !important',
      backgroundColor: '#B88E2F !important',
      color: '#fff !important',
    },
  },
}));
