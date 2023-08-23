import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  common: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  border: {
    borderTop: '1px solid #D9D9D9',
    borderBottom: '1px solid #D9D9D9',
  },

  headingShopping: {
    fontSize: '2.4rem',
  },

  nameImage: {
    width: '10.5rem',
    height: '10.5rem',
  },

  productName: {
    fontSize: '1.6rem',
    fontWeight: '400',
  },

  btnCart: {
    borderRadius: '5rem !important',
    border: '1px solid #000 !important',
    color: '#000 !important',
    fontSize: '1.2rem !important',
    fontWeight: '400 !important',
    padding: '0.6rem 3rem !important',
    '&:hover': {
      backgroundColor: '#B88E2F !important',
      color: '#fff !important',
      border: 'none !important',
    },
  },
}));
