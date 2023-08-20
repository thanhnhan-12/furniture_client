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
    // display: 'block!important',
    '&:hover > div:last-child': {
      display: 'block',
    },
  },

  productItemContent: {
    backgroundColor: theme.palette.secondary.main,
    padding: '16px 0 30px 16px',
  },

  productName: {
    fontSize: '2.4rem',
  },

  description: {
    margin: '8px 0',
    color: theme.palette.secondary.light,
  },

  price: {
    fontSize: '2rem',
  },

  productHover: {
    backgroundColor: theme.palette.common.black,
    position: 'absolute',
    top: 0,
    width: 'calc(100% - 32px)',
    height: '100%',
    opacity: '0.72',
    textAlign: 'center',
    display: 'none',
  },

  displayFlex: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
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
    color: '#fff',
    background: 'none',
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
    cursor: 'pointer',
  },
}));
