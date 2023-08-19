import { makeStyles } from '@mui/styles';
import theme from '../../../theme';

export default makeStyles(() => ({
  title: {
    marginTop: '56px',
    textAlign: 'center',
    fontSize: '4rem',
  },

  btnShowMore: {
    color: `${theme.palette.secondary.contrastText}!important`,
    border: `1px solid ${theme.palette.secondary.contrastText}!important`,
    padding: '12px 82px !important',
    fontWeight: '600 !important',
    fontSize: '1.6rem !important',
    '&:hover': {
      backgroundColor: `${theme.palette.secondary.contrastText}!important`,
      color: '#fff !important',
    }
  },
}));
