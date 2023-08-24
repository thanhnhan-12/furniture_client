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
    borderRadius: '5rem ',
    border: '1px solid #000 ',
    color: '#000 ',
    fontSize: '1.6rem ',
    fontWeight: '400 ',
    padding: '0.6rem 3rem ',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: '#B88E2F ',
      color: '#fff ',
      border: 'none ',
    },
  },
}));
