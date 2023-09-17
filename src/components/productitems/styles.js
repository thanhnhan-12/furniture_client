import { makeStyles } from '@mui/styles';
import theme from '../../theme';

export default makeStyles(() => ({
  nameImage: {
    width: '100%',
    height: '301px',
  },

  productItemList: {
    position: 'relative',
    paddingTop: '0px!important',
    marginBottom: '32px!important',
  },

  productItemContent: {
    backgroundColor: theme.palette.secondary.main,
    padding: '16px 0 30px 16px',
  },

  productName: {
    fontSize: '1.6rem',
  },

  description: {
    margin: '8px 0',
    color: theme.palette.secondary.light,
    minHeight: '34px',
  },

  price: {
    fontSize: '2rem',
  },

  productHover: {
    position: 'relative',
    top: 0,
    width: 'calc(100% - 32px)',
    textAlign: 'center',
  },

  displayFlex: {
    height: '100%',
    width: 'calc(100% - 32px)',
    display: 'flex',
    alignItems: 'center',
    zIndex: '100',
    justifyContent: 'center',
  },

  btnAddCart: {
    backgroundColor: '#fff',
    color: theme.palette.common.white,
    textDecoration: 'none',
    fontWeight: '600',
    padding: '12px 59px',
    border: 'none',
    marginBottom: '24px',
    cursor: 'pointer',
  },

  btnLike: {
    border: 'none',
    fontWeight: 600,
    color: '#000',
    background: 'none',
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
    cursor: 'pointer',
  },
}));
