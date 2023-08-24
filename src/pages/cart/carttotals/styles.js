import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  cartHeading: {
    color: '#000',
    fontSize: '3.2rem !important',
    fontWeight: '600 !important',
    marginTop: '1.5rem !important',
  },

  txtTitle: {
    fontSize: '1.6rem !important',
    fontWeight: '600 !important',
    color: '#000 ',
  },

  subTotal: {
    color: '#9F9F9F !important',
    fontSize: '1.6rem !important',
  },

  total: {
    color: '#B88E2F !important',
    fontSize: '2rem !important',
  },

  btnCheckout: {
    textDecoration: 'none',
    borderRadius: '1.5rem',
    border: '1px solid #000',
    padding: '1.4rem 5.9rem',
    fontSize: '2rem',
    color: '#000',
    '&:hover': {
      backgroundColor: '#B88E2F',
      color: '#fff',
      border: 'none',
    },
  },
}));
