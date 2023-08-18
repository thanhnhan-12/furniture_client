import { makeStyles } from '@mui/styles';
import theme from '../theme/palette/index';

export default makeStyles(() => ({
  img: {
    width: '100%',
  },

  productItemContent: {
    backgroundColor: theme.secondary.main,
    padding: '16px 0 30px 16px',
  },

  des: {
    margin: '8px 0',
  }
}));
