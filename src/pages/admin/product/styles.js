import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  newProduct: {
    backgroundColor: 'rgb(33, 43, 54) !important',
    color: '#fff !important',
    height: '3.7rem',
  },

  formAddNewProduct: {
    width: '50%',
  },

  btnAddProduct: {
    margin: '2rem 0 !important',
    borderRadius: '1.5rem !important',
    padding: '1.2rem 3.2rem !important',
    fontSize: '1.6rem !important',
    color: '#fff !important',
    backgroundColor: '#B88E2F !important',

    '&:hover': {
      border: '1px solid #000 !important',
      backgroundColor: '#fff !important',
      color: '#000 !important',
    },
  },
}));
