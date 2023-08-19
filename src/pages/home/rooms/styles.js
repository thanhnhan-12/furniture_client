import { makeStyles } from '@mui/styles';
import theme from '../../../theme';

export default makeStyles(() => ({
  intro: {
    backgroundColor: theme.palette.secondary.dark,
  },

  title: {
    color: '#3A3A3A',
    fontSize: '4rem',
  },

  desc: {
    color: '#616161',
    fontSize: '1.6rem',
    fontWeight: '500',
  },

  btnExplore: {
    padding: '1.2rem 3.6rem !important',
    fontSize: '1.6rem !important',
    backgroundColor: `${theme.palette.secondary.contrastText}!important`,
    color: '#fff !important',
    border: 'none !important',
    fontWeight: '600 !important',
    '&:hover': {
      backgroundColor: '#fff !important',
      color: `${theme.palette.secondary.contrastText} !important`,
      border: `1px solid ${theme.palette.secondary.contrastText} !important`,
    },
  },

  box: {
    backgroundColor: 'rgba(255, 255, 255, 0.72)',
    backdropFilter: 'blur(0.15rem)',
    padding: '3.2rem',
  },

  boxItem: {
    display: 'flex',
    alignItems: 'center',
  },

  categoryID: {
    fontSize: '1.6rem',
  },

  border: {
    border: '1px solid #616161',
    width: '2.7rem',
    margin: '0 0.8rem',
  },

  categoryName: {
    fontSize: '1.6rem',
    color: '#616161',
    fontWeight: '500',
  },

  maxim: {
    fontSize: '2.8rem',
    fontWeight: '600',
    color: theme.palette.common.black,
    marginTop: '0.8rem',
  },
}));
