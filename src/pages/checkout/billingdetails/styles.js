import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  productHeading: {
    fontSize: '2.4rem !important',
    fontWeight: '500 !important',
  },

  fs: {
    fontSize: '1.6rem !important',
    color: '#000',
  },

  total: {
    color: '#B88E2F',
    fontSize: '2.4rem !important',
    fontWeight: '700 !important',
  },

  transfer: {
    color: '#9F9F9F',
    fontSize: '1.6rem !important',
    marginTop: '1.1rem !important ',
  },

  btnOrder: {
    borderRadius: '1.5rem !important',
    border: '1px solid #000 !important',
    padding: '1.7rem 8.2rem !important',
    fontSize: '2rem !important',
    color: '#000 !important',
    position: 'relative',
    left: '50%',
    transform: 'translateX(-50%)',
    '&:hover': {
      border: 'none !important',
      backgroundColor: '#B88E2F !important',
      color: '#fff !important',
    },
  },
}));
